import Img from "./assets/tomandbarbara.png";

export default function Header() {
  return (
    <header className="header">
      <h1>Golf Majors Quiz created especially for you,</h1>
      <p className="name">Tom Ward</p>
      <small>
        made with love from Barbara <img src={Img} alt="" />
      </small>
    </header>
  );
}
