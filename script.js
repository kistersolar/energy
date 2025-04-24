// Product Data
const products = {
    fans: [
        {
            id: 'solar fan-18-ac',
            name: '18-inch AC Rechargeable Solar Fan',
            price: 80000,
            image: 'fan-18-ac.webp',
            type: 'AC',
            size: '18-inch'
        },
        {
            id: 'fan-18-dc',
            name: '18-inch DC Solar Rechargeable Fan',
            price: 80000,
            image: 'fan-18-dc.webp',
            type: 'DC',
            size: '18-inch'
        },
        {
            id: 'fan-16-ac',
            name: '16-inch AC Rechargeable Solar Fan',
            price: 66000,
            image: 'fan-16-ac.jpg',
            type: 'AC',
            size: '16-inch'
        },
        {
            id: 'fan-16-dc',
            name: '16-inch DC Rechargeable Solar Fan',
            price: 65000,
            image: 'fan-16-dc.jpg',
            type: 'DC',
            size: '16-inch'
        },
        {
            id: 'fan-12-ac',
            name: '12-inch AC Rechargeable Solar Fan',
            price: 32000,
            image: 'fan-12-ac.jpg',
            type: 'AC',
            size: '12-inch'
        },
        {
            id: 'fan-12-dc',
            name: '12-inch DC Rechargeable Solar Fan',
            price: 31000,
            image: 'fan-12-dc.jpg',
            type: 'DC',
            size: '12-inch'
        }
    ],
    solarPanels: [
        {
            id: 'solar street light',
            name: 'Felicity Solar P2 Street Light 80w',
            price: 45000,
            image: 'p2.jpg',
            type: 'felicity',
            wattage: '80W'
        },        
        {
            id: 'panel-100w',
            name: '100W Solar Panel',
            price: 65000,
            image: 'panel-100w.jpg',
            type: 'Monocrystalline',
            wattage: '100W'
        },
        {
            id: 'panel-150w',
            name: '150W Solar Panel',
            price: 70000,
            image: 'panel-150w.jpg',
            type: 'Monocrystalline',
            wattage: '150W'
        },
        {
            id: 'panel-200w',
            name: '200W Solar Panel',
            price: 75000,
            image: 'panel-200w.jpg',
            type: 'Monocrystalline',
            wattage: '200W'
        },
        {
            id: 'panel-250w',
            name: '250W Solar Panel',
            price: 85000,
            image: 'panel-250w.jpg',
            type: 'Polycrystalline',
            wattage: '250W'
        },
        {
            id: 'panel-540w',
            name: '540Watts Solar Panel',
            price: 105000,
            image: 'panel-300w.jpg',
            type: 'Polycrystalline',
            wattage: '5400W'
        },
        {
            id: 'solar street light',
            name: 'Solar Pump with 100W Panel and 10AH Battery',
            price: 1045000,
            image: 'solarpump.jpg',
            type: 'felicity',
            wattage: '100W'
        },
    ],
    batteries: [
        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Battery 15kwh',
            price: 2300000,
            image: 'felicity.jpg',
            type: 'Monocrystalline',
            wattage: '15kwh',

        },

        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Ion Battery 5kwh',
            price: 1700000,
            image: '5kw.jpg',
            type: 'Monocrystalline',
            wattage: '5kwh',

        },
        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Ion Battery 10kwh',
            price: 2100000,
            image: 'felicity.jpg',
            type: 'Monocrystalline',
            wattage: '10kwh',

        },
        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Ion Battery 17.5kwh',
            price: 2600000,
            image: '17kw.jpg',
            type: 'Monocrystalline',
            wattage: '17.5kwh',

        },
        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Ion Battery 7.2kwh',
            price: 1950000,
            image: '5kw.jpg',
            type: 'Monocrystalline',
            wattage: '7.2kwh',

        },
        {
            id: 'Battery',
            name: 'Felicity Solar Lithium Ion Battery 25kwh',
            price: 4000000,
            image: '25kw.webp',
            type: 'Monocrystalline',
            wattage: '25kwh',

        },
        
        {
            id: 'battery-100ah',
            name: '100Ah Solar Battery',
            price: 75000,
            image: 'battery-100ah.jpg',
            type: 'Deep Cycle',
            capacity: '100Ah'
        },
        {
            id: 'battery-150ah',
            name: '150Ah Solar Battery',
            price: 105000,
            image: 'battery-150ah.jpg',
            type: 'Deep Cycle',
            capacity: '150Ah'
        },
        {
            id: 'battery-200ah',
            name: '200Ah Solar Battery',
            price: 135000,
            image: 'battery-200ah.jpg',
            type: 'Deep Cycle',
            capacity: '200Ah'
        },
        {
            id: 'battery-50ah',
            name: '50Ah Solar Battery',
            price: 45000,
            image: 'battery-50ah.jpg',
            type: 'AGM',
            capacity: '50Ah'
        },
        {
            id: 'battery-75ah',
            name: '75Ah Solar Battery',
            price: 60000,
            image: 'battery-75ah.jpg',
            type: 'AGM',
            capacity: '75Ah'
        }
    ]
};

// Shopping Cart
let cart = [];

// DOM Elements
const fanSection = document.querySelector('#fans .product-grid');
const solarPanelSection = document.querySelector('#solar-panels .product-grid');
const batterySection = document.querySelector('#batteries .product-grid');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const cartCountElement = document.getElementById('cart-count');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const whatsappCheckout = document.getElementById('whatsapp-checkout');
const yearElement = document.getElementById('year');

// Set current year in footer
yearElement.textContent = new Date().getFullYear();

// Display Products
function displayProducts(filteredProducts) {
    // Clear existing products
    fanSection.innerHTML = '';
    solarPanelSection.innerHTML = '';
    batterySection.innerHTML = '';

    const productsToDisplay = filteredProducts || products;

    // Display fans
    productsToDisplay.fans.forEach(fan => {
        const fanElement = createProductElement(fan);
        fanSection.appendChild(fanElement);
    });

    // Display solar panels
    productsToDisplay.solarPanels.forEach(panel => {
        const panelElement = createProductElement(panel);
        solarPanelSection.appendChild(panelElement);
    });

    // Display batteries
    productsToDisplay.batteries.forEach(battery => {
        const batteryElement = createProductElement(battery);
        batterySection.appendChild(batteryElement);
    });
}

// Create Product Element
function createProductElement(product) {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
        <img src="images/${product.image}" alt="${product.name}" loading="lazy">
        <h3>${product.name}</h3>
        <p>₦${product.price.toLocaleString('en-NG')}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
    `;
    return productElement;
}

// Add to Cart
function addToCart(productId) {
    // Find product in all categories
    let product;
    for (const category in products) {
        product = products[category].find(p => p.id === productId);
        if (product) break;
    }

    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                ...product,
                quantity: 1
            });
        }
        updateCart();
        showAddedToCartNotification(product.name);
    }
}

// Show added to cart notification
function showAddedToCartNotification(productName) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = `${productName} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Update Cart
function updateCart() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElement.textContent = totalItems;

    // Update cart modal
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
        // Generate WhatsApp message with order details
        let whatsappMessage = `Hello Kistar Solar Energy,%0A%0AI would like to order the following items:%0A%0A`;
        
        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            whatsappMessage += `- ${item.name} (${item.quantity} × ₦${item.price.toLocaleString('en-NG')})%0A`;

            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>₦${item.price.toLocaleString('en-NG')} × ${item.quantity}</p>
                    <p class="item-total">₦${itemTotal.toLocaleString('en-NG')}</p>
                </div>
                <button class="remove-item" data-id="${item.id}">×</button>
            `;
            cartItemsContainer.appendChild(cartItemElement);
        });

        whatsappMessage += `%0ATotal: ₦${total.toLocaleString('en-NG')}%0A%0APlease let me know about payment and delivery options.`;
        
        // Update WhatsApp checkout link
        whatsappCheckout.href = `https://wa.me/2347048501757?text=${whatsappMessage}`;
    }

    // Update total
    cartTotalElement.textContent = total.toLocaleString('en-NG');
}

// Remove Item from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Search Products
function searchProducts(query) {
    query = query.toLowerCase().trim();
    
    if (!query) {
        displayProducts();
        return;
    }

    const filteredProducts = {
        fans: products.fans.filter(fan => 
            fan.name.toLowerCase().includes(query) || 
            fan.type.toLowerCase().includes(query) ||
            fan.size.toLowerCase().includes(query)
        ),
        solarPanels: products.solarPanels.filter(panel => 
            panel.name.toLowerCase().includes(query) || 
            panel.type.toLowerCase().includes(query) ||
            panel.wattage.toLowerCase().includes(query)
        ),
        batteries: products.batteries.filter(battery => 
            battery.name.toLowerCase().includes(query) || 
            battery.type.toLowerCase().includes(query) ||
            battery.capacity.toLowerCase().includes(query)
        )
    };

    displayProducts(filteredProducts);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            addToCart(e.target.dataset.id);
        }
    });

    // Cart modal
    document.querySelector('a[href="#cart"]').addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'block';
    });

    // Close modals
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Remove item from cart
    cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('remove-item')) {
            removeFromCart(e.target.dataset.id);
        }
    });

    // Search functionality
    searchButton.addEventListener('click', function() {
        searchProducts(searchInput.value);
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchProducts(searchInput.value);
        }
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});

// Hero Slideshow Functionality
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero .slide');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    // Start slideshow
    showSlide(0);
    setInterval(nextSlide, 2000); // Change slide every 2 seconds
}

// Call this in your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    initHeroSlideshow();
    // ... existing code ...
});

// Video Controls Functionality
function initVideoControls() {
    const video = document.getElementById('about-video');
    const playPauseBtn = document.getElementById('play-pause');
    const progressBar = document.getElementById('progress-bar');
    const fullscreenBtn = document.getElementById('fullscreen');
    const playPauseIcon = playPauseBtn.querySelector('i');

    // Play/Pause functionality
    playPauseBtn.addEventListener('click', function() {
        if (video.paused) {
            video.play();
            playPauseIcon.classList.replace('fa-play', 'fa-pause');
        } else {
            video.pause();
            playPauseIcon.classList.replace('fa-pause', 'fa-play');
        }
    });

    // Update progress bar
    video.addEventListener('timeupdate', function() {
        const percentage = (video.currentTime / video.duration) * 100;
        progressBar.value = percentage;
    });

    // Click on progress bar to seek
    progressBar.addEventListener('click', function(e) {
        const percent = e.offsetX / this.offsetWidth;
        video.currentTime = percent * video.duration;
    });

    // Fullscreen functionality
    fullscreenBtn.addEventListener('click', function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
        } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
        }
    });

    // Update play/pause icon when video ends
    video.addEventListener('ended', function() {
        playPauseIcon.classList.replace('fa-pause', 'fa-play');
    });
}

// Call this in your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    initVideoControls();
    // ... existing code ...
});