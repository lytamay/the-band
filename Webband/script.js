const header = document.getElementById("header");
const mobleMenu = document.getElementsByClassName("menu")
const headerHeight = header.clientHeight
showMenu = () => {
    let isClosed = header.clientHeight === headerHeight
    if (isClosed) {
        header.style.height = "auto"
    }
    else {
        header.style.height = null
    }
}
const menuItems = document.querySelectorAll('#nav li a[href *= "#"]');
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].onclick = () => {
        header.style.height = null
    }
}

