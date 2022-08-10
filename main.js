const imgs = document.querySelector("#imgs")
const leftbtn = document.querySelector("#left")
const rightbtn = document.querySelector("#right")
const img = document.querySelectorAll('#imgs img')

let idx = 0;

function changeImage(){
    if(idx > img.length - 1){
        idx = 0;
    }
    else if (idx < 0){
        idx = img.length - 1;
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
}

rightbtn.addEventListener("click", function change(){
    idx++;
    resetInterval()

    changeImage()
} );

leftbtn.addEventListener("click", function change(){
    idx--;
    resetInterval()
    changeImage()
} );

let interval = setInterval(run,4000)

function run(){
    idx++;
    changeImage();
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run,4000)
}