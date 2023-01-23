import React, { useState } from "react";

import "./style.css";

type ISwitchButton = {
  toggled: boolean;
  onClick: (isToggled: boolean) => void;
};

export const SwitchButton = ({ toggled, onClick }: ISwitchButton) => {
  const handleClick = () => {
    onClick(!toggled);
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={toggled}
        defaultChecked={false}
        onClick={handleClick}
      />
      <span />
    </label>
  );
};
