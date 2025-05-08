
import { useEffect, useState } from "react";

//Making custom hook: that return some data
function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  //Call an API
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]))
      
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;


