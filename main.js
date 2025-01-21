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
    let bt1Container = document.getElementById("bt1-container");
    let bt1 = document.getElementById("bt1");
    let projects = document.getElementById("projects");

    if (bt1 && projects) {
        bt1Container.addEventListener("click", () => {
            projects.classList.toggle("hidden");
            bt1.classList.toggle("rotate-90");
        });
    } else {
        console.error("Element mit ID 'bt1' oder 'projects' wurde nicht gefunden.");
    }

    let bt2Container = document.getElementById("bt2-container");
    let bt2 = document.getElementById("bt2");
    let aboutMe = document.getElementById("about");

    if (bt2 && aboutMe) {
        bt2Container.addEventListener("click", () => {
            aboutMe.classList.toggle("hidden");
            bt2.classList.toggle("rotate-90");
        });
    } else {
        console.error("Element mit ID 'bt1' oder 'projects' wurde nicht gefunden.");
    }

    let bt3Container = document.getElementById("bt3-container");
    let bt3 = document.getElementById("bt3");
    let experience = document.getElementById("experience");

    if (bt3 && experience) {
        bt3Container.addEventListener("click", () => {
            experience.classList.toggle("hidden");
            bt3.classList.toggle("rotate-90");
        });
    } else {
        console.error("Element mit ID 'bt1' oder 'projects' wurde nicht gefunden.");
    }
});