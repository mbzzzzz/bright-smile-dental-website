// Initialize Airtable
const Airtable = require('airtable');
const apiKey = 'pataZ9PVLloOgiBQe.59075541e2dc01b060316470c5ede01f42ad46a0d7d5e69398e441fa23a4068d';
const base = new Airtable({ apiKey }).base('appdTCMvxDDKIOChs');
const tableName = 'Imported table';

// Product data - EXPANDED CATALOG with Gen Z styling
let products = [
    // Original Products
    { id: 'p1', name: 'Handbag', price: 4619, category: 'accessories', image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' },
    { id: 'p2', name: 'Tunic', price: 2456, category: 'tops', image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=927&q=80' },
    { id: 'p3', name: 'Tank Top', price: 2102, category: 'tops', image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80' },
    { id: 'p4', name: 'Leggings', price: 3126, category: 'bottoms', image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p5', name: 'Wallet', price: 3003, category: 'accessories', image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p6', name: 'Onesie', price: 2914, category: 'tops', image: 'https://images.unsplash.com/photo-1596870230751-ebdfce98ec42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' },
    { id: 'p7', name: 'Jacket', price: 2571, category: 'tops', image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' },
    { id: 'p8', name: 'Trousers', price: 2419, category: 'bottoms', image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1097&q=80' },
    { id: 'p9', name: 'Jeans', price: 4771, category: 'bottoms', image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1026&q=80' },
    { id: 'p10', name: 'Loafers', price: 4233, category: 'accessories', image: 'https://images.unsplash.com/photo-1573100925118-870b8efc799d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p11', name: 'Slippers', price: 2356, category: 'accessories', image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80' },
    { id: 'p12', name: 'Bowtie', price: 4418, category: 'accessories', image: 'https://images.unsplash.com/photo-1589756823695-278bc923f962?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' },
    
    // NEW PRODUCTS - Tops
    { id: 'p13', name: 'Floral Blouse', price: 3250, category: 'tops', image: 'https://images.unsplash.com/photo-1564257631407-4deb1f99d992?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p14', name: 'Striped Shirt', price: 2899, category: 'tops', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80' },
    { id: 'p15', name: 'Denim Shirt', price: 3599, category: 'tops', image: 'https://images.unsplash.com/photo-1588359348347-9bc6cbbb689e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p16', name: 'Hoodie', price: 4150, category: 'tops', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p17', name: 'Crop Top', price: 1899, category: 'tops', image: 'https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p18', name: 'Cardigan', price: 3750, category: 'tops', image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1072&q=80' },
    { id: 'p19', name: 'Polo Shirt', price: 2450, category: 'tops', image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80' },
    { id: 'p20', name: 'Turtleneck', price: 3299, category: 'tops', image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' },
    
    // NEW PRODUCTS - Bottoms
    { id: 'p21', name: 'Cargo Pants', price: 4250, category: 'bottoms', image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p22', name: 'Pleated Skirt', price: 3150, category: 'bottoms', image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80' },
    { id: 'p23', name: 'Denim Shorts', price: 2599, category: 'bottoms', image: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    { id: 'p24', name: 'Palazzo Pants', price: 3899, category: 'bottoms', image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p25', name: 'Pencil Skirt', price: 3450, category: 'bottoms', image: 'https://images.unsplash.com/photo-1551163943-3f7fffb9d770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80' },
    { id: 'p26', name: 'Joggers', price: 2950, category: 'bottoms', image: 'https://images.unsplash.com/photo-1580906853203-f13ea2c7c912?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    
    // NEW PRODUCTS - Accessories
    { id: 'p27', name: 'Sunglasses', price: 1950, category: 'accessories', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80' },
    { id: 'p28', name: 'Beanie', price: 1599, category: 'accessories', image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p29', name: 'Scarf', price: 2150, category: 'accessories', image: 'https://images.unsplash.com/photo-1520903920243-1d5cde3e3320?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p30', name: 'Watch', price: 5250, category: 'accessories', image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80' },
    { id: 'p31', name: 'Belt', price: 2399, category: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p32', name: 'Necklace', price: 3150, category: 'accessories', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p33', name: 'Earrings', price: 1899, category: 'accessories', image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    { id: 'p34', name: 'Backpack', price: 4599, category: 'accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' },
    
    // NEW PRODUCTS - More Clothing Items
    { id: 'p35', name: 'Summer Dress', price: 4950, category: 'tops', image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1446&q=80' },
    { id: 'p36', name: 'Formal Shirt', price: 3750, category: 'tops', image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80' },
    { id: 'p37', name: 'Leather Jacket', price: 7999, category: 'tops', image: 'https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=992&q=80' },
    { id: 'p38', name: 'Silk Scarf', price: 2899, category: 'accessories', image: 'https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80' },
    { id: 'p39', name: 'Pajamas', price: 3728, category: 'tops', image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D&auto=format&fit=crop&w=1483&q=80' },
    { id: 'p40', name: 'Sweatshirt', price: 3450, category: 'tops', image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80' }
];

// Cart
let cart = [];

// DOM Elements
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartSidebar = document.getElementById('cart-sidebar');
const overlay = document.getElementById('overlay');
const checkoutModal = document.getElementById('checkout-modal');
const confirmationModal = document.getElementById('confirmation-modal');
const orderItems = document.getElementById('order-items');
const orderTotal = document.getElementById('order-total');
const orderId = document.getElementById('order-id');
const paymentMethod = document.getElementById('payment');
const creditCardFields = document.getElementById('credit-card-fields');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded - initializing shop');
    
    // Load products
    displayProducts('all');
    
    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter products
            displayProducts(filter);
        });
    });
    
    // Cart icon click
    document.querySelector('.cart-icon').addEventListener('click', toggleCart);
    
    // Close cart
    document.getElementById('close-cart').addEventListener('click', toggleCart);
    
    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', openCheckout);
    
    // Close modals
    document.querySelector('.close-modal').addEventListener('click', closeCheckout);
    document.querySelector('.close-confirmation').addEventListener('click', closeConfirmation);
    
    // Overlay click
    overlay.addEventListener('click', () => {
        closeCart();
        closeCheckout();
        closeConfirmation();
    });
    
    // Payment method change
    paymentMethod.addEventListener('change', () => {
        if (paymentMethod.value === 'Credit Card') {
            creditCardFields.classList.remove('hidden');
        } else {
            creditCardFields.classList.add('hidden');
        }
    });
    
    // Checkout form submit
    document.getElementById('checkout-form').addEventListener('submit', placeOrder);
    
    // Continue shopping button
    document.getElementById('continue-shopping').addEventListener('click', () => {
        closeConfirmation();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Add some Gen Z flair with console message
    console.log('%c🔥 HYPE THREADS LOADED 🔥', 'background: #FFD100; color: #000; padding: 10px; font-size: 20px; font-weight: bold;');
});

// Display Products with animation delay
function displayProducts(filter) {
    productList.innerHTML = '';
    
    const filteredProducts = filter === 'all' 
        ? products 
        : products.filter(product => product.category === filter);
    
    if (filteredProducts.length === 0) {
        productList.innerHTML = '<div class="no-products">No products found in this category.</div>';
        return;
    }
    
    filteredProducts.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.style.animationDelay = `${index * 0.05}s`;
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">Rs${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">ADD TO CART</button>
            </div>
        `;
        productList.appendChild(productCard);
        
        // Add to cart event
        productCard.querySelector('.add-to-cart').addEventListener('click', () => {
            addToCart(product);
        });
    });
}

// Add to Cart with visual feedback
function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    // Visual feedback
    const addBtn = document.querySelector(`.add-to-cart[data-id="${product.id}"]`);
    addBtn.textContent = "ADDED!";
    addBtn.style.backgroundColor = "#000";
    addBtn.style.color = "#FFD100";
    
    setTimeout(() => {
        addBtn.textContent = "ADD TO CART";
        addBtn.style.backgroundColor = "";
        addBtn.style.color = "";
    }, 1000);
    
    updateCart();
    openCart();
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>YOUR CART IS EMPTY</p>
            </div>
        `;
        cartTotalPrice.textContent = 'Rs0';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-name">${item.name}</h4>
                <p class="cart-item-price">Rs${item.price}</p>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" data-id="${item.id}">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn plus" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">REMOVE</button>
                </div>
            </div>
        `;
        cartItems.appendChild(cartItem);
        
        // Quantity buttons
        cartItem.querySelector('.minus').addEventListener('click', () => {
            updateQuantity(item.id, -1);
        });
        
        cartItem.querySelector('.plus').addEventListener('click', () => {
            updateQuantity(item.id, 1);
        });
        
        // Remove button
        cartItem.querySelector('.remove-item').addEventListener('click', () => {
            removeFromCart(item.id);
        });
    });
    
    cartTotalPrice.textContent = `Rs${total}`;
}

// Update Quantity
function updateQuantity(id, change) {
    const item = cart.find(item => item.id === id);
    
    if (item) {
        item.quantity += change;
        
        if (item.quantity <= 0) {
            removeFromCart(id);
        } else {
            updateCart();
        }
    }
}

// Remove from Cart
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCart();
}

// Toggle Cart
function toggleCart() {
    if (cartSidebar.classList.contains('open')) {
        closeCart();
    } else {
        openCart();
    }
}

// Open Cart
function openCart() {
    cartSidebar.classList.add('open');
    overlay.style.display = 'block';
}

// Close Cart
function closeCart() {
    cartSidebar.classList.remove('open');
    overlay.style.display = 'none';
}

// Open Checkout
function openCheckout() {
    if (cart.length === 0) return;
    
    closeCart();
    
    // Populate order summary
    orderItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const summaryItem = document.createElement('div');
        summaryItem.className = 'summary-item';
        summaryItem.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>Rs${itemTotal}</span>
        `;
        orderItems.appendChild(summaryItem);
    });
    
    orderTotal.textContent = `Rs${total}`;
    
    // Show checkout modal
    checkoutModal.style.display = 'block';
    overlay.style.display = 'block';
}

// Close Checkout
function closeCheckout() {
    checkoutModal.style.display = 'none';
    overlay.style.display = 'none';
}

// Open Confirmation
function openConfirmation(orderNumber) {
    closeCheckout();
    orderId.textContent = orderNumber;
    confirmationModal.style.display = 'block';
    overlay.style.display = 'block';
}

// Close Confirmation
function closeConfirmation() {
    confirmationModal.style.display = 'none';
    overlay.style.display = 'none';
}

// Format Date
function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

// Place Order - Using the Airtable API format you provided
function placeOrder(e) {
    e.preventDefault();

    if (cart.length === 0) return;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;
    submitBtn.textContent = "PROCESSING...";
    submitBtn.disabled = true;

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const address = form.address.value;
    const payment = form.payment.value;

    const sharedId = Math.floor(1000 + Math.random() * 9000);
    const today = new Date();
    const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    const records = cart.map(item => {
        return {
            fields: {
                "CustomerID": sharedId,
                "customer name": name,
                "address": address,
                "email": email,
                "Item Purchased": item.name,
                "Purchase Amount (PKR)": item.price * item.quantity,
                "Date Purchase": formattedDate,
                "Payment Method": payment,
                "order status": ["placed"]
            }
        };
    });

    base(tableName).create(records, function (err, records) {
        if (err) {
            console.error("Error saving to Airtable:", err);
            alert("There was an error processing your order. Please try again.");
            submitBtn.textContent = originalBtnText;
            submitBtn.disabled = false;
            return;
        }

        console.log("Order placed successfully!");
        records.forEach(record => {
            console.log("Created record ID:", record.getId());
        });

        cart = [];
        updateCart();

        submitBtn.textContent = originalBtnText;
        submitBtn.disabled = false;

        openConfirmation(sharedId); // display shared 4-digit ID
    });
}

// Add some cool Gen Z hover effects
document.addEventListener('mouseover', function(e) {
    if (e.target.classList.contains('product-card')) {
        e.target.style.transform = 'translateY(-10px) scale(1.03)';
        e.target.style.transition = 'all 0.3s ease';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.classList.contains('product-card')) {
        e.target.style.transform = '';
    }
});