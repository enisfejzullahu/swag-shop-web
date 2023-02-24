let instance = null;
let wishList = [];

class DataService {
    constructor() {
        if(!instance) {
            instance = this;
        }

        return instance;
    }

    addWishlistItem = item => {
        wishList.push(item);
    }

    removeWishlistItem = item => {
        for(let x = 0; x < wishList.length; x ++) {
            if(wishList[x]._id === item._id){
                wishList.splice(x, 1);
                break;
            }
        }
    }
}

export default DataService;