const play_audio = (key, audio) => {
  if (key) {
    key.classList.add("playing")
    audio.currentTime = 0
    audio.play()
  }
}
const playaudio = e => {
  const pressedKey = e.key.toUpperCase()
  const key = document.querySelector(`.key[data-key="${pressedKey}"]`)
  const audio = document.querySelector(`audio[data-key="${pressedKey}"]`)
  play_audio(key, audio)
}

const onAudioComplete = e => {
  if (!e.propertyName == "transistion") {
    return
  }
  e.target.classList.remove("playing")
}
const onTouch = e => {
  const touchedKey = e.target
  const touchedKeyValue = e.target.attributes.getNamedItem("data-key").value
  const audio = document.querySelector(`audio[data-key="${touchedKeyValue}"]`)
  play_audio(touchedKey, audio)
}
const keys = Array.from(document.querySelectorAll(".key"))
keys.forEach(key => key.addEventListener("click", onTouch))
keys.forEach(key => key.addEventListener("transitionend", onAudioComplete))
window.addEventListener("keydown", playaudio)
