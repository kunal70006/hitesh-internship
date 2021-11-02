import React from "react";
import Cards from "./Cards";
import CalenderSearch from "./CalenderSearch";
import CollapseableTable from "./CollapseableTable";
import Footer from "./Footer";

const Table = () => {
  return (
    <>
      <div className="greenRec"></div>
      <Cards />
      <CalenderSearch />
      <CollapseableTable />
      <Footer />
    </>
  );
};

export default Table;
