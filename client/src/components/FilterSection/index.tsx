import React from "react";
import { Label } from "../common/Label";
import { SwitchButton } from "../common/SwitchButton";
import { FILTER_LABEL } from "../../constants";

import "./style.css";

type IFilterSection = {
  isFiltered: boolean;
  toggleFilter: (isToggled: boolean) => void;
};

export const FilterSection = ({ isFiltered, toggleFilter }: IFilterSection) => {
  const handleFilter = () => {
    toggleFilter(!isFiltered);
  };

  return (
    <div className="filter-section">
      <Label labelName={FILTER_LABEL} />
      <SwitchButton toggled={isFiltered} onClick={handleFilter} />
    </div>
  );
};
