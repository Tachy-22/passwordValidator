window.addEventListener("DOMContentLoaded", use);
function use() {
  var btn = document.getElementById("btn");
  btn.addEventListener("click", validate);
  function validate() {
    var password = document.getElementById("password");
    var trimmedPasword = password.value;
    var passwordVal = trimmedPasword.trim();
    var splitPassword = passwordVal.split("");
    var count = 0;
    for (var i = 0; i < passwordVal.length; i++) {
      if (isNaN(splitPassword[i]) || splitPassword[i] == " ") {
        count = count;
      } else {
        count++;
      }
    }
    var count2 = 0;
    for (var i = 0; i < 7; i++) {
      var character = chars[i];
      if (passwordVal.includes(character) == false) {
        count2 = count2;
      } else {
        count2 = count2 + 1;
      }
    }
    if (count2 >= 2 && count >= 2 && passwordVal.length >= 7) {
      document.getElementById("para").innerHTML = "Strong";
    } else {
      document.getElementById("para").innerHTML = "Weak";
    }
  }
}
