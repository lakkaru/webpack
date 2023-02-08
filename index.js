let toggelButton = document.querySelector("#myButton");
let desPara = document.querySelector("#myPara");

const curState = () => desPara.style.display;

toggelButton.onclick = toggle;

function toggle() {
    if (curState()=="none") {   
        show();
        toggelButton.innerHTML="Hide Description"
    } else {
        hide()
        toggelButton.innerHTML="Show Description"
    }
}

function show() {
  desPara.style.display = "block";
}
function hide() {
  desPara.style.display = "none";
}
