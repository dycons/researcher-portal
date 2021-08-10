import React from 'react';

/*
Returns a table displaying the data in the props.
*/
function Table(props) {
  // If there is no data to display
  if (props.data.length === 0) {
    return (
      <div>
        <h4>{props.name}</h4>
        <p>No data available</p>
      </div>
    );
  }

  // Get the headers for the table
  const headers = Object.keys(props.data[0]);
  const headerRow = headers.map((header, index) => {
    return (
      <th key={index}>{header}</th>
    );
  });

  const dataRows = [];
  for (let i = 0; i < props.data.length; i++) {
    const row = props.data[i];
    const rowElement = getRowElement(row, headers);
    dataRows.push(rowElement);
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <table>
        <thead>
          <tr>
            {headerRow}
          </tr>
        </thead>
        <tbody>
          {dataRows}
        </tbody>
      </table>
    </div>
  );
}

/*
Returns an element containing data for a single row.
*/
function getRowElement(rowData, headers) {
  const rowValues = [];
  for (let i = 0; i < headers.length; i++) {
    const header = headers[i];
    rowValues.push(JSON.stringify(rowData[header]));
  }

  const rowValueElements = rowValues.map((val, index) => {
    return (
      <td key={index}>{val}</td>
    );
  });

  return (
    <tr key={rowData.id}>
      {rowValueElements}
    </tr>
  );
}

export default Table;