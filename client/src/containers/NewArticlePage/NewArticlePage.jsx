import React, { Component } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { useState } from "react";
import apiArticle from "../../services/api/apiArticle";
import { useFormik } from "formik";
import { Input } from "../../components";
import "./NewArticlePage.scss"
export const NewArticlePage = () => {
  const [content, setContent] = useState("");

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    onSubmit: (values) => {
        console.log("submittt")
        let params = {
            title: values.title,
            content: content,
            pushlish: false,
          };
        apiArticle.createArticle(params).then(() => {
            window.location.replace("/me/store");
          });
    },
  });
  return (
    <div className="new-page">
      <div className="container">
        <div className="row">
          <div className="col lg-12">
            <form className="create" onSubmit={formik.handleSubmit}>
              <label for="title">Tiêu đề bài viết</label>
              <Input
                title="Tiêu đề"
                placeholder="Tiêu đề"
                type="text"
                id="title"
                name="title"
                value={formik.values.onChange}
                onChange={formik.handleChange}
                error={formik.touched.title && formik.errors.title}
              />
              <br></br>
              <CKEditor
                editor={ClassicEditor}
                data=""
                onReady={(editor) => {
                  // You can store the "editor" and use when it is needed.
                  console.log("Editor is ready to use!", editor);
                  editor.editing.view.change((writer) => {
                    writer.setStyle(
                      "height",
                      "600px",
                      editor.editing.view.document.getRoot()
                    );
                  });
                }}
                onChange={(event, editor) => {
                  const data = editor.getData();
                  setContent(data)
                  console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                  console.log("Blur.", editor);
                }}
                onFocus={(event, editor) => {
                  console.log("Focus.", editor);
                }}
              />
              <button className="create__btn" type="submit">Lưu</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
