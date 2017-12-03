document.addEventListener('DOMContentLoaded', function () {
  var style = document.createElement('style')
  style.appendChild(document.createTextNode(
    '.ProfileTweet-actionCount, .ProfileNav-value, .ProfileCardStats-statValue { display: none; }'
  ))
  document.head.appendChild(style)
})
