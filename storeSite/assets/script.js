document.addEventListener('DOMContentLoaded', function () {
    fetch('getProducts.php')
        .then(response => response.json())
        .then(data => {
            const productsContainer = document.getElementById('products');
            data.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>قیمت: ${product.price} تومان</p>
                `;
                productsContainer.appendChild(productElement);
            });
        });
});
