// import Swiper bundle with all modules installed
// 匯入全部模組
import Swiper from "swiper/bundle";

// test

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1, // 一次呈現幾張
  slidesPerGroup: 1, // 一個群組內有幾張投影片
  spaceBetween: 24, // 每個內容之間的間隔為 24px
  //間隔的設置通過 JavaScript 傳遞到數據庫，然後返回並應用，而不是通過本地 CSS 設置。

  loop: true, // 循環播放

  // 分頁展示方式
  pagination: {
    el: ".swiper-pagination",
    type: "fraction", // 分數
  },

  // 左右箭頭 功能設定
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //RWD
  breakpoints: {
    767: {
      slidesPerView: 2, // 一次呈現幾張
      slidesPerGroup: 1, // 一個群組內有幾張投影片
      spaceBetween: 48, // 每個內容之間的間隔為 48px
    },
  },
});

// test2

const mySwiper2 = new Swiper('.mySwiper2', {
    // 循環播放
    loop: true,
    // 左右箭頭    
    navigation: {
      prevEl: '.mySwiper2-button-prev',
      nextEl: '.mySwiper2-button-next',
    },
    slidesPerView: 1,
    centeredSlides: true, //active slide 置中
  
    breakpoints: {
      768: {
        slidesPerView: 1.2, // slide 預覽 
        spaceBetween: 40, // slide 間距
      }
    },
    // 自動撥放
    autoplay: {
      delay: 2000,
    },
  });
  // 參考文章:https://blog.csdn.net/qq_42855675/article/details/112850049