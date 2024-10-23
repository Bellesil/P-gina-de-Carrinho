const cartItems = [
    { name: "Rosa", quantity: 0, price: 10.00 },
    { name: "Margarida", quantity: 0, price: 4.00 },
    { name: "Girassol", quantity: 0, price: 15.00 },
    { name: "Orquídea", quantity: 0, price: 8.00 },
    { name: "Lírio", quantity: 0, price: 9.50 },
    { name: "Tulipa", quantity: 0, price: 11.50 },
    { name: "Jasmim", quantity: 0, price: 12.50 },
    { name: "Cravo", quantity: 0, price: 8.50 },
    { name: "Hibisco", quantity: 0, price: 16.50 },
    { name: "Flor de Lótus", quantity: 0, price: 21.50 },
    { name: "Violetas", quantity: 0, price: 11.50 },
];

function updateCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cartItems.forEach((item, index) => {
        const itemTotal = item.quantity * item.price;
        total += itemTotal;

        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>
                <input type="number" value="${item.quantity}" min="0" onchange="updateQuantity(${index}, this.value)">
            </td>
            <td>R$ ${item.price.toFixed(2)}</td>
            <td>R$ ${itemTotal.toFixed(2)}</td>
            <td><button onclick="removeItem(${index})">Remover</button></td>
        `;
        cartItemsContainer.appendChild(row);
    });

    document.getElementById('total-price').innerText = total.toFixed(2);
}

function updateQuantity(index, quantity) {
    const parsedQuantity = parseInt(quantity);
    if (!isNaN(parsedQuantity) && parsedQuantity >= 0) {
        cartItems[index].quantity = parsedQuantity;
    }
    updateCart();
}

function removeItem(index) {
    cartItems[index].quantity = 0; // Zera a quantidade ao remover
    updateCart();
}

// Inicializa o carrinho ao carregar a página
updateCart();
