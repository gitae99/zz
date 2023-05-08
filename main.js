const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".navbar__menu");
const icons = document.querySelector(".navbar__icons");

/* 메뉴를 클릭하면 메뉴바가 바로 없어지는 효과*/
menu.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});


if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual'; // 스크롤을 복원하지 않음.
}

const introTitle = document.getElementsByClassName("intro__title")[0];

const introButton = document.getElementsByClassName("intro__button")[0];
const game = document.getElementById("game");
// 타이틀 문구 타이핑
const title = "Hello\nHanshin University\nStudents";

let cnt = 0;
let timer = 0;

function typingIntroTitle() {
    let character = title[cnt++];

    if (character === "\n") {
        introTitle.innerHTML = introTitle.innerHTML + "<br/>";
    } else {
        introTitle.innerHTML = introTitle.innerHTML + character;
    }

    if (cnt === title.length) {
        clearInterval(timer);
        introButton.classList.add("show");
        return;
    }
}

window.onload = function() {
    timer = setInterval(typingIntroTitle, 150);
}


// 버튼 클릭 시 게임 목록으로 이동
introButton.addEventListener('click', () => {
    game.scrollIntoView({behavior: "smooth"});
});

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  icons.classList.toggle("active");
});




