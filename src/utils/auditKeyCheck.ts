import configuration from "../configurations";

export function auditKeyCheck(): void {
  const auditKey = configuration.getAuditKey();
  if (typeof auditKey === "undefined") {
    throw new Error("You must set an Audit Key");
  }
}
