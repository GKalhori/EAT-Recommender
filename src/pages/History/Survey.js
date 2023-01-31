import { React, useState, useEffect } from "react";
import HistoryIcon from "@mui/icons-material/History";
import recommenderServices from "../../api/recommenderServices";
import ToolCard from "../Tools/ToolCard";
import { tools } from "../../static/toolsData";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./history.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { fullFeatures } from "../../static/formsData";
import ThumbDownAltOutlinedIcon from "@mui/icons-material/ThumbDownAltOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";

export default function Survey(props) {
  // console.log(props);
  //  props.history.forEach((element) => {
  //     console.log(
  //       "main id:",
  //       element.id,
  //       "--- tool:",
  //       element.tool.Title,
  //       "-",
  //       element.tool.id,
  //       "--- feature:",
  //       element.feature.name,
  //       "-",
  //       element.feature.id
  //     );
  //   });

  function setStatues(type, id) {
    if (type === "like") {
      if (!likes.includes(id)) likes.push(id);
      if (dislikes.includes(id)) dislikes.slice(dislikes.indexOf(id), 1);
    } else if (type === "dislike") {
      if (!dislikes.includes(id)) dislikes.push(id);
      if (likes.includes(id)) likes.slice(likes.indexOf(id), 1);
    }
    console.log("likes: ", likes);
    console.log("dislikes: ", dislikes);
  }

  const options = [
    tools.at(props.toolsId.firstTool).name,
    tools.at(props.toolsId.secondTool).name,
  ];

  const [option, setOption] = useState("ابزار دلخواه خود را انتخاب کنید");
  const status = {};
  const likes = [];
  const dislikes = [];
  let questions = (
    <div>
      <label htmlFor="dropdown" className="mb-1">
        ابزار مد نظر:
      </label>
      <Dropdown
        className="mt-1"
        id={"dropdown"}
        options={options}
        value={option}
        onChange={(event) => setOption(event.value)}
      />
      {props.history
        .filter((element) => element.tool.Title === option)
        .map((element) => (
          <div
            key={element.id}
            className="flex flex-row gap-2 items-center p-2 bg-slate-100 rounded-sm my-2 justify-between"
          >
            <span className="text-sm">
              {fullFeatures.at(element.feature.id - 1).name}
            </span>
            <div className={`flex items-end gap-3`}>
              <div className="form-radio flex gap-2">
                <label
                  className="form-radio flex gap-2-label"
                  htmlFor={`good-${element.feature.id}`}
                >
                  راضی
                </label>
                <input
                  className="form-radio flex gap-2-input"
                  type="radio"
                  name="like"
                  id={`good-${element.feature.id}`}
                  checked={
                    likes.includes(fullFeatures.at(element.feature.id - 1).id)
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setStatues(
                      "like",
                      fullFeatures.at(element.feature.id - 1).id
                    )
                  }
                />
              </div>
              <div className="form-radio flex gap-2">
                <label
                  className="form-radio flex gap-2-label"
                  htmlFor={`bad-${element.feature.id}`}
                >
                  ناراضی
                </label>
                <input
                  className="form-radio flex gap-2-input"
                  type="radio"
                  name="like"
                  id={`bad-${element.feature.id}`}
                  checked={
                    dislikes.includes(
                      fullFeatures.at(element.feature.id - 1).id
                    )
                      ? true
                      : false
                  }
                  onChange={(event) =>
                    setStatues(
                      "dislike",
                      fullFeatures.at(element.feature.id - 1).id
                    )
                  }
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  function done() {
    //console.log(option);
  }

  return (
    <Popup
      trigger={
        <button className="bg-blue-500 text-white rounded-md p-3 hover:bg-blue-700">
          نظرسنجی
        </button>
      }
      modal
      nested
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header">
            لطفا به هر یک از ویژگی های انتخابی خود در ابزار مورد نظر، به نسبت
            رفع نیازتان امتیاز مثبت یا منفی دهید.
          </div>
          <div className="content">{questions}</div>
          <div className="actions">
            <button
              className="button p-2 bg-sky-500 text-white w-full rounded-sm hover:bg-sky-800"
              onClick={() => {
                close();
                done();
              }}
            >
              اتمام نظرسنجی
            </button>
          </div>
        </div>
      )}
    </Popup>
  );
}
