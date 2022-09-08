let ratingNumber = document.querySelectorAll('.ratingNumber')
Array.from(ratingNumber).forEach(elem => elem.addEventListener('click', changeColor));

function changeColor() {
  if (this.classList.contains('selectedRating')) {
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
  }
  else {
    ratingNumber.forEach(elem => elem.classList.remove('selectedRating'))
    this.classList.add('selectedRating')
  }
}