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
                 
                 if (counter == 1){
                    document.getElementById("image").src="images/Bed2.jpeg";
                     document.getElementById('nextText').innerHTML ="Tip 2: Always try to be easy going when being approached";
                    }
                 if (counter == 2){
                     document.getElementById("image").src="images/Bed3.jpeg";
                     document.getElementById('nextText').innerHTML ="Tip 3: Be kind always "
                 }
                 
                 }
            
            