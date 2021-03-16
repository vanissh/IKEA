import getData from './getData.js';
import generateSubCatalog from './generateSubCatalog.js';

const menu = () => {

    const updateSubCatalog = generateSubCatalog();

    const menu = document.querySelector('.catalog'),
        overlay = document.querySelector('.overlay'),
        subMenu = document.querySelector('.subcatalog'); 

    const handlerMenu = () => {
        menu.classList.toggle('open');
        overlay.classList.toggle('active');
    };

    const handlerSubMenu = () => {
        subMenu.classList.toggle('subopen');
    };

    document.addEventListener('click', (e) => {
        let target = e.target;
        
        if((target.closest('.catalog-btn') || target.closest('.overlay')) && 
            subMenu.classList.contains('subopen')){
                handlerSubMenu();
        }

        if(target.closest('.btn-burger') || target.closest('.btn-close.catalog-btn') || 
            target.closest('.overlay')){
            handlerMenu();
        }
    });
    
    const openSubMenu = (e) => {
        e.preventDefault();
        const target = e.target;
        const itemList = target.closest('.catalog-list__item>a');
        if(itemList){
            getData.subCatalog(target.textContent, (data) => {
                updateSubCatalog(target.textContent, data);
                subMenu.classList.add('subopen');

            })
        }   
    };

    menu.addEventListener('click', openSubMenu);

};
export default menu;