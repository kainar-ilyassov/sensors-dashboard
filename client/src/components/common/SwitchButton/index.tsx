import React, { useState } from "react";

import "./style.css";

type ISwitchButton = {
  toggled: boolean;
  onClick: (isToggled: boolean) => void;
};

export const SwitchButton = ({ toggled = false, onClick }: ISwitchButton) => {
  const [isToggled, toggle] = useState(toggled);

  const handleClick = () => {
    toggle(!isToggled);
    onClick(!isToggled);
  };

  return (
    <label>
      <input type="checkbox" defaultChecked={isToggled} onClick={handleClick} />
      <span />
    </label>
  );
};
