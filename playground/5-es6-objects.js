//object property shorthand

const name="Rohan"
const userAge = 27

const user = {
    name,
    userAge,
    location: 'Chennai'
}
console.log(user)

//object destructuring
const product = {
    label: 'Red Label',
    price:2,
    stock:501,
    salePrice:undefined
}
// const label = product.label
// const price = product.price

const {label,stock, price: productPrice} = product
console.log(label)
console.log(stock)
console.log(productPrice)

const transaction = (type,{label,stock}={})=>{
    console.log(type,label,stock)
}
transaction('order')