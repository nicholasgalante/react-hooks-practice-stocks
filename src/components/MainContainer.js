import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterby] = useState("All");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(res => res.json())
      .then(data => setStocks(data))
  }, []) //set dependencies

  function removeStock(removedStock) {
    const newArray = portfolio.filter(stock => {
      return stock.id !== removedStock.id
    })
    setPortfolio(newArray)
  }

  function addStock(addedStock) {
    if (!portfolio.includes(addedStock)) {
      const newArray = [...portfolio, addedStock]
      setPortfolio(newArray)
    } else {
      alert('This stock is already in your portfolio!')
    }
  }

  function onSortChange(sortValue) {
    setSortBy(sortValue)
  }

  if (sortBy === "Alphabetically") {
    stocks.sort((a, b) => a.name < b.name ? -1 : 1);
  } else if (sortBy === "Price") {
    stocks.sort((a,b) => a.price < b.price ? -1 : 1);
  }

  const filteredStocks = stocks.filter(stock => stock)

  return (
    <div>
      <SearchBar onSortChange={onSortChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer filteredStocks={filteredStocks} addStock={addStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} removeStock={removeStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
