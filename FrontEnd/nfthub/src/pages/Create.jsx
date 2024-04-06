import { useDropzone } from "react-dropzone";
import { useContext, useEffect, useCallback, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { NFTStorage, File } from "nft.storage";
import { NftContext } from "@/Context";
import { Contract, provider } from "ethers";
import WeaveDB from "weavedb-sdk";

import { Nft_Address, Nft } from "@/Abi/Nft";

import "react-toastify/dist/ReactToastify.css";

import fileReaderStream from "filereader-stream";
import { nanoid } from "nanoid";
import { getMarketplaceContractInstance } from "@/Config";

export default function Create(props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [ImgBase64, setImgBase64] = useState("");
  const [category, setCategory] = useState("");
  const [nftUrl, setNftUrl] = useState("");
  const [loading, setLoading] = useState("");
  const [deadline, setDeadline] = useState("");

  const { setMinting, provider, account, minting } =
    useContext(NftContext);

  const NFT_STORAGE_KEY =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweERENUI5NTU4RDhlNDI3Qzg2MTM2ZUFkNzA1NTljOEE3NTQzNmU5MDgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcxMjAwMjg4NjUwMywibmFtZSI6Ik5GVF9IVUIifQ.wiwWJIAoVM1mMzfo06Z7p1Ad2zM4hDlPNziwxAIK1r4";

  const contractTxId = "U2OR33r74nnR1C3alI-JEpbRqSisAiKIEbXECgaJSyA";
  // const db = new SDK({ contractTxId: contractTxId });

  const {
    db,
    setDb
  } = useContext(NftContext);

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
          const base64 = readerEvent.target.result;
          setImgBase64(base64);
          setFileUrl(file);
        };

        reader.readAsDataURL(file);
      }
    },
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "title":
        setTitle(event.target.value);
        break;
      case "price":
        setPrice(event.target.value);
        break;
      case "description":
        setDescription(event.target.value);
        break;
      case "deadline":
        setDeadline(event.target.value);
        break;
      case "nft":
        if (event.target.files && event.target.files.length > 0) {
          setFileUrl(event.target.files[0]);
          console.log(event.target.files[0]);
        }
        break;
      default:
        break;
    }
  };

  const dateToEpoch = (dateString) => {
    const myDate = new Date(dateString);
    const epochTime = myDate.getTime() / 1000.0;
    return epochTime;
  };

  //files to select

  const Files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  // //handle changes or category

  const handleCategoryChange = (event) => {
    console.log("category", event.target.value);
    setCategory(event.target.value);
  };


  //handle submit
  const resetForm = () => {
    setTitle("");
    setPrice("");
    setDescription("");
    setFileUrl("");
    setCategory("");
  };

  const getNftContractInstance = useCallback((provider) => {
    try {
      return new Contract(Nft_Address, Nft, provider);
    } catch (error) {
      console.error("Error creating vesting contract instance:", error);
    }
  }, []);

  const handlrNftStorageUpload = async (title, description, fileUrl) => {
    console.log("fileUrl: ", fileUrl);
    try {
      const client = new NFTStorage({ token: NFT_STORAGE_KEY });
      const metadata = await client.store({
        name: title,
        description: description,
        image: fileUrl,
      });
      const metadata_url = metadata.url;
      console.log("metadata_url: ", metadata_url);
      const cid = metadata.ipnft;
      console.log("cid: ", cid);

      // Call handleMintNft here
      await handleMintNft(metadata_url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const handleMintNft = async (metadata_url) => {
    setMinting(true);
    try {
      
        const signer = provider.getSigner();
        const account = await signer.getAddress();
        const nftContract = getNftContractInstance(signer);
        console.log("nftContract: ", nftContract);
        
        console.log("nftUrl metadata: ", metadata_url);


        // Create a promise to wait for Transfer event
        const transferEventPromise = new Promise((resolve, reject) => {
            nftContract.on("Transfer", (from, to, tokenId, event) => {
                resolve({ tokenId, to });
            });
        });

        // Mint the NFT
        const nft = await nftContract.mintNFT(metadata_url);
        await nft.wait();
        console.log("NFT minted successfully");

        // Wait for the Transfer event and retrieve tokenID and To
        const { tokenId, to } = await transferEventPromise;
        const tokenID = tokenId.toString();
        console.log("tokenID", tokenID);
        console.log("to", to);

        // Pass additional parameters to handleMarketplace
        await handleMarketplace(to, tokenID, price, deadline);

        setMinting(false);
        toast.success("NFT successfully minted!");
    } catch (error) {
        console.log(error);
        toast.error("An error occurred while minting the NFT");
    }
};

  const handleMarketplace = async (to, tokenID) => {
    try {
      const signer = provider.getSigner();
      const marketplaceContract = await getMarketplaceContractInstance(signer);
      console.log("marketplaceContract: ", marketplaceContract);
      
      const epochTime = dateToEpoch(deadline);
      
      const marketplace = await marketplaceContract.createListing(to, tokenID, price, epochTime);
      marketplace.wait();
      console.log("marketplace created", marketplace);
    } catch (error) {
      console.log(error);
      toast.error("An error occurred while creaating marketplace");
    }
  }


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !title ||
      // !price ||
      !description ||
      !fileUrl
    ) {
      console.log(title);
      console.log(price);
      console.log(description);
      console.log(totalShares);
      console.log(fileUrl);
      console.log(category);
      console.log(category);

      toast.error("Please fill all required fields");
    } else {
      // setModal("scale-100");
      // setLoading({ show: true, msg: "Nft..." });

      try {
        setLoading(true);

        await handlrNftStorageUpload(title, description, fileUrl);
       
        setLoading(false);
        resetForm();

        toast.success("Nft successfully minted!");
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while minting the Nft");
      }
    }
  };

  return (
    <div>
      <div className="bg-black">
        <div className="justify-center align-center">
          {/* headers */}
          <div className="pb-3">
            <h1 className="text-white text-[27px] sm:text-[37px] text-center  pt-[66px] font-bold leading-10">
              MINT OR CREATE NFTs
            </h1>
            <p
              className="text-gray-50 text-[13px] 
            sm:text-[18px] pb-[10px] text-center font-normal leading-7"
            >
              Mint or create nfts by filling out the form below
            </p>
          </div>

          <div
            className="w-full  items-center 
          justify-center flex flex-col pb-5 "
          >
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg px-8  pb-[50px] flex flex-col "
            >
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="title"
                >
                  NFT Title
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleChange}
                  placeholder="A catchy and descriptive name for your NFT"
                />
              </div>

              {/* price input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="price"
                >
                  Price
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="price"
                  type="number"
                  name="price"
                  value={price}
                  onChange={handleChange}
                  placeholder="Enter the price you wish to sell your nft"
                />
              </div>

              {/* description input */}
              <div className="pb-6 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="description"
                >
                  NFT Description
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="description"
                  type="text"
                  name="description"
                  value={description}
                  onChange={handleChange}
                  placeholder="Detail explanation of your NFT and how buyers will benefit will benefit"
                />
              </div>

              {/* picture / add nft input */}
              <div
                {...getRootProps({ className: "dropzone" })}
                className="pb-5 appearance-none"
              >
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="picture"
                >
                  Add NFT
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col  ">
                <input
                  name="nft"
                  value=""
                  id="picture"
                  onChange={handleChange}
                  type="file"
                  accept="image/png"
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                />
                {/*  
                <div
                  className=" sm:pt-[50px] 
                w-[22px] sm:w-[50px] h-[50px]"
                >
                  <img src="./images/addNft.png" alt="addNfts" />
                </div>
                */}

                <p
                  className="pt-[20px] text-center text-gray-700 
                text-opacity-50"
                >
                  Drag 'n' drop or Select files here
                </p>
                <button
                  className="text-violet-500 pb-[50px] flex justify-center align-center"
                  type="button"
                  onClick={open}
                >
                  Select file
                </button>
              </div>
              <aside className="text-white">
                <ul>{Files}</ul>
              </aside>

                {/* Deadline */}
              <div className="pt-6 flex flex-col pb-[32px]">
                    <label className="pb-[7px] text-white text-sm sm:text-base font-semibold leading-snug">
                      Deadline
                    </label>
                    <input
                      required
                      name="deadline"
                      type="datetime-local"
                      value={deadline}
                      onChange={handleChange}
                      className="border rounded-lg w-[400px] sm:w-[600px] py-3 px-3 text-gray-700 leading-tight "
                    />
                  </div>

              {/* category input */}
              <div className="pt-6 pb-[50px] flex flex-col appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="Category"
                >
                  Category
                </label>
                <select
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="Category"
                  type="text"
                  value={category}
                  placeholder="Select the category of your project"
                  onChange={handleCategoryChange}
                >
                  <option value="edit this later">
                    Select the category of your project
                  </option>
                  <option value="edit this later">Art</option>
                  <option value="edit this later">Fashion</option>
                </select>
              </div>

              <div
                className=" px-5 py-2.5 
                rounded-lg bg-gradient-to-r from-[#fe7d46] to-[#faad89]
              border justify-center 
              items-center gap-2 inline-flex "
              >
                <button
                  type="submit"
                  className="text-white 
                cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Minting..pls wait" : "Mint"}
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
