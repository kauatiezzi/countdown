function updateTimer() {
  const future = Date.parse("Dec 12, 2023 00:00:00")
  const now = new Date()
  const diff = future - now

  days = Math.floor(diff / (1000 * 60 * 60 * 24))
  hours = Math.floor(diff / (1000 * 60 * 60))
  mins = Math.floor(diff / (1000 * 60))
  secs = Math.floor(diff / 1000)

  d = days
  h = hours - days * 24
  m = mins - hours * 60
  s = secs - mins * 60

  document.getElementById("countdown").innerHTML =
    "<div>" +
    d + 
    "<span>Dias</span></div>" +
    "<div>" +
    h +
    "<span>Horas</span></div>" +
    "<div>" +
    m +
    "<span>Minutos</span></div>" +
    "<div>" +
    s +
    "<span>Segundos</span></div>"
}

setInterval("updateTimer()", 1000)
