import React from "react";
import ToolCard from "./ToolCard";
import { tools } from "../../static/toolsData";

function Tools() {
  return (
    <div className="w-4/5 my-4 mx-auto grid grid-cols-2 gap-4">
      {tools.map((tool) => (
        <ToolCard
          key={tool.id}
          img={tool.img}
          name={tool.name}
          description={tool.description}
          company={tool.company}
          id={tool.id}
          rate={tool.rate}
          voters={tool.voters}
        />
      ))}
    </div>
  );
}

export default Tools;
