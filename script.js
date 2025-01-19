document.addEventListener('DOMContentLoaded', function() {

    let headings = document.querySelectorAll('.heading');
    let paragraphs = document.querySelectorAll('p');
    let plusIcon = document.querySelectorAll('.plus-icon');
    let minusIcon = document.querySelectorAll('.minus-icon');

    headings.forEach((heading, index) => {

        // Defining the paragraph associated with that heading
        let para = heading.nextElementSibling;


        heading.addEventListener('click', () => {

            // Hide all other paragraphs and show their corresponding plus icons
            paragraphs.forEach((para, i) => {
                if (i !== index) { 
                    para.style.display = 'none';
                    plusIcon[i].style.display = 'block';
                    minusIcon[i].style.display = 'none';
                };
            });

            const computedStyle = getComputedStyle(para);

            if(computedStyle.display === 'none') {
                para.style.display = 'block';
                plusIcon[index].style.display = 'none';
                minusIcon[index].style.display = 'block';
            } else {
                para.style.display = 'none';
                plusIcon[index].style.display = 'block';
                minusIcon[index].style.display = 'none';
            };
        });
    });
});