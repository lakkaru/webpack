
import {toggelButton, desPara} from './dom_loader';
import {show, hide} from './functions';

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



