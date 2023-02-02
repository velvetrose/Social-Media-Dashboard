let colorSwitch = document.getElementById('switch');

let storeTheme = (theme) =>{
    localStorage.setItem("Dark Mode", theme);
}

colorSwitch.addEventListener("click", ()=>{
    storeTheme(colorSwitch.checked);
});

let retrieveTheme = () =>{
    let activeTheme = localStorage.getItem("Dark Mode");
    if(activeTheme == 'true'){
        colorSwitch.checked = true;
    }
}

document.onload=retrieveTheme();