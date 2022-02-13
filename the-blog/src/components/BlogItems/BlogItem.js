import "./BlogItem.css";

function BlogItem({ title, url, description, author }) {
  return (
    <div className="blogs">
      <a href="https://medium.com">
        <div className="text">
          <h3 className="blogItem_title">{title}</h3>
          <p className="blogItem_author">By {author}</p>
          <p className="blogItem_description">{description}</p>
        </div>
        <img className="blogItem_img" src={url} />
      </a>
    </div>
  );
}

export default BlogItem;
