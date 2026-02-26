let casas = document.querySelectorAll(".casa");
console.log(casas);
let content = "X";
let resp = document.getElementById("resp");
let check = true;

for (let i = 0; i < 9; i++) {
  casas[i].addEventListener("click", () => {
    if (check) {
      casas[i].textContent = content;
    }

    content = content === "X" ? "O" : "X";

    if (
      casas[0].textContent != "" &&
      casas[0].textContent == casas[1].textContent &&
      casas[1].textContent == casas[2].textContent
    ) {
      check = false;
      resp.textContent = `${casas[0].textContent} venceu!`;
    } else {
      if (
        casas[3].textContent != "" &&
        casas[3].textContent == casas[4].textContent &&
        casas[4].textContent == casas[5].textContent
      ) {
        check = false;
        resp.textContent = `${casas[3].textContent} venceu!`;
      } else {
        if (
          casas[6].textContent != "" &&
          casas[6].textContent == casas[7].textContent &&
          casas[7].textContent == casas[8].textContent
        ) {
          check = false;
          resp.textContent = `${casas[6].textContent} venceu!`;
        } else {
          if (
            casas[0].textContent != "" &&
            casas[0].textContent == casas[3].textContent &&
            casas[3].textContent == casas[6].textContent
          ) {
            check = false;
            resp.textContent = `${casas[0].textContent} venceu!`;
          } else {
            if (
              casas[1].textContent != "" &&
              casas[1].textContent == casas[4].textContent &&
              casas[4].textContent == casas[7].textContent
            ) {
              check = false;
              resp.textContent = `${casas[1].textContent} venceu!`;
            } else {
              if (
                casas[2].textContent != "" &&
                casas[2].textContent == casas[5].textContent &&
                casas[5].textContent == casas[8].textContent
              ) {
                check = false;
                resp.textContent = `${casas[2].textContent} venceu!`;
              } else {
                if (
                  casas[0].textContent != "" &&
                  casas[0].textContent == casas[4].textContent &&
                  casas[4].textContent == casas[8].textContent
                ) {
                  check = false;
                  resp.textContent = `${casas[0].textContent} venceu!`;
                } else {
                  if (
                    casas[2].textContent != "" &&
                    casas[2].textContent == casas[4].textContent &&
                    casas[4].textContent == casas[6].textContent
                  ) {
                    check = false;
                    resp.textContent = `${casas[2].textContent} venceu!`;
                  } else {
                    if (
                      casas[0].textContent != "" &&
                      casas[1].textContent != "" &&
                      casas[2].textContent != "" &&
                      casas[3].textContent != "" &&
                      casas[4].textContent != "" &&
                      casas[5].textContent != "" &&
                      casas[6].textContent != "" &&
                      casas[7].textContent != "" &&
                      casas[8].textContent != ""
                    ) {
                      check = false;
                      resp.textContent = "Deu velha!";
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
}
const btn = document.getElementById("btn");
for (let i = 0; i < 9; i++) {
  btn.addEventListener("click", () => {
    casas[i].textContent = "";

    content = "X";
    resp.textContent = "";
    check = true;
  });
}
