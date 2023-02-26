const XXX = 'XXX', VIAGRA = 'VIAGRA'

function checkSpam(string) {

  let checkSpamWrods = (string, spamWrod) => {
    return string.toUpperCase().includes(spamWrod)
  } 

  console.log(
    checkSpamWrods(string, XXX) || checkSpamWrods(string, VIAGRA)
  )
}

checkSpam('buy ViAgRA now') 
checkSpam('free xxxxx') 
checkSpam("innocent rabbit")