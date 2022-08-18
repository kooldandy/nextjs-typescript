import { ApiNameEnum } from "@interfaces/index";

const getApiEndpoints = (apiName: ApiNameEnum) => {
    // TODO: Add dynamic url using env
  const baseUrl =  'http://localhost:3000';
  const api = `${baseUrl}/api/${apiName}`;
  return api;
};

export default getApiEndpoints;
