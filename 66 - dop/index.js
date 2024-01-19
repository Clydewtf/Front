import {getCategories, getProducts, getProductsByCategory, getProductsBySearch} from "./requests.js";

const products = document.querySelector('.js-products')
const select = document.querySelector('.js-select')
const search = document.querySelector('.js-search')

const formatter = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
})

getProducts().then((data) => {
    printProducts(data.products)
})

getCategories().then(data => {
    data.forEach((item) => {
        const option = `<option value="${item}">${item}</option>`
        select.insertAdjacentHTML('beforeend', option)
    })
})

select.addEventListener('change', () => {
    getProductsByCategory(select.value).then((data) => {
        printProducts(data.products)
    })
})

search.addEventListener('input', () => {
    select.value = ''
    getProductsBySearch(search.value).then(data => {
        printProducts(data.products)
    })
})

function printProducts(data) {
    products.innerHTML = ''
    data.forEach((item) => {
        const product = `<div class="product">
                <img class="product__img" src="${item.thumbnail}" alt="">
                <div class="product__body">
                    <p class="product__price">${formatter.format(item.price)}</p>
                    <h2 class="product__title">${item.title}</h2>
                    <p class="product__descr">${item.description}</p>
                    <p class="product__brand">Brand: <span>${item.brand}</span></p>
                    <p class="product__category">Category: <span>${item.category}</span></p>
                    <div class="rating product__rating">
                        <svg class="rating__ico" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                        <p class="rating__value">${item.rating}</p>
                    </div>
                </div>
            </div>`
        products.insertAdjacentHTML('beforeend', product)
    })
}
