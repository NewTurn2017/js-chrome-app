const clock = document.querySelector('h6#clock')

function padding(date) {
  return date.toString().padStart(2, '0')
}

function dDays() {
  const theDateTime = new Date('2022-12-25')
  const todayTime = new Date()
  const diff = theDateTime - todayTime

  const diffDay = Math.floor(diff / (1000 * 60 * 60 * 24))
  const diffHour = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const diffMin = Math.floor((diff / (1000 * 60)) % 60)
  const diffSec = Math.floor((diff / 1000) % 60)

  clock.innerText = `${diffDay}일 ${padding(diffHour)}시간${padding(
    diffMin
  )}분${padding(diffSec)}초 남았습니다.`
}
dDays()
setInterval(dDays, 1000)
