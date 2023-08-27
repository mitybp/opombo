import React from "react";

const Loading = ({visible}) => {
  return (
    <div className="loading" style={{display: visible?'flex':'none'}}>
        <h1>Carregando banco de dados...</h1>
    </div>
  );
};

export default Loading;
