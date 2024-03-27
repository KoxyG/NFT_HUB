import { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon, faChevronDown, faChevronUp } from "@fortawesome/react-fontawesome";
import Card from "@/pages/Card";



const Accordion = ({ className, icon, title, children }) => {
  const [isCollapse, setIsCollapse] = useState(true);

  return (
    <div className={classNames(className, "rounded-xl", "border-2", "h-fit")}>
      <Card
        className={classNames("border-l-0 border-r-0 ", {
          "border-t-0 rounded-b-none": isCollapse,
          "border-none": !isCollapse,
        })}
      >
        <div className="flex flex-row justify-between bg-gradientLight p-6 items-center rounded-t-lg">
          <div className="flex flex-row gap-3 justify-center items-center">
            <FontAwesomeIcon icon={icon} size="lg" />
            <h3>{title}</h3>
          </div>
          <FontAwesomeIcon
            className="cursor-pointer"
            icon={isCollapse ? faChevronUp : faChevronDown}
            size="lg"
            onClick={() => setIsCollapse(!isCollapse)}
          />
        </div>
      </Card>
      {isCollapse && (
        <div className="flex flex-col h-[485px] overflow-auto">
          {children ?? <p className="p-6 text-center">No item displayed </p>}
        </div>
      )}
    </div>
  );
};

export default Accordion;