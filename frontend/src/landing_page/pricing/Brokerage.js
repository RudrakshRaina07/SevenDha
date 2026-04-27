import React from "react";

function Brokerage({ heading, tableHeading1, tableHeading2, tableHeading3, row1Detail1, row1Detail2, row1Detail3, row2Detail1, row2Detail2, row2Detail3, row3Detail1, row3Detail2, row3Detail3, row4Detail1, row4Detail2, row4Detail3 }) {
  return (
    <div className="container">
      <div className="row p-3 p-md-5">
        <h2 className="mb-4 fs-3">{heading}</h2>
        <div className="table-responsive">
          <table className="table text-muted table-striped">
            <thead>
              <tr>
                <th scope="col">{tableHeading1}</th>
                <th scope="col">{tableHeading2}</th>
                <th scope="col">{tableHeading3}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-muted">{row1Detail1}</td>
                <td className="text-muted">{row1Detail2}</td>
                <td>{row1Detail3}</td>
              </tr>
              <tr>
                <td className="text-muted">{row2Detail1}</td>
                <td className="text-muted">{row2Detail2}</td>
                <td>{row2Detail3}</td>
              </tr>
              <tr>
                <td className="text-muted">{row3Detail1}</td>
                <td className="text-muted">{row3Detail2}</td>
                <td>{row3Detail3}</td>
              </tr>
              <tr>
                <td className="text-muted">{row4Detail1}</td>
                <td className="text-muted">{row4Detail2}</td>
                <td>{row4Detail3}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;