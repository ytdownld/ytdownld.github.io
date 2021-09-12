import React from "react";

export default function ToggleSwitch({ value, onClick }) {
  return (
    <div onClick={onClick} className={`switch ${value ? "on" : ""}`}></div>
  );
}
