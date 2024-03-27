// Real product data with a larger number of products
const products = [
    { id: 1, name: 'Adidas Running Shoes', price: 99.99, image: 'adidas-running-shoes.jpg' },
    { id: 2, name: 'Nike Air Max Sneakers', price: 129.99, image: 'nike-air-max-sneakers.jpg' },
    { id: 3, name: 'Puma Classic Suede Shoes', price: 79.99, image: 'puma-classic-suede-shoes.jpg' },
    // Add more products
    { id: 4, name: 'Reebok Crossfit Training Shoes', price: 89.99, image: 'reebok-crossfit-training-shoes.jpg' },
    { id: 5, name: 'Under Armour Basketball Shoes', price: 149.99, image: 'under-armour-basketball-shoes.jpg' },
    { id: 6, name: 'New Balance Walking Shoes', price: 69.99, image: 'new-balance-walking-shoes.jpg' },
    // Add more products
    { id: 7, name: 'Asics Gel-Nimbus Running Shoes', price: 139.99, image: 'asics-gel-nimbus-running-shoes.jpg' },
    { id: 8, name: 'Brooks Adrenaline GTS Running Shoes', price: 119.99, image: 'brooks-adrenaline-gts-running-shoes.jpg' },
    { id: 9, name: 'Saucony Jazz Original Sneakers', price: 59.99, image: 'saucony-jazz-original-sneakers.jpg' },
    // Add more products
    { id: 10, name: 'Mizuno Wave Rider Running Shoes', price: 109.99, image: 'mizuno-wave-rider-running-shoes.jpg' },
    // Add even more products as needed
];

// Function to generate product HTML
function generateProductHTML(product) {
    return `
        <div class="product">
            <img src="images/${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
        </div>
    `;
}

// Function to render products
function renderProducts() {
    const productContainer = document.querySelector('.product-list');
    productContainer.innerHTML = '';
    products.forEach(product => {
        productContainer.innerHTML += generateProductHTML(product);
    });
}
 



 

 
 

// Function to handle search
function handleSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();
    const searchResults = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    renderProducts(searchResults);
}

// Call renderProducts() to initially render all products
renderProducts(products);

// Event listener for search input
document.getElementById('searchInput').addEventListener('input', handleSearch);
