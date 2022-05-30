// setup
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
import { listProduct } from './listProduct.js';
let itemPage = 3;
let currentPage = 1;
let start = 0;
let end = itemPage;

function renderProduct() {
    let content = "";
    listProduct.map((item, index) => {
        if (index >= start && index < end) {
            content += `<div class="content__product__item">
            <a>
                <img src="${item.image}"/>
            </a>
            <h3>${item.title}</h3>
        </div>`
        }
    });
    $("#product").innerHTML = content;
    return content;
}
function renderListPage(totalPage) {
    let content = "";
    for (let i = 1; i < totalPage; i++) {
        content += `<li class="list ${i === currentPage ? "active" : ""}"><a>${i}</a></li>`
    }
    $(".number-page").innerHTML = content;
}

function changePage() {
    const listButton = $$(".number-page li")
    console.log(listButton);
    const a = $$(".number-page li a");

}

function initRender() {
    let totalPage = Math.ceil(listProduct.length / itemPage);
    renderProduct();
    renderListPage(totalPage)
}
changePage();
(() => {
    initRender();
})()
