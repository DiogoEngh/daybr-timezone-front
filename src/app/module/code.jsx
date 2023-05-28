import React from "react";

const Code = ({ pre }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "25rem",
        height: "3rem",
        backgroundColor: "#eee",
        borderRadius: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {pre}
    </div>
  );
};

export default Code;
