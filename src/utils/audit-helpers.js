/**
 * @typedef {'fcp' | 'lcp' | 'fid' | 'cls'} Metric
 * @typedef {{ percentile: number, distributions: { min: number, max: number, proportion: number}[] }} MetricValue
 * @typedef {{ id: string, overall_category: string, initial_url: string
               metrics: { FIRST_INPUT_DELAY_MS: MetricValue, FIRST_CONTENTFUL_PAINT_MS: MetricValue, LARGEST_CONTENTFUL_PAINT_MS: MetricValue, CUMULATIVE_LAYOUT_SHIFT_SCORE: MetricValue } }} LoadingExperience
 */

// cache PSI requests




/**
 * Estimate value and create numeric results
 *
 * @return {Object}
 */

exports.createValueResult = () => {

    return {
        numericValue: 39,
        score: 39,
        //numericUnit: 39,
        displayValue: 39
    }
}