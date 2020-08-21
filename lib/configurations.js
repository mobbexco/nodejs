let apiKey;
let accessToken;

// eslint-disable-next-line no-multi-assign
const configurationsModule = module.exports = {
};

configurationsModule.configure = (configurations) => {
  if (configurations === undefined || typeof configurations !== 'object') {
    throw new Error('You must provide an Object with the Api Key and Access Token');
  }

  if (configurations.apiKey === undefined && configurations.accessToken === undefined) {
    throw new Error('You must provide an Api Key and Access Token');
  }

  if (configurations.apiKey !== undefined && configurations.accessToken === undefined) {
    throw new Error('You must provide an Access Token');
  }

  if (configurations.apiKey === undefined && configurations.accessToken !== undefined) {
    throw new Error('You must provide an Api Key');
  }

  if (configurations.apiKey !== undefined && configurations.accessToken !== undefined
  && (apiKey !== undefined || accessToken !== undefined)) {
    throw new Error('You cannot change Api Key or Access Token because are already set');
  }

  apiKey = apiKey || configurations.apiKey;
  accessToken = accessToken || configurations.accessToken;
};

configurationsModule.getApiKey = () => apiKey;

configurationsModule.getAccessToken = () => accessToken;

configurationsModule.setApiKey = (key) => {
  apiKey = key;
  return this;
};

configurationsModule.setAccessToken = (token) => {
  accessToken = token;
  return this;
};
