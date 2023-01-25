import React from "react";

function Stock({stock, handleStock}) {
  const { ticker, name, price } = stock;

  function handleStockClick(){
    handleStock(stock)
  }

  return (
    <div>
      <div className="card" onClick={handleStockClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
