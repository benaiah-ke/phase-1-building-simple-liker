// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

var likeButtons = document.querySelectorAll('.like')

for (const btn of likeButtons) {
  btn.addEventListener("click", like);
}

function like(event){
  // hide the error modal
  document.querySelector('#modal').classList.add('hidden');

  mimicServerCall()
    .then(() => {
      // Get the clicked btn
      var btn = event.target;

      if(btn.innerText == EMPTY_HEART){
        btn.innerText = FULL_HEART;
      }else{
        btn.innerText = EMPTY_HEART;
      }
    })
    .catch((error) => {
      // Set the error message
      document.querySelector('#modal-message').innerText = error;

      // Show the error modal
      document.querySelector('#modal').classList.remove('hidden');
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
