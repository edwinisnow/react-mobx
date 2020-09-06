import { observable, action, computed } from 'mobx'
export class ShoppingCart {
    @observable
    items = [];

    @computed
    get totalPrice() {
        return this.items.reduce((acc, curr) => acc + curr.price, 0)
    }

    @action
    addItem(item) {
        item.id = this.items.length === 0
            ? 1
            : Math.max(...this.items.map(i => i.id)) + 1

        this.items.push(item)
    }
}

