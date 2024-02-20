const card=document.querySelector(".card");
function fetchUsingFetchMethod(){

    url="https://fakestoreapi.com/products";

    const fetchRequest=fetch(url);//getting promise
    fetchRequest.then((response)=>response.json())
    .then((result)=>displayResult(result))
    .catch(()=>console.log("error"))
}
function displayResult(res){
    console.log(res);
    res.map((individualResult)=>{

        console.log(individualResult.id),
        console.log(individualResult.title)
    }
    )
    // card.innerHTML=res.map((individualResult)=>{`
    // <div>${individualResult.id}</div>
    // <div>${individualResult.title}</div>
    // `
    //     }
    //     ).join(" ")
}
fetchUsingFetchMethod();

