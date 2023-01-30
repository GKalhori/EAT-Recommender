import React from "react";
import ToolCard from "../Tools/ToolCard";
import { tools } from "../../static/toolsData";
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
        <ToolCard
          name={tools.at(props.toolName[0] - 1).name}
          id={tools.at(props.toolName[0] - 1).id}
          img={tools.at(props.toolName[0] - 1).img}
          description={tools.at(props.toolName[0] - 1).description}
          rate={tools.at(props.toolName[0] - 1).rate}
          company={tools.at(props.toolName[0] - 1).company}
          voters={tools.at(props.toolName[0] - 1).voters}
        />
        <ToolCard
          name={tools.at(props.toolName[1] - 1).name}
          id={tools.at(props.toolName[1] - 1).id}
          img={tools.at(props.toolName[1] - 1).img}
          description={tools.at(props.toolName[1] - 1).description}
          rate={tools.at(props.toolName[1] - 1).rate}
          company={tools.at(props.toolName[1] - 1).company}
          voters={tools.at(props.toolName[1] - 1).voters}
        />
      </div>
    </div>
  );
}
