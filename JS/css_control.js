const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    // const clickedClass = "clicked";
    /* 하나의 value를 여러 번 사용할 때, 타자 실수로 인한 오류를 발견하기 쉽게 만들기 위해 const로 변수 지정.*/

    // if(h1.classList.contains(clickedClass))
    //     h1.classList.remove(clickedClass);
    // else
    //     h1.classList.add(clickedClass);
    /* className을 사용하면, 기존에 존재하는 클래스에 새로운 클래스를 추가할 때 기존 클래스가 대체되어 없어짐 (여러 개의 클래스 존재 불가)
    // 대신 classList를 이용하면, classList 안의 각 클래스를 끌고 와서 조작할 수 있음*/

    h1.classList.toggle("clicked");
    // toggle : 리스트에 지정한 값(토큰)이 존재하면 remove, 존재하지 않을 때는 add 시켜주는 함수. 위의 코드를 한줄로 요약 가능
}

h1.addEventListener("click", handleTitleClick);