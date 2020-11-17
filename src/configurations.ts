class Configurations {
  apiKey?: string;
  accessToken?: string;
  auditKey?: string;
  privateKey?: string;

  configure({
    apiKey,
    accessToken,
    auditKey,
  }: {
    apiKey?: string;
    accessToken?: string;
    auditKey?: string;
  }) {
    this.apiKey = apiKey;
    this.accessToken = accessToken;
    this.auditKey = auditKey;
  }

  setAuditKey(aKey: string) {
    this.auditKey = aKey;
  }

  setPrivateKey(privKey: string) {
    this.privateKey = privKey;
  }

  getApiKey() {
    return this.apiKey;
  }

  getAccessToken() {
    return this.accessToken;
  }

  getAuditKey() {
    return this.auditKey;
  }

  getPrivateKey() {
    return this.privateKey;
  }
}

export default new Configurations();
