document.addEventListener("DOMContentLoaded",()=>{
    fetchData()
})
function fetchData(){
    fetch('https://fakestoreapi.com/products')
    .then((response)=>response.json())
    .then((data)=>{
        data.forEach(element => {
            console.log(element)
            productName(element)
        });
    });
}


function productName(product){
    let image=document.createElement("img")
    // image.data-bs-target=("#exampleModal")
    // image.data-bs-toggle="#exampleModal"
    let div=document.createElement("div")
    div.className="card"
    div.append(image)
    image.src=product.image
    let cardholder=document.getElementById("cardwar")
    cardholder.append(div)
    image.addEventListener('click',()=>{
        document.getElementById("button").click()
        createmodal(product)
    })

    
    
}
function createmodal(item){
    let title=document.getElementById('title')
    title.innerHTML=item.title
  
}


// const api = '05e44a0f-61dd-47af-8649-89903b405316'
// const url = 'https://api.thecatapi.com/v1/images/search?limit=20&page=20&order=Desc'

// document.addEventListener('DOMContentLoaded', () => {
//     getCats()
// })

// function getCats(){
//     fetch(url, {headers: {
//         'apikey': 'key'
//     }}).then(res => res.json())
//     .then(cats => singleCat(cats))
// }


// function singleCat(cats){
//     let data=""
//     cats.forEach(cat => {
//         data+=`
//         <div class="card my-3" style="width: 18rem;">
//         <img src=${cat.url} alt="image">
//         </div>
//         `

//         console.log(cat)
        
//     });
//     document.getElementById("cardwar").innerHTML=data
// } 
