import "./Hero.css";

function Hero({ title, url, description, author }) {
  return (
    <div className="hero">
      <div className="left_section">
        <h3 className="hero_title">{title}</h3>
        <img className="hero_img" src={url} />
      </div>
      <div className="right_section">
        <h4 className="heading"> Welcome</h4>
        <p>
          The is a website deigned to make you feel like you have a bestfriend.
          An online journal that you can share with your friends while sharing
          your inner-most feelings. I am only writing this to make my website
          look professional and to make the design work. It has no real use but
          it makes me happy so I'm going to use it. No one can stop me. I hope
          you enjoy your experience here.
        </p>
      </div>
    </div>
  );
}

export default Hero;
