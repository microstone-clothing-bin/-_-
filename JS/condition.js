const age = parseInt(prompt("How old are you?"));

if(age === 20)          // JavaScript에서는 ==대신에 ===가 같음을 의미
    console.log("20살이 되신 것을 축하드립니다!");
else if(age !== 20)
    console.log("20살이 아니면 신학기 선물을 받을 수 없습니다.");

console.log(isNaN(age));        // age is Not a Number --> false