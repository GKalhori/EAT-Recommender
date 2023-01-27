import React from "react";
import ToolCard from "./ToolCard";
import { tools } from "./toolsData";

function Tools() {
  return (
    <>
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
    </>
  );
}

export default Tools;
