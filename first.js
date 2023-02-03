
let imglist= document.querySelectorAll(".item img"),
    lightBoxContainer=document.getElementById("lightbox-container"),
    lightBoxItem=document.getElementById("lightbox-item"),
    nextBtn=document.getElementById("next"),
    prevBtn=document.getElementById("prev"),
    closeBtn=document.getElementById("close"),
    imgArray=[],
    currentSlideIndex=0;


    //  display image in light box item
    for(let i=0 ;i<=imglist.length ;i++){
        imgArray.push(imglist[i]);
        if(imglist[i]){
            imglist[i].addEventListener('click',function(e){
                currentSlideIndex=imgArray.indexOf(e.target);
                let imgSrc=e.target.getAttribute("src");
                lightBoxContainer.style.display="flex";
                lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
            })
        }
        
    }

    // work with button next previous and colse
        function nextSlide(){
            currentSlideIndex++;
            if(currentSlideIndex == imgArray.length){
                currentSlideIndex=0
            }
            let imgSrc= imgArray[currentSlideIndex].getAttribute("src");
            lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
        }


        function prevSlide(){
            currentSlideIndex--;
            if(currentSlideIndex < 0){
                currentSlideIndex=imgArray.length-1;
            }
            let imgSrc= imgArray[currentSlideIndex].getAttribute("src");
            lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
        }

        
        function closeSlide(){
            lightBoxContainer.style.display="none";
        }

        nextBtn.addEventListener("click", nextSlide);
        prevBtn.addEventListener("click" , prevSlide);
        closeBtn.addEventListener("click" , closeSlide);
