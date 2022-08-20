import { ApiNameEnum } from "@interfaces/index";

const getApiEndpoints = (apiName: ApiNameEnum) => {
  const baseUrl =  process.env.BASE_URL;
  const api = `${baseUrl}/api/${apiName}`;
  return api;
};

export default getApiEndpoints;
