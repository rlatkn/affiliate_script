import Cookie from 'js-cookie'
import abi from './abi'
import constants from './constants'

let web3, contract, contractInstance;

const address = process.env.CONTRACT_ADDRESS

/**
 * Init
 */
const init = function () {
  if (window.web3) {
    web3 = window.web3
  } else {
    const Web3 = require('web3')
    web3 = new Web3
  }

  contract = web3.eth.contract(abi)
  contractInstance = contract.at(address)
}

/**
 * Pay
 * @param {Number} service
 * @param {Number} partner
 * @param {Number} amount
 */
const pay = function (service, amount) {
  const partner = Cookie.get(constants.PARTNER_COOKIE) || null
  return new Promise((resolve, reject) => {
    contractInstance.pay.sendTransaction(service, partner, { value: Number(web3.toWei(amount, 'ether')).toFixed() }, (error, result) => {
      if (error) reject(error)
      resolve(result)
    })
  })
}

window.parts = {
  init,
  pay
}

window.addEventListener('load', () => {
  init()
  const form = document.querySelector('.js-form')
  const amountInput = document.querySelector('.js-amount')
  
  if (!form || !amountInput) return

  form.onsubmit = function (e) {
    e.preventDefault();

    // TODO
    const service = 0
    const partner = 0
    const amount = amountInput.value

    pay(Number(service), Number(amount)).then(res => {
      console.log('res', res)
    }).catch(error => {
      console.log(error)
    })
  }
})