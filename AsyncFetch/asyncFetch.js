async function fetchingApi(){
    const fetchingUrl= await fetch("https://fakestoreapi.com/products");
    const jsonObj= await fetchingUrl.json();
    displayItems(jsonObj);

}
function displayItems(jsonObj){
    jsonObj.map((individualItem)=>{
        console.log(individualItem.id),
        console.log(individualItem.title);
    })
}
fetchingApi();