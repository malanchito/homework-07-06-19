class ShoppingCart{
    constructor(){
        this.items=[]
    }
    getItems(){
        return this.items
    }
    addItem(name,quantity,pricePerUnit){
        const cart=this.getItems()
        const item={
            name:name,
            quantity:quantity,
            pricePerUnit:pricePerUnit
        }
        cart.push(item)
        return cart
    }
    clear(){
        this.items=[]
        return this
    }
    total(){
        const totalPricePerItem=this.items.map(item=>item.quantity*item.pricePerUnit)
        return totalPricePerItem.reduce((totalValue,totalValueItem)=>{
            return totalValue+totalValueItem
        },0)
    }
}

module.exports =  ShoppingCart