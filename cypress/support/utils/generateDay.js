const dayjs = require('dayjs')
function generateDay(vals) {
  const dateLast = dayjs().subtract(vals, 'day').format('DD MMM YYYY')
  const dateToday = dayjs().format('DD MMM YYYY')
  const result = `${dateLast} - ${dateToday}`
  return result
}

function todayDate() {
  const today = dayjs().format('DD MMM YYYY')
  return today
}

module.exports = {
  generateDay,
  todayDate,
}
