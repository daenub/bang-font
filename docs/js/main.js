
const ranges = document.querySelectorAll("[data-range-controlled]")

ranges.forEach(wrapper => {
  const input = wrapper.querySelector("input")
  const text = wrapper.querySelector("[data-text]")

  input.addEventListener("input", () => {
    console.log("input")
    text.style.fontVariationSettings= '"wght" ' + input.value
  })
})