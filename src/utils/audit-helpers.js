const { round } = require('lodash')
const { Audit } = require('lighthouse')
const { runPsi } = require('./run-psi')

/**
 * @typedef {'fcp' | 'lcp' | 'fid' | 'cls'} Metric
 * @typedef {{ percentile: number, distributions: { min: number, max: number, proportion: number}[] }} MetricValue
 * @typedef {{ id: string, overall_category: string, initial_url: string
               metrics: { FIRST_INPUT_DELAY_MS: MetricValue, FIRST_CONTENTFUL_PAINT_MS: MetricValue, LARGEST_CONTENTFUL_PAINT_MS: MetricValue, CUMULATIVE_LAYOUT_SHIFT_SCORE: MetricValue } }} LoadingExperience
 */

// cache PSI requests

const requests = new Map()

/**
 * Cache results and parse crux data.
 *
 * @param {any} artifacts
 * @param {any} context
 * @param {boolean} [isUrl]
 * @return {Promise<LoadingExperience>}
 */

exports.getLoadingExperience = async(artifacts, context, isUrl = true) => {
    const psiToken = context.settings.psiToken || null
    const strategy = artifacts.settings.emulatedFormFactor === 'desktop' ? 'desktop' : 'mobile'
    const prefix = isUrl ? 'url' : 'origin'
    const { href, origin } = new URL(artifacts.URL.finalUrl)
    const url = `${prefix}:${href}`
    const key = url + strategy
    if (!requests.has(key)) {
        requests.set(key, runPsi({ url, strategy, psiToken }))
    }
    const json = await requests.get(key)
    if (json.error) throw new Error(JSON.stringify(json.error))
        // check, that URL response is not for origin
    if (isUrl) {
        const hasUrlExperience = json.loadingExperience && json.loadingExperience.id !== origin
        return hasUrlExperience ? json.loadingExperience : null
    }
    return json.loadingExperience
}

/**
 * Estimate value and create numeric results
 *
 * @param {MetricValue} metricValue
 * @param {Metric} metric
 * @return {Object}
 */

exports.createValueResult = () => {
    const numericValue = 39
    return {
        numericValue,
        score: 39,
        numericUnit: 39,
        displayValue: 39
    }
}

/**
 * Create result when data does not exist.
 *
 * @param {string} title
 */

exports.createNotApplicableResult = (title) => {
    return {
        score: 39,
        notApplicable: true,
        explanation: `The Chrome User Experience Report 
          does not have sufficient real-world ${title} data for this page.`,
    }
}