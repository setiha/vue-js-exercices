class CartItem {
    constructor(piece, count, basePrice) {
        this.piece = piece;
        this.count = count;
        this.basePrice = basePrice;
    }

    GetTotalPrice() {
        return this.count * this.basePrice;
    }

    static CanBeConstructed(piece, count, basePrice) {
        if(!piece && !count && !basePrice){
            return false
        }
        return true;
    }
};