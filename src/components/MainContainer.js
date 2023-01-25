import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocksArray, setStocksArray] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(data => setStocksArray(data))
  },[]) //set dependencies

  const filteredStocks = stocksArray.filter(stock => stock)

  return (
    <div>
      <SearchBar />
      <div className="row">
        <div className="col-8">
          <StockContainer filteredStocks={filteredStocks}/>
        </div>
        <div className="col-4">
          <PortfolioContainer />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
