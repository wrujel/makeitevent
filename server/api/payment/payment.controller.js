const { addCreditCards } = require("../user/user.service")
const { createCardToken } = require("./payment.service")

async function createTokenHandler(req, res) {
    const { carNumber, carExpYear, cardExpMonth, cardCvc} = req.body
    const creditCardInfo = {
        "card[number]": carNumber,
        "card[exp_year]": carExpYear,
        "card[exp_month]": cardExpMonth,
        "card[cvc]": cardCvc
    }

    try{
      const result = await createCardToken(createCardInfo)
      
      const user = req.user
      const creditCard = {}
      await addCreditCards(user, creditCard)
    } catch(err) {

    }

}

function createCustomerHandler() {
    
}

function makePaymentHandler() {
    
}

module.exports = {
    createTokenHandler,
    createCustomerHandler,
    makePaymentHandler
}