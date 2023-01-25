import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolio,removeStock}) {

  function handleStock(stock){
    removeStock(stock)
  }

  const renderPortfolio = portfolio.map(stock => {
    return <Stock key={stock.id} stock={stock} handleStock={handleStock}/>
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {renderPortfolio}
    </div>
  );
}

export default PortfolioContainer;
