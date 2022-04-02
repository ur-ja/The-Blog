import "./App.css";
import BlogItem from "./components/BlogItems/BlogItem.js";
import Hero from "./components/Hero/Hero.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import { collection, getDocs } from "firebase/firestore";

function App() {
  const [blogs, setBlogs] = useState([]);
  const blogsCollectionRef = collection(db, "blogs");

  useEffect(() => {
    const getBlogs = async () => {
      const data = await getDocs(blogsCollectionRef);
      setBlogs(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getBlogs();
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero
        title={"We create a modern beautiful photo."}
        url={
          "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
      />
      {blogs.map((blog) => {
        return (
          <BlogItem
            title={blog.title}
            url={blog.url}
            author={blog.author}
            description={blog.description}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
