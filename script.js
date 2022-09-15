// Select rating to change color and reassign value to a variable

let ratingNumber = document.querySelectorAll('.ratingNumber')
Array.from(ratingNumber).forEach(elem => elem.addEventListener('click', selectRating));

let rating = 0

function selectRating() {
  if (this.classList.contains('selectedRating')) {
    document.querySelector('#submitRating').classList.add('inactive')
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
    rating = 0
  }
  else {
    document.querySelector('#submitRating').classList.remove('inactive')
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
    this.classList.add('selectedRating')
    rating = this.innerHTML
  }
}

// Submit the rating

document.querySelector('#submitRating').addEventListener('click', submitRating)

function submitRating() {
  if (rating <= 0 || rating >= 6) return
  document.querySelector('#rating').innerHTML = rating
  document.querySelector('#ratingBox').classList.add('hidden')
  document.querySelector('#thankYouBox').classList.remove('hidden')
}