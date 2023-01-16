import { Label } from "../Label";
import { GiSadCrab } from "react-icons/gi";

import "./style.css";

type IPlaceHolder = {
  label: string;
};

export const PlaceHolder = ({ label }: IPlaceHolder) => {
  return (
    <div className="placeholder-label">
      <Label labelName={label} />
      <GiSadCrab color="#fff" fontSize={22} />
    </div>
  );
};
