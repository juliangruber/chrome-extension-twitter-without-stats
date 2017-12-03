document.addEventListener('DOMContentLoaded', () => {
  const style = document.createElement('style')
  style.appendChild(document.createTextNode(
    '.ProfileTweet-actionCount, .ProfileNav-value, .ProfileCardStats-statValue, .js-stat-count strong { display: none; }'
  ))
  document.head.appendChild(style)
})
