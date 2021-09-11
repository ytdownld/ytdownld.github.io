import React, { useState } from "react";
import "./styles/Nav.scss";

export default function Nav() {
  const [darkTheme, setTheme] = useState(false);
  return (
    <div className="nav">
      <div className="site_title">
        <span>Yt</span> downld
      </div>
      <div className="site_pref">
        <div
          onClick={() => setTheme(!darkTheme)}
          className={`site_theme ${darkTheme && "dark"}`}
        ></div>
        <div className="pref">
          <i class="ri-settings-6-fill"></i>
        </div>
      </div>
    </div>
  );
}
