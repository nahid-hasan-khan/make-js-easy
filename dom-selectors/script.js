console.log("selectors");

const nk = document.getElementsByClassName("box");
console.log(nk);
nk[2].style.backgroundColor = "red";

const bgPurple = document.getElementById("bg-purple");
bgPurple.style.backgroundColor = "purple";

const qc = document.querySelector(".box");
qc.style.backgroundColor = "green";

const qcAll = document.querySelectorAll(".box").forEach((e)   => {
  e.style.backgroundColor = "blue";
});
