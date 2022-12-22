var r = document.querySelector(':root');

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if(currentTheme=='dark'){
    darkMode()
}

function darkMode(){
    r.style.setProperty('--bgc', '#000000');
    r.style.setProperty('--textcolordark', '#FED3C2');
    r.style.setProperty('--bgtrans', 'rgba(128, 128, 128, 0.5)');
    localStorage.setItem('theme', 'dark'); 
}

function lightMode(){
    r.style.setProperty('--bgc', '#ffffff');
    r.style.setProperty('--textcolordark', '#012c3d');
    r.style.setProperty('--bgtrans', 'rgba(224, 224, 224, 0.5)');
    localStorage.setItem('theme', 'light'); 
}

const f = ()=>{
    console.log("test");
}

export default f;