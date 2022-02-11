import logo from "./logo.svg";
import "./App.css";
import BlogItem from "./components/BlogItems/BlogItem.js";
import Hero from "./components/Hero/Hero.js";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1 className="heading">THE BLOG</h1>
        <h1 className="search"> SEARCH</h1>
      </div>
      <Hero
        title={"We create a modern beautiful photo. blahhh duiahd ahuwo"}
        url={
          "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
      />
      <BlogItem
        title="This is the title"
        url={
          "https://images.unsplash.com/photo-1419847359648-f75ea40be039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
        description="The description of the blog written by the user will show up here. Just type more and more to see if it works. I think it does!"
        author="The Author"
      />
      <BlogItem
        title="This is the title"
        url={
          "https://images.unsplash.com/photo-1419847359648-f75ea40be039?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        }
        description="The description of the blog written by the user will show up here. Just type more and more to see if it works. I think it does!"
        author="The Author"
      />
      <BlogItem
        title="This is the title"
        description="The description of the blog written by the user will show up here. Just type more and more to see if it works. I think it does!"
        author="The Author"
      />
    </div>
  );
}

export default App;
