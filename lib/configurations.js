let apiKey;
let accessToken;
let auditKey;
let publicKey;
let privateKey;

// eslint-disable-next-line no-multi-assign
const configurationsModule = module.exports

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
  auditKey = configurations.auditKey || auditKey
};

configurationsModule.setAuditKey = (aKey) => {
  auditKey = aKey
}

configurationsModule.setPublicKey = (pubKey) => {
  publicKey = pubKey
}

configurationsModule.setPrivateKey = (privKey) => {
  privateKey = privKey
}

configurationsModule.getApiKey = () => apiKey;

configurationsModule.getAccessToken = () => accessToken;

configurationsModule.getAuditKey = () => auditKey;

configurationsModule.getPublicKey = () => publicKey;

configurationsModule.getPrivateKey = () => privateKey