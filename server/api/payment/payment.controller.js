const { updateBilling } = require("../user/user.service")
const { createCardToken, createCustomer, createPayment } = require("../payment.service")

async function createTokenHandler(req, res) {
    const { carNumber, carExpYear, cardExpMonth, cardCvc} = req.body
    const creditCardInfo = {
        "card[number]": carNumber,
        "card[exp_year]": carExpYear,
        "card[exp_month]": cardExpMonth,
        "card[cvc]": cardCvc
    }

    try {
      const { card, id, status } = await createCardToken(createCardInfo)
      
      const user = req.user
      const creditCard = {
          expMonth: card.exp_month,
          expYear: card.exp_year,
          name: card.name,
          mask: card.mask,
          tokenId: id
        };
      await updateBilling(user, creditCard, 'card')

      res.status(200).json({ card, id, status, user });
    } catch(err) {
        res.status(500).send({ message: 'Error al crear el token en ePayco', erorr})
    }

}

async function createCustomerHandler(req, res) {
    const user = req.user
    try {
        const { data } = await createCustomer(user)
        await updateBilling(user, data.customerId, 'customer')

        res.estatus(200).json({ message: 'Customer created successfully', data, user })

    } catch (err) {
        console.error(err)
}}

function makePaymentHandler(req, res) {
    const user = req.user
    try {
        const { data } = await createPayment(user)
        await updateBilling(user, data.customerId, 'customer')

        res.estatus(200).json({ message: 'Customer created successfully', data, user })

    } catch (err) {
        console.error(err)
}
    
}

module.exports = {
    createTokenHandler,
    createCustomerHandler,
    makePaymentHandler
}