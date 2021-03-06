"use strict";

// 1.navbar 윈도우 스크롤을 이용하여 올라가면 투명 아래로가면 블루로 바꾼다
const navbar = document.querySelector("#navbar");

// getBoundingClientRect()경우 요소에 적용된 변환이 없을 때 의 너비 및 높이와 동일 합니다
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  //   console.log(window.scrollY);
  //   console.log(navbarHeight);
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

//2.선택하면 해당 셀렉터 위치에 이동한다
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target;

  //data-link 값을 link에 넣어둔다
  const link = target.dataset.link;

  if (link == null) {
    return;
  }
  navbarMenu.classList.remove('open');
  //scrollTo 함수 활용
  //수직정렬 block 수평정렬 inline
  // const scrollTo = document.querySelector(link);
  // scrollTo.scrollIntoView({
  //   behavior: "smooth",
  //   block: "center",
  //   inline: "nearest",
  // });
  scrollIntoView(link);
});

//3.contact me 클릭시 contact로 이동
const IntroContactBtn=document.querySelector('.Intro__contact');
IntroContactBtn.addEventListener('click',()=>{
  scrollIntoView('#contact');
})

//4.홈화면이 점점 옅어진다
const Intro =document.querySelector('.Intro__container');
const IntroHeight=Intro.getBoundingClientRect().height;
document.addEventListener('scroll',()=>{
  Intro.style.opacity=1-window.scrollY/IntroHeight;
})

//5.위로 올라가는 버튼
const arroUp=document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY>navbarHeight/2){
        arroUp.classList.add('visible');
    } else{
        arroUp.classList.remove('visible');
    }
});

arroUp.addEventListener('click',()=>{
  scrollIntoView('#Introduce')
})

//6. Portfolio 필터링
const workBtnContainer=document.querySelector('.Portfolio__categories');
const projectContainer=document.querySelector('.Portfolio__projects');
const projects=document.querySelectorAll('.project');
workBtnContainer.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter==null){
        return;
    }

    // Remove Selectio from the previous item select the new one
    const active=document.querySelector('.category__btn.selected');
    active.classList.remove('selected');
    const target=
    e.target.nodeName==='BUTTON' ? e.target : e.target.parentNode;

    target.classList.add('selected');

    projectContainer.classList.add('anim-out');
    setTimeout(()=>{
        projects.forEach((project)=>{
            if(filter== '*' || filter==project.dataset.type){
                project.classList.remove('invisible');
            } else{
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('anim-out');
    },300);
  });

//7.Navbar 토글 버튼
// Navbar toggle button for small screen
const navbarToggleBtn=document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
});







function scrollIntoView(selector){
  const scrollTo=document.querySelector(selector);
  scrollTo.scrollIntoView({behavior:'smooth',block: "center"});
}

