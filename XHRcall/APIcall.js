// fetch using XMLHttpRequest
const postResponses=document.querySelector(".responses");
function fetchUsingXHR(){
    const xhr=new XMLHttpRequest();
    xhr.open('GET','https://fakestoreapi.com/products');
    xhr.responseType='json';
    xhr.send();
    xhr.onload=()=>{
        if(xhr.status===200){
            console.log(xhr);
            displayResults(xhr.response);
        } else{
            console.log("Invalid request")
        }
    }
}

function displayResults(responses){
    postResponses.innerHTML= responses.map((response)=>`
    <div class="individual_items">
        <div class="title">${response.title}</div>
        <div class="category">${response.category}</div>
    </div>
    `

    ).join(" ");
}




fetchUsingXHR();