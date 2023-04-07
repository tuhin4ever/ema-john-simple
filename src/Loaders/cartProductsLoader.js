import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json');
    const products = await loadedProducts.json();
    // console.log(products);

    //* if cart data is inn database, you have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    console.log(storedCart);
    for(const id in storedCart){
        const addedProduct = products.find(pd => pd.id === id);
        if(addedProduct){
            const quantity =storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }
    //* if you eed to send tow things
    //* return [products, saveCart]
    //* another options
    //* return (products, cart: saveCart)

    return savedCart;
}

export default cartProductsLoader;
