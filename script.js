
const images = [
{ url: '1.jpg', alt: 'Image 1' },
{ url: '2.jpg', alt: 'Image 2' },
// Add more image objects here
];
function displayImages(pageNumber, imagesPerPage) {
const startIndex = (pageNumber - 1) * imagesPerPage;
const endIndex = startIndex + imagesPerPage;
const currentImages = images.slice(startIndex, endIndex);

const galleryContainer = document.getElementById('image-gallery');
galleryContainer.innerHTML = '';

currentImages.forEach((image) => {
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  galleryContainer.appendChild(img);
});
}
function renderPagination(totalImages, imagesPerPage) {
const numPages = Math.ceil(totalImages / imagesPerPage);
const paginationContainer = document.getElementById('pagination');
paginationContainer.innerHTML = '';

for (let i = 1; i <= numPages; i++) {
  const button = document.createElement('button');
  button.innerText = i;

  button.addEventListener('click', function () {
	displayImages(i, imagesPerPage);
  });

  paginationContainer.appendChild(button);
}
}
const imagesPerPage = 5; // Number of images to display per page
const totalImages = images.length;

displayImages(1, imagesPerPage);
renderPagination(totalImages, imagesPerPage);