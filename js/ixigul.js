let tor = true;

let mone = 0;
let btn = document.querySelectorAll(".btn");

btn.forEach((b) => {
  b.addEventListener("click", btnClic);
});

function btnClic() {
  if (this.textContent !== "") return;
  mone++;

  if (tor) this.textContent = "x";
  else this.textContent = "o";

  let ok = checWin();
  console.log(ok);
  if (ok.win) {
    let btn = document.querySelectorAll(".btn");

    btn[ok.pos[0]].style.color = "red";
    btn[ok.pos[1]].style.color = "red";
    btn[ok.pos[2]].style.color = "red";
    let current = this.textContent;
    
    setTimeout(() => {
      alert(current + "is win");
      reset();
    }, 200);
  } else if (ok.isTie) {
    setTimeout(() => {
      alert("is a tie");
      reset();
    }, 100);
  }
  tor = !tor;
  mone = 0;
}

function reset() {
  let btn = document.querySelectorAll(".btn");
  tor = !tor;
  mone = 0;
  btn.forEach((b) => {
    b.textContent = "";
    b.style.color = "";
  });
}

function checWin() {
  let btn = document.querySelectorAll(".btn");
  let ok = { win: false, isTie: false, pos: [] };

  if (
    btn[0].textContent === btn[1].textContent &&
    btn[1].textContent === btn[2].textContent &&
    btn[2].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [0, 1, 2] };
    console.log(ok);
  }
  if (
    btn[3].textContent === btn[4].textContent &&
    btn[4].textContent === btn[5].textContent &&
    btn[5].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [3, 4, 5] };
    console.log(ok);
  }
  if (
    btn[6].textContent === btn[7].textContent &&
    btn[7].textContent === btn[8].textContent &&
    btn[8].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [6, 7, 8] };
    console.log(ok);
  }
  if (
    btn[0].textContent === btn[3].textContent &&
    btn[3].textContent === btn[6].textContent &&
    btn[6].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [0, 3, 6] };
    console.log(ok);
  }
  if (
    btn[1].textContent === btn[4].textContent &&
    btn[4].textContent === btn[7].textContent &&
    btn[7].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [1, 4, 7] };
    console.log(ok);
  }
  if (
    btn[2].textContent === btn[5].textContent &&
    btn[5].textContent === btn[8].textContent &&
    btn[8].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [2, 5, 8] };
    console.log(ok);
  }
  if (
    btn[0].textContent === btn[4].textContent &&
    btn[4].textContent === btn[8].textContent &&
    btn[8].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [0, 4, 8] };
    console.log(ok);
  }
  if (
    btn[2].textContent === btn[4].textContent &&
    btn[4].textContent === btn[6].textContent &&
    btn[6].textContent !== ""
  ) {
    ok = { win: true, isTie: false, pos: [2, 4, 6] };
    console.log(ok);
  } else if (mone === 9) {
    ok.isTie = true;
  }
  return ok;
}
