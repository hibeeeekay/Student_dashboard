const ham = document.querySelector('.hamburger');
const nav = document.querySelector('.sidebar');

const bodyall = document.querySelector('body');


ham.addEventListener('click', () => {

    if (ham.className === 'hamburger') {
        ham.classList.add('close');
      } else if (ham.className === 'hamburger close') {
        ham.classList.remove('close');
        ham.classList.add('hamburgerback');
      } else if (ham.className === 'hamburger hamburgerback') {
        ham.classList.add('close');
        ham.classList.remove('hamburgerback');
      } else {
        ham.className = 'hamburger';
      }

      if (nav.className == 'sidebar'){
        nav.classList.add('responsive');
    }
    else if (nav.className == 'sidebar responsive') {
        nav.classList.add('responsiveReturn')
    }
    else if (nav.className == 'sidebar responsive responsiveReturn') {
        nav.classList.remove('responsiveReturn')
       
    }
    else{
        nav.className = 'sidebar';
    }
})



// window.addEventListener('click',(e)=>{
//   if (e.target.className === 'hamburger' ||  e.target.className ==='hamburger close' || e.target.className === 'hamburger hamburgerback' ) {

//     nav.classList.add('responsive');
//   }
//   else if ( e.target.className != '.nav_content responsive' ) {
//     nav.classList.add('responsiveReturn');
//     ham.classList.remove('close');
//     ham.classList.add('hamburgerback');
//   }
//   else if ( e.target.className != '.searcherr' ) {
//     nav.classList.add('responsiveReturn');
//     ham.classList.remove('close');
//     ham.classList.add('hamburgerback');
//   }

 

// //   if (!e.target.className.includes('nav_content') ) {
// //     console.log('sup')
// //     if (nav.className == 'nav_content responsive') {
// //       nav.classList.add('responsiveReturn');
// //       ham.classList.remove('close');
// //       ham.classList.add('hamburgerback');
// //     }
   
// //   }
 
// })


// || !e.target.className.includes('hamburger') || !e.target.className === 'searcherr'