
const serverHealthRouter = require("express").Router();
serverHealthRouter.get('/', (req, res) => {
    res.send({ 'status': 'success', 'message': 'Server is working fine' });
});

module.exports = serverHealthRouter;
