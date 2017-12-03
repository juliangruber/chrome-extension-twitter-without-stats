const selectors = [
  '.ProfileTweet-actionCount',
  '.ProfileNav-value',
  '.ProfileCardStats-statValue',
  '.js-stat-count strong'
]

document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(`${selectors.join(', ')} { display: none; }`))
  document.head.appendChild(style)
})
