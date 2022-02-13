const articleController = require("../app/controllers/article.ctrl");
const auth = require("../middlewares/auth")
module.exports = (router) => {
  //Get all article
  router.get("/articles",articleController.getAll);

// Create an article
  router.post("/article", auth, articleController.createArticle);

//get an article by slug
  router.get("/article/:slug", articleController.getArticle);

//get an article by author
router.get("/me/article", auth, articleController.getArticleForAuthor); 

  //Update an article by id
  router.put("/article/:id",auth, articleController.updateArticle);

//   Dlete an article by id
  router.delete("/article/:id",auth, articleController.deleteArticle);
};
