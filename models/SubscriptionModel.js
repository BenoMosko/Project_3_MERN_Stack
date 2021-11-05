const mongoose = require('mongoose');

const SubscriptionSchema = new mongoose.Schema({

    MemberID : {type: mongoose.Schema.Types.ObjectId, ref : 'Members'},
    MovieID : {type: mongoose.Schema.Types.ObjectId, ref : 'Movies'},
    Date : {type : Date}
});

module.exports = mongoose.model('Subscriptions', SubscriptionSchema, 'Subscriptions');