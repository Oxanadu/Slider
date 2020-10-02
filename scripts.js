window.addEventListener('load', function() {

    let slider = document.querySelector('.slider'),
        photo = document.querySelector('.block_photo1'),
        info = document.querySelectorAll('.block_object');
    
    info[0].style = 'display : block';
    slider.style = 'margin-left: 0px'; 
    
    function animSlider(margin) {
        let a;    
        marginLate = parseInt(slider.style.marginLeft); 
        
        if (margin < marginLate) {a = -15;}
        else {a = 15;}

            setTimeout(() => {
                slider.style = 'margin-left :'+(marginLate - a)+'%';
                photo.style = 'margin-left :'+(marginLate - a)+'%';
            }, 200);

            setTimeout(() => {
                slider.style = 'margin-left :'+(marginLate)+'%';
                photo.style = 'margin-left :'+(marginLate)+'%';
            }, 1300);   
    }

    function showSlider(i) {

        let margin = parseInt(slider.style.marginLeft);
        
        i = i || 1;

        let step = document.querySelector('.step'+i);
        slider.style = 'margin-left :'+-100*(i-1)+'%';
        photo.style = 'margin-left :'+-100*(i-1)+'%';
        animSlider(margin);
                            
        for (let j = 0; j < 5; j++) {
            
            document.querySelector('.step'+(j+1)).style = 'background : #6FA2B1';
            info[j].style = 'display : none';
        }   

        info[i-1].style = 'display : block';
        step.style = 'background : #fff';            
    } 

    function giveSlide() {

        for(let i = 1; i <= 5; i++) {
            let step = document.querySelector('.step'+i);
            
            step.addEventListener('mouseover', function() {
                
                step.style = 'background : #fff';
                showSlider(i);    
            })

            step.addEventListener('mouseout', function() {
                
            step.style = 'background : #6FA2B1';      
            })
        }
        
        let arrowprew = document.querySelector('.arrow_prew');
        let arrownext = document.querySelector('.arrow_next');

        arrownext.addEventListener('click', function() {
            let margin = parseInt(slider.style.marginLeft);
            if (margin > - 400) {
                let i = (margin - 100)/-100 + 1;   
                showSlider(i); 
            }                           
        })

        arrowprew.addEventListener('click', function() {

            let margin = parseInt(slider.style.marginLeft);
            if (margin <  0) {
                let i = (margin - 100)/-100 - 1;   
                showSlider(i); 
            }                   
        })                                 
    }
        
    giveSlide();     

}); 