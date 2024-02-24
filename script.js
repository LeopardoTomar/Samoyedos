const numImages = 1000; // Número de imágenes a obtener

function fetchImages() {
  fetch(`https://api.unsplash.com/photos/random?query=samoyed&client_id=uy5DCcZFn6AXlm0ZkDqOsxB-K-J0fSx4npeVLMa8934&count=${numImages}&orientation=landscape`)
    .then(response => response.json())
    .then(data => {
      const starsDiv = document.querySelector('.stars');
      data.forEach(item => {
        const imgContainer = document.createElement('div');
        imgContainer.classList.add('image-container');

        const img = document.createElement('img');
        img.src = item.urls.regular;

        imgContainer.appendChild(img);
        starsDiv.appendChild(imgContainer);
      });
    })
    .catch(error => {
      console.error('Error al obtener imágenes:', error);
    });
}

fetchImages();

// Obtener la imagen de Unsplash
fetch('https://api.unsplash.com/photos/random?query=samoyed&client_id=uy5DCcZFn6AXlm0ZkDqOsxB-K-J0fSx4npeVLMa8934')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.urls.regular;
    const samoyedImage = document.getElementById('samoyed-image');
    samoyedImage.src = imageUrl;
  })
  .catch(error => {
    console.error('Error al obtener la imagen:', error);
  });
