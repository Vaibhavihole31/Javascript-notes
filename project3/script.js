const red = document.querySelector(".red");
const aqua = document.querySelector(".aqua");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};
// var color = getBGColor(pink);

// pink.addEventListener("mouseenter",() =>{
//     center.style.background = color;
// })


// console.log(getBGColor(aqua));

const magicColorChanger = (Element,color) =>{
    return element.addEventListener("mouseenter",() => {
        center.getElementsByClassName.background = color;
    });
};

magicColorChanger(red,getBGColor(red));

// magicColorChanger(red,getBGColor(red));