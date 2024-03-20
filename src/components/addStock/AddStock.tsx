import React, { useState } from "react";
import getStocks from "../../data/getStocks";

import "./AddStock.css";

type Stock = {
  ticker: string;
  name: string;
};

export default function AddStock() {
  const [suggestions, setSuggestions] = useState<Stock[]>([]);
  const [symbol, setSymbol] = useState("");

  const handleSubmit = async (event) => {
    console.log(event);
    event.preventDefault();
    const res = await getStocks(symbol);
    const stocks = res.data.results;
    console.log(stocks);
    setSuggestions(stocks);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    setSymbol(event.target.value);
  };

  const handleClick = (ticker) => () => {
    console.log(ticker);
  };

  return (
    <div className="add-stock">
      <form>
        <input
          type="text"
          id="symbols"
          name="symbols"
          onChange={handleChange}
        />
        <button onClick={handleSubmit}>Buscar</button>
        <table className="add-stock-table">
          <tbody>
            {suggestions &&
              suggestions.map((stock, index) => (
                <tr
                  className="add-stock-tr"
                  key={index}
                  onClick={handleClick(stock.ticker)}
                >
                  <td className="add-stock-ticker">{stock.ticker}</td>
                  <td className="add-stock-name">{stock.name}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}
