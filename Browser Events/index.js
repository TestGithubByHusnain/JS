// CLICK event
document.getElementById("clickBtn").addEventListener("click", () => {
  console.log("Button clicked!");
});

// DOUBLE CLICK event
document.getElementById("dblClickBtn").addEventListener("dblclick", () => {
  console.log("Button double-clicked!");
});

// MOUSEOVER and MOUSEOUT
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  console.log("Mouse entered the box.");
});
hoverBox.addEventListener("mouseout", () => {
  console.log("Mouse left the box.");
});

// KEYPRESS events
document.addEventListener("keydown", (e) => {
  console.log("Key down:", e.key);
});

document.addEventListener("keyup", (e) => {
  console.log("Key up:", e.key);
});

// FORM SUBMIT event
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Form submitted!");
});

// INPUT CHANGE event
document.getElementById("myInput").addEventListener("change", (e) => {
  console.log("Input changed to:", e.target.value);
});

// SCROLL event
window.addEventListener("scroll", () => {
  console.log("You are scrolling!");
});

// RESIZE event
window.addEventListener("resize", () => {
  console.log("Window resized to:", window.innerWidth, "x", window.innerHeight);
});
