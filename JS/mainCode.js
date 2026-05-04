const urlarr = [
                "CSS/theme1/stone.css", "../CSS/theme1/stone.css" , "../../CSS/theme1/stone.css",
                "CSS/theme2/leaf.css", "../CSS/theme2/leaf.css" , "../../CSS/theme2/leaf.css" 
               ];
let themebtn

window.addEventListener('DOMContentLoaded', () => {
    themebtn = document.getElementById('themeBTN');

    if(localStorage.getItem('themeName') == 'stone'){
        themebtn.innerHTML="Theme 2: leaf";
    }else{
        themebtn.innerHTML="Theme 1: stones";
    }
});


if(localStorage.getItem('themeName') == 'leaf'){
    document.querySelector('head link[rel="stylesheet"]').setAttribute("href", urlarr[urlIndex+3]);
}else{
    document.querySelector('head link[rel="stylesheet"]').setAttribute("href", urlarr[urlIndex]);
}

function changeTheme(urlIndex){
    if(localStorage.getItem('themeName') == 'stone'){
        document.querySelector('head link[rel="stylesheet"]').setAttribute("href", urlarr[urlIndex+3]);
        themebtn.innerHTML="Theme 2: leaf";
        localStorage.setItem('themeName', 'leaf');
    }else{
        document.querySelector('head link[rel="stylesheet"]').setAttribute("href", urlarr[urlIndex]);
        themebtn.innerHTML="Theme 1: stones";
        localStorage.setItem('themeName', 'stone');
    }
}

