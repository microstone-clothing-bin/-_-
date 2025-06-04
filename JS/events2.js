const title = document.querySelector("div.hello:first-child h1"); 

function handleTitleClick() {
    const currentColor = title.style.color;
    let newColor;
    if(currentColor === "blue") 
        newColor = "tomato";
    else
        newColor = "blue";
    title.style.color = newColor;
    console.log(title.style.color);
}

title.addEventListener("click", handleTitleClick);
