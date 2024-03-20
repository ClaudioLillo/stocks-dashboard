import React from "react";

import "./StockList.css";

const mockList = [
  { name: "Nvidia", price: "100.87", lastVariation: -0.5 },
  { name: "AMD", price: "200.34", lastVariation: 0.7 },
  { name: "Intel", price: "3.45", lastVariation: 3.25 },
  { name: "Apple", price: "101.32", lastVariation: -0.89 },
  { name: "Microsoft", price: "15.12", lastVariation: 0.91 },
];

export default function StockList() {
  return (
    <div>
      <table>
        <tbody>
          {mockList &&
            mockList.map((stock, index) => (
              <tr className="stock-list-tr" key={index}>
                <td className="stock-name">{stock.name}</td>
                <td className="stock-price">{stock.price}</td>
                <td
                  className={
                    stock.lastVariation > 0 ? "variation-up" : "variation-down"
                  }
                >{`${Math.abs(stock.lastVariation)} %`}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
