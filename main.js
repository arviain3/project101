function startclassification()  {
    navigator.mediaDevices.getUserMedia({ audio: true, video:false});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0GwrttnXM/modal.json', { probabilityThreshold: 0.7 } ,modelReady);
}

function modelReady()  {
    classifier.classify(gotResults);
}

cat = 0;
dog = 0;
lion = 0;
cow = 0;

function  gotResults(error, results)  {
    if (error)  {
        console.error(error);
    }
    else  {
        console.log(results);
        document.getElementById("results_label").innerHTML = "Detected voice is of -  " + results[0].label;
        document.getElementById("result_count").innerHTML = 'Detected Dog - '+dog+ 'Detected Cat - '+cat + 'Detected Cow - '+cow + 'Detected lion - '+lion;
        img = document.getElementById('animal_image');
        if (results[0].label == "barking")
        {
            img.src = "dog.gif"
            dog = dog+1;
        }
        else if (results[0].label == "meowing"){
            img.src = "cat.gif"
            cat = cat+1;
        }
        else if (result[0].label == "roar"){
            img.src = "lion.gif"
            lion = lion+1;
        }
        else if(results[0].label == "mooing"){
            img.src = "cow.gif"
            cow = cow+1;
        }
        else{
            img.src = "ear.gif"
        }
    }
}