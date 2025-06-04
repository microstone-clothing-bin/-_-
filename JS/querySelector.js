const title1 = document.querySelector(".hello h1:first-child");        
// querySelector : element를 CSS 방식으로 검색 가능 - 클래스 hello 안에 있는 h1 가져옴
// 똑같은 클래스, 같은 태그를 가진 것들이 여러 개일 경우, 첫번째 것만 가져옴

const title2 = document.querySelectorAll(".hello h1");
// 위의 함수로 똑같은 클래스, 같은 태그를 가진 것들을 리스트로 한번에 반환 가능

const title2_1 = document.getElementsByTagName("h1");
const title2_2 = document.getElementsByClassName("hello");      
// 두 개 다 배열로 한번에 불러오지만 querySelector가 CSS Selector를 전달할 수 있어서 이게 더 유용

const title3 = document.querySelector("#hi");   // 대신 입력하는 문자열이 id를 입력하는 것인지 기호를 통해 명시해줘야됨
const title3_1 = document.getElementById("hi");     // querySelector를 이용해 id로 불러 올수도 있음

console.dir(title3);

title3.style.color = "blue";