import React from "react";
import s from "./info.module.css";
import { TiSocialFacebook } from "react-icons/ti";
import { VscTwitter } from "react-icons/vsc";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import { AiOutlineCaretDown } from "react-icons/ai";
import photo from "../../assets/images/profile/profile-photo.png";

const Info = () => {
  return (
    <div className={s.Info}>
      <div className={s.photo}>
        <img className={s.pic} src={photo} alt="" />
      </div>
      <div className={s.wrapper}>
        <div className={s.profile}>
          <h3 className={s.name}>Amilia Luna</h3>
          <h4 className={s.post}>UI Designer</h4>
        </div>
        <div className={s.icons}>
          <div className={s.icon}>
            <a href="/" className={s.link}>
              <TiSocialFacebook className={s.img} />
            </a>
          </div>
          <div className={s.icon}>
            <a href="/" className={s.link}>
              <VscTwitter className={s.img} />
            </a>
          </div>
          <div className={s.icon}>
            <a href="/" className={s.link}>
              <TiSocialInstagram className={s.img} />
            </a>
          </div>
          <div className={s.icon}>
            <a href="/" className={s.link}>
              <TiSocialLinkedin className={s.img} />
            </a>
          </div>
        </div>
        <div className={s.message}>
          <button className={s.btn}>
            Message
            <AiOutlineCaretDown className={s.btn_pic} />
          </button>
        </div>
        <div className={s.data}>
          <div className={s.item}>
            <h5 className={s.title}>Username</h5>
            <h5 className={s.desc}>@amilia_lu</h5>
          </div>
          <div className={s.item}>
            <h5 className={s.title}>Email</h5>
            <h5 className={s.desc}>a-luna@gmail.com</h5>
          </div>
          <div className={s.item}>
            <h5 className={s.title}>Skype</h5>
            <h5 className={s.desc}>amiluna</h5>
          </div>
          <div className={s.item}>
            <h5 className={s.title}>Timezone</h5>
            <h5 className={s.desc}>2:21 PM Local time</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
