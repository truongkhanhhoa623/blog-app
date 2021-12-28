const articleController = require("../app/controllers/article.ctrl");
const auth = require("../middlewares/auth")
module.exports = (router) => {
  //Get all article
  router.get("/articles",articleController.getAll);

// Create an article
  router
  .route("/article")
  .post(articleController.createArticle);

//get an article by slug
  router.get("/article/:slug",articleController.getArticle);

  //Update an article by id
  router
  .route("/article/:id")
  .put(articleController.updateArticle);

  //Dlete an article by id
  router
  .route("/article/:id")
  .delete(articleController.deleteArticle);
};
