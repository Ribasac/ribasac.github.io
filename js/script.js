navExpand = 0;
var r = document.querySelector(':root');

function expandNav(){
    navCollapseElement = document.getElementsByClassName("minus")[0];
    navExpandElement = document.getElementsByClassName("plus")[0]; 
    navContainer =  document.getElementById("navCollapse"); 
    if(navExpand == 0){
        navCollapseElement.classList.remove("d-none");
        navExpandElement.classList.add("d-none");
        navExpand = 1;
    }
    else{
        navExpandElement.classList.remove("d-none");
        navCollapseElement.classList.add("d-none");
        navExpand = 0;
    }
}

function darkMode(){
    r.style.setProperty('--bgc', '#000000');
    r.style.setProperty('--textcolordark', '#FED3C2');
    r.style.setProperty('--bgtrans', 'rgba(128, 128, 128, 0.5)');
}

function lightMode(){
    r.style.setProperty('--bgc', '#ffffff');
    r.style.setProperty('--textcolordark', '#012c3d');
    r.style.setProperty('--bgtrans', 'rgba(224, 224, 224, 0.5)');
}