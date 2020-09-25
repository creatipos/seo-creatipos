const { Audit } = require('lighthouse')
const {
    createValueResult,
} = require('../utils/audit-helpers')

module.exports = class FieldFcpAudit extends Audit {
    static get meta() {
        return {
            id: 'field-seo',
            title: 'Enlaces',
            description: 'seo',
            scoreDisplayMode: 'numeric',
            requiredArtifacts: ['URL', 'ImageElements'],
        }
    }

    static async audit() {

        console.log(createValueResult())
        return createValueResult()
    }
}