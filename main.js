// tady je místo pro náš program

//const address = 'Pod Kaštany 31, 123 11 Horní Dlouhonosy'
/*
const adresa = {
  ulice: 'Pod Kaštany',
  cislo: 31,
  mesto: 'Horní Dlouhonosy',
  psc: '123 11'
}
*/

const address = {
  streetName: 'Pod Kaštany',
  number: 31,
  city: 'Horní Dlouhonosy',
  postalCode: '123 11',
}

// let vstupUzivatel = prompt("Zadej správné číslo domu:")
// address.number = Number(vstupUzivatel)

const user1 = {
  fullName: 'Lubomír Větvička',
  login: 'lubos',
  address: {
    streetName: 'Pod Kaštany',
    number: 31,
    city: 'Horní Dlouhonosy',
    postalCode: '123 11'
  },
  cartItems: 1
}

// DESTRUKTUROVÁNÍ

const product = {
  name: 'Mlýnek na kávu',
  price: 520,
  currency: 'Kč'
}

const {name, price, currency} = product

