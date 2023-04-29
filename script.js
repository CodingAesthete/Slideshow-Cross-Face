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
    swapImg();
  });

  previousBtn.addEventListener('click', (e) => {
    e.preventDefault();
    currentImage--;
    if (currentImage == -1) {
      currentImage = imagesArr.length - 1;
    }
    swapImg();
  });

  function swapImg(){
    //document.getElementById('myimage').src = imagesArr[currentImage];
    const newSlide = document.createElement('img');
    newSlide.src=`images/${imagesArr[currentImage]}`
    newSlide.className = 'fadeinimg';
    container.appendChild(newSlide);

    if (container.children.length > 2) {
      container.removeChild(container.children[0]);
    }
  }
  
})();