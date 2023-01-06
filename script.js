var ansattnavn = document.querySelector("#Ansattnavn")
var stilling = document.querySelector("#stilling")
var info = document.querySelector("#info")
var input = document.querySelector(".input")
var button = document.querySelector(".button")
var img = document.createElement('img');
container_img.appendChild(img);

var list = [
    {
        ansattnavn: "Anette Øwre Bollvåg",
        stilling: "Undervisningsleder",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos fuga illo tempora. ",
        Image: "img/anette-owre-bollvag.jpg"
    },
    {
        ansattnavn: "Laila Johanne Handelsby",
        stilling: "Rektor",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos fuga illo tempora. ",
        Image: "img/rektor-laila-handelsby.jpg"
    },
    {
        ansattnavn: "Torben Andersen",
        stilling: "assisterende rektor",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos fuga illo tempora. ",
        Image: "img/torben-gjerstad.jpg"
    },
    {
        ansattnavn: "Martin Sandø-Frank",
        stilling: "studieleder",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos fuga illo tempora. ",
        Image: "img/martin-frank.jpg"
    },
    {
        ansattnavn: "Cathrine Mannsakerg",
        stilling: "Undervisningsleder",
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quos fuga illo tempora. ",
        Image: "img/cathrine.mannsaaker.jpg"
    },

    
]




button.addEventListener("click", function(){
    img.src = " "
    ansattnavn.innerHTML = " "
    stilling.innerHTML = " "
    info.innerHTML = " "
    if (input.value == "Anette" || input.value == "anette") {
        img.src = list[0].Image
        ansattnavn.innerHTML = list[0].ansattnavn
        stilling.innerHTML = list[0].stilling
        info.innerHTML = list[0].info
    }
    else if (input.value == "Laila" || input.value == "laila") {
        img.src = list[1].Image
        ansattnavn.innerHTML = list[1].ansattnavn
        stilling.innerHTML = list[1].stilling
        info.innerHTML = list[1].info
    }
    else if (input.value == "Torben" || input.value == "torben") {
        img.src = list[2].Image
        ansattnavn.innerHTML = list[2].ansattnavn
        stilling.innerHTML = list[2].stilling
        info.innerHTML = list[2].info
    }
    else if (input.value == "Martin" || input.value == "martin") {
        img.src = list[3].Image 
        ansattnavn.innerHTML = list[3].ansattnavn
        stilling.innerHTML = list[3].stilling
        info.innerHTML = list[3].info
    }
    else if (input.value == "Cathrine" || input.value == "cathrine") {
        img.src = list[4].Image
        ansattnavn.innerHTML = list[4].ansattnavn
        stilling.innerHTML = list[4].stilling
        info.innerHTML = list[4].info
    }
    else if (input.value != "") {
       
        ansattnavn.innerHTML = "Denne persjonen er ikke i databasen"
        stilling.innerHTML = "Denne persjonen sin stilling er ikke i databasen"
        info.innerHTML = "Informasjon om Denne persjonen er ikke i databasen"
        input.value = ""
    }
    
    
})