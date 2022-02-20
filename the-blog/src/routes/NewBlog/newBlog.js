import Header from "../../components/Header/Header";
import "./newBlog.css";
import { Image } from "phosphor-react";

export default function NewBlog() {
  return (
    <div className="newBlog">
      <Header />
      <div className="newBlogForm">
        <input placeholder="Title" className="newBlogTitle"></input>
        <textarea
          placeholder="A description of your article.."
          className="newBlogDescription"
          maxLength={100}
        ></textarea>
        <textarea
          placeholder="Write your story.."
          className="newBlogContent"
        ></textarea>
        <label className="newBlogImage">
          <input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
          />
          Upload Image
        </label>
        <button className="submitForm">Create</button>
      </div>
    </div>
  );
}
