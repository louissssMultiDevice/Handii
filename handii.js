function showNotif() {
    document.getElementById("notif").style.display = "block";
}

function hideNotif() {
    document.getElementById("notif").style.display = "none";
}

function showMenu(menu) {
    let overlay = document.getElementById("overlay");

    
    overlay.classList.add("show");

    
    setTimeout(() => {
        
        document.getElementById('menu1').style.display = "none";
        document.getElementById('menu2').style.display = "none";
        document.getElementById('menu3').style.display = "none";

        
        document.getElementById(menu).style.display = "block";

    
        let title = document.getElementById("title");
        let description = document.getElementById("description");

        if (menu === "menu1") {
            title.innerText = "Fika Store - Minecraft & Hosting";
            description.innerText = "Layanan hosting Minecraft Bedrock & Java murah!";
        } else if (menu === "menu2") {
            title.innerText = "Fika Store - Script & Bot WhatsApp";
            description.innerText = "Layanan pembuatan bot & script WhatsApp";
        } else if (menu === "menu3") {
            title.innerText = "Fika Store - VPS & Panel";
            description.innerText = "Layanan VPS, Panel, dan domain dengan harga terbaik!";
        }

        setTimeout(() => {
            overlay.classList.remove("show");
        }, 500);
    }, 500);
}

showMenu('menu1');
