import React from 'react';

function TowerPurchaseGrid() {
  const rows = [];
  const numRows = 3;
  const numCols = 4;

  for (let i = 0; i < numRows; i++) {
    const row = [];
    for (let j = 0; j < numCols; j++) {
      row.push(
        <div className="square" key={`${i}-${j}`}>
          <div className="inner-square"></div>
          <div className="text">Text under the square</div>
        </div>
      );
    }
    rows.push(<div className="row" key={i}>{row}</div>);
  }

  return (
    <div className="column">
      {rows}
    </div>
  );
}

export default TowerPurchaseGrid;