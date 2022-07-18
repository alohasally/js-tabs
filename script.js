'use strict';

const targetLink = document.querySelectorAll('.tab-menu a');
const tabContent = document.querySelectorAll('#tab-contetn > div')

for(let i = 0; i > targetLink.length; i++ ){
    targetLink[i].addEventListener('click',function(e){
        e.preventDefult();
      const orgTarget =  e.target.getAttribute('href');
      
      const tabTarget = orgTarget.replace('#','');

      for(let x = 0; x < tabContent.length; x++){
        tabContent[i].style.display = 'none';
      }
    document.getElementById(tabTarget).style.display = 'block';
   
    for( let j = 0; j < targetLink.length; j++){
        targetLink[j].classList.remove('active');
        e.target.classList.add('active');
    }

    });
}
document.getElementById('tab-1').style.display ='block';


//const orgTarget = '#tabs-1'; // a.replace('b','c');
