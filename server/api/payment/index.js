const { Router } = require('express')

const { isAuthenticated } = require('../../auth/auth.service')
const { 
    createTokenHandler, 
    createCustomerHanlder, 
    makePaymentHandler } = require('./payment.controller')

const router = Router()

router.post('/card-token', isAuthenticated(), createTokenHandler)
router.post('/create-customer', isAuthenticated(), createCustomerHanlder)
router.post('/make-payment', isAuthenticated(), makePaymentHandler)

module.exports = router;