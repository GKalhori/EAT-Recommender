import React from "react";
import ToolCard from "../Tools/ToolCard";
import { tools } from "../Tools/toolsData";
import "../../App.css";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";

export default function Result(props) {
  return (
    <div className="container w-3/4 mx-auto my-4">
      <p className="font-bold text-xl text-center text-slate-800 my-3 bg-indigo-100 p-2 rounded-lg">
        <SettingsSuggestIcon /> ابزارهای پیشنهادی ما با توجه به نیازهای شما در
        ادامه آمده است
      </p>
      <div className="flex flex-col gap-2.5">
        {tools.map((tool) =>
          tool.name === props.toolName[0] || tool.name === props.toolName[1] ? (
            <ToolCard
              name={tool.name}
              id={tool.id}
              img={tool.img}
              description={tool.description}
              rate={tool.rate}
              company={tool.company}
              voters={tool.voters}
            />
          ) : (
            <></>
          )
        )}
      </div>
    </div>
  );
}
