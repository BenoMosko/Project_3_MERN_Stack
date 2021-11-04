const MemberModel = require('./MemberModel');
const SubscriptionModel = require('./SubscriptionModel');

const getMembers = () =>
{
    return new Promise((resolve, reject) =>
    {
        MemberModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}

const getMember = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        MemberModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data);
            }
        });
    })
}


const addMember = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let member = new MemberModel({
            Name : obj.Name,
            Email : obj.Email,   
            City: obj.City
        });

        member.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Member Added");
            }
        });
    })
}




const updateMember = (id,obj) =>
{
    return new Promise((resolve, reject) =>
    {

        MemberModel.findByIdAndUpdate(id, {
            Name : obj.Name,
            Email : obj.Email,   
            City: obj.City
        }, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Member Updated");
            }
        })

    })
}


const deleteMember = (id) =>
{
    return new Promise((resolve, reject) =>
    {

        MemberModel.findByIdAndDelete(id, function(err)
      {
          if(err)
          {
              reject(err)
          }
          else
          {
              resolve('Member Deleted');
          }
      }).then(
        SubscriptionModel.deleteMany({ MemberID : id }, function (err)
        {
            if (err) {
                reject(err)
            }
            else {
                resolve(' Subscription Deleted');
            }
        })
    );
    })
}


module.exports =  {getMembers, getMember, addMember, deleteMember, updateMember};