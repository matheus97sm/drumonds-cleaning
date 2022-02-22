export async function gallery() {
  const galleryWrapper = document.querySelector('div[data-gallery="wrapper"]');
  const galleryThumbnail = document.querySelector('div[data-gallery="thumbnails"]');

  if (!galleryWrapper || !galleryThumbnail) return;

  const queryParams = 'parent=20&per_page=40&_fields=id,caption,alt_text,media_details';
  const restAPI = `/wp-json/wp/v2/media?${queryParams}`;

  const galleryImages = await fetch(restAPI, { method: 'GET' })
    .then(r => r.json())
    .then(r => r);

  galleryImages.forEach(image => {
    const newImageWrapper = document.createElement('div');
    newImageWrapper.classList.add('gallery-img');

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
  });
}
