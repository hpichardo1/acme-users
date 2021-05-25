const faker = require('faker')

const generate = () => {
    const users = new Array(50).fill('').map( value => faker.helpers.userCard());

}
const users = generate()

const render = () => { 
  const html = users.map( (user, idx) => {
    return `
      <li>
        <a href='#${idx}'>
          ${user.name}
        </a>
      
      </li>
    `
  }).join('')

}

module.exports = {
  generate
}




//faker.utils.userCard method

// const names = new Array(50).fill('').map( _ => faker.company.companyName());
//     const companies = names.map( name => {
//       const products = new Array(3).fill('').map(_ => faker.commerce.productName());

//       return {
//         name,
//         products
//       };