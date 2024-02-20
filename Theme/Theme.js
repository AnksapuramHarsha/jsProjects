const colorChangeBtn=document.querySelector(".color-change");
const body=document.querySelector('body');
colorChangeBtn.addEventListener('click',()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light');
        body.classList.add('dark');
    } else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
    if(colorChangeBtn.classList.contains('light')){
        colorChangeBtn.classList.remove('light');
        colorChangeBtn.classList.add('dark');
    } else{
        colorChangeBtn.classList.remove('dark');
        colorChangeBtn.classList.add('light');
    }
    
})
