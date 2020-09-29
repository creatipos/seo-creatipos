const ReportScoring = require('lighthouse/lighthouse-core/scoring')
const scoreAllCategories = ReportScoring.scoreAllCategories



module.exports = {
    audits: [
        { path: 'lighthouse-plugin-seopower/src/audits/field-seo.js' },
        { path: 'lighthouse-plugin-seopower/src/audits/field-ahrefs.js' },
        { path: 'lighthouse-plugin-seopower/src/audits/field-webpagetest.js' }
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
        title: 'SEO - Ahrefs - Webpagetest',
        description: 'Try the free version of Ahrefs Backlink Checker. Get a glimpse into the power of our premium tool.',
        auditRefs: [
            // Now every metric is weighted equally, based on idea to pass all CWV.
            //
            // alternative weights (based on Lighthouse):
            // 15 (FCP)
            // 25 + 15 = 40 (SI + LCP)
            // 15 + 25 = 40 (TTI + TBT)
            // 5 (CLS)
            { id: 'field-seo', weight: 1, group: 'page' },
            { id: 'field-ahrefs', weight: 1, group: 'page' },
            { id: 'field-webpagetest', weight: 1, group: 'page' }
        ],
    },
}