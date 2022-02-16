export async function carousel() {
  const carouselWrapper = document.querySelector('div[data-carousel="wrapper"]');
  const carouselThumbnail = document.querySelector('div[data-carousel="thumbnails"]');

  if (!carouselWrapper || !carouselThumbnail) return;

  const queryParams = 'parent=20&per_page=40&_fields=id,caption,alt_text,media_details';
  const restAPI = `/wp-json/wp/v2/media?${queryParams}`;

  const carouselImages = await fetch(restAPI, { method: 'GET' })
    .then(r => r.json())
    .then(r => r);

  carouselImages.forEach(image => {
    const newImageWrapper = document.createElement('div');
    newImageWrapper.classList.add('carousel-img');

    const newImage = document.createElement('img');
    Object.assign(newImage, {
      src: image.media_details.sizes.full.source_url,
      alt: image.alt_text
    });

    if (image.caption?.rendered) {
      const newImageCaption = document.createElement('div');
    }

    newImageWrapper.appendChild(newImage);
    carouselWrapper.appendChild(newImageWrapper);
  });
}
