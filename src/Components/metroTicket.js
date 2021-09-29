import * as React from 'react';
import table from "./MetroTicketFareTable"

export default function MetroTicket() {
    const tableContainer = {
        marginBottom: "50px",
        overflow: "auto",
      };
  return (
     <div>
          <h2>Pune Metro Ticket Fare</h2>
          <div style={tableContainer}>
       <div dangerouslySetInnerHTML={{__html: table}} />
       </div>
    </div>
  );
}