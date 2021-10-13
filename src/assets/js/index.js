import Cursor from "./cursor";

const cursor = new Cursor(document.querySelector(".cursor"));

[...document.querySelectorAll("a, video")].forEach((el) => {
  el.addEventListener("mouseenter", () => cursor.emit("enter"));
  el.addEventListener("mouseleave", () => cursor.emit("leave"));
});
