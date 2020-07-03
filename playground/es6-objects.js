const name = 'Tyler'
const userAge = 26

const user = {
    name,
    age: userAge,
    location: 'Saginaw MI',
}

console.log(user)

// destructuring

const product = {
    label: 'red notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

// const label = product.label
// const price = product.price


const {label: productLabel, stock, rating = 5} = product
console.log(productLabel)
console.log(stock)
console.log(rating)

const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('new order: ', product)