const { Audit } = require('lighthouse')
const {
    createValueResult,
} = require('../utils/audit-helpers')

module.exports = class FieldFcpAudit extends Audit {
    static get meta() {
        return {
            id: 'field-webpagetest',
            title: 'Performance Results (Median Run - SpeedIndex)',
            failureTitle: 'Performance Results (Median Run - SpeedIndex)',
            description: 'Largest Contentful Paint',
            requiredArtifacts: ['ImageElements'],
        }
    }

    static async audit() {


        return {
            score: 0.25,
            //numericUnit: 39,
            displayValue: 25
        }

    }
}