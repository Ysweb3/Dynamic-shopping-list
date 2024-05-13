const list = document.querySelector("ul");
let input = document.querySelector("#item");
const btn = document.querySelector("button");

function BtnOnClick(){
    let myItem = input.value;
    input.value = "";
    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button"); 

    listText.textContent = myItem;
    listBtn.textContent = "Delete";

    listItem.append(listText);
    listItem.append(listBtn);
    list.append(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    input.focus();
}

btn.addEventListener("click" , () => {
    BtnOnClick();
});
