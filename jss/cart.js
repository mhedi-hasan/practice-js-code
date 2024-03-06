const addProduct=()=>{
    const productCart=document.getElementById('product-name')
    const productCart2=document.getElementById('product-quantity')
    const products=productCart.value;
    const products2=productCart2.value;
    productCart.value=''
    productCart2.value=''
    console.log(products,products2,'pes');
    displayProduct(products,products2)
    saveProductToLocalStorage(products,products2)
}

const displayProduct=(products,products2)=>{
    const ul=document.getElementById('product-container')
    const li = document.createElement('li');
    li.innerText=`${products}: ${products2}`
    ul.appendChild(li)
}

const getStoredShoppingCart=()=>{
    let cart={};
    const storedCart=localStorage.getItem('cart');
    if(storedCart){
        cart=JSON.parse(storedCart);
    }
    return cart;
}
const saveProductToLocalStorage=(products,products2)=>{
    const cart=getStoredShoppingCart();
    cart[products]=products2;
    console.log(cart);
    const cartStringify=JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}

const displayProductFromLocalStorage=()=>{
    const saveCart=getStoredShoppingCart();
    console.log(saveCart)
    for(const products in saveCart){
        const products2=saveCart[products]
        console.log(products,products2);
        displayProduct(products,products2)
    }
}
displayProductFromLocalStorage()