document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("inputText");
  const button = document.getElementById("buttonText");

  button.addEventListener("click", function () {
    localStorage.setItem("myKey", input.value);
  });
});