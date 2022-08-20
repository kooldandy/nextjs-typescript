import { ApiNameEnum } from "@interfaces/index";
import getApiEndpoints from "./api-endpoints";

const fetchData = async (apiName: ApiNameEnum) => {
  let data = null;
  const url = getApiEndpoints(apiName);
  const headers = { 'Content-Type': 'application/json' };
  try {
    const res = await fetch(url,{headers});
    data = await res.json();
  } catch (err) {
    console.error('err', err);
  } finally {
    return data;
  }
};

export {fetchData};
