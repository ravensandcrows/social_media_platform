const popup = document.getElementById("loginPopup");
const popup_background = document.getElementById("hero");
const login = document.getElementById("login")

const signupPopup = document.getElementById("signupPopup")
const signup = document.getElementById("signup")

//POPUP FUNCTIONS
function open_popup(){
    popup.classList.add("open_popup");
    popup_background.classList.add("popup_container");

}

function joinPopup(){
    signupPopup.classList.add("open_popup");
    popup_background.classList.add("popup_container");
}

function closeJoin(){
    signupPopup.classList.remove("open_popup");
    popup_background.classList.remove("popup_container");
}

function close_popup(){
    popup.classList.remove("open_popup");
    popup_background.classList.remove("popup_container");

}

login.addEventListener("click", ()=> {
    open_popup();
    closeJoin();
});

signup.addEventListener("click", ()=> {
    joinPopup();
    close_popup();
});