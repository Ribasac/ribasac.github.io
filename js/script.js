navExpand = 0;


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

