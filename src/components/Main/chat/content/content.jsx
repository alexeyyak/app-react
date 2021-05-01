import React from "react";
import s from "./content.module.css";
import img1 from "../../../../assets/images/main/people1.png";
import img2 from "../../../../assets/images/main/people2.png";
import img3 from "../../../../assets/images/main/people3.png";
import img4 from "../../../../assets/images/main/people4.png";
import img5 from "../../../../assets/images/main/people5.png";
import photo from "../../../../assets/images/main/my-top-places.png";
import smile from "../../../../assets/images/main/smile.png";

const Content = () => {
  return (
    <div>
      {/*block*/}
      <div className={s.block}>
        <img className={s.img} src={img1} alt="" />
        <div className={s.profile}>
          <div className={s.info}>
            <div className={s.name}>Jeshua Stout</div>
            <div className={s.data}>6:38 PM</div>
          </div>
          <p className={s.text}>
            <span>@pierrhack I did for 6 days in Iceland</span>
          </p>
        </div>
      </div>
      {/*timeblock*/}
      <div className={s.timeblock}>
        <time className={s.datatime} datatime="">
          Monday, October 22nd
        </time>
      </div>
      {/*block*/}
      <div className={s.block}>
        <img className={s.img} src={img2} alt="" />
        <div className={s.profile}>
          <div className={s.info}>
            <div className={s.name}>Harold Adams</div>
            <div className={s.data}>5:02 PM</div>
          </div>
          <p className={s.text}>
            Which country to visit next? This is a photo with my friends -
            celebrating in Bali
            <br />
            <a href="/" className={s.href}>
              <span>my-top-places.jpg</span>
            </a>
          </p>
          <div className={s.photo}>
            <img src={photo} alt="" />
            <img className={s.smile} src={smile} alt="" />
            <p className={s.photo_text}>3</p>
          </div>
        </div>
      </div>
      {/*timeblock*/}
      <div className={s.timeblock}>
        <time className={s.datatime} datatime="">
          Yesterday
        </time>
      </div>
      {/*block*/}
      <div className={s.block}>
        <img className={s.img} src={img3} alt="" />
        <div className={s.profile}>
          <div className={s.info}>
            <div className={s.name}>Aada Laine</div>
            <div className={s.data}>11:54 AM</div>
          </div>
          <p className={s.text}>
            <span>
              @har_adams wow it’s amazing, I want to buy a van and travelling
              next year
            </span>
          </p>
        </div>
      </div>
      {/*timeblock*/}
      <div className={s.timeblock}>
        <time className={s.datatime} datatime="">
          Today
        </time>
      </div>
      {/*block*/}
      <div className={s.block}>
        <img className={s.img} src={img4} alt="" />
        <div className={s.profile}>
          <div className={s.info}>
            <div className={s.name}>Nala Hester</div>
            <div className={s.data}>11:54 AM</div>
          </div>
          <p className={s.text}>
            Working from a van in Australia isn’t feasible if you need internet.
            It may have improved over the last years but I spent some time in a
            camper van around Tasmania and internet was a real problem (and
            Tasmania is tiny compared to the rest of the country).
          </p>
        </div>
      </div>
      {/*block*/}
      <div className={s.block}>
        <img className={s.img} src={img5} alt="" />
        <div className={s.profile}>
          <div className={s.info}>
            <div className={s.name}>Ramon Bateman</div>
            <div className={s.data}>11:59 AM</div>
          </div>
          <p className={s.text}>
            <span>@aa_da</span> What's the reason for the van? Saving money or
            just like to get outside? If you've got a stable source of income
            you could always do some short term Airbnbs + buy a truck/topper,
            build a platform in the back. That way you can always convert it
            back to a truck and sleep in an apartment if you want.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
