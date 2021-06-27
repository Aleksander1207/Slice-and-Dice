let imageIndex = 1;
function carousel(){
    let images = document.getElementsByClassName('image-container');
    let dots = document.getElementsByClassName('dot');
    for(let i=0; i < images.length; i++){
        images[i].style.display = 'none';
    }
    for(let i=0; i < images.length; i++){
        dots[i].style.background = 'rgba(117,94,110,255)';
    }
    imageIndex++;
    if(imageIndex > images.length){
        imageIndex = 1;
    }
    images[imageIndex-1].style.display = 'block';
    dots[imageIndex - 1].style.background = 'white';
    setTimeout(carousel, 2000);
}

function toggleNavigation(){
    let title = document.getElementById('title');
    let paragraph = document.getElementById('main-p');
    let navIcon = document.getElementById('nav-icon');
    let list = document.getElementsByTagName('ul');
    if(list[0].style.display == 'none'){
        list[0].style.display = 'block';
        title.style.color = 'transparent';
        paragraph.style.color = 'transparent';
        title.style.textShadow = '0 0 8px #000';
        paragraph.style.textShadow = '0 0 8px #000';
    }
    else{
        list[0].style.display = 'none';
        title.style.color = 'white';
        paragraph.style.color = 'white';
        title.style.textShadow = 'none';
        paragraph.style.textShadow = 'none';
    }
}