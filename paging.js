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
function renderListPage() {
    let totalPage = Math.ceil(listProduct.length / itemPage);

    let content = "";
    for (let i = 1; i < totalPage; i++) {
        content += `<li class=" ${i === currentPage ? "active" : ""}" data-index=${i}><a>${i}</a></li>`
    }
    $(".number-page").innerHTML = content;

}

function changePage() {
    const listButton = $$(".number-page li");
    listButton.forEach(element => {
        element.addEventListener("click", function (e) {
            currentPage = Number(element.getAttribute("data-index"));
            renderListPage()
        })
    });
    const a = $$(".number-page li a");

};
(() => {
    renderProduct();
    renderListPage();
    changePage();
})()

