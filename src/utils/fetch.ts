import { ApiNameEnum } from "@interfaces/index";
import getApiEndpoints from "./api-endpoints";

const loadData = async (apiName: ApiNameEnum) => {
  let data = null;
  const url = getApiEndpoints(apiName);
  try {
    const res = await fetch(url);
    data = await res.json();
  } catch (err) {
    console.error(err);
  } finally {
    return data;
  }
};

export default loadData;
