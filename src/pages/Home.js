import LogoImg from "../assets/images/logoNCC 1.png";
import "../styles/pages/Home.scss";
import CssIconImg from "../assets/images/css-icon 1.png";
import HTMLIconImg from "../assets/images/html-icon 1.png";
import URLIconImg from "../assets/images/url-icon 1.png";

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="logo">
          <img src={LogoImg} alt="logo" className="logo__img" />
        </div>
        <div className="des-box">
          <h1 className="des-box__title">Lorem ipsum dolor sit asmet?</h1>
          <p className="des-box__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            tristique consequat placerat. Vestibulum auctor pellentesque sem, eu
            posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
            facilisis, ligula in mattis sodales, augue justo tristique nulla,
            sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
            mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
            convallis. Quisque suscipit maximus vestibulum. Phasellus congue
            mollis orci, sit amet luctus augue tristique eu. Donec vulputate
            odio neque, sed semper turpis pellentesque a.
          </p>
        </div>
        <div className="grid-box">
          <div className="grid-box__item">
            <h2 className="grid-box__title">Lorem ipsum dolor sit amet</h2>
            <div className="grid-box__content">
              <p className="grid-box__text">
                <img src={CssIconImg} alt="css" className="grid-box__img" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="grid-box__item">
            <h2 className="grid-box__title">Lorem ipsum dolor sit amet</h2>
            <div className="grid-box__content">
              <p className="grid-box__text">
                <img src={HTMLIconImg} alt="css" className="grid-box__img" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
          <div className="grid-box__item">
            <h2 className="grid-box__title">Lorem ipsum dolor sit amet</h2>
            <div className="grid-box__content">
              <p className="grid-box__text">
                <img src={URLIconImg} alt="css" className="grid-box__img" />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                dui sodales, faucibus libero ut, posuere felis. Donec imperdiet
                suscipit accumsan. Aenean consequat condimentum velit ut tempor.
                Nam porta massa in metus bibendum congue. Pellentesque ultrices
                liquam egestas nunc at ullamcorper ultricies. Donec feugiat
                velit nulla, vel sodales est ullamcorper id. Aenean consequat
                condimentum velit ut tempor. Nam porta massa in metus bibendum
                congue. Pellentesque ultrices vestibulum mattis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
