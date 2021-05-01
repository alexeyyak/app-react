import React from "react";
import s from "./sidebar.module.css";
import Link from "./link/link";
import Friend from "./friend/friend";

const Sidebar = () => {
  return (
    <div>
      <div className={s.overflow}>
        <div className={s.wrapper}>
          <div className={s.channels}>
            <div className={s.block}>
              <div className={s.title}>channels</div>
              <div className={s.number}>11</div>
            </div>
            <div className={s.nav}>
              <ul className={s.items}>
                <Link message="# general" />
                <Link message="# support" />
                <Link message="# marketing" />
                <Link message="# thailand" />
                <Link message="# bali" />
                <Link message="# poland" />
                <Link message="# australia" />
                <Link message="# jobs" />
                <Link message="# startups" />
                <Link message="# italy" />
                <Link message="# freelance" />
              </ul>
            </div>
          </div>
          <div className={s.friends}>
            <div className={s.block}>
              <div className={s.title}>friends</div>
              <div className={s.number}>82</div>
            </div>
            <div className={s.nav}>
              <ul className={s.friend}>
                <Friend />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
