import React from "react";

export default function Result(props) {
  return (
    <div className="page-section">
      <h3>Thank You!</h3>
      <p>{props.toolName}</p>
    </div>
  );
}
