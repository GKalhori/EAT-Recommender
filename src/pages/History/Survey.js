import { React, useState, useEffect } from "react";
import recommenderServices from "../../api/recommenderServices";
import { tools } from "../../static/toolsData";
import "reactjs-popup/dist/index.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { fullFeatures } from "../../static/formsData";

export default function Survey() {
  // ----------------------------------------------- latest recommendations
  const [history, setHistory] = useState([]);
  const [toolsId, setToolsId] = useState({
    firstTool: null,
    secondTool: null,
  });

  useEffect(() => {
    recommenderServices
      .getLatestTools()
      .then((data) => {
        setHistory(data.data);
        setToolsId(() => {
          return {
            firstTool: data.data.at(0).tool.id - 1,
            secondTool: data.data.at(1).tool.id - 1,
          };
        });
      })
      .catch((err) => {
        return err;
      });
  }, []);

  // ----------------------------------------------- used tool
  const toolNames = [
    tools.at(toolsId.firstTool).name,
    tools.at(toolsId.secondTool).name,
  ];

  const [toolName, setToolName] = useState("ابزار مورد نظر خود را انتخاب کنید");

  let usedTool = (
    <div className="flex flex-col gap-1">
      <label htmlFor="dropdown">ابزار استفاده شده:</label>
      <Dropdown
        id={"dropdown"}
        options={toolNames}
        value={toolName}
        onChange={(event) => setToolName(event.value)}
      />
    </div>
  );

  // ----------------------------------------------- used features
  const likes = [];
  const dislikes = [];
  const ok = [];

  function setStatues(type, id) {
    if (type === "like") {
      if (!likes.includes(id)) likes.push(id);
      if (dislikes.includes(id)) dislikes.splice(dislikes.indexOf(id), 1);
    } else if (type === "dislike") {
      if (!dislikes.includes(id)) dislikes.push(id);
      if (likes.includes(id)) likes.splice(likes.indexOf(id), 1);
    }
  }

  let usedFeatures = (
    <div className="flex flex-col gap-2">
      {history
        .filter((item) => item.tool.Title === toolName)
        .map((item) => (
          <div
            key={item.feature.id}
            className="flex flex-row gap-2 items-center p-2 bg-slate-100 rounded-sm justify-between px-6"
          >
            <span>{fullFeatures.at(item.feature.id - 1).name}</span>
            <div className="flex gap-3">
              <div className="flex gap-2">
                <label htmlFor={`good-${item.id}`}>راضی</label>
                <input
                  type="radio"
                  name={item.id}
                  id={`good-${item.id}`}
                  onChange={() => setStatues("like", item.id)}
                />
              </div>
              <div className="flex gap-2">
                <label htmlFor={`bad-${item.id}`}>ناراضی</label>
                <input
                  type="radio"
                  name={item.id}
                  id={`bad-${item.id}`}
                  onChange={() => setStatues("dislike", item.id)}
                />
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  // ----------------------------------------------- rate features
  function postRating(featureId, status) {
    recommenderServices
      .rateRecommendation(featureId, status)
      .then((data) => {
        if (data.status === 200) ok.push(1);
      })
      .catch((err) => {
        return err;
      });
  }

  function doneSurvey() {
    likes.forEach((like) => {
      postRating(like, 1);
    });
    dislikes.forEach((dislike) => {
      postRating(dislike, 0);
    });
    if (ok.length === dislikes.length + likes.length) {
      window.alert("نظر شما با موفقیت ثبت شد");
      window.location = "./history";
    }
  }

  return (
    <div className="flex flex-col mx-auto w-4/5 border-2 border-slate-200 p-4 rounded-sm my-6 text-sm gap-2">
      <div className="text-center font-semibold">
        لطفا به هر یک از ویژگی های انتخابی خود در ابزار مورد نظر، به نسبت رفع
        نیازتان امتیاز مثبت یا منفی دهید.
      </div>
      <div className="flex flex-col gap-2">
        {usedTool}
        {usedFeatures}
      </div>
      <button
        className="button p-2 bg-sky-500 text-white w-full rounded-sm hover:bg-sky-800"
        onClick={() => {
          doneSurvey();
        }}
      >
        اتمام نظرسنجی
      </button>
    </div>
  );
}
