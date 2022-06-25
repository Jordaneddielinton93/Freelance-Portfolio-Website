import { useEffect, useState } from "react";

const useFetch = ({ url }) => {
  let [data, setData] = useState(false);
  useEffect(() => {
    try {
      async function sendApiReq() {
        let response = await fetch(url, options);
        let resData = await response.json();
        setData(resData);
      }
      sendApiReq()
    } catch (error) { }
  }, [url]);

  return { data };
};

export default useFetch;
