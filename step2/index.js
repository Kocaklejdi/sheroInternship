const body = document.getElementsByTagName("body")[0];

const carousel = document.getElementById("carousel");

const carouselItems = [
    {
        price:"449.99",
        description:"Rook Quill Rotary Tattoo Machine - Copper",
        img:"./assets/product1.png"
    },
    {
        price:"449.99",
        description:"Rook Quill Rotary Tattoo Machine - Blue",
        img:"./assets/product2.png"
    },
    {
        price:"1,199.99",
        description:"Pre-Order - Inkjecta Filte X1 Wireless Tattoo Machine",
        img:"./assets/product3.png"
    },
    {
        price:"1,199.99",
        description:"Pre-Order - Inkjecta Filte X1 Wireless Tattoo Machine",
        img:"./assets/product4.png"
    },
    {
        price:"1,199.99",
        description:"Pre-Order - Inkjecta Filte X1 Wireless Tattoo Machine",
        img:"./assets/product5.png"
    },
]

function updateCarousel(){
    carousel.innerHTML = ""
    carouselItems.forEach((item)=>{

        const productContainer = document.createElement("div");
        productContainer.className = "productContainer";
    
        const image = document.createElement("img");
        image.src = item.img;
    
        const productText = document.createElement("div");
        productText.className = "productText";
    
        const productPrice = document.createElement("p");
        productPrice.className = "productPrice";
        productPrice.innerHTML = item.price;
    
        const productDescription = document.createElement("p");
        productPrice.className = "productDescription";
        productPrice.innerHTML = item.description;
    
        productText.appendChild(productPrice)
        productText.appendChild(productDescription)
        productContainer.appendChild(image)
        productContainer.appendChild(productText)
    
        carousel.appendChild(productContainer)
    })
}

updateCarousel()

const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");


leftButton.onclick = () => {
    carouselItems.push(carouselItems[0])
    carouselItems.splice(0,1)
    updateCarousel()
}

rightButton.onclick = () => {
    carouselItems.unshift(carouselItems[carouselItems.length - 1])
    carouselItems.pop()
    updateCarousel()
}