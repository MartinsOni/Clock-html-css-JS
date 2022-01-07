const hoursElement = document.getElementById("clock_hour")
const minutesElement = document.getElementById("clock_minute")
const secondsElement = document.getElementById("clock_second")
const textElement = document.getElementById("text")

let displayDate = true

function animation() {
    const date = new Date()

    const day = date.getDate()
    const apm = date.getHours() >= 12 ? "PM" : "AM"
    const hour = date.getHours() + date.getMinutes() / 60
    const minute = date.getMinutes() + date.getSeconds() / 60
    const second = date.getSeconds() + date.getMilliseconds() / 1000

    textElement.textContent = displayDate ? apm : day
    hoursElement.setAttribute("transform", `rotate (${(360 / 12) * hour})`)
    minutesElement.setAttribute("transform", `rotate (${(360 / 60) * minute})`)
    secondsElement.setAttribute("transform", `rotate (${(360 / 60) * second})`)

    requestAnimationFrame(animation)
}

requestAnimationFrame(animation)

textElement.addEventListener("click", () => {
    displayDate = !displayDate
})