// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    let currentPage = 1;
    const totalPages = 3;

    // Function to navigate to a specific page
    function showPage(pageNumber) {
        for (let i = 1; i <= totalPages; i++) {
            const page = document.getElementById('page' + i);
            if (i === pageNumber) {
                page.style.display = 'flex';
            } else {
                page.style.display = 'none';
            }
        }
    }

    // Show the first page initially
    showPage(currentPage);

    // Move to the next page after the flower animation on the first page
    if (currentPage === 1) {
        setTimeout(function () {
            currentPage = 2;
            showPage(currentPage);
        }, 5000); // Adjust this timeout to match the animation time of the flower
    }

    // Set up the transition from video to the "thank you" page
    if (currentPage === 2) {
        const video = document.getElementById('intro-video');
        video.onended = function () {
            currentPage = 3;
            showPage(currentPage);
        };
    }
});
