const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (request, response, next)
{
    const token = request.header('x-auth-token');
    if(!token)
    {
        return response.status(401).json({ msg: 'No token, authorization denied' });
    }
    try
    {
        jwt.verify(token, config.get('jwtSecret'), (error, decoded) =>
        {
            if (error)
            {
                return response.status(401).json({ msg: 'Token is not valid' });
            }
            else
            {
                request.user = decoded.user;
                next();
            }
        });
    }
    catch (err)
    {
        console.error('something wrong with auth middleware');
        response.status(500).json({ msg: 'Server Error' });
    }
};