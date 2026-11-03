import React from "react";
import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="topbar-container d-flex flex-column-reverse flex-md-row w-100">
      
      {/* NIFTY aur SENSEX (PC me Left, Mobile me Neeche) */}
      <div className="indices-container d-flex align-items-center justify-content-between px-3 py-2 w-100" style={{ flexBasis: "32%", borderRight: "1px solid #eaeaea" }}>
        <div className="nifty d-flex align-items-center gap-2">
          <p className="index mb-0">NIFTY 50</p>
          <p className="index-points mb-0 text-danger">{100.2} </p>
        </div>
        <div className="sensex d-flex align-items-center gap-2">
          <p className="index mb-0">SENSEX</p>
          <p className="index-points mb-0 text-danger">{100.2}</p>
        </div>
      </div>

      {/* MENU PORTION (PC me Right, Mobile me Upar) */}
      <div className="menu-wrapper w-100" style={{ flexBasis: "68%" }}>
        <Menu />
      </div>

    </div>
  );
};

export default TopBar;