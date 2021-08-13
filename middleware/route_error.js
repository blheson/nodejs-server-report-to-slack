module.exports = noRoute = (req, res, next) => {
   
    if (!req.route)
        res.sendStatus(404)
    next();
}