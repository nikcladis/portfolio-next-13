import React, { ReactNode } from "react";
import "./devices.css";

interface Iphone14ProProps {
  children: ReactNode;
  color?: string;
}

const Iphone14Pro = ({
  children,
  color = "device-purple",
}: Iphone14ProProps) => {
  const deviceClassName = `device device-iphone-14-pro ${color}`;

  return (
    <div className="scale-[0.7]">
      <div className={deviceClassName}>
        <div className="device-frame">{children}</div>
        <div className="device-stripe"></div>
        <div className="device-header"></div>
        <div className="device-sensors"></div>
        <div className="device-btns"></div>
        <div className="device-power"></div>
      </div>
    </div>
  );
};

export default Iphone14Pro;
