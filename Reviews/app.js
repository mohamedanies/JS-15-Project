// local reviews data
const reviews = [
    {
      id: 1,
      name: "mohamed anis",
      job: "web developer",
      img:
        "./anis.png",
      text:
           " hello , i'm a pyhton develpper"   },
    {
      id: 2,
      name: "ahmed said",
      job: "web designer",
      img:
        "./angular.png",
      text:
        " Disrupt glossier gastropub enamel pin fashion axs artisan narwhal.",
    },
    {
      id: 3,
      name: "islam taher",
      job: "intern",
      img:
        "./brave.jpg",
      text:
        "Sriracha literally fed 8-bit,lette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "ahmed nagy",
      job: "the boss",
      img:
        "./Toy_Story.jpg",
      text:
        "schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];

 //  select items 

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");



// set starting item

let currentItem = 0;

// loading initial item

window.addEventListener("DOMContentLoaded", function(){
    showPerson();
  
});

// for(let i =0; i < reviews.length; i++){
//     const item = reviews[currentItem];
//     //img.src = reviews[currentItem].img;
//     img.src = item.img;
//     author.textContent = item.name;
//     job.textContent = item.job;
//     info.textContent = item.text;
//     currentItem +=1;
    
// }

function showPerson(){
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

function getRandomNumber(){
    return (Math.floor(Math.random() * reviews.length));
};

// show next person
nextBtn.addEventListener('click', function(){
    currentItem++;
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson();
});

prevBtn.addEventListener('click', function(){
    currentItem--;
    if(currentItem < 0){
        currentItem = reviews.length -1;;
    }
    showPerson();
});

randomBtn.addEventListener('click', function(){
    currentItem = getRandomNumber(); 
    showPerson();
})




 