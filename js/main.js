
//getting DOM elements to change
const time = document.getElementById('time');
const message = document.getElementById('message');
const name = document.getElementById('name');
const aim = document.getElementById('aim');


//setting time
function setTime(){
    //let timenow = new Date(2019,06,09,00,3,6),
    let timenow = new Date(),
        hours = timenow.getHours(),
        mins = timenow.getMinutes(),
        secs = timenow.getSeconds();
    
    //getting meridian
    let meridian = hours>=12 ? 'PM' : 'AM';

    //changing to 12 hour format
    let hour = hours%12 || hours;
    
    time.innerHTML = `${hour}<span>:</span> ${addZero(mins)}<span>:</span> ${addZero(secs)} ${meridian}`;

    setTimeout(setTime,1000);
}

//add zeros to minutes and seconds
function addZero(timeElement){
    let n=parseInt(timeElement, 10);
    return (n < 10 ? '0' : '') + n.toString();
}


// set Background and Message
function setBackGroundMessage(){
    //let timenow = new Date(2019,06,06,1,3,6),
    let timenow = new Date(),
        hours = timenow.getHours();

    let daytime="";

    if(hours<12){
        daytime="Morning";
        document.body.style.color ="black";
    }
    else if(hours>=12 && hours <=16){
        daytime="Afternoon";
        document.body.style.color ="white";
    }
    else{
        daytime="Evening";
        document.body.style.color ="white";
    }

    document.body.style.backgroundImage = `url(../img/${daytime}_Original.jpg)`;
    message.textContent = `Good ${daytime}, `;
}



//saving Name or Aim
function setNameAim(e){
    if(e.type==='keypress'){
        if(e.which===1 || e.keyCode===1){
            let section=e.target;
            localStorage.setItem(section.id , section.innerText);
            section.blur();
        }
    }
    else{
        let section=e.target;
            localStorage.setItem(section.id , section.innerText);
    }
}

//get Name
function getName(){
    let loadname = localStorage.getItem('name');
    name.innerText = loadname===null ? "[Enter Name]" : loadname;
}

//get aim
function getAim(){
    let loadaim = localStorage.getItem('aim');
    aim.innerText = loadaim===null ? "[Enter Aim]" : loadaim;
}


//adding event listeners
name.addEventListener('keypress',setNameAim);
name.addEventListener('blur',setNameAim);
aim.addEventListener('keypress',setNameAim);
aim.addEventListener('blur',setNameAim);

//running functions
setTime();
setBackGroundMessage();
getName();
getAim();