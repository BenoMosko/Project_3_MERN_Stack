const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({

    Members : {type: mongoose.Schema.Types.ObjectId, ref : 'MemberID'},
    Movies : {type: mongoose.Schema.Types.ObjectId, ref : 'MovieID'},
    Date : {type : Date}
});

module.exports = mongoose.model('Subscriptions', SubscriptionSchema, 'Subscriptions');