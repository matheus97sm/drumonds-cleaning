export async function gallery() {
  const galleryWrapper = document.querySelector('div[data-gallery="wrapper"]');
  const galleryThumbnail = document.querySelector('div[data-gallery="thumbnails"]');
  const buttonLeft = document.querySelector('.projects-gallery-buttons .left');
  const buttonRight = document.querySelector('.projects-gallery-buttons .right');

  let actualCarouselPosition = 0;

  if (!galleryWrapper || !galleryThumbnail) return;

  const queryParams = 'parent=20&per_page=40&_fields=id,caption,alt_text,media_details';
  const restAPI = `/wp-json/wp/v2/media?${queryParams}`;

  const galleryImages = await fetch(restAPI, { method: 'GET' })
    .then(r => r.json())
    .then(r => r);

  galleryImages.forEach((image, index) => {
    const newImageWrapper = document.createElement('div');
    newImageWrapper.classList.add('gallery-img');

    const newImageThumbnail = document.createElement('div');
    newImageThumbnail.classList.add('gallery-thumb');

    if (index === 0) {
      newImageWrapper.classList.add('active');
      newImageThumbnail.classList.add('active');
    }

    const newImage = document.createElement('img');
    Object.assign(newImage, {
      src: image.media_details.sizes.full.source_url,
      alt: image.alt_text
    });

    if (image.caption?.rendered) {
      const newImageCaption = document.createElement('div');
    }

    newImageWrapper.appendChild(newImage);
    galleryWrapper.appendChild(newImageWrapper);

    newImageThumbnail.addEventListener('click', e => {
      e.preventDefault();

      handleClickImage(newImageWrapper, newImageThumbnail);
    });
    
    newImageThumbnail.appendChild(newImage.cloneNode(true));
    galleryThumbnail.appendChild(newImageThumbnail);    
  });

  buttonLeft.addEventListener('click', e => {
    e.preventDefault();

    const newCarouselPosition = handleSlide(1, actualCarouselPosition);
    actualCarouselPosition = newCarouselPosition;
  });

  buttonRight.addEventListener('click', e => {
    e.preventDefault();

    const newCarouselPosition = handleSlide(-1, actualCarouselPosition);
    actualCarouselPosition = newCarouselPosition;
  });

  handleResize(galleryWrapper);

  window.addEventListener('resize', () => handleResize(galleryWrapper));
}

function handleClickImage(actualImage, actualThumb) {
  const images = document.querySelectorAll('.gallery-img');

  images.forEach(image => image.classList.remove('active'));

  actualImage.classList.add('active');
  actualThumb.classList.add('active');
}

function handleSlide(direction, actual) {
  const thumbnailWrapper = document.querySelector('div[data-gallery="thumbnails"]');
  const images = document.querySelectorAll('.gallery-thumb');

  const imagesQuantity = images.length;
  const imagesWidth = images[0].getBoundingClientRect().width;
  let multiplier = 2;

  if (window.innerWidth >= 1050) {
    multiplier = 5;
  } else if (window.innerWidth >= 768) {
    multiplier = 4;
  }

  if (direction > 0 && actual === 0)
    return 0;
  else if (direction < 0 && imagesQuantity - -(actual * multiplier) < multiplier)
    return actual;

  thumbnailWrapper.style.setProperty('transform', `translate3d(${((actual + direction) * (imagesWidth + 16) * multiplier)}px, 0, 0)`);

  return actual + direction;
}

function handleResize(reference) {
  const thumbnailWrapper = document.querySelector('.thumbnail-wrapper');
  const images = document.querySelectorAll('.gallery-thumb');

  const referenceValues = reference.getBoundingClientRect();
  let referenceWidth = referenceValues.width / 2 - 8;
  let referenceHeight = referenceValues.width / 2 * 0.6;

  if (window.innerWidth >= 1050) {
    referenceWidth = referenceValues.width / 5 - 8;
    referenceHeight = referenceValues.width / 5 * 0.6;
  } else if (window.innerWidth >= 768) {
    referenceWidth = referenceValues.width / 4 - 8;
    referenceHeight = referenceValues.width / 4 * 0.6;
  }

  images.forEach(image => {
    image.style.setProperty('width', `${referenceWidth}px`);
    image.style.setProperty('height', `${referenceHeight}px`);
  });

  thumbnailWrapper.style.setProperty('height', `${referenceHeight}px`);
}
