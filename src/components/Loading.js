import React from "react";
import "./styles/Loading.scss";
import loading from "../assets/loading.svg";

export default function Loading() {
  return (
    <div className="loadingSection">
      <img src={loading} alt="" />
    </div>
  );
}
