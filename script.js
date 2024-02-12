const passwordbox = document.getElementById("passwords");
const length = 10;
const upparcase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghigklmnopqrstuvwxyz";
const numbers = "0123456789";
const symblos = "~!@#$%^&*()_-?>{}[]?";
const allcharacters = upparcase + lowercase + numbers + symblos;

function createpassword() {
  let passwords = "";
  passwords += upparcase[Math.floor(Math.random() * upparcase.length)];
  passwords += lowercase[Math.floor(Math.random() * lowercase.length)];
  passwords += numbers[Math.floor(Math.random() * numbers.length)];
  passwords += symblos[Math.floor(Math.random() * symblos.length)];

  while (length > passwords.length) {
    passwords += symblos[Math.floor(Math.random() * symblos.length)];
  }
  passwordbox.value = passwords;
}
function copypassword() {
  passwordbox.select();
  document.execCommand("copy");
}
