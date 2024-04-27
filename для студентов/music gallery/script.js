let closePlayer = document.querySelector('#close-player'),
    musicPlayer = document.querySelector('.music-player'),
    boxContainer = document.querySelector('.container .box-container');


closePlayer.onclick = () => {
    closePlayer.classList.toggle('fa-times');
    musicPlayer.classList.toggle('active');
    boxContainer.classList.toggle('active');
}

let boxes = document.querySelectorAll('.container .box-container .box');

boxes.forEach(box =>{
    
    box.onclick = () =>{
        let src = box.getAttribute('data-src'),
            text = box.querySelector('.content h3').innerHTML;
        closePlayer.classList.add('fa-times');
        musicPlayer.classList.add('active');
        boxContainer.classList.add('active');
        musicPlayer.querySelector('h3').innerHTML = text;
        musicPlayer.querySelector('audio').src = src;
        musicPlayer.querySelector('audio').play();
    }
});

