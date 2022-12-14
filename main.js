https://teachablemachine.withgoogle.com/models/6IRDvT2q0/

Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");
Webcam.attach('#camera')
function take_snapshot() {
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/6IRDvT2q0/model.json',modelLoaded);

function modelLoaded() {
    console.log('model loaded!') }

    function check() {
        img= document.getElementById('captured_image');
        classifier.classify(img, gotResult) }

        function gotResult(error,results) {
            if(error) {
                console.log(error);
            } else {
                console.log(results);
                document.getElementById("result_gesture").innerHTML=results[0].label;
                document.getElementById("result_gesture 2").innerHTML=results[1].label;
                prediction_1=results[0].label;
                prediction_2=results[1].label;
                speak()
                if(results[0].label =="Amazing") {
                    document.getElementById("update_emoji").innerHTML="&#9996";
                }
                if(results[0].label =="best") {
                    document.getElementById("update_emoji").innerHTML="&#128077";
                }
                if(results[0].label =="Victory") {
                    document.getElementById("update_emoji").innerHTML="&#128079";
                }
                if(results[0].label =="Amazing") {
                    document.getElementById("update_emoji2").innerHTML="&#9996";
                }
                if(results[0].label =="best") {
                    document.getElementById("update_emoji2").innerHTML="&#128077";
                }
                if(results[0].label =="Victory") {
                    document.getElementById("update_emoji2").innerHTML="&#128079";
                }
               
            }
        }
        