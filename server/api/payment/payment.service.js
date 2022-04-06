const { get } = require('lodash')

const epayco = require('epayco-sdk-node') ({
    apiKey: process.env.EPAYCO_PUBLIC_KEY,
    privateKey: process.env.EPAYCO_PRIVATE_KEY,
    lang: 'ES',
    test: true

})
async function createCardToken(creditCardInfo) {
     return await epayco.token.create(creditCardInfo)
    
}

async function createCustomer(user) {
    const customerInfo = {
        token_card: billing.creditCards[0].tokenId,
        name: user.firstname,
        last_name: user.lastName, 
        email: user.email,
        default: true,
        //Optional parameters: These parameters are important when validating the credit card transaction
        //city: "Bogota",
        //address: "Cr 4 # 55 36",
        //phone: "3005234321",
        //cell_phone: "3010000001"
    }    
    return await epayco.customer.create(customerInfo)   
}

async function createPayment(user, payment) {
    const defaultCardToken = get(user, 'billing.creditCards[0].tokenId')
    const paymentInfo = { 
        token_card: get(payment, 'tokenId', defaultCardToken),
        customer_id: user.billing.customerId,
        doc_type: "CC",
        doc_number: "10358519",
        name: "John",
        last_name: "Doe",
        email: "example@email.com",
        city: "Bogota",
        address: "Cr 4 # 55 36",
        phone: "3005234321",
        cell_phone: "3010000001",
        bill: "OR-1234",
        description: "Test Payment",
        value: "116000",
        tax: "16000",
        tax_base: "100000",
        currency: "COP",
        dues: "12",
        ip:"190.000.000.000", /*This is the client's IP, it is required */
        url_response: "https://ejemplo.com/respuesta.html",
        url_confirmation: "https://ejemplo.com/confirmacion",
        method_confirmation: "GET",
    }
    return await epayco.change.create(paymentInfo)
   
}


module.exports = {
    createCardToken,
    createCustomer,
    createPayment
}