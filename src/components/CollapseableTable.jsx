import React, { useState } from "react";
import { headers, subHeaders, data, subData } from "./sampleData";

const CollapseableTable = () => {
  const [exapandedRows, setExpandedRows] = useState([]); // Track expanded Rows
  const [exapandedState, setExpandedState] = useState({}); // check which row is currently expanded

  const handleExpandedRow = (event, index) => {
    event.preventDefault();
    const currentExpandedRows = exapandedRows;
    const isRowExpanded = currentExpandedRows.includes(index);

    let obj = {};
    isRowExpanded ? (obj[index] = false) : (obj[index] = true);
    setExpandedState(obj);

    // If row is expanded then remove it from the state else add it
    const newExpandedRows = isRowExpanded
      ? currentExpandedRows.filter((id) => id !== index)
      : currentExpandedRows.concat(index);

    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="collapseableTableWrapper">
      <table>
        <tr>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
        {data.map((obj, index) => (
          <>
            <tr key={index}>
              <td>
                <button
                  className="toggle"
                  onClick={(event) => handleExpandedRow(event, index)}
                >
                  <b>{exapandedState[index] ? "-" : "+"}</b>
                </button>
                {obj.date}
              </td>
              <td>{obj.rType}</td>
              <td>{obj.rNum}</td>
              <td>{obj.numOfItems}</td>
              <td>{obj.tQty}</td>
              <td>{obj.rSubTotal}</td>
              <td>{obj.rDiscount}</td>
              <td>{obj.rAmt}</td>
              <td>{obj.ptsPeeps}</td>
              <td>{obj.storesNum}</td>
              <td>{obj.tType}</td>
              <td>{obj.cashier}</td>
            </tr>
            {exapandedRows.includes(index) ? (
              <>
                <tr>
                  <td></td>
                  {subHeaders.map((subheader, index) => (
                    <th className="yellowBg" key={index}>
                      {subheader}
                    </th>
                  ))}
                </tr>

                <tr>
                  <td></td>
                  <td className="noBorder">
                    {subData.itemNum.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.d1.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.d2.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.size.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.attr.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.qty.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.rxpt.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.extp.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.discPer.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.discDollar.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                  <td className="noBorder">
                    {subData.upc.map((val, index) => (
                      <tr key={index} className="noBorder">
                        <td className="noBorder">{val}</td>
                      </tr>
                    ))}
                  </td>
                </tr>
              </>
            ) : null}
          </>
        ))}
      </table>
    </div>
  );
};

export default CollapseableTable;
