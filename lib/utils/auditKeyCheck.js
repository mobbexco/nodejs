const configuration = require('../configurations')

function auditKeyCheck () {
  const auditKey = configuration.getAuditKey()
  if (typeof auditKey === 'undefined') {
    throw new Error('You must set an Audit Key')
  }
}

module.exports = auditKeyCheck
