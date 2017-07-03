(function (indexController) {

    var homeController = require("./homeController");

    indexController.init = function (app) {
        homeController.init(app);
    };

})(module.exports);