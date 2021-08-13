module.exports = noRoute = (req, res, next) => {
    if (!req.route)
        res.send('No such route');
    next();
}