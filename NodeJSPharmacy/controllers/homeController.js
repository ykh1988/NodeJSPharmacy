(function (homeController) {

    homeController.init = function (app) {
        app.get("/", function (request, response) {
            response.render("index", { title: "Learning" });
        });
    }

})(module.exports);