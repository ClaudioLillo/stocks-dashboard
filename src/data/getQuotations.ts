const BASE_URL = process.env.REACT_APP_BASE_URL;

import axios from "axios";

export default async function getQuotations(ticker: String) {
  try {
    const url = `${BASE_URL}/apiv1/quotations?ticker=${ticker}`;
    const res = await axios.get(url);
    return res.data.data.Items;
  } catch (err) {
    console.error(err);
    return undefined;
  }
}
