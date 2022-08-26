const textarea = document.querySelector("#text");
let voiceList = document.querySelector("#voice");
let speechBtn = document.querySelector(".submit");

let synth  = speechSynthesis;
let isSpeaking = true;

function voiceSpech(){
    for(let voice of synth.getVoices()){
        let option = document.createElement("option");
        option.text += voice.name;
        voiceList.add(option)
    }
}

synth.addEventListener("voiceschanged", voiceSpech);

 function texttospeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for(let voice of synth.getVoices()){
        if(voice.name === voiceList.value){
            utternance.voice =voice;
        }
    }
    speechSynthesis.speak(utternance);
}



speechBtn.addEventListener("click" , (e)=>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            texttospeech(textarea.value)
        } 
    }
}) 


console.log("hii");



















/* speechBtn.addEventListener('click' , (e)=>{
    e.preventDefault();
    if(textarea.value !== ""){
        if(!synth.speaking){
            texttospeech(textarea.value)
        }
        if(textarea.value.length > 80){
            if(isSpeaking){
                synth.resume()
                isSpeaking = false
                speechBtn.innerHTML = "pause speech"
            }
            else{
                synth.pause();
                isSpeaking = true;
                speechBtn.innerHTML = "resume speech"
            }
            setInterval(() =>{
                if(!synth.speaking&& !isSpeaking){
                    isSpeaking = true;
                    speechBtn.innerHTML = "convert to speech"
                }
            })
        }else{
            speechBtn.innerHTML = " covert to speech"
        }
    }
}); */


