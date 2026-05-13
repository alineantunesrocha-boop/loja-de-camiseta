// Selecionando os elementos
const buttons = document.querySelectorAll('.add-btn');
const cartCountElement = document.getElementById('cart-count');

let cartItems = 0;

// Função para adicionar ao carrinho
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.getAttribute('data-product');
        
        // Aumenta o contador
        cartItems++;
        cartCountElement.innerText = cartItems;
        
        // Feedback visual
        alert(`${productName} adicionado ao carrinho!`);
        console.log(`Carrinho atual: ${cartItems} itens`);
    });
});