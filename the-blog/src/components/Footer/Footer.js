import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_circle">
        <h1>.</h1>
      </div>
      <h1 className="footer_title">The Blog</h1>
      <div className="footer_line">
        <p>|</p>
      </div>
      <p className="footer_content"> © 2020 Broblocks — @whatever</p>
      <p className="footer_icon"># $ @ !</p>
    </div>
  );
}

export default Footer;
