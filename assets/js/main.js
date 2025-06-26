const products = [
  {
    id: 0,
    image: "./assets/img/p1.png",
    title: "VS Pace Mens Trainers",
    price: 120,
    discount: 50,
  },
  {
    id: 1,
    image: "./assets/img/p2.png",
    title: "Infernus V3",
    price: 100,
    discount: 0,
  },
  {
    id: 2,
    image: "./assets/img/p3.png",
    title: "Alpha All-Purpose Gen Z",
    price: 20,
    discount: 30,
  },
  {
    id: 3,
    image: "./assets/img/p4.png",
    title: "A11 Sky",
    price: 20,
    discount: 15,
  },
  {
    id: 4,
    image: "./assets/img/p5.png",
    title: "Urban Tracks ",
    price: 100,
    discount: 0,
  },
  {
    id: 5,
    image: "./assets/img/p6.png",
    title: "Court Vision",
    price: 20,
    discount: 0,
  },
  {
    id: 6,
    image: "./assets/img/p7.png",
    title: "Classic Core 99",
    price: 20,
    discount: 15,
  },
  {
    id: 7,
    image: "./assets/img/p8.png",
    title: "Quick Pace V2",
    price: 100,
    discount: 10,
  },
  {
    id: 8,
    image: "./assets/img/p9.png",
    title: "Air Max T6 Waterproof ",
    price: 20,
    discount: 0,
  },
  {
    id: 9,
    image: "./assets/img/p10.png",
    title: "High Breed F2",
    price: 20,
    discount: 40,
  },
];

const productContainer=document.querySelector("#all-products")
const searchInput=document.querySelector("#search")
const cartIcon=document.querySelector("#cartIcon")
const cart=document.querySelector("#cart")
//const crossIcon=document.querySelector(".crossIcon")
const overlay=document.querySelector("#overlay")
const cartButton=document.getElementsByTagName("button")
const totalbuy=document.querySelector("#total")
const numOFbuy=document.querySelector("#count")
const cartItem=document.querySelector("#cartItem")
const closeBuyButton=document.querySelector(".closeBuy")


cartIcon.addEventListener("click",()=>
{
  cart.style.display="block";
overlay.style.display="block";
overlay.addEventListener("click",()=>{closeBuy()})
closeBuyButton.addEventListener("click",()=>closeBuy())
}
)

products.forEach(e =>
    {
      productContainer.innerHTML+=`
     <div class="box">
                ${(e.discount!=0)?`<span class="discount">${(e.discount!=0)?e.discount+"% OFF":""}</span>`:``}
              <div class="img-box">
                <img class="images" src=${e.image} />
              </div>
              <div class="bottom">
                <p>${e.title}</p>
                <div><span>$${(e.discount!=0)?(e.price*e.discount/100).toFixed(2):(e.price).toFixed(2)}</span><del>${(e.discount!=0)?"$"+e.price.toFixed(2):""}</del></div>
                <button>Add to cart</button>
              </div>
            </div>`
    
    })  


    searchInput.addEventListener("input",(el)=>
      {el.preventDefault()
      productContainer.innerHTML=""
      products.filter(ele=>
        ele.title.toLowerCase().includes(searchInput.value.toLowerCase()))
        .forEach(e =>
        {
          productContainer.innerHTML+=`
         <div class="box">
                    ${(e.discount!=0)?`<span class="discount">${(e.discount!=0)?e.discount+"% OFF":""}</span>`:``}
                  <div class="img-box">
                    <img class="images" src=${e.image} />
                  </div>
                  <div class="bottom">
                    <p>${e.title}</p>
                    <div><span>$${(e.discount!=0)?(e.price*e.discount/100).toFixed(2):(e.price).toFixed(2)}</span><del>${(e.discount!=0)?"$"+e.price.toFixed(2):""}</del></div>
                    <button>Add to cart</button>
                  </div>
                </div>`
          plus()
        })
      })
  

  // searchInput.addEventListener("input",(el)=>
  //   {el.preventDefault()
  //   productContainer.innerHTML=""
  //   products.filter(ele=>
  //     ele.title.toLowerCase().includes(searchInput.value.toLowerCase()))
  //     .forEach(e =>
  //     {
  //       productContainer.innerHTML+=`
  //      <div class="box">
  //                 ${(e.discount!=0)?`<span class="discount">${(e.discount!=0)?e.discount+"% OFF":""}</span>`:``}
  //               <div class="img-box">
  //                 <img class="images" src=${e.image} />
  //               </div>
  //               <div class="bottom">
  //                 <p>${e.title}</p>
  //                 <div><span>$${(e.discount!=0)?(e.price*e.discount/100).toFixed(2):(e.price).toFixed(2)}</span><del>${(e.discount!=0)?"$"+e.price.toFixed(2):""}</del></div>
  //                 <button>Add to cart</button>
  //               </div>
  //             </div>`
  //       plus()
  //     })
  //   })

let sum=0
function plus() {
Array.from(cartButton).forEach((el,ind)=>{
  el.addEventListener("click",()=>{
    console.log(cartButton);
    numOFbuy.innerHTML++
    let priceOFpeice=((products[ind].discount!=0)?(products[ind].price*products[ind].discount/100):(products[ind].price))
    console.log(products[ind].id);
    sum +=priceOFpeice
    totalbuy.innerHTML="$"+sum.toFixed(2)
    if(cartItem.innerHTML==="Your cart is empty"){cartItem.innerHTML=""}
    cartItem.innerHTML+=`${products[ind].title} : $${priceOFpeice.toFixed(2)} <br><hr> `
    console.log(cartItem);
    //console.log(crossIcon);<span style='font-size:20px;color:red' class="crossIcon">&#10754;</span>

  })
})


//another way
  // for (let i = 0; i < cartButton.length; i++) {
  //   cartButton[i].addEventListener("click",()=>{
  //     console.log(cartButton);
  //     numOFbuy.innerHTML++
  //     let priceOFpeice=((products[i].discount!=0)?(products[i].price*products[i].discount/100):(products[i].price))
  //     console.log(products[i].id);
  //     sum +=priceOFpeice
  //     totalbuy.innerHTML="$"+sum.toFixed(2)
  //     if(cartItem.innerHTML==="Your cart is empty"){cartItem.innerHTML=""}
  //     cartItem.innerHTML+=`${products[i].title} : $${priceOFpeice.toFixed(2)}<br><hr>`
  //     console.log(cartItem);
  
  //   })
    
    
  // }  

}
plus()

function closeBuy() {
  cart.style.display="none";
  overlay.style.display="none";
  numOFbuy.innerHTML=0;
  cartItem.innerHTML="Your cart is empty";
  // searchInput.value=""
 
console.log("done");
 
}



