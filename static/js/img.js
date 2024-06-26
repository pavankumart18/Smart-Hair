const selectImage = document.querySelector('.img-area');
const inputFile = document.querySelector('#file');
const imgArea = document.querySelector('.img-area-w');
const container = document.getElementById('container');
const selectImageBtn = document.getElementById('select-image');

selectImage.addEventListener('click', function () {
	inputFile.click();
})

inputFile.addEventListener('change', function () {
	const image = this.files[0]
	if(image.size < 2000000) {
		const reader = new FileReader();
		reader.onload = ()=> {
			const allImg = imgArea.querySelectorAll('img');
			allImg.forEach(item=> item.remove());
			const imgUrl = reader.result;
			const img = document.createElement('img');
			img.src = imgUrl;
			imgArea.appendChild(img);
			imgArea.classList.add('active');
			imgArea.dataset.img = image.name;
		}
		reader.readAsDataURL(image);
	} else {
		alert("Image size more than 2MB");
	}
})

selectImageBtn.addEventListener('click', function(event) {
  event.preventDefault();
  container.style.left = '-30%';

  // Create and append the image element
  const image = document.createElement('img');
  image.src = 'out.png'; // Replace with the path to your image
  image.classList.add('centered-image');
  document.body.appendChild(image);

  // Trigger the transition effect
  setTimeout(function() {
    image.classList.add('image-fade-in');
    heading.classList.add('image-fade-in');
    description.classList.add('image-fade-in');
  }, 100);

  // Create and append the heading element
  const heading = document.createElement('sdfghjhgfdsdfghjhgfdsasdfghjhgfdsasdfghjhgfds');
  heading.textContent = 'Image Heading';
  heading.classList.add('image-heading');
  imageContainer.appendChild(heading);

  // Create and append the description element
  const description = document.createElement('dfghjkkjhgfdsdfghjkjhgfdfghjhgfdsdfghjhgfds');
  description.textContent = 'Image Description';
  description.classList.add('image-description');
  imageContainer.appendChild(description);
})