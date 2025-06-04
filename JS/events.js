const title = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() {           // 이름은 고정 X. 내맘대로 작성 가능
    title.style.color = "blue";
    console.log("title was clicked!");
}

function handleMouseEnter() {
    title.innerText = "Mouse is here";
}

function handleMouseLeave() {
    title.innerText = "Mouse is gone";
}

function handleWindowCopy() {
    alert("copier!");
}

function handleWindowOnline() {
    alert("WIFI Connect!")
}

function handleWindowOffline() {
    alert("WIFI Disconnected!")
}

// handleTitleClick(); 내가 곧바로 함수 실행시킬 경우는 이렇게

title.addEventListener("click", handleTitleClick);      // 유저의 활동에 따라 이벤트 실행시키고 싶을 경우
title.addEventListener("mouseenter", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("copy", handleWindowCopy);      // window에 연결해 이벤트 실행
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);