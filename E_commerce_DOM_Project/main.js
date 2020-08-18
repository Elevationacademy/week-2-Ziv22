const abouyUsText = (`Welcome to  Consoles World! We are a fast paced, forward thinking, and dynamic internet based retailer of Video Games and entertainment products.We operate from our custom built head office in Chesterfield, UK, which houses the central command station for our entire operation and is responsible for the picking, packing and dispatching of your order, as well as everything before, during and after that process. After noticing that gamers in Australia were paying same of the highest prices in the world for video games we decided that enough was enough and created ozgameshop.com to bring you the biggest titles at the best prices!`);
const cart = [    {
    name:"Sony Play Station 4",
    price:500,
    img:"https://img.zap.co.il/pics/0/5/6/0/42600650c.gif"
}];
const products = [
    {
        name:"Sony Play Station 4",
        price:500,
        img:"https://img.zap.co.il/pics/0/5/6/0/42600650c.gif"
    },
    {
        name:"Nintendo switch",
        price:600,
        img:"https://images-na.ssl-images-amazon.com/images/I/518QJtsVteL._SL1200_.jpg"
    },
    {
        name:"Xbox One",
        price:1200,
        img:"https://files.geektime.co.il/wp-content/uploads/2019/12/maxresdefault-3-1576395455.jpg"
    },
    {
        name:"Arcade Game",
        price:200,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6BE6AEQd6yMumYpacLFfLkIJqGoedCIVv4g&usqp=CAU"
    }
];

const productsPage = document.getElementById("all-products-page");
const productsBtn = document.getElementById("allProducts")

const aboutUsPage = document.getElementById("about-us-page");
const aboutUsBtn = document.getElementById("aboutUs")

const cartPage = document.getElementById("cart-page");
const cartBtn = document.getElementById("cartPage")

const pages = document.getElementsByClassName("pages");

let aboutUsClicked = false;
let productsClicked = false;
let cartClicked = false;

const generateProducts = function(element){
    let productContainer = document.createElement("div");
    let productName = document.createElement("div");
    let productImage = document.createElement("img");

    productContainer.classList.add("product-container")        
    productImage.classList.add("product-image")

    productName.innerHTML = element.name;
    productImage.setAttribute('src',element.img)
    
    productContainer.appendChild(productImage);
    productContainer.appendChild(productName);
    return productContainer;
}

const removeAll = function(){
    productsPage.innerHTML = "";
    aboutUsPage.innerHTML = "";
    cartPage.innerHTML = "";
}

aboutUs.onclick = function(){
        removeAll();
        let paragraph = document.createElement("p");
        paragraph.innerHTML = abouyUsText.toString();
        aboutUsPage.appendChild(paragraph);
        aboutUsClicked = true;
}

const renderProducts = function(){
        removeAll();
        for(product of products){
            let productContainer = generateProducts(product);
            productsPage.appendChild(productContainer);
        }
        productsClicked = true;
}
const renderCart = function(){
        removeAll();
        for(product of cart){
            let cartContainer = generateProducts(product);
            productsPage.appendChild(cartContainer);
        }
}

productsBtn.onclick = function(){
    renderProducts()
}
cartBtn.onclick = function(){
    renderCart()
}
