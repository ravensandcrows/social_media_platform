let likeBtnEl = document.querySelector('.likeBtn')
console.log(likeBtnEl);
let likeCounter = false;
function liked(event) {

// event.target
  let counter =  
  document.getElementsByClassName('likeCount').innerText;
  console.log('counter', counter)
  var button = event.target.innerText;
  switch(button){
    case 'like':
        if (like_flag==false) {
        counter++;
        like_flag=true;
        }
    }
};


likeBtnEl.addEventListener('click', liked)
