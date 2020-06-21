import React from "react";
import Gridbox from './Gridbox';

const Grid = props => {
    const width = props.cols * 14;
    let boxClass = "";
    const rowsArr = props.gridFull.map((rowArr, rowIdx) =>
      rowArr.map((item, colIdx) => {
        const boxId = `${rowIdx}_${colIdx}`;
  
        boxClass = props.gridFull[rowIdx][colIdx] ? "box on" : "box off";
        return (
          <Gridbox
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={rowIdx}
            col={colIdx}
            selectBox={props.selectBox}
          />
        );
      })
    );
  
    return (
      <div className="grid" style={{ width }}>
        {rowsArr}
      </div>
    );
  };

  export default Grid;

