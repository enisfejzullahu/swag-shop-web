import NotificationService, {NOTIF_WISHLIST_CHANGED} from "./notification-service";

let ns = new NotificationService();


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
        ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
    }

    removeWishlistItem = item => {
        for(let x = 0; x < wishList.length; x ++) {
            if(wishList[x]._id === item._id){
                wishList.splice(x, 1);
                ns.postNotification(NOTIF_WISHLIST_CHANGED, wishList);
                break;
            }
        }
    }
}

export default DataService;