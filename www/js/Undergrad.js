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
                     document.getElementById("image").src ="images/Weekend.jpg";
                     document.getElementById('nextText').innerHTML = "Any plans for the weekend?";
                     document.getElementById('nextDetail').innerHTML = "This only works if the current time is not weeked and works best on fridays as many people will have their weekend planned out by then. See what they are up to maybe there is something you are also interested, start your conversation from there!";
                    }
                 if (counter == 2){
                     document.getElementById("image").src = "images/Dorm.jpg";
                     document.getElementById('nextText').innerHTML = "Where do you live?";
                     document.getElementById('nextDetail').innerHTML = "In university people come from all over the place, find if they live near by, close to you or even in the same building!";
                 }
                 if (counter == 3){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src ="images/Hobby.png";
                    document.getElementById('nextText').innerHTML = "What do you do in your free time?";
                    document.getElementById('nextDetail').innerHTML = "Look into the opponenets hobbies and see if there is anything in common between the two of you. Then continue your conversation from there!";
                }
                
                if (counter == 1){
                    document.getElementById("image").src="images/Weekend.jpg";
                    document.getElementById('nextText').innerHTML = "Any plans for the weekend?";
                    document.getElementById('nextDetail').innerHTML = "This only works if the current time is not weeked and works best on fridays as many people will have their weekend planned out by then. See what they are up to maybe there is something you are also interested, start your conversation from there!"
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }
            