exports.displayHome = (req, res, send) => {
    res.send({
        info: 'Node.js, Express.js, postgres CRUD REST API'
    });
}