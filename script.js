(function () {
  "use strict";
  const imagesArr = ['cat.jpg', 'cat.2jpg.jpg', 'cat3.jpg'];
  let currentImage = 0;

  const container = document.getElementById('content');
  const nextBtn = document.getElementById('next');
  const previousBtn = document.getElementById('previous');

  nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage++;
    if (currentImage == imagesArr.length) {
      currentImage = 0;
    }
    //document.getElementById('myimage').src = imagesArr[currentImage];
    const newSlide = document.createElement('img');
    newSlide.src=`images/${imagesArr[currentImage]}`
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);
  });

  previousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage--;
    if (currentImage == -1) {
      currentImage = imagesArr.length - 1;
    }
    //document.getElementById('myimage').src = imagesArr[currentImage];
    const newSlide = document.createElement('img');
    newSlide.src=`images/${imagesArr[currentImage]}`
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

  });

})();