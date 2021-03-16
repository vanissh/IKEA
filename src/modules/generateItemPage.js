import getData from './getData.js';
import userData from './userData.js';

const NEW_COUNT_ITEM = 6;

const generateItemPage = () => {

    const renderCard = ({category, count, description, id, img, 
        name:itemName, price, subcategory}) => {

    const breadcrumbLink = document.querySelectorAll('.breadcrumb__link'),
        goodImages = document.querySelector('.good-images'),
        goodItemNew = document.querySelector('.good-item__new'),
        goodItemHeader = document.querySelector('.good-item__header'),
        goodItemDescription = document.querySelector('.good-item__description'),
        goodItemEmpty = document.querySelector('.good-item__empty'),
        goodItemPriceValue = document.querySelector('.good-item__price-value'),
        btnGood = document.querySelector('.btn-good'),
        btnAddWishList = document.querySelector('.btn-add-wishlist');
        
        breadcrumbLink[0].textContent = category;
        breadcrumbLink[0].href = `goods.html?cat=${category}`;
        breadcrumbLink[1].textContent = subcategory;
        breadcrumbLink[1].href = `goods.html?subcat=${subcategory}`;
        breadcrumbLink[2].textContent = itemName;


        goodImages.textContent = '';

        goodItemHeader.textContent = itemName;
        goodItemDescription.textContent = description;
        goodItemPriceValue.textContent = price;
        btnGood.dataset.idd = id;
        btnAddWishList.dataset.idd = id;

        img.forEach(item => {
            goodImages.insertAdjacentHTML('afterbegin', `
                <div class="good-image__item">
                    <img src="${item}" alt="${itemName} - ${description}">
                </div>
            `)
        });

        if(count >= NEW_COUNT_ITEM){
            goodItemNew.style.display = 'block';
        } else if (!count){
            goodItemEmpty.style.display = 'block';
            btnGood.style.display = 'none';
        }

        const checkWishList = () => {
            if(userData.wishList.includes(id)){
                btnAddWishList.classList.add('contains-wishlist');
            } else {
                btnAddWishList.classList.remove('contains-wishlist')
            }
        };

        btnAddWishList.addEventListener('click', () => {
            userData.wishList = id;
            checkWishList();
        });

        btnAddWishList.addEventListener('click', () => {
            userData.cartList = id;
            checkWishList();
        });

    }

    if(location.hash && location.pathname.includes('card')){
        getData.item(location.hash.slice(1), renderCard);
    }
};

export default generateItemPage;