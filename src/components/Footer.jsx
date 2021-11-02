import React from "react";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerContainer">
        <div>
          <p>Rows per page:</p>
        </div>
        <div>
          <p>
            5 <span style={{ fontSize: "12px" }}>▼</span>
          </p>
        </div>
        <div>
          <p>1-10 of 100</p>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "10%",
          }}
        >
          <div>
            <p style={{ fontSize: "2rem" }}>&#129168;</p>
          </div>
          <div>
            <p style={{ fontSize: "2rem" }}>&#129170;</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
