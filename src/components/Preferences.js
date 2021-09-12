import React, { useEffect, useState } from "react";
import Select from "react-select";
import "./styles/Preferences.scss";
import ToggleSwitch from "./subcomponents/ToggleSwitch";

export default function Preferences({
  setPref,
  autoDownload,
  onAutoDownloadChange,
  formatType,
  formatTypes,
  onFormatChange,
  nativeMode,
  onNativeModeChange,
}) {
  return (
    <div className="prefModal">
      <div className="prefContainer">
        <div className="prefHeader">
          <div>Preferences</div>
          <button onClick={() => setPref(false)}>
            <i className="ri-close-line"></i>
          </button>
        </div>
        <div className="prefList">
          <div className="prefItem">
            <div className="prefItemInfo">
              <div className="prefTitle">
                <span>Auto</span> download
              </div>
              <div className="prefDesc">
                Videos will be automatically downloaded after giving the url.
              </div>
            </div>
            <div className="prefItemAction">
              <ToggleSwitch
                value={autoDownload}
                onClick={onAutoDownloadChange}
              />
            </div>
          </div>

          <div className={`prefItem ${autoDownload ? "" : "disabled"}`}>
            <div className="prefItemInfo">
              <div className="prefTitle">
                <span>Download</span> Type
              </div>
              <div className="prefDesc">
                Select which type you want to auto download.
              </div>
            </div>
            <div className="prefItemAction">
              <Select
                onChange={(e) => onFormatChange(e)}
                options={formatTypes}
                value={formatType}
              />
            </div>
          </div>

          <div className={`prefItem ${autoDownload ? "disabled" : ""}`}>
            <div className="prefItemInfo">
              <div className="prefTitle">
                <span>Use</span> Native MODE
              </div>
              <div className="prefDesc">
                You can download video from native player. (By using this option
                you can save our server resources)
              </div>
            </div>
            <div className="prefItemAction">
              <ToggleSwitch value={nativeMode} onClick={onNativeModeChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
