import React from "react";

const getPairs = (data, x, y) => {
  const pairs = [];
  const { values } = data;
  const length = values.length;
  const xStep = (x - 30) / length;
  const yStep = (y - 90) / (data.max - data.min);
  for (let i = 0; i < length; i++) {
    pairs.push([i * xStep + 15, y - 45 - (values[i] - data.min) * yStep]);
  }
  return pairs;
};

const getReferences = (data, x, y) => {
  const references = [];
  const { min, max } = data;
  const w = x - 30;
  const h = y - 90;
  const yStep = (y - 90) / (data.max - data.min);
  const lower = Math.ceil(min);
  const upper = Math.floor(max);
  for (let i = lower; i <= upper; i++) {
    references.push({ value: y - 45 + (min - i) * yStep, label: i });
  }
  return references;
};

export default function Dashboard({ posX, posY, x, y, data }) {
  const dates = data.sort((a, b) => a.date - b.date).map((q) => q.date);

  dates.forEach((date) => {
    const dateObj = new Date(date);
    console.log(dateObj.toISOString());
  });

  const values = data.map((q) => q.price);

  const stockData = {
    name: "Apple Inc.",
    ticker: "AAPL",
    price: values[values.length - 1],
    min: Math.min(...values),
    max: Math.max(...values),
    values: values,
  };

  const pairs = getPairs(stockData, x, y);
  const references = getReferences(stockData, x, y);
  return (
    <div className="dashboard">
      <svg width={x} height={y} xmlns="http://www.w3.org/2000/svg">
        <rect
          x={posX}
          y={posY}
          width={x}
          height={y}
          fill="rgba(0, 0, 0, 0.8)"
          rx="0"
          ry="0"
        />
        <rect
          x={posX + 45}
          y={posY + 45}
          width={x - 30}
          height={y - 90}
          fill="rgba(0, 0, 0, 0)"
          rx="0"
          ry="0"
        />
        {references.map((ref, index) => (
          <line
            key={index}
            x1={45}
            y1={ref.value}
            x2={x - 30}
            y2={ref.value}
            style={{ stroke: "rgba(255,255,255,0.4)", strokeWidth: 0.5 }}
          />
        ))}
        {references.map((ref, index) =>
          index > 0 && index < stockData.values.length - 1 ? (
            <text key={index} x={5} y={ref.value} fontSize={12} fill="white">
              {ref.label}
            </text>
          ) : null
        )}
        {pairs.map((pair, index) =>
          index === 0 ? null : (
            <line
              key={index}
              x1={pairs[index - 1][0] + 45}
              y1={pairs[index - 1][1]}
              x2={pair[0] + 45}
              y2={pair[1]}
              style={{ stroke: "white", strokeWidth: 3 }}
            />
          )
        )}
        {pairs.map((pair, index) => (
          <circle
            key={index}
            cx={pair[0] + 45}
            cy={pair[1]}
            r="2"
            fill="black"
          />
        ))}
        <text x={5} y={45 + 6} fontSize={12} fill="rgba(0,255,0,0.8)">
          {stockData.max}
        </text>
        <text x={5} y={y - 45 + 6} fontSize={12} fill="rgba(255,0,0,0.8)">
          {stockData.min}
        </text>
        <text x={50} y={30} fontSize={20} fill="rgba(255,255,255,0.8)">
          {`${stockData.ticker} | ${stockData.name}`}
        </text>
      </svg>
    </div>
  );
}
