const { Audit } = require('lighthouse')
const {
    createValueResult,
} = require('../utils/audit-helpers')

module.exports = class FieldFcpAudit extends Audit {
    static get meta() {
        return {
            id: 'field-seo',
            title: 'Page has least one cat image',
            failureTitle: 'SEO OPTIMIZATION',
            description: 'Meta Description TagYour page has a meta description tag however, your meta description should ideally be between 70 and 320 characters (including spaces).' +
                '(Keyword Consistency , Amount of Content,Broken Links,XML Sitemaps,Schema.org Structured Data)',
            requiredArtifacts: ['ImageElements'],
        }
    }

    static async audit() {


        return {
            score: 0.30,
            //numericUnit: 39,
            displayValue: 30
        }

    }
}