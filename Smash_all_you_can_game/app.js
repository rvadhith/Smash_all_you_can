//Selecting images
var cockroach1 = document.getElementById("cockroach-1");
var beetle1 = document.getElementById("beetle-1");
var ant1 = document.getElementById("ant-1")
var cockroach_count = 0;
var beetle_count = 0;
var ant_count = 0;

//Status of insects in screen
var insect_not_in_screen = {
    cockroach1_status: false,
    beetle1_status: false,
    ant1_status: false
};

//Killing cockroach 1
function cockroach1_btn(){
    cockroach1.style.visibility = "hidden";
    insect_not_in_screen.cockroach1_status = !insect_not_in_screen.cockroach1_status;
    cockroach_count++;
}

//Killing beetle 1
function beetle1_btn(){
    beetle1.style.visibility = "hidden";
    insect_not_in_screen.beetle1_status = !insect_not_in_screen.beetle1_status;
    beetle_count++;
}

//Killing ant 1
function ant1_btn() {
    ant1.style.visibility = "hidden";
    insect_not_in_screen.ant1_status = !insect_not_in_screen.ant1_status;
    ant_count++;
}

//Adding event listerner
cockroach1.addEventListener("click", cockroach1_btn);
beetle1.addEventListener("click", beetle1_btn);
ant1.addEventListener("click", ant1_btn);


//Respawning insects
function insect_respawn() {
    if(insect_not_in_screen.cockroach1_status && insect_not_in_screen.beetle1_status && insect_not_in_screen.ant1_status){
        cockroach1.style.visibility = "initial";
        beetle1.style.visibility = "initial";
        ant1.style.visibility = "initial";
    }
}

insect_respawn();













