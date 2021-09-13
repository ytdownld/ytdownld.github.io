import React from "react";

export default function Status({ status }) {
  return (
    status.showStatus && (
      <div className={`status ${status.error ? "error" : ""}`}>
        {status.error && <i className="ri-error-warning-line"></i>}
        {!status.error && <i className="ri-information-line"></i>}
        <div>{status.statusMsg}</div>
        <button
          onClick={() => {
            status.setError(false);
            status.setStatusMsg("");
            status.setStatus(false);
          }}
        >
          <i className="ri-close-line"></i>
        </button>
      </div>
    )
  );
}
