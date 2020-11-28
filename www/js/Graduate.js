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
                     document.getElementById("image").src="images/Dorm.jpg";
                     document.getElementById('nextText').innerHTML = "Do you commute or stay on campus?";
                     document.getElementById('nextDetail').innerHTML = "Most times grad students do not live on campus, so this is a good way to start a conversation, and maybe you might be looking for a place to stay or roommate so just pop those in from time to time!";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Lecture.jpg";
                     document.getElementById('nextText').innerHTML = "Thoughts on the lecture?";
                     document.getElementById('nextDetail').innerHTML = "Talking about previous lectures is a good way for students to open up. Sometimes, you might find out a lot when you ask about classes other students are taking or have taken!";
                 }
                 if (counter == 3){
                     document.getElementById("image").src="images/memory.jpg";
                     document.getElementById('nextText').innerHTML ="Most exciting experience in your undergrad?";
                     document.getElementById('nextDetail').innerHTML ="This way, you could try to find some mutual activity you enjoy with the person and begin to bond over it!";
                 }
                 if (counter == 4){
                     alert("This is the last slide");
                     counter = counter-1;
                 }
                 }
            function reversePic(){
                counter = counter-1;
                if (counter == 0){
                    document.getElementById("image").src="images/finish.jpg";
                    document.getElementById('nextText').innerHTML = "What do you see yourself doing after grad school?";
                    document.getElementById('nextDetail').innerHTML ="This may come off as a more academically focused topic, but the intention should be to develop a more confident approach when talking to your peers!";
                }
                if (counter == 1){
                    document.getElementById("image").src="images/Dorm.jpg";
                    document.getElementById('nextText').innerHTML ="Do you commute or stay on campus?";
                     document.getElementById('nextDetail').innerHTML = "Most times grad students do not live on campus, so this is a good way to start a conversation, and maybe you might be looking for a place to stay or roommate so just pop those in from time to time!";
                }
                if (counter == 2){
                    document.getElementById("image").src="images/Lecture.jpg";
                    document.getElementById('nextText').innerHTML ="Thoughts on the lecture?";
                     document.getElementById('nextDetail').innerHTML = "Talking about previous lectures is a good way for students to open up. Sometimes, you might find out a lot when you ask about classes other students are taking or have taken!";
                }
                if (counter == -1){
                    alert("This is the first slide");
                    counter = counter+1;
                }
            }
            