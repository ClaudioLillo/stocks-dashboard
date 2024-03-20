import axios from "axios";

const apiKey = "lZxcDnRaFif2MQaYsG8qLMitE9hBHBop";

export default async function getStocks(str: String) {
  const url = `https://api.polygon.io/v3/reference/tickers?search=${str}&active=true&apiKey=${apiKey}`;
  const res = await axios.get(url);
  return res;
}
