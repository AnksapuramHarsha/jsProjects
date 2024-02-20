const slides=document.querySelectorAll(".slide");
// console.log(slides);
let counter=0;
slides.forEach((slide,index)=> {
    slide.style.left=`${index*100}%`;//top
})
function prevBtn(){

    // console.log("button clicked");
    counter--;
    slideImage();
}
function nextBtn(){
    // console.log("button clicked");
   
    counter++;
    slideImage();
}
const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${counter*100}%)`//translate Y
    })
}