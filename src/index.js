const ReportScoring = require('lighthouse/lighthouse-core/scoring')
const scoreAllCategories = ReportScoring.scoreAllCategories



module.exports = {
    audits: [
        { path: 'lighthouse-plugin-seopower/src/audits/field-fcp.js' }
    ],
    groups: {
        page: {
            title: 'Page summary',
        },
        origin: {
            title: 'Origin summary',
        },
    },
    category: {
        title: 'Backlink Checker de Ahrefs',
        description: 'Try the free version of Ahrefs Backlink Checker. Get a glimpse into the power of our premium tool.',
        auditRefs: [
            // Now every metric is weighted equally, based on idea to pass all CWV.
            //
            // alternative weights (based on Lighthouse):
            // 15 (FCP)
            // 25 + 15 = 40 (SI + LCP)
            // 15 + 25 = 40 (TTI + TBT)
            // 5 (CLS)
            { id: 'field-fcp', weight: 0, group: 'page' }
        ],
    },
}