 //set variable counter
            var counter = 0;
            //on window start start listening for input
            window.onload=function(){
                document.getElementById("nextPic").addEventListener('click', forwardPic);
                document.getElementById("backPic").addEventListener('click', reversePic);
                
                //the following is a test code for swipping and didnt really work
                //(' slides').swipe({
                //  swipe:function(event, direction, distance, duration, figerCount){
                //        switch(direction){
                //            case "left":
                //                reversePic();
                //                break;
                //            case "right":
                //                forwardPic();
                //                break;
                //        }
                //    }
                //})
            }
            
            //according to the input changes are made here
             function forwardPic() {
                 counter = counter+1;
                 
                 if (counter == 1){
                     document.getElementById("image").src="images/pet.jpg";
                     document.getElementById('nextText').innerHTML ="Do you have any pet?";
                     document.getElementById('nextDetail').innerHTML = "Cute animals are good topic to show you have nice personality.";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/food.jpg";
                     document.getElementById('nextText').innerHTML ="What is your favorite food?";
                     document.getElementById('nextDetail').innerHTML = "Eating culture is huge and interesting. People love food.";
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/music.jpg";
                     document.getElementById('nextText').innerHTML ="What is your favorite kind of music?";
                     document.getElementById('nextDetail').innerHTML ="Music without boundaries is a topic that understands people’s preferences and is very broad.";
                 }
                 if (counter == 4){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/weather.jpg";
                    document.getElementById('nextText').innerHTML = "How is the weather today?";
                    document.getElementById('nextDetail').innerHTML ="Simple and casual.";
                }
                if (counter == 1){
                    document.getElementById("image").src="images/pet.jpg";
                    document.getElementById('nextText').innerHTML ="Do you have any pet?";
                    document.getElementById('nextDetail').innerHTML = "Cute animals are good topic to show you have nice personality.";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/food.jpg";
                    document.getElementById('nextText').innerHTML ="What is your favorite food?";
                    document.getElementById('nextDetail').innerHTML = "Eating culture is huge and interesting. People love food.";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }