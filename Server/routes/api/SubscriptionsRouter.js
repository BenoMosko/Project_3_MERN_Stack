const express = require('express');
const subscriptionBL = require('../../models/SubscriptionBL');
const router = express.Router();

router.route('/').get(function(request, response)
    {
        subscriptionBL.getSubscriptions().then(data =>
            {
                return response.json(data);
            })
    })


router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

       subscriptionBL.getSubscription(id).then(data =>
            {
                return resp.json(data);
            })
    })

    router.route('/members/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

       subscriptionBL.getSubscriptionByMemderId(id).then(data =>
            {
                return resp.json(data);
            })
    })



router.route('/:id')
    .delete(function(req, resp)
    {
        let id = req.params.id;

        console.log(id)

        subscriptionBL.deleteSubscription(id).then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/:id')
    .put(function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;


        subscriptionBL.updateSubscription(id,obj).then(data =>
            {
                return resp.json(data);
            })
    })


router.route('/')
    .post(function(req, resp)
    {
        let obj = req.body;
        console.log(obj);

        subscriptionBL.addSubscription(obj).then(data =>
            {
                return resp.json(data);
            })
    })


module.exports = router;