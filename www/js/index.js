            //set variable counter
            var counter = 0;
            //on window start start listening for input
            window.onload=function(){
                document.getElementById("nextPic").addEventListener('click', forwardPic);
                
                
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
                 counter = Math.floor((Math.random() * 3));
                 
                  if (counter == 1) {
                     document.getElementById("image").src = "images/pet.jpg";
                     document.getElementById('nextText').innerHTML = "Do you have any pet?";
                     document.getElementById('nextDetail').innerHTML = "Cute animals are good topic to show you have nice personality.";
                 }
                 if (counter == 2) {
                     document.getElementById("image").src = "images/food.jpg";
                     document.getElementById('nextText').innerHTML = "What is your favorite food?";
                     document.getElementById('nextDetail').innerHTML = "Eating culture is huge and interesting. People love food.";
                 }
                 if (counter == 3) {
                     document.getElementById("image").src = "images/music.jpg";
                     document.getElementById('nextText').innerHTML = "What is your favorite kind of music?";
                     document.getElementById('nextDetail').innerHTML = "Music without boundaries is a topic that understands people’s preferences and is very broad.";
                 }
                 if (counter == 4) {
                     document.getElementById("image").src = "images/weather.jpg";
                     document.getElementById('nextText').innerHTML = "How is the weather today?";
                     document.getElementById('nextDetail').innerHTML = "Simple and casual.";
                 }
                 if (counter == 5) {
                     document.getElementById("image").src = "images/Dorm.jpg";
                     document.getElementById('nextText').innerHTML = "Do you commute or stay on campus?";
                     document.getElementById('nextDetail').innerHTML = "Most times grad students do not live on campus, so this is a good way to start a conversation, and maybe you might be looking for a place to stay or roommate so just pop those in from time to time!";
                 }
                 if (counter == 6) {
                     document.getElementById("image").src = "images/Lecture.jpg";
                     document.getElementById('nextText').innerHTML = "Thoughts on the lecture?";
                     document.getElementById('nextDetail').innerHTML = "Talking about previous lectures is a good way for students to open up. Sometimes, you might find out a lot when you ask about classes other students are taking or have taken!";
                 }
                 if (counter == 7) {
                     document.getElementById("image").src = "images/memory.jpg";
                     document.getElementById('nextText').innerHTML = "Most exciting experience in your undergrad?";
                     document.getElementById('nextDetail').innerHTML = "This way, you could try to find some mutual activity you enjoy with the person and begin to bond over it!";
                 }
                 if (counter == 8) {
                     document.getElementById("image").src = "images/finish.jpg";
                     document.getElementById('nextText').innerHTML = "What do you see yourself doing after grad school?";
                     document.getElementById('nextDetail').innerHTML = "This may come off as a more academically focused topic, but the intention should be to develop a more confident approach when talking to your peers!";
                 }
                 if (counter == 9) {
                     document.getElementById("image").src = "images/Weekend.jpg";
                     document.getElementById('nextText').innerHTML = "Any plans for the weekend?";
                     document.getElementById('nextDetail').innerHTML = "This only works if the current time is not weeked and works best on fridays as many people will have their weekend planned out by then. See what they are up to maybe there is something you are also interested, start your conversation from there!";
                 }
                 if (counter == 10) {
                     document.getElementById("image").src = "images/Dorm.jpg";
                     document.getElementById('nextText').innerHTML = "Where do you live?";
                     document.getElementById('nextDetail').innerHTML = "In university people come from all over the place, find if they live near by, close to you or even in the same building!";
                 }
                 if (counter == 11) {
                     document.getElementById("image").src = "images/Hobby.png";
                     document.getElementById('nextText').innerHTML = "What do you do in your free time?";
                     document.getElementById('nextDetail').innerHTML = "Look into the opponenets hobbies and see if there is anything in common between the two of you. Then continue your conversation from there!";
                 }
                 
                 }
            
            
