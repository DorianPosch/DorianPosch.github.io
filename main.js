//LinkIcons Event
document.addEventListener("DOMContentLoaded", () => {
    let linksHeadline = document.getElementById("links-headline");
    let icons = document.getElementsByTagName("a");
    if (icons) {
        linksHeadline.addEventListener("mouseover", () => {
            for(let icon of icons) {
                icon.classList.add("drop-shadow-lg");
                icon.classList.add("drop-shadow-green-950");
            }
        });
        linksHeadline.addEventListener("mouseout", () => {
            for(let icon of icons) {
                icon.classList.remove("drop-shadow-lg");
            }
        })
    } else {
        console.error("Element mit ID 'link-icons' wurde nicht gefunden.");
    }

//Navbar Events
    const toggleSection = (button, section) => {
        if (section.classList.contains("hidden-own")) {
            section.classList.remove("hidden-own");
            section.classList.add("visible-own");
            button.classList.add("rotate-own");
        } else {
            section.classList.remove("visible-own");
            section.classList.add("hidden-own");
            button.classList.remove("rotate-own");
        }
    };

    let bt1Container = document.getElementById("bt1-container");
    let bt1 = document.getElementById("bt1");
    let projects = document.getElementById("projects");

    if (bt1 && projects) {
        bt1Container.addEventListener("click", () => toggleSection(bt1, projects));
    }

    let bt2Container = document.getElementById("bt2-container");
    let bt2 = document.getElementById("bt2");
    let aboutMe = document.getElementById("about");

    if (bt2 && aboutMe) {
        bt2Container.addEventListener("click", () => toggleSection(bt2, aboutMe));
    }

    let bt3Container = document.getElementById("bt3-container");
    let bt3 = document.getElementById("bt3");
    let experience = document.getElementById("experience");

    if (bt3 && experience) {
        bt3Container.addEventListener("click", () => toggleSection(bt3, experience));
    }


});