import React, { useState } from "react";

const CalenderSearch = () => {
  const [inFocus, setInFocus] = useState(false);
  return (
    <div className="calenderSearchWrapper">
      <div className="history">
        <h1>Purchase History</h1>
      </div>
      <div className="calenderDiv">
        <div>
          <p style={{ marginRight: ".5rem" }}>
            <b>FROM</b>
          </p>
          <input
            type={inFocus ? "date" : "text"}
            className="datePicker"
            placeholder="MM/DD/YYYY"
            onFocus={() => setInFocus(true)}
          />
        </div>
        <div>
          <p style={{ marginRight: ".5rem" }}>
            <b>TO</b>
          </p>
          <input
            type={inFocus ? "date" : "text"}
            className="datePicker"
            placeholder="MM/DD/YYYY"
            onFocus={() => setInFocus(true)}
          />
        </div>
        <div style={{ marginRight: "10rem" }}>
          <input type="search" placeholder="Search" className="datePicker" />
        </div>
      </div>
    </div>
  );
};

export default CalenderSearch;
