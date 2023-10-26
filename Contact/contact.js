// ---------------------cart icon element count -----------------


let basket = JSON.parse(localStorage.getItem('data')) || [];

let cart_items_count = () => {
    let cart_icon_items = document.getElementById('cart_number')
    let count = Number(0);
    for (let x of basket) {
        count += x.item
    }
    cart_icon_items.innerHTML = count;

    console.log(basket)
    console.log(count)
    
}


cart_items_count()
// display_item()