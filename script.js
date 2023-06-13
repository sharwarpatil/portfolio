let stars = document.getElementById('stars');
        let moon = document.getElementById('moon');
        let mountain= document.getElementById('mountain');
        let text = document.getElementById('text');
        let btn = document.getElementById('btn');
       
        window.addEventListener('scroll',function(){
            let value = window.scrollY;
            moon.style.top=value*0.75+'px'
            mountain.style.top=value*0+'px'
            text.style.marginTop=value*0.25+'px'

        })