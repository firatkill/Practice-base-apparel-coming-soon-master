const button = document.getElementById("buton");
const input = document.getElementById("input");
buton.addEventListener("click", control);

function control() {
  const email = input.value;
  const atpos = email.indexOf("@");
  const dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= email.length) {
    show();
  } else {
    input.value = "";
    error.remove();
  }
}
function show() {
  const alert = document.createElement("p");
  const error = document.createElement("img");
  alert.textContent = "*Lütfen geçerli bir E-mail Giriniz.";
  alert.id = "alert";
  error.src = "./images/icon-error.svg";
  error.id = "error";
  document.getElementById("d").appendChild(alert);
  document.getElementById("d").appendChild(error);
  setTimeout(() => {
    alert.remove();
  }, 2000);
}
