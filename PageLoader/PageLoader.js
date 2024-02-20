const images=document.querySelector(".images");
const loadBtn=document.querySelector(".load-btn");
let counter=1;
async function fetchListOfProducts(getCurrentCounter){
    try{
        const response=await fetch(`https://api.slingacademy.com/v1/sample-data/photos?limit=${getCurrentCounter*5}`);
        const result=await response.json();
        // console.log(result);
        if(result && result.photos) displayProducts(result.photos); 
    } catch(error){
        console.log(error);
    }
}
function displayProducts(products){
    console.log(products);
    images.innerHTML=products.map((product)=>`
    <div class="card">
        <div>${product.url}</div>
        <div>${product.title}</div>
        <div>${product.description}</div>
    </div>
    `).join(" ")

}
fetchListOfProducts(counter);
loadBtn.addEventListener('click',()=>{
    counter += 1;
    // console.log(counter)
    fetchListOfProducts(counter)
})


