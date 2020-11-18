export class Configuration {
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
  }): void {
    this.apiKey = apiKey;
    this.accessToken = accessToken;
    this.auditKey = auditKey;
  }

  setAuditKey(aKey: string): void {
    this.auditKey = aKey;
  }

  setPrivateKey(privKey: string): void {
    this.privateKey = privKey;
  }

  getApiKey(): string | undefined {
    return this.apiKey;
  }

  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  getAuditKey(): string | undefined {
    return this.auditKey;
  }

  getPrivateKey(): string | undefined {
    return this.privateKey;
  }
}

export default new Configuration();
