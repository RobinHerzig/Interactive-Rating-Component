let ratingNumber = document.querySelectorAll('.ratingNumber')
Array.from(ratingNumber).forEach(elem => elem.addEventListener('click', changeColor));
let rating = 0

function changeColor() {
  if (this.classList.contains('selectedRating')) {
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
    rating = 0
  }
  else {
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
    this.classList.add('selectedRating')
    rating = this.innerHTML
  }
  console.log(rating)
}

document.querySelector('#submitRating').addEventListener('click', submitRating)

function submitRating() {
  if (rating <= 0 || rating >= 6) return
  document.querySelector('#rating').innerHTML = rating
  document.querySelector('#ratingBox').classList.add('hidden')
  document.querySelector('#thankYouBox').classList.remove('hidden')
}