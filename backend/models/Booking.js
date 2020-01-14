const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookingSchema = new Schema({
    bookingId: {
        type: String
    },
    bookingName: {
        type: String
    },
    paymentProofId: {
        type: String
    },
    paymentApproved: {
        type: Boolean
    },
    lawyerId: {
        type: String
    }
}, {
    collection: 'Booking'
})

module.exports = mongoose.model('Booking', BookingSchema)