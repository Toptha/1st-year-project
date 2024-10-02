document.addEventListener("DOMContentLoaded", function() {
    const uploadForm = document.querySelector('.upload-form');
    uploadForm.addEventListener('submit', function(e) {
        const fileInput = document.querySelector('input[type="file"]');
        if (!fileInput.files.length) {
            alert("Please select an image to upload!");
            e.preventDefault();
        } else {
            alert("Image is being uploaded!");
        }
    });
    const grid = document.querySelector('.grid');
    function adjustGrid() {
        const gridItems = document.querySelectorAll('.grid-item');
        gridItems.forEach(item => {
            const randomHeight = Math.random() * (300 - 150) + 150;
            item.style.height = `${randomHeight}px`;
        });
    }
    window.addEventListener('load', adjustGrid);
    window.addEventListener('resize', adjustGrid);
});