import React from "react";
import Stock from "./Stock";

function StockContainer({filteredStocks}) {

  const renderedStocks = filteredStocks.map(stock => {
    return <Stock key={stock.id} stock={stock}/>
  })
  
  return (
    <div>
      <h2>Stocks</h2>
      {renderedStocks}
    </div>
  );
}

export default StockContainer;
