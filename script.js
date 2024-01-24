const date=new Date();
document.getElementById("date").innerHTML=date.getDate();
document.getElementById("month").innerHTML=date.getMonth()+1;
document.getElementById("year").innerHTML=date.getFullYear();
document.getElementById("hours").innerHTML=date.getHours();
document.getElementById("minutes").innerHTML=date.getMinutes();



const data=[
    {
        name:"k Sairam",
        age:23,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },
    {
        name:"Sohith Kondle",
        age:24,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sai Charan",
        age:21,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sai Vamshi",
        age:22,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Deepak",
        age:20,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Keerthi Priya",
        age:21,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Shiva",
        age:24,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Ramya Gudise",
        age:25,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Monika",
        age:27,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Harshitha",
        age:20,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Saleem",
        age:25,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Shivaramulu",
        age:24,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Supriya",
        age:25,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Shivani",
        age:28,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Tejo",
        age:26,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Preethi",
        age:22,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Kiran",
        age:24,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sirisha",
        age:27,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Praneeth",
        age:25,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Priya",
        age:20,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Raghu",
        age:26,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sneha Nimmala",
        age:20,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Roshni Saragadam",
        age:21,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Rohith",
        age:28,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Maneesh",
        age:22,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Venkata Sai",
        age:20,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Maneesha",
        age:25,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Surya Rao",
        age:29,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sampreeth Kota",
        age:24,
        gender:"Male",
        company:"IT MONKS SOLUTIONS"
    },{
        name:"Sowmya Sri",
        age:26,
        gender:"Female",
        company:"IT MONKS SOLUTIONS"
    }
];



function createCards(cardsData){
    let container=document.getElementById("cardsContainer");
    container.innerHTML="";

    cardsData.forEach(ele => {
        let card=document.createElement("div");
        card.className="cards";
        card.innerHTML = `
        <h3>Name: ${ele.name}</h3>
        <p>Age: ${ele.age}</p>
        <p>Gender: ${ele.gender}</p>
        <p>Company: ${ele.company}</p>
    `;

    container.appendChild(card);
    });
    document.getElementById("count").innerHTML=cardsData.length;
};
createCards(data);


// invoking all Employes 
function allEmployes(data){
    const allCards=data;
    createCards(allCards);
}

// invoke with Male button and pass DataObjects
function displayMaleOnly(data){
    const maleInfo=data.filter(ele=>ele.gender=="Male");
    createCards(maleInfo);
}

// invoke with Female button and pass DataObjects
function displayFemaleOnly(data){
    const femaleInfo=data.filter(ele=>ele.gender=="Female");
    createCards(femaleInfo);
}


// Sorting data 
function sortDataByAge(data){
    const sortedData=data.sort((a,b)=>b.age-a.age);
    createCards(sortedData);
};


// invoking all Employee Details
document.getElementById("All").addEventListener("click",function(){
    allEmployes(data);
});


// invoking Sorted Data
document.getElementById("Sort").addEventListener("click",function(){
    sortDataByAge(data);
});


// invoking Male and Female
document.getElementById("male").addEventListener("click",function(){
    displayMaleOnly(data)}
    );
document.getElementById("female").addEventListener("click",function(){
    displayFemaleOnly(data);
});