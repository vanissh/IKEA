import { getLocalStorage } from './storage.js';
import { setLocalStorage } from './storage.js';

const userData = {
    wishListData: getLocalStorage('wishlist'),
    get wishList(){
        return this.wishListData;
    },
    set wishList(id){
        if(this.wishListData.includes(id)){
            const index = this.wishListData.indexOf(id);
            this.wishList.splice(index, 1);
        } else {
            this.wishListData.push(id);
        }
        setLocalStorage('wishlist', this.wishList);
        
    },

    cartListData: getLocalStorage('cartlist'),

    get cartList(){
        return this.cartListData;
    },

    set cartList(id){
        let obj = this.cartListData.find(item => item.id === id);
        if(obj){
            obj.count++
        } else {
            obj = {
                id,
                count: 1,
            };
            this.cartListData.push(obj);
        }
        setLocalStorage('cartlist', this.cartList);
    },
};

export default userData;