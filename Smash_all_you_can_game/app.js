//Selecting images
var cockroach1 = document.getElementById("cockroach-1");
var beetle1 = document.getElementById("beetle-1");
var ant1 = document.getElementById("ant-1")
// var cockroach_count = 0;
// var beetle_count = 0;
// var ant_count = 0;
// var total_score = cockroach_count * 3 + beetle_count * 2 + ant_count;

//Accesing the paragraph element for adding insect kill count
var cockroaches_killed = document.getElementsByTagName("p")[1];
var beetles_killed = document.getElementsByTagName("p")[2];
var ants_killed = document.getElementsByTagName("p")[3];


//Killing cockroach 1
let cockroach_count = 0;
function cockroach1_btn(){
    cockroach1.style.visibility = "hidden";
    cockroach_count++;
    cockroaches_killed.innerHTML = "Cockroach killed: " + cockroach_count;
    // cockroach_kill_count.push(cockroach_count);
    // console.log(cockroach_kill_count);
    reappearCockroach();
}
function reappearCockroach(){
    setInterval( function (){
        cockroach1.style.visibility = "visible";
    },10000);  
}

//Killing beetle 1
var beetle_count = 0
function beetle1_btn(){
    beetle1.style.visibility = "hidden";
    beetle_count = beetle_count + 1;
    beetles_killed.innerHTML = "Beetles killed: " + beetle_count;
    reappearBeetle();    
}
function reappearBeetle(){
    setInterval( function (){
        beetle1.style.visibility = "visible";
    },10000);  
}
//Killing ant 1
var ant_count = 0;
function ant1_btn() {
    ant1.style.visibility = "hidden";
    ant_count = ant_count + 1;
    ants_killed.innerHTML = "Ants killed: " + ant_count;
    reappearAnt();     
}
function reappearAnt(){
    setInterval( function (){
        ant1.style.visibility = "visible";
    },10000);  
}
//Adding event listerner
cockroach1.addEventListener("click", cockroach1_btn);
beetle1.addEventListener("click", beetle1_btn);
ant1.addEventListener("click", ant1_btn);
