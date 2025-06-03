let cart = [];

function addItem(name, price) {
    let found = cart.find(item => item.name === name);
    if (found) {
        found.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }
    console.log(`${name} added to cart.`);
}

function removeItem(name) {
    cart = cart.filter(item => item.name !== name);
    console.log(`${name} removed from cart.`);
}

function viewCart() {
    if (cart.length === 0) {
        console.log("Cart is empty.");
        return;
    }
    console.log("Cart Contents:");
    let total = 0;
    cart.forEach(item => {
        console.log(`${item.name} x${item.quantity} = $${item.price * item.quantity}`);
        total += item.price * item.quantity;
    });
    console.log(`Total: $${total}`);
}

function clearCart() {
    cart = [];
    console.log("Cart cleared.");
}
