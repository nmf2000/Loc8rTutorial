//home page controller for GET
module.exports.index = function (req, res) {
    res.render('index', { title: 'Express'});
};

