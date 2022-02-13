import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import apiArticle from "../../services/api/apiArticle";

export const WriteArticlePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const handleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleSaveArticle = () => {
    let params = {
      title,
      content,
      pushlish: false
    };
    apiArticle.createArticle(params).then(() => {
      window.location.replace("/me/store")
    });
  };
  return (
    <div className="new-page">
      <div className="container">
        <div className="row">
          <div className="col lg-12">
            <from className="create">
              <label for="title">Tiêu đề bài viết</label>
              <input
                onChange={handleChange}
                for="title"
                name="title"
                type="text"
              ></input>
              <CKEditor
                editor={ClassicEditor}
                data=""
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
              <button onClick={handleSaveArticle}>Lưu</button>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};
