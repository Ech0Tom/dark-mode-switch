const switchElement = document.querySelector('.switch')

switchElement.addEventListener('click', ()=> {
document.body.classList.toggle('dark')
})

function changeImage() {
    var image = document.getElementById('bulb');
    if (image.src.match('lighton.svg')) {
      image.src = 'logo/lightoff.svg';
      image.alt = 'lightoff';
    } else {
      image.src = 'logo/lighton.svg';
      image.alt = 'lighton';
    }
  }