const greeting = document.querySelector("#greeting");

const url = window.location.href;
const name = new URL(url).searchParams.get("name");

const localstorage_name = localStorage.getItem("name");

if (name === null && localstorage_name === null) {
  window.location = "login.html";
} else if (localstorage_name === null && name != null) {
  localStorage.setItem("name", name);
  greeting.innerHTML = `Hello, ${name}!`;
} else if (localstorage_name != null && name === null) {
  greeting.innerHTML = `Hello, ${localstorage_name}!`;
} else if (localstorage_name != null && name != null) {
  localStorage.removeItem("name");
  localStorage.setItem("name", name);
  greeting.innerHTML = `Hello, ${name}!`;
}
