const selectors = [
  '.ProfileTweet-actionCount',
  '.ProfileNav-value',
  '.ProfileCardStats-statValue',
  '.js-stat-count strong',
  '.stats .stat-count strong',
  '.wtf-module'
]

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(`${selectors.join(', ')} { display: none !important }`))
  document.head.appendChild(style)
})
