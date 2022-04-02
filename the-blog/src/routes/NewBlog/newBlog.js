import { useState } from "react";
import Header from "../../components/Header/Header";
import "./newBlog.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase-config";

export default function NewBlog() {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogAuthor, setNewBlogAuthor] = useState("");
  const [newBlogDescription, setNewBlogDescription] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");
  const [newBlogImage, setNewBlogImage] = useState("");

  const blogsCollectionRef = collection(db, "blogs");

  const createBlog = async () => {
    await addDoc(blogsCollectionRef, {
      title: newBlogTitle,
      author: newBlogAuthor,
      description: newBlogDescription,
      content: newBlogContent,
      url: newBlogImage,
    });
  };

  return (
    <div className="newBlog">
      <Header />
      <div className="newBlogForm">
        <input
          placeholder="Title"
          className="newBlogTitle"
          onChange={(event) => {
            setNewBlogTitle(event.target.value);
          }}
        ></input>
        <input
          placeholder="Your name goes here.."
          className="newBlogAuthor"
          onChange={(event) => {
            setNewBlogAuthor(event.target.value);
          }}
        ></input>
        <textarea
          placeholder="A description of your article.."
          className="newBlogDescription"
          onChange={(event) => {
            setNewBlogDescription(event.target.value);
          }}
        ></textarea>
        <textarea
          placeholder="Write your story.."
          className="newBlogContent"
          onChange={(event) => {
            setNewBlogContent(event.target.value);
          }}
        ></textarea>
        <label className="newBlogImage">
          <input
            type="file"
            name="myImage"
            accept="image/x-png,image/gif,image/jpeg"
            onChange={(event) => {
              setNewBlogImage(event.target.value);
            }}
          />
          Upload Image
        </label>
        <button onClick={createBlog} className="submitForm">
          Create
        </button>
      </div>
    </div>
  );
}
