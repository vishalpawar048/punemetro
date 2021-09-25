import * as React from 'react';
import table from "./MetroTimeTable"

export default function TimeTable() {
    const tableContainer = {
        marginBottom: "50px",
        overflow: "auto",
      };
  return (
     <div>
          <h2>Pune Metro Time Table</h2>
          <div style={tableContainer}>
       <div dangerouslySetInnerHTML={{__html: table}} />
       </div>
    </div>
  );
}