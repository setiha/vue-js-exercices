let app = new Vue({
    el: "main#app",
    data: {
        itemCollection: [],
        newItem: {
            piece: '',
            count: '',
            basePrice: '',
        }
    },
    created: function () {
        this.itemCollection.push(new CartItem('tej', 2, 200));
    },
    methods: {
        GetTotal() {
            return this.itemCollection
                .map(item => {
                    return item.GetTotalPrice();
                })
                .reduce((acc, price) => {
                    return acc + price;
                });
        },
        AddNewItem() {
            if (!CartItem.CanBeConstructed(
                this.newItem.piece,
                this.newItem.count,
                this.newItem.basePrice)) {
                return;
            }
            this.itemCollection.push(new CartItem(
                this.newItem.piece,
                this.newItem.count,
                this.newItem.basePrice
            ));

            this.newItem = {
                piece: '',
                count: '',
                basePrice: '',
            };
        }
    }
})