const MovieModel = require('./MovieModel');
const SubscriptionsMovie = require('./SubscriptionModel');

const getMovies = () =>
{
    return new Promise((resolve, reject) =>
    {
        MovieModel.find({}, function(err, data)
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

const getMovie = (id) =>
{
    return new Promise((resolve, reject) =>
    {
        MovieModel.findById(id, function(err, data)
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


const addMovie = (obj) =>
{
    return new Promise((resolve, reject) =>
    {

        let movie = new MovieModel({
            Name : obj.Name,
            Year_Premiered : obj.Year_Premiered,   
            Genres: obj.Genres,
            Image: obj.Image
            

        });

        movie.save( function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(" Movie Added");
            }
        });
    })
}




const updateMovie = (id,obj) =>
{
    return new Promise((resolve, reject) =>
    {

        MovieModel.findByIdAndUpdate(id, {
            Name : obj.Name,
            Year_Premiered : obj.Year_Premiered,   
            Genres: obj.Genres,
            Image: obj.Image
        }, function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Movie Updated");
            }
        })

    })
}


const deleteMovie = (id) =>
{
    return new Promise((resolve, reject) =>
    {

        MovieModel.findByIdAndDelete(id, function (err)
        {
            if (err) {
                reject(err)
            }
            else {
                resolve('Movie Deleted');
            }
        }).then(
            SubscriptionsMovie.deleteMany({ MovieID : id }, function (err)
            {
                if (err) {
                    reject(err)
                }
                else {
                    resolve('Subscription Deleted');
                }
            })
        );

    })
}


module.exports =  {getMovies, getMovie, addMovie, deleteMovie, updateMovie};