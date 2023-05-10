const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "images/ava-no-bg.png") {
        myImage.setAttribute("src", "images/hiko.png");
    } else {
        myImage.setAttribute("src", "images/ava-no-bg.png");
    }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Chao mung ${myName} den voi HEDSPI NICHIBU`;
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Chao mung ${storedName} den voi HEDSPI NICHIBU`;
};

myButton.onclick = () => {
    setUserName();
};
