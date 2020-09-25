const { Audit } = require('lighthouse')
const {
    createValueResult,
} = require('../utils/audit-helpers')

module.exports = class FieldFcpAudit extends Audit {
    static get meta() {
        return {
            id: 'field-seo',
            title: 'Page has least one cat image',
            failureTitle: 'Page does not have at least one cat image',
            description: 'Pages should have lots of cat images to keep users happy. ' +
                'Consider adding a picture of a cat to your page improve engagement.',
            requiredArtifacts: ['ImageElements'],
        }
    }

    static async audit() {

        console.log(createValueResult())
        return createValueResult()
    }
}