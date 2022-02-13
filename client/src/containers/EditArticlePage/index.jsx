import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import apiArticle from "../../services/api/apiArticle";

export const EditArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState({});
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  useEffect(() => {
    const getArticle = async () => {
      try {
        const res = await apiArticle.getDetailArticle(slug);
        setArticle(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getArticle();
  }, []);
  const handleEditArticle = async () => {
    let params = {
      title,
      content,
    };
    apiArticle.updateArticle(article._id, params)
    .then((msg)=>{
        window.location.replace("/me/store")
        console.log(msg)
    })
    .catch((err)=>{
        console.log(err)
    })
   
  };
  return (
    <div className="edit-page">
      <div className="container">
        <div className="row">
          <div className="col lg-12">
            <div className="edit">
              <label htmlFor="title">Tiêu đề bài viết</label>
              <input
                onChange={handleChange}
                htmlFor="title"
                name="title"
                type="text"
                value={article.title}
              />
              <CKEditor
                editor={ClassicEditor}
                data={article.content}
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data);
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              <button onClick={handleEditArticle}>Lưu</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
