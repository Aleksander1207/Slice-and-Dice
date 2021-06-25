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
    let navIcon = document.getElementById('nav-icon');
    let list = document.getElementsByTagName('ul');
    if(list[0].style.display == 'none'){
        list[0].style.display = 'block';
    }
    else{
        list[0].style.display = 'none';
    }
}