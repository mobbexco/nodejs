export class Configuration {
  apiKey?: string;
  accessToken?: string;
  auditKey?: string;

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

  getApiKey(): string | undefined {
    return this.apiKey;
  }

  getAccessToken(): string | undefined {
    return this.accessToken;
  }

  getAuditKey(): string | undefined {
    return this.auditKey;
  }
}

export default new Configuration();
