const holder = document.querySelector(".cardholder");
const url = ["1.png","2.png","3.png","1.png","2.png","3.png"];
let count = 0;
createCard("SGR STUDIO");
count = 1;
createCard("SGR STUDIO");
count = 2;
createCard("SGR STUDIO");
setInterval(() => {
    document.querySelector(".card:last-child").remove();
    count++;
    if(count>5) count = 0;
    createCard("SGR STUDIO");
}, 3000);

function createCard(text){
    let card = document.createElement("div");
    card.setAttribute("class","card");
    card.setAttribute("id",""+count);
    card.innerHTML="<div class='project-name'><h3>"+ text +"</h3></div><img src='https://sgr-studio.github.io/database/assets/textures/img/wallpaper/" + url[count] + "'>";
    holder.prepend(card);
}
