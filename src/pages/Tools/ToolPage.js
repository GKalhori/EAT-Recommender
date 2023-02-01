import React from "react";
import Rating from "@mui/material/Rating";
import { tools } from "../../static/toolsData";
import { useParams } from "react-router-dom";

export default function ToolPage() {
  let toolId = useParams()["id"] - 1;

  return (
    <div className="w-11/12  mx-auto">
      <div className="flex flex-row p-5 flex-wrap items-start mt-5 bg-sky-100 rounded-md gap-10">
        <div className="flex flex-col items-center gap-3">
          <img
            src={tools.at(toolId).img}
            alt="software logo"
            width={"192px"}
            className="bg-white p-2 w-40 h-max rounded-lg items-center"
          />
          <div className="flex flex-row gap-2 items-center">
            <span className="mt-1">({tools.at(toolId).voters})</span>
            <Rating
              dir="ltr"
              name="simple-controlled"
              value={tools.at(toolId).rate}
              readOnly={true}
              precision={0.1}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="font-bold text-slate-700 text-xl">
            {tools.at(toolId).name}
          </h5>
          <h6 className="flex flex-row items-center gap-2">
            <div className="flex flex-row gap-2 items-center"></div>
          </h6>
          <h6 className="text-slate-900 font-semibold">مشخصات ابزار:</h6>
          <ul className="flex flex-col gap-2 mr-10">
            <li>کمپانی: {tools.at(toolId).company}</li>
            <li className="flex flex-row">
              <span> نیازمندی ها:</span>
              <span className="flex flex-col mr-3">
                {tools.at(toolId).requierments.map((req) => (
                  <span key={req}>{req}</span>
                ))}
              </span>
            </li>
            <li className="text-sm flex items-center gap-2">
              برای انتقال به وبسایت اصلی برنامه بر روی لینک مقابل کلیک کنید:
              <a
                href={tools.at(toolId).website}
                target="_blank"
                className="text-indigo-600 hover:text-blue-400"
              >
                وبسایت نرم افزار
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="my-3 gap-4 bg-blue-100 rounded-md py-4 px-6">
        <h5 className="underline text-slate-800 font-semibold">
          درباره نرم افزار
        </h5>
        <p className=" text-justify">{tools.at(toolId).longDescription}</p>
      </div>
      <div className="my-3 gap-4 bg-blue-100 rounded-md py-4 px-6">
        <h5 className="underline text-slate-800 font-semibold">
          ویژگی های بستر نرم افزاری
        </h5>
        <div>
          {Object.keys(tools.at(toolId).features).map(function (key) {
            return (
              <div className="mr-10 my-2">
                {tools.at(toolId).features[key].name}:
                <ul className="mr-10 flex flex-col">
                  {tools.at(toolId).features[key].values.map((feature) => (
                    <span>{feature}</span>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
