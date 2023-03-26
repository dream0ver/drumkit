const playaudio = e => {
  const pressedKey = e.key.toUpperCase()
  const key = document.querySelector(`.key[data-key="${pressedKey}"]`)
  const audio = document.querySelector(`audio[data-key="${pressedKey}"]`)
  if (key) {
    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
  }
}
const onAudioComplete = e => {
  if (!e.propertyName == "transistion") {
    return
  }
  e.target.classList.remove("playing")
}
const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => key.addEventListener("transitionend", onAudioComplete))
window.addEventListener("keydown", playaudio)
