const CreditCardSchema = new mongoose.Schema({
    expMonth: {
        type: String,
        required: true,
        trim: true
    },
    expYear: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    mask: {
        type: String,
        required: true,
        trim: true
    },
    tokenId:  {
        type: String,
        required: true,
        trim: true
    },
    

}, { _id: false})

const BillingSchema = new mongoose.Schema({
    creditCards: [CreditCardSchema],
    customerId: String,
}, { _id: false }); 