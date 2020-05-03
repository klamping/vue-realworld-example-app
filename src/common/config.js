const API_ENDPOINTS = {
  local: "http://localhost:3000/api",
  official: "https://conduit.productionready.io/api",
  demo: "https://conduit-api.learnwebdriverio.com/api"
};

let apiEndpoint = process.env.API_ENDPOINT;

// make sure proper endpoint option passed in
if (!API_ENDPOINTS.hasOwnProperty(apiEndpoint)) {
  if (apiEndpoint !== undefined) {
    throw new Error(
      `No endpoint found for "${apiEndpoint}". Available options: ${Object.keys(
        API_ENDPOINTS
      )}`
    );
  } else {
    apiEndpoint = "local";
  }
}

export const API_URL = API_ENDPOINTS[apiEndpoint];
export default API_URL;
