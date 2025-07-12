// Mobile Menu Toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('nav ul');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuBtn.querySelector('i').classList.toggle('fa-times');
});

// Close menu when clicking a link
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.querySelector('i').classList.remove('fa-times');
    });
});

// Sticky Navbar on Scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

// Highlight Active Section
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Automatically add 'has-multiple' class if multiple items exist
document.addEventListener('DOMContentLoaded', function () {
    const timeline = document.querySelector('.timeline');
    if (timeline.querySelectorAll('.timeline-item').length > 1) {
        timeline.classList.add('has-multiple');
    }
});

// PDF Modal Functions
let currentPdfUrl = '';

function openModal(modalId, pdfUrl) {
    currentPdfUrl = pdfUrl;
    const pdfViewer = document.getElementById('pdfViewer');
    const downloadBtn = document.getElementById('downloadPdf');

    // Set PDF source
    pdfViewer.src = pdfUrl + '#view=fitH';

    // Set download link
    downloadBtn.href = pdfUrl;

    // Show modal
    document.getElementById('pdfModal').style.display = "block";
    document.body.style.overflow = "hidden";
}

function closeModal() {
    document.getElementById('pdfModal').style.display = "none";
    document.body.style.overflow = "auto";

    // Clear PDF viewer when closing
    document.getElementById('pdfViewer').src = '';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target == document.getElementById('pdfModal')) {
        closeModal();
    }
}