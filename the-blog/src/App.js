import "./App.css";
import BlogItem from "./components/BlogItems/BlogItem.js";
import Hero from "./components/Hero/Hero.js";
import Footer from "./components/Footer/Footer.js";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title={"We create a modern beautiful photo."}
        url={
          "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
      />
      <BlogItem
        title="This is the title"
        url={
          "https://images.unsplash.com/photo-1644520963957-c454fee1e81c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
        author="The Author"
        description="The description of the blog written by the user will show up here. Just type more and more to see if it works. I think it does!"
      />
      <Footer />
    </div>
  );
}

export default App;
