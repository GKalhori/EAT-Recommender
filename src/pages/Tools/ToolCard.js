import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";

export default function ToolCard(props) {
  return (
    <div className="box-shadow flex flex-row rounded-lg p-4 px-5 gap-6 text-slate-800 bg-indigo-100 flex-wrap justify-center md:flex-nowrap">
      <div className="flex flex-col items-center gap-3">
        <img
          src={props.img}
          alt="software logo"
          width={"192px"}
          className="bg-white p-2 w-40 h-max rounded-lg items-center"
        />
        <div className="flex flex-row gap-2 items-center">
          <span className="mt-1">({props.voters})</span>
          <Rating
            dir="ltr"
            name="simple-controlled"
            value={props.rate}
            readOnly={true}
            precision={0.1}
          />
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2">
        <div>
          <h6 className="font-semibold">{props.name}</h6>
          <small>{props.company}</small>
          <p className="mt-2 text-justify">{props.description}</p>
        </div>
        <NavLink
          to={`/tools/${props.id}`}
          className="self-end justify-end align-bottom"
        >
          <button className="py-2 px-3 bg-blue-500 text-gray-100 rounded-md hover:bg-blue-700">
            جزییات بیشتر
          </button>
        </NavLink>
      </div>
    </div>
  );
}
