import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

const Styledbtn = styled.div`
  .top_btn {
    position: fixed;
    bottom: 5%;
    right: 5%;
    z-index: 999;
    button {
      width: 60px;
      height: 60px;
      color: #fff;
      background-color: #555;
      padding: 12px;
      cursor: pointer;
      border: 1px solid #555;
      border-radius: 50%;
      transition: all 0.3s ease;
      &:hover {
        color: #555;
        background-color: #fff;
      }
    }
    @media (max-width: 1023px) {
      bottom: 4%;
      right: 6%;
    }
    @media (max-width: 767px) {
      width: 30px;
      height: 30px;

      bottom: 8%;
      right: 14%;
      button {
        font-size: 14px;
      }
    }
  }
`;

const ScrollTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false);

  const ScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const ShowBtnClick = () => {
      if (window.scrollY > 800) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };
    window.addEventListener("scroll", ShowBtnClick);
    return () => {
      window.addEventListener("scroll", ShowBtnClick);
    };
  }, []);

  return (
    <Styledbtn>
      {showBtn && (
        <div className="top_btn">
          <button onClick={ScrollTop} type="button">
            Top
          </button>
        </div>
      )}
    </Styledbtn>
  );
};

export default ScrollTopBtn;
