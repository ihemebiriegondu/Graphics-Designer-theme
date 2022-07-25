const nav1 = document.querySelector(".nav-item1");

let displayNav1Menu = () => {
    const nav1P = document.querySelector(".nav-item1 p");
    nav1.classList.remove("closenewbg");
    nav1.classList.add("opennewbg");
    myTime = setTimeout(
        function showP() {
            nav1P.classList.remove("invisible");
            nav1P.classList.add("visible");
        }, 500
    )
};

let hideNav1Menu = () => {
    const nav1P = document.querySelector(".nav-item1 p");
    nav1.classList.remove("opennewbg");
    nav1.classList.add("closenewbg");
    nav1P.classList.add("invisible");
    nav1P.classList.remove("visible");
    if (nav1.classList.contains("active")) {
        nav1.classList.remove("opennewbg");
        nav1.classList.add("closenewbg");
        nav1P.classList.add("invisible");
        nav1P.classList.remove("visible");
    }
    clearTimeout(myTime);
};

const nav2 = document.querySelector(".nav-item2");

let displayNav2Menu = () => {
    const nav2P = document.querySelector(".nav-item2 p");
    nav2.classList.remove("closenewbg");
    nav2.classList.add("opennewbg");
    myTime2 = setTimeout(
        function showP2() {
            nav2P.classList.remove("invisible");
            nav2P.classList.add("visible");
        }, 500
    )
};

let hideNav2Menu = () => {
    const nav2P = document.querySelector(".nav-item2 p");
    nav2.classList.remove("opennewbg");
    nav2.classList.add("closenewbg");
    nav2P.classList.add("invisible");
    nav2P.classList.remove("visible");
    clearTimeout(myTime2)
};

const nav3 = document.querySelector(".nav-item3");

let displayNav3Menu = () => {
    const nav3P = document.querySelector(".nav-item3 p");
    nav3.classList.remove("closenewbg");
    nav3.classList.add("opennewbg");
    myTime3 = setTimeout(
        function showP3() {
            nav3P.classList.remove("invisible");
            nav3P.classList.add("visible");
        }, 500
    )
};

let hideNav3Menu = () => {
    const nav3P = document.querySelector(".nav-item3 p");
    nav3.classList.remove("opennewbg");
    nav3.classList.add("closenewbg");
    nav3P.classList.add("invisible");
    nav3P.classList.remove("visible");
    clearTimeout(myTime3)
};

const nav4 = document.querySelector(".nav-item4");

let displayNav4Menu = () => {
    const nav4P = document.querySelector(".nav-item4 p");
    nav4.classList.remove("closenewbg");
    nav4.classList.add("opennewbg");
    myTime4 = setTimeout(
        function showP4() {
            nav4P.classList.remove("invisible");
            nav4P.classList.add("visible");
        }, 500
    )
};

let hideNav4Menu = () => {
    const nav4P = document.querySelector(".nav-item4 p");
    nav4.classList.remove("opennewbg");
    nav4.classList.add("closenewbg");
    nav4P.classList.add("invisible");
    nav4P.classList.remove("visible");
    clearTimeout(myTime4)
};

const nav5 = document.querySelector(".nav-item5");

let displayNav5Menu = () => {
    const nav5P = document.querySelector(".nav-item5 p");
    nav5.classList.remove("closenewbg");
    nav5.classList.add("opennewbg");
    myTime5 = setTimeout(
        function showP5() {
            nav5P.classList.remove("invisible");
            nav5P.classList.add("visible");
        }, 500
    )
};

let hideNav5Menu = () => {
    const nav5P = document.querySelector(".nav-item5 p");
    nav5.classList.remove("opennewbg");
    nav5.classList.add("closenewbg");
    nav5P.classList.add("invisible");
    nav5P.classList.remove("visible");
    clearTimeout(myTime5)
};