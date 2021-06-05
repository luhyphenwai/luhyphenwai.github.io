

document.getElementById("body").className = "fadeIn";

window.onscroll = function() {
    scrollFunction();
};
scrollFunction();
// Navbar animations
function scrollFunction(){
    
    let line = document.getElementById("line");
    let topBar = document.getElementById("topBar");
    let leftItem = document.getElementById("leftText");
    let rightBox = document.getElementById("rightBox");
    let right1 = document.getElementById("right1");
    let right2 = document.getElementById("right2");
    let right3 = document.getElementById("right3");
    if (document.getElementById("title").textContent != "Lu-Website" || document.body.scrollTop > 180|| document.documentElement.scrollTop > 180) {
        line.className = "line-min";
        topBar.className = "topbar-min";
        leftItem.className = "left-text-min";
        rightBox.className = "right-box-min";
        right1.className = "right-item-min";
        right1.style.color = "rgba(0,0,0,0)";
        right1.style.pointerEvents = "none";
        right2.className = "right-item-min";
        right2.style.color = "rgba(0,0,0,0)";
        right2.style.pointerEvents = "none";
        right3.className = "material-icons right-item-min";
    }
    else if (document.getElementById("title").textContent == "Lu-Website"){
        line.className = "line";
        topBar.className = "topbar";
        leftItem.className = "left-text";
        rightBox.className = "right-box";
        right1.className = "right-item";
        right1.style.color = "rgba(0,0,0,1)";
        right1.style.pointerEvents = "";
        right2.className = "right-item";
        right2.style.color = "rgba(0,0,0,1)";
        right2.style.pointerEvents = "";
        right3.className = "material-icons right-item";
    }

    if (document.getElementById("title").textContent != "Lu-Website"){
        line.className = "line-min";
        topBar.className = "topbar-min";
        leftItem.className = "left-text-min";
        rightBox.className = "right-box-min";
        right1.className = "right-item-min";
        right1.style.color = "rgba(0,0,0,0)";
        right1.style.pointerEvents = "none";
        right2.className = "right-item-min";
        right2.style.color = "rgba(0,0,0,0)";
        right2.style.pointerEvents = "none";
        right3.className = "material-icons right-item-min";
    }
}

function toggleMenu(){
    let menu = document.getElementById("menu");
    if (menu.className == "menu"){
    menu.className = "menu-hidden";
    } else if (menu.className == "menu-hidden"){
    menu.className = "menu";
    }
}

function fadeOut(link){
    document.getElementById("body").className = "fadeOut";
    setTimeout(function() {switchLink(link);}, 1000);
}
function switchLink(link){
    if (link.charAt(0) == "/"){
        window.location = link;
    } else {
        window.open(link);
        document.getElementById("body").className = "fadeIn";
    }

    console.log(link.charAt(0));
    
}


