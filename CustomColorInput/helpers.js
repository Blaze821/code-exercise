/**
 * hasPrefix
 * @param {string} value
 * @param {string} symbol
 * @return {boolean}
 */
function hasPrefix(value, symbol) {
  const beginIndex = 0,
    endIndex = symbol.length
  return value.slice(beginIndex, endIndex) === symbol ? true : false
}

/**
 * addPrefix
 * @param {string} value
 * @param {string} [symbol='#']
 * @return {string}
 */
export function addPrefix(value, symbol = '#') {
  return hasPrefix(value, symbol) ? value : `${symbol}${value}`
}

/**
 * removePrefix
 * @param {string} value
 * @param {string} [symbol='#']
 * @return {string}
 */
export function removePrefix(value, symbol = '#') {
  return hasPrefix(value, symbol) ? value.slice(symbol.length) : value
}
