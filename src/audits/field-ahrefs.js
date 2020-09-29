const { Audit } = require('lighthouse')
const {
    createValueResult,
} = require('../utils/audit-helpers')

module.exports = class FieldFcpAudit extends Audit {
    static get meta() {
        return {
            id: 'field-ahrefs',
            title: 'Ahrefs Rating 38/100 ',
            failureTitle: 'Ahrefs Rating 38/100 ',
            description: 'Domain with low reputation',
            requiredArtifacts: ['ImageElements'],
        }
    }

    static async audit() {


        return {
            score: 0.38,
            //numericUnit: 39,
            displayValue: 38
        }

    }
}