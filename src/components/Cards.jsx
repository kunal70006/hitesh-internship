import React from "react";

const Cards = () => {
  return (
    <div className="cardsWrapper">
      <div className="cardContainer">
        <div className="container1">
          <p className="details">
            First name: <b>Jon</b>
          </p>
          <p className="details">Currency Available to Redeem:</p>
          <p className="details">PetPeeps Points This Year:</p>
        </div>

        <div className="container2">
          <p className="details">
            Last name: <b>Revell</b>
          </p>
          <p className="details" style={{ textAlign: "right" }}>
            <b>$ 150.00</b>
          </p>
          <p className="details" style={{ textAlign: "right" }}>
            <b>2,318</b>
          </p>
        </div>
      </div>

      <div className="cardContainer">
        <div className="container1">
          <p className="details">Sale Price</p>
          <p className="details">Return Price</p>
        </div>

        <div className="container2">
          <p className="details" style={{ fontSize: "24px" }}>
            <b>$4328.41</b>
          </p>
          <p className="details" style={{ fontSize: "24px" }}>
            <b>$9.41</b>
          </p>
        </div>
      </div>

      <div className="cardContainer">
        <div
          className="container1"
          style={{
            textAlign: "center",
          }}
        >
          <p className="details" style={{ fontSize: "28px" }}>
            <b>178</b>
          </p>
          <p className="details">Sale QTY</p>
        </div>

        <div className="border"></div>

        <div className="container2" style={{ textAlign: "center" }}>
          <p className="details" style={{ fontSize: "28px" }}>
            <b>4</b>
          </p>
          <p className="details">Return QTY</p>
        </div>
      </div>

      <div className="cardContainer">
        <div
          className="container1"
          style={{
            textAlign: "center",
          }}
        >
          <p className="details" style={{ fontSize: "28px" }}>
            <b>84</b>
          </p>
          <p className="details">
            Sale Receipt
            <br />
            Count
          </p>
        </div>

        <div className="border"></div>

        <div className="container2" style={{ textAlign: "center" }}>
          <p className="details" style={{ fontSize: "28px" }}>
            <b>1</b>
          </p>
          <p className="details">
            Return Receipt
            <br />
            Count
          </p>
        </div>
      </div>

      <div className="cardContainer">
        <div className="container1">
          <p className="details" style={{ fontSize: "20px" }}>
            AVG $ Per Receipt
          </p>
          <p className="details" style={{ fontSize: "20px" }}>
            Net Sales T$
          </p>
        </div>

        <div className="container2">
          <p className="details" style={{ fontSize: "28px" }}>
            <b>$51.53</b>
          </p>
          <p className="details" style={{ fontSize: "28px" }}>
            <b>$294.88</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
