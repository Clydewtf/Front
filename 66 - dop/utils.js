export const formatPrice = (price) => {
    const formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(price);
};

export const addProductToContainer = (product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');

    const thumbnailSrc = product.thumbnail ? product.thumbnail : 'https://via.placeholder.com/150'; // Заглушка, если изображение отсутствует

    productElement.innerHTML = `
        <img class="product__img" src="${thumbnailSrc}" alt="">
        <div class="product__body">
            <p class="product__price">${product.price ? formatPrice(product.price) : 'Цена не указана'}</p>
            <h2 class="product__title">${product.title ? product.title : 'Название не указано'}</h2>
            <p class="product__descr">${product.description ? product.description : 'Описание отсутствует'}</p>
            <p class="product__brand">Brand: <span>${product.brand ? product.brand : 'Бренд не указан'}</span></p>
            <p class="product__category">Category: <span>${product.category ? product.category : 'Категория не указана'}</span></p>
            <div class="rating product__rating">
                <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                <p class="rating__value">${product.rating ? product.rating : 'Рейтинг не указан'}</p>
            </div>
        </div>
    `;

    productsContainer.appendChild(productElement);
};