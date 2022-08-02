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
//accordion

const mainAccordions = document.querySelectorAll(".main-accordion");
const accordionHeaders = document.querySelectorAll(".my-accordion-header");


let showAccordionDetails = (event, mainAccordion) => {

    document.getElementById(mainAccordion).classList.toggle("hide")
    event.currentTarget.classList.toggle("deactivate")
}


// dark mode
const body = document.querySelector("body");
const modeContainer = document.querySelector(".mode-container");
const modeContainerI = document.querySelector(".mode-container i");
const navs = document.querySelectorAll(".nav-container .nav-items i");
const footerNav = document.querySelectorAll("footer i");
const moreButtons = document.querySelectorAll(".more a");
const shadowImg = document.querySelector(".shadow-img");
const fixedBottom = document.querySelector(".fixed-bottom");
const cards = document.querySelectorAll(".card");
const h1a = document.querySelector("#aboutpage h1")
const h1c = document.querySelector("#contactpage h1")
const h1b = document.querySelector("#blogpage h1")
const h1p = document.querySelector("#portfoliopage h1")
const portfolioTabs = document.querySelectorAll("#portfoliopage .nav-link")
const diffColors = document.querySelectorAll("#aboutpage span")
const contactDiffcolors = document.querySelectorAll("#contactpage span")
const diffSpans = document.querySelectorAll(".diffspan-new");
const bgSmall = document.querySelectorAll(".bg-small");
const modalContent = document.querySelectorAll(".modal-content")
const blogCards = document.querySelectorAll("#blogpage .card")
const blogModal = document.querySelectorAll("#blogpage .modal")
const contactAs = document.querySelectorAll("#contactpage a")
const contactAis = document.querySelectorAll("#contactpage a i")
const navIimg = document.querySelector(".nav-i-img");
const inputs = document.querySelectorAll("input");


let changeModeFunction = () => {
    if (modeContainerI.classList.contains("bi-brightness-low-fill")) {
        modeContainerI.classList.remove("bi-brightness-low-fill")
        modeContainerI.classList.add("bi-moon")
        modeContainerI.classList.add("text-light")
        modeContainerI.classList.remove("fs-3")
        modeContainerI.classList.add("fs-4")
        h1a.classList.add("modeh1")
        h1c.classList.add("modeh1")
        h1b.classList.add("modeh1")
        h1p.classList.add("modeh1")

        navs.forEach(nav => {
            nav.style.color = "rgb(3, 16, 26)"
        });
        document.querySelector(".mode-container div").classList.add("newmode-container")
        body.classList.add("modebody");

        moreButtons.forEach(moreButton => {
            moreButton.classList.remove("text-white")
            moreButton.classList.add("text-dark")
        });

        shadowImg.classList.remove("shadow");
        fixedBottom.style.backgroundColor = "white";

        cards.forEach(card => {
            card.classList.remove("bg-dark");
            card.classList.add("bg-white")
            card.classList.remove("border-light")
        })
        footerNav.forEach(nav => {
            nav.style.color = "rgb(3, 16, 26)"
        })

        portfolioTabs.forEach(portfolioTab => {
            portfolioTab.classList.remove("text-white")
            portfolioTab.classList.add("text-dark")
        })

        diffColors.forEach(diffColor => {
            diffColor.style.color = "#928e8e"
        });
        contactDiffcolors.forEach(diffColor => {
            diffColor.style.color = "#928e8e"
        });

        diffSpans.forEach(diffspan => {
            diffspan.classList.remove("diffspan");
            diffspan.classList.add("mode-diffspans");
        })

        bgSmall.forEach(bgSmall => {
            bgSmall.style.backgroundColor = "rgb(248, 245, 245)"
            bgSmall.style.color = "gray"
        })

        modalContent.forEach(modalContent => {
            modalContent.classList.add("newmodal-content");
        });

        blogCards.forEach(blogCard => {
            blogCard.classList.remove("first-card")
            blogCard.classList.add("newcard")
        })

        blogModal.forEach(blogModal => {
            blogModal.classList.add("newmodal")
        })

        contactAs.forEach(contactA => {
            contactA.classList.remove("text-white")
            contactA.classList.add("text-dark");
        })

        contactAis.forEach(contactAi => {
            contactAi.classList.remove("text-white")
            contactAi.classList.add("text-dark");
        })

        navIimg.src = "./images/facebook-logo (1).png"
        navIimg.style.width = "15px"

        inputs.forEach(input => {
            input.classList.add("newinputs")
        })

        document.querySelector("textarea").classList.add("newtextarea")

        document.querySelector("form button").classList.remove("text-white")
        document.querySelector("form button").classList.add("text-dark");

        document.getElementById("adapt").src = "././images/Skills Logo/icons8-adaptable-64.png"
        document.getElementById("creative").src = "././images/Skills Logo/icons8-brainstorm-skill-80.png"
        document.getElementById("adobe").src = "././images/Skills Logo/icons8-adobe-creative-cloud-50.png"
        document.getElementById("photo").src = "././images/Skills Logo/icons8-photography-64.png"
        document.getElementById("brand").src = "././images/Skills Logo/icons8-branding-64.png"
        document.getElementById("it").src = "././images/Skills Logo/icons8-web-design-64.png"
        document.getElementById("type").src = "././images/Skills Logo/icons8-typography-50.png"
        document.getElementById("communicate").src = "././images/Skills Logo/icons8-communication-50.png" 

    } else {
        modeContainerI.classList.add("bi-brightness-low-fill")
        modeContainerI.classList.remove("bi-moon")
        modeContainerI.classList.remove("text-light")
        modeContainerI.classList.add("fs-3")
        modeContainerI.classList.remove("fs-4")
        h1a.classList.remove("modeh1")
        h1c.classList.remove("modeh1")
        h1b.classList.remove("modeh1")
        h1p.classList.remove("modeh1")

        navs.forEach(nav => {
            nav.style.color = "white"
        });
        document.querySelector(".mode-container div").classList.remove("newmode-container")
        body.classList.remove("modebody")
        moreButtons.forEach(moreButton => {
            moreButton.classList.add("text-white")
            moreButton.classList.remove("text-dark")
        });

        shadowImg.classList.add("shadow");
        fixedBottom.style.backgroundColor = "rgb(60, 59, 59)"

        cards.forEach(card => {
            card.classList.add("bg-dark");
            card.classList.remove("bg-white")
            card.classList.add("border-light")
        })
        footerNav.forEach(nav => {
            nav.style.color = "white"
        })

        portfolioTabs.forEach(portfolioTab => {
            portfolioTab.classList.add("text-white")
            portfolioTab.classList.remove("text-dark")
        })

        diffColors.forEach(diffColor => {
            diffColor.style.color = "rgba(255, 255, 255, 0.737)"
        });

        contactDiffcolors.forEach(diffColor => {
            diffColor.style.color = "rgba(255, 255, 255, 0.737)"
        });

        diffSpans.forEach(diffspan => {
            diffspan.classList.add("diffspan");
            diffspan.classList.remove("mode-diffspans");
        })

        bgSmall.forEach(bgSmall => {
            bgSmall.style.color = "rgba(255, 255, 255, 0.737)"
            bgSmall.style.backgroundColor = "rgba(54, 53, 53, 0.399)"
        })

        modalContent.forEach(modalContent => {
            modalContent.classList.remove("newmodal-content");
        });

        blogCards.forEach(blogCard => {
            blogCard.classList.add("first-card")
            blogCard.classList.remove("newcard")
        })

        blogModal.forEach(blogModal => {
            blogModal.classList.remove("newmodal")
        })

        contactAs.forEach(contactA => {
            contactA.classList.remove("text-dark")
            contactA.classList.add("text-white");
        })

        contactAis.forEach(contactAi => {
            contactAi.classList.add("text-white")
            contactAi.classList.remove("text-dark");
        })

        navIimg.src = "./images/kindpng_3876134.png"
        navIimg.style.width = "7px"
        
        inputs.forEach(input => {
            input.classList.remove("newinputs")
        })

        document.querySelector("textarea").classList.remove("newtextarea")

        document.querySelector("form button").classList.add("text-white")
        document.querySelector("form button").classList.remove("text-dark")

        document.getElementById("adapt").src = "././images/Skills Logo/icons8-adaptable-64 (1).png"
        document.getElementById("creative").src = "././images/Skills Logo/icons8-brainstorm-skill-80 (1).png"
        document.getElementById("adobe").src = "././images/Skills Logo/icons8-adobe-creative-cloud-50 (1).png"
        document.getElementById("photo").src = "././images/Skills Logo/icons8-photography-64 (1).png"
        document.getElementById("brand").src = "././images/Skills Logo/icons8-branding-64 (1).png"
        document.getElementById("it").src = "././images/Skills Logo/icons8-web-design-64 (1).png"
        document.getElementById("type").src = "././images/Skills Logo/icons8-typography-50 (1).png"
        document.getElementById("communicate").src = "././images/Skills Logo/icons8-communication-50 (1).png" 

    }
};


modeContainer.addEventListener("click", changeModeFunction);


