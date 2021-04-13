const $badges = document.querySelector("header .badges");
const $toTop = document.querySelector("#to-top");
window.addEventListener(
  "scroll",
  _.throttle(() => {
    if (window.scrollY > 500) {
      // 배지 숨기기
      // gsap.to(요소, 지속시간, 옵션);
      gsap.to($badges, 0.6, {
        opacity: 0,
        display: "none",
      });
      // 버튼 보이기
      gsap.to("#to-top", 0.2, {
        // 원래 위치로 이동
        x: 0,
      });
    } else {
      // 배지 보이기
      gsap.to($badges, 0.6, {
        opacity: 1,
        display: "block",
      });

      // 버튼 숨기기
      gsap.to($toTop, 0.2, {
        // 화면 밖으로 숨기기
        x: 100,
      });
    }
  }, 300)
);

$toTop.addEventListener("click", () => {
  gsap.to(window, 0.7, {
    scrollTo: 0,
  });
});

const $fades = document.querySelectorAll(".visual .fade-in");

// opacity to 0
$fades.forEach(($fade, index) => {
  gsap.to($fade, 1, {
    delay: (index + 1) * 0.7,
    opacity: 1,
  });
});

new Swiper(".notice-line .swiper-container", {
  direction: "vertical",
  autoplay: true,
  loop: true,
});

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  autoplay: {
    // 딜레이 설정
    delay: 4000,
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-prev",
    nextEl: ".promotion .swiper-next",
  },
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: ".awards .swiper-prev",
    nextEl: ".awards .swiper-next",
  },
});

const $promotion = document.querySelector(".promotion");
const $promotionToggle = document.querySelector(".toggle-promotion");
let isHidePromotion = false;

$promotionToggle.addEventListener("click", () => {
  isHidePromotion = !isHidePromotion;
  if (isHidePromotion) {
    // 숨김
    $promotion.classList.add("hide");
  } else {
    // 보임
    $promotion.classList.remove("hide");
  }
});
function random(min, max) {
  return parseFloat(Math.random() * (max - min).toFixed(2));
}

function floatingObject(selector, delay, size) {
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}

floatingObject(".floating1", 1, 15);
floatingObject(".floating2", 0.5, 15);
floatingObject(".floating3", 1.5, 20);

const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach((spyEl) => {
  new ScrollMagic.Scene({
    triggerElement: spyEl,
    triggerHook: 0.8,
  })
    .setClassToggle(spyEl, "show")
    .addTo(new ScrollMagic.Controller());
});
