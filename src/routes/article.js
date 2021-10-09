const articleController = require("../app/controllers/article.ctrl");

module.exports = (router) => {
  //Get all article
  router
  .route("/articles")
  .get(articleController.getAll);

// Create an article
  router
  .route("/article")
  .post(articleController.createArticle);

//get an article by Id
  router
  .route("/article/:id")
  .get(articleController.getArticle);

  //Update an article by id
  router
  .route("/article/:id")
  .put(articleController.updateArticle);

  //Dlete an article by id
  router
  .route("/article/:id")
  .delete(articleController.deleteArticle);
};
