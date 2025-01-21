document.addEventListener('DOMContentLoaded', function() {

    const headings = document.querySelectorAll('.heading');
    const paragraphs = document.querySelectorAll('p');
    const icon = document.querySelectorAll('.icon');

    headings.forEach((heading, index) => {

        // Defining the paragraph associated with that heading
        const para = heading.nextElementSibling;


        heading.addEventListener('click', () => {

            // Hide all other paragraphs and show their corresponding plus icons
            paragraphs.forEach((para, i) => {
                if (i !== index) { 
                    para.style.display = 'none';
                    icon[i].src = 'assets/images/icon-plus.svg';
                };
            });

            const computedStyle = getComputedStyle(para);

            if(computedStyle.display === 'none') {
                para.style.display = 'block';
                icon[index].src = 'assets/images/icon-minus.svg';
            } else {
                para.style.display = 'none';
                icon[index].src = 'assets/images/icon-plus.svg';
            };
        });
    });
});