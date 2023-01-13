import React from "react";
import "./style.css";

type ILabel = {
  labelName: string;
};

export const Label = ({ labelName }: ILabel) => {
  return <div className="label">{labelName}</div>;
};
