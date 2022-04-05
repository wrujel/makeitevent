const User = require('./user.model')
const get = require('lodash/get')

async function addCreditCards(user, card) {
    const customer = {
        creditCards: user.creditCards.concat(card)
    }
    const updatedUser = await User.findByIdAndUpdate(user._id, customer, {
        new: true
    })
    return updatedUser
}

module.exports = {
    addCreditCards
}