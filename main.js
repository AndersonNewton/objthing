status_1 = "";
video = "";
object_name = "";

object = [];

function preload() {

   


}
function setup() {

    canvas = createCanvas(500, 500);
    canvas.position(700, 350);
    video = createCapture(VIDEO);
    video.hide();


}
function draw() {
    image(video, 0, 0, 500, 500);
    if (object[i].label == object_name) {

       
        
        for (i = 0; i < object.length; i++) {

            obj_w = object[i].width;
            obj_h = object[i].height;
            obj_x = object[i].x;
            obj_y = object[i].y;
            obj_c = floor(object[i].confidence * 100);
            obj_l = object[i].label;
    
            noFill();
            stroke("#d6530d");
            strokeWeight(4);
            rect(obj_x, obj_y, obj_w, obj_h);
            fill("#d6530d");
            strokeWeight(1);
            textSize(15);
            text(obj_l, obj_x - 50, obj_y + 50);
            text(obj_c + "%", obj_x - 50, obj_y + 70);

            document.getElementById("status").innerHTML = object_name + "found";
    
        }
    


        object_detecter.detect(video, got_results);
        //console.log(object);


    }
    


}
function start_1() {

    object_detecter = ml5.objectDetector("cocossd", model_loaded);
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function model_loaded() {

    console.log("Model Loaded");
    status_1 = true;
    
    object_detecter.detect(video, got_results);

}
function got_results(error, results) {

    if (error) {

        console.error(error);

    }
    else {

        //console.log(results);
        object = results;

    }

}