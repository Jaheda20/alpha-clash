// function play(){
//     // console.log('play start now')
//     // step 1: hide the home screen, to hide the screen add the class hidden to the home section
//     const homeSection= document.getElementById('home-screen');
//     homeSection.classList.add('hidden');
//     // console.log(homeSection.classList)
//     // show the playground
//     const playGroundSection = document.getElementById('playground')
//     playGroundSection.classList.remove('hidden');
//     // console.log(playGroundSection.classList);
// }

function continueGame(){
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet:', alphabet);
// set randomly generated alphabet to the screen (show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

    
function play(){
    hideElementById('home-screen');
    showElementById('playground');
    continueGame();
}

