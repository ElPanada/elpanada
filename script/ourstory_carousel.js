let arr = ["Company Profile", "Mission", "Vision"];
let img_arr = ["logohd.png", "mision.jpg", "vision.jpg"]
let n;
let description;
function description_text()
{
    if(n==1)
    {
        description = "Our mission is to be a source of pride for the city of Bulacan. Through our food, we will share the history and culture of our province with the world.";
    }
    else if(n==2)
    {
        description = "To maintain the excellent taste of our Baliwag empanada and to extend the same quality to all of our other products while cocreating the comfort from the food and experience we serve, redefining tradition, and creating innovative products that everyone would love.";
    }
    else
    {
        description = "El Panada Baliwag is a dream business started by an undergrad college student who has been working as a call center agent. After years of working, he decided to pursue his passion for food and entrepreneurship. He have an innovative idea about the traditional Filipino comfort food, empanada, and create unique and great products for both locals and tourists alike. He started selling unique empanadas last November 28, 2020, on the side of the streets with just a small tent & a heart for passion and dedication for his creation. Now, he is very grateful that he already established the main branch at Tangos, Baliwag, Bulacan, a second branch at Maguinao Food Park, San Rafael Bulacan, and surprise pop-stores around Pulilan, Plaridel, Malolos & Pamapanga areas! The owner of this wonderful business is Mr. Abigail Avien F. Clarin. He is committed to provide a unique and memorable experience with delicious treats to every customer wherein it always sells out. El Panada is more than a product, we wanted to be the heart and pride of Baliwag City.";
    }
}
function firstext()
{
    n = 0;
    document.getElementById("imgstory").src = "img/"+img_arr[n];
    document.getElementById("title").innerHTML = arr[n];
    description_text();
    document.getElementById("desc").innerHTML = description;
}
function next()
{   
    if(n < arr.length-1){
        n= n+1;
        document.getElementById("title").innerHTML = arr[n];
        document.getElementById("imgstory").src = "img/"+img_arr[n];
        description_text();
        document.getElementById("desc").innerHTML = description;
        // console.log(n);
    }
    else if(n == arr.length-1){
        n = -1;
        document.getElementById("title").innerHTML = arr[n+1];
        document.getElementById("imgstory").src = "img/"+img_arr[n+1];
        description_text();
        document.getElementById("desc").innerHTML = description;
        n = n+1;
        // console.log(n);
    }
}
function back()
{
    if(n>0){
        n = n-1
        document.getElementById("title").innerHTML = arr[n];
        document.getElementById("imgstory").src = "img/"+img_arr[n];
        description_text();
        document.getElementById("desc").innerHTML = description;
        console.log(n);
    }

    else if(n == 0){
        n = arr.length-1;
        document.getElementById("title").innerHTML = arr[n];
        document.getElementById("imgstory").src = "img/"+img_arr[n];
        description_text();
        document.getElementById("desc").innerHTML = description;
        n-1;
        console.log(n);
    }
}
window.onload = firstext();