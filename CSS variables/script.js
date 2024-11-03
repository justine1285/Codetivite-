'use strict';

const inputs = document.querySelectorAll('.controls input');
const uploadInput = document.getElementById('upload');
const warning = document.querySelector('.warning');
const imgPreview = document.getElementById('preview');
const downloadBtn = document.querySelector('.download');
const canvas = document.getElementById('canvas');

function handleUpdate() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('input', handleUpdate));

// uploading the image file
uploadInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    //check if file is image
    if (file && file.type.startsWith('image/')) {
        warning.style.display = 'none';//hides the warning message
    const reader = new FileReader();
    reader.onload = function (event) {
        imgPreview.src = event.target.result;
        imgPreview.style.display = 'block';
        //shows image
    };
    reader.readAsDataURL(file);
    } else {
        //show warning message 
        warning.style.display = 'block';
        imgPreview.style.display = 'none';
    }
});

downloadBtn.addEventListener('click', () => {
    const context = canvas.getContext('2d');
    canvas.width = imgPreview.naturalWidth;
    canvas.height = imgPreview.naturalHeight;

    // Apply styles to the canvas using CSS properties
    context.filter = `blur(${getComputedStyle(document.documentElement).getPropertyValue('--blur')}) saturate(${getComputedStyle(document.documentElement).getPropertyValue('--saturation')}) brightness(${getComputedStyle(document.documentElement).getPropertyValue('--brightness')}) contrast(${getComputedStyle(document.documentElement).getPropertyValue('--contrast')}) opacity(${getComputedStyle(document.documentElement).getPropertyValue('--opacity')})`;

    context.fillStyle = `base(${getComputedStyle(document.documentElement).getPropertyValue('--base')}) opacity(${getComputedStyle(document.documentElement).getPropertyValue('--opacity')})`;

    // Draw the background color
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Draw the image onto the canvas
    context.drawImage(imgPreview, 0, 0, canvas.width, canvas.height);

    // Create a download link
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'edited-image.png';
    link.click();
  });