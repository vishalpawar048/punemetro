import * as React from 'react';
import table from "./MetroTimeTable"

export default function TimeTable() {
    const tableContainer = {
        marginBottom: "50px",
      };
  return (
      <div style={tableContainer}>
       <div dangerouslySetInnerHTML={{__html: table}} />
    </div>
  );
}