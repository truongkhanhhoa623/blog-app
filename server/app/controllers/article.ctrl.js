const Article = require("../models/Article");

module.exports = {
  //[GET] /article
  getAll: (req, res, next) => {
    Article.find(req.params.id)
      .populate({ path: "author", select: "fullname picture" })
      .then((articles) => {
        articles = articles.map((article) => article.toObject());
        res.status(200).send(articles);
      })
      .catch((err) => {
        res.status(404).send(err);
      });
  },
  //[GET] /articles/:slug
  getArticle: (req, res, next) => {
    Article.findOne({ slug: req.params.slug })
      .populate({ path: "author", select: "fullname picture" })
      .then((article) => {
        res.status(200).send(article);
      });
  },
  //[POST] /article
  createArticle: (req, res, next) => {
    const article = new Article(req.body);
    article
      .save()
      .then(() => {
        res.status(200).send(req.body);
      })
      .catch((err) => {
        res.status(400).send({ msg: err });
      });
  },
  //[PUT] /articles/:id
  updateArticle: (req, res, next) => {
    Article.updateOne({ _id: req.params.id }, req.body)
      .then(() => {
        res.status(200).send({ msg: "Update success" });
      })
      .catch((err) => {
        res.status(404).send({ msg: err });
      });
  },
  //[DELETE] /articles/:id
  deleteArticle: (req, res, next) => {
    Arricle.deleteOne({ _id: req.params.id })
      .then(() => {
        res.status(200).send({ msg: "Article deleted" });
      })
      .catch((err) => {
        res.status(404).send(req.params.id);
      });
  },
};
