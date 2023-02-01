import { React, useState, useEffect } from "react";
import HistoryIcon from "@mui/icons-material/History";
import recommenderServices from "../../api/recommenderServices";
import ToolCard from "../Tools/ToolCard";
import { tools } from "../../static/toolsData";
import { NavLink } from "react-router-dom";

export default function History() {
  const [name, setName] = useState("");
  const [history, setHistory] = useState([]);
  const [toolsId, setToolsId] = useState({
    firstTool: null,
    secondTool: null,
  });

  useEffect(() => {
    recommenderServices
      .getLatestTools()
      .then((data) => {
        setName(data.data.full_name);
        setHistory(data.data.data);
        if (data.data.data.length !== 0)
          setToolsId(() => {
            return {
              firstTool: data.data.data.at(0).tool.id - 1,
              secondTool: data.data.data.at(1).tool.id - 1,
            };
          });
      })
      .catch((err) => {
        return err;
      });
  }, []);

  return (
    <>
      <div className="flex flex-row gap-2 w-4/5 mt-8 mb-4 mx-auto">
        <div className="flex flex-col items-center bg-slate-200 p-3 rounded-md text-center w-full">
          <h1 className="block mx-auto font-semibold text-slate-800">
            <HistoryIcon />
            سوابق
          </h1>
          <p className="italic text-sm mt-1">
            سابقه آخرین پیشنهادات داده شده به {name} در این بخش نمایش داده
            میشود.
            <br />
            شما میتوانید پس از گذشت یک هفته از هر پیشنهاد، نظر خود را در رابطه
            با ویژگی های درخواستی و ابزار توصیه شده، در قالب پرسشنامه ای با ما
            در میان بگذارید.
          </p>
          <small className="text-red-600">
            نظرات شما در بهبود پیشنهادات سیستم توصیه گر تاثیر مستقیم دارد!
          </small>
        </div>
        <NavLink to={"/survey"}>
          <button
            className={`rounded-md p-3 h-full ${
              history.length === 0
                ? "bg-slate-300 hover:bg-slate-400"
                : "text-white bg-blue-500 hover:bg-blue-700"
            }`}
            disabled={history.length === 0}
          >
            نظرسنجی
          </button>
        </NavLink>
      </div>
      <div className="flex flex-col gap-2 mb-8 items-center w-4/5 mx-auto">
        {history.length === 0 ? (
          <p className="border-2 border-red-300 rounded-md w-3/5 p-4 text-center">
            شما تا کنون از سیستم توصیه گر استفاده نکرده اید!
            <br />
            (برای استفاده پیشنهادات ما به صفحه زیر مراجعه کنید) <br />
            <NavLink
              to={"/questionnaire"}
              className="text-blue-500 hover:text-blue-800"
            >
              پرسشنامه
            </NavLink>
          </p>
        ) : (
          <>
            <ToolCard
              id={tools.at(toolsId.firstTool).id}
              name={tools.at(toolsId.firstTool).name}
              img={tools.at(toolsId.firstTool).img}
              description={tools.at(toolsId.firstTool).description}
              rate={tools.at(toolsId.firstTool).rate}
              company={tools.at(toolsId.firstTool).company}
              voters={tools.at(toolsId.firstTool).voters}
            />
            <ToolCard
              id={tools.at(toolsId.secondTool).id}
              name={tools.at(toolsId.secondTool).name}
              img={tools.at(toolsId.secondTool).img}
              description={tools.at(toolsId.secondTool).description}
              rate={tools.at(toolsId.secondTool).rate}
              company={tools.at(toolsId.secondTool).company}
              voters={tools.at(toolsId.secondTool).voters}
            />
          </>
        )}
      </div>
    </>
  );
}
