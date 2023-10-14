import React from "react";

function BanList({ bannedAttr }) {
  return (
    <div className="banList">
      <h2>Ban List</h2>
      <ul>
        {bannedAttr.map((attr, index) => (
          <li key={index}>{attr}</li>
        ))}
      </ul>
    </div>
  );
}

export default BanList;