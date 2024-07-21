document.addEventListener("DOMContentLoaded", function(){
  const display = document.querySelector(".display");
  const buttons = document.querySelectorAll("button");
  const special = ["+", "-", "*", "/", "%", "=", "^","√"];
  let output = "";

  function calculate(btnVal) {
    display.focus();
    if (btnVal === "=" && output !== "") {
      if(special.includes(output[output.length-1])){
        output="NaN";
        display.value = output;
        return;
      }
      else if (output.includes("√")) {
        output = Math.sqrt(eval(output.substring(1)));
      } else if (output.includes("^")) {
        const parts = output.split("^");
        if (parts.length === 2) {
          output = Math.pow(eval(parts[0]), eval(parts[1]));
        }
      } else {
        output = eval(output.replace("%", "/100"));
      }
    } else if (btnVal === "AC") {
      output = "";
    } else if (btnVal === "CE") {
      output = output.toString().slice(0, -1);
    } else {
      if (output === "" && btnVal !== "+" && btnVal !== "-" && btnVal !== "√" && special.includes(btnVal)) return;
      if (special.includes(output[output.length-1]) && special.includes(btnVal)) {
        output=output.toString.slice(0,-1);
      }
      
      output += btnVal;
    }
    display.value = output;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      calculate(e.target.dataset.value);
    });
  });
});
