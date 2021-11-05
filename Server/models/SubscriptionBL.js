const SubscriptionModel = require('./SubscriptionModel');

const getSubscriptions = () =>
{
    return new Promise((resolve, reject) =>
    {
        SubscriptionModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        }).populate('MemberID', ['Name', 'Email', 'City']).populate('MovieID', ['Name', 'Genres', 'Year_Premiered', 'Image']);
    })
}

const getSubscription = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        SubscriptionModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        }).populate('MemberID', ['Name', 'Email', 'City']).populate('MovieID', ['Name', 'Genres', 'Year_Premiered', 'Image']);
    })
}

const addSubscription = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let subscription = new SubscriptionModel({
            MovieID : obj.MovieID,
            MemberID: obj.MemberID,
            Date: obj.Date
        });

        subscription.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Subscription Added");
            }
        });
    })
}

const updateSubscription = (id,obj) =>
{
    return new Promise((resolve, reject) =>
    {

        SubscriptionModel.findByIdAndUpdate(id, {
            MovieID : obj.MovieID,
            MemberID: obj.MemberID,
            Date: obj.Date
        }, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Subscription Updated");
            }
        })

    })
}

const deleteSubscription = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        SubscriptionModel.findByIdAndDelete(id, function(err)
        {
          if(err)
          {
            reject(err)
          }
          else
          {
            resolve("Subscription Deleted");
          }
        })
    })
}


module.exports = {getSubscriptions, getSubscription, addSubscription, deleteSubscription, updateSubscription};