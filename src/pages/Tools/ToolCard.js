import React from "react";
import { NavLink } from "react-router-dom";
import Rating from "@mui/material/Rating";
export default function ToolCard(props) {
  return (
    <NavLink
      to={`/tools/${props?.id}`}
      className={"no-underline text-black opacity-90"}
    >
      <div className="card_shadow rounded-lg p-2.5 flex flex-col gap-2">
        <div className="flex justify-center items-center">
          <img
            src={props.img}
            alt="software logo"
            className="h-40 w-30 rounded-lg items-center"
          />
        </div>
        <p className="text-sm mr-1 w-48 h-6">{props.name}</p>
        <p>{props.description}</p>
        <Rating dir="ltr" name="simple-controlled" value={props.rate} />
      </div>
    </NavLink>
  );
}
