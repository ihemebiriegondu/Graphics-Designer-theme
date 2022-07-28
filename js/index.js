//nav-links hover effects

const nav1 = document.querySelector(".nav-item1");

let displayNav1Menu = () => {
    const nav1P = document.querySelector(".nav-item1 p");
    const nav1I = document.querySelector(".nav-item1 i");
    nav1.classList.remove("closenewbg");
    nav1.classList.add("opennewbg");
    nav1I.classList.remove("hide-i-bg");
    nav1I.classList.add("show-i-bg");
    myTime = setTimeout(
        function showP() {
            nav1P.classList.remove("invisible");
            nav1P.classList.add("visible");
        }, 500
    )
};

let hideNav1Menu = () => {
    const nav1P = document.querySelector(".nav-item1 p");
    const nav1I = document.querySelector(".nav-item1 i");
    nav1.classList.remove("opennewbg");
    nav1.classList.add("closenewbg");
    nav1P.classList.add("invisible");
    nav1P.classList.remove("visible");
    nav1I.classList.add("hide-i-bg");
    nav1I.classList.remove("show-i-bg");
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
    const nav2I = document.querySelector(".nav-item2 i");
    nav2.classList.remove("closenewbg");
    nav2.classList.add("opennewbg");
    nav2I.classList.remove("hide-i-bg");
    nav2I.classList.add("show-i-bg");
    myTime2 = setTimeout(
        function showP2() {
            nav2P.classList.remove("invisible");
            nav2P.classList.add("visible");
        }, 500
    )
};

let hideNav2Menu = () => {
    const nav2P = document.querySelector(".nav-item2 p");
    const nav2I = document.querySelector(".nav-item2 i");
    nav2.classList.remove("opennewbg");
    nav2.classList.add("closenewbg");
    nav2P.classList.add("invisible");
    nav2P.classList.remove("visible");
    nav2I.classList.add("hide-i-bg");
    nav2I.classList.remove("show-i-bg");
    clearTimeout(myTime2)
};

const nav3 = document.querySelector(".nav-item3");

let displayNav3Menu = () => {
    const nav3P = document.querySelector(".nav-item3 p");
    const nav3I = document.querySelector(".nav-item3 i");
    nav3.classList.remove("closenewbg");
    nav3.classList.add("opennewbg");
    nav3I.classList.remove("hide-i-bg");
    nav3I.classList.add("show-i-bg");
    myTime3 = setTimeout(
        function showP3() {
            nav3P.classList.remove("invisible");
            nav3P.classList.add("visible");
        }, 500
    )
};

let hideNav3Menu = () => {
    const nav3P = document.querySelector(".nav-item3 p");
    const nav3I = document.querySelector(".nav-item3 i");
    nav3.classList.remove("opennewbg");
    nav3.classList.add("closenewbg");
    nav3P.classList.add("invisible");
    nav3P.classList.remove("visible");
    nav3I.classList.add("hide-i-bg");
    nav3I.classList.remove("show-i-bg");
    clearTimeout(myTime3)
};

const nav4 = document.querySelector(".nav-item4");

let displayNav4Menu = () => {
    const nav4P = document.querySelector(".nav-item4 p");
    const nav4I = document.querySelector(".nav-item4 i");
    nav4.classList.remove("closenewbg");
    nav4.classList.add("opennewbg");
    nav4I.classList.remove("hide-i-bg");
    nav4I.classList.add("show-i-bg");
    myTime4 = setTimeout(
        function showP4() {
            nav4P.classList.remove("invisible");
            nav4P.classList.add("visible");
        }, 500
    )
};

let hideNav4Menu = () => {
    const nav4P = document.querySelector(".nav-item4 p");
    const nav4I = document.querySelector(".nav-item4 i");
    nav4.classList.remove("opennewbg");
    nav4.classList.add("closenewbg");
    nav4P.classList.add("invisible");
    nav4P.classList.remove("visible");
    nav4I.classList.add("hide-i-bg");
    nav4I.classList.remove("show-i-bg");
    clearTimeout(myTime4)
};

const nav5 = document.querySelector(".nav-item5");

let displayNav5Menu = () => {
    const nav5P = document.querySelector(".nav-item5 p");
    const nav5I = document.querySelector(".nav-item5 i");
    nav5.classList.remove("closenewbg");
    nav5.classList.add("opennewbg");
    nav5I.classList.remove("hide-i-bg");
    nav5I.classList.add("show-i-bg");
    myTime5 = setTimeout(
        function showP5() {
            nav5P.classList.remove("invisible");
            nav5P.classList.add("visible");
        }, 500
    )
};

let hideNav5Menu = () => {
    const nav5P = document.querySelector(".nav-item5 p");
    const nav5I = document.querySelector(".nav-item5 i");
    nav5.classList.remove("opennewbg");
    nav5.classList.add("closenewbg");
    nav5P.classList.add("invisible");
    nav5P.classList.remove("visible");
    nav5I.classList.add("hide-i-bg");
    nav5I.classList.remove("show-i-bg");
    clearTimeout(myTime5)
};


//tab contents

let showSectionBody = (evt, navName) => {
    let i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        //tabcontent[i].style.display = "none";
        tabcontent[i].classList.add("d-none");
        tabcontent[i].classList.remove("d-flex");
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(navName).style.display = "block";
    document.getElementById(navName).classList.add("d-flex");
    document.getElementById(navName).classList.remove("d-none");
    evt.currentTarget.className += " active";
}

let addBgToAbout = () => {
    aboutBgs = document.querySelectorAll(".about-bg");
    aboutBgs.forEach(aboutBg => {
        aboutBg.classList.add("active");
    });
};



//about page


//

//portfolio page
//rotate images
