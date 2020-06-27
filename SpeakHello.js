// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2

(function (window){

    // STEP 3: Create an object, called 'helloSpeaker' to which you will attach
    // the "speak" method and which you will expose to the global context
    // See Lecture 52, part 1
    // var helloSpeaker =
    
    var helloSpeaker={};
      helloSpeaker.name=["Paul", "Frank", "Larry", "Paula", "Laura", "Yakoov"];
    // DO NOT attach the speakWord variable to the 'helloSpeaker' object.
    var speakWord = "Hello";
    
    function speak(name) {
    // See Lecture 52, part 2
    // (Note, Step 6 will be done in the SpeakGoodBye.js file.)
    // xxxx.xxxx = helloSpeaker;
    }
    window.helloSpeaker=helloSpeaker;
})(window);
