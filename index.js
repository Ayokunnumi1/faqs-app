const plusIconBtn = document.querySelectorAll('.plus-icon-btn');
const paragraphs = document.querySelectorAll('p');
const minusIconBtn = document.querySelectorAll('.minus-icon-btn');
const plusIconImg = document.querySelectorAll('.plus-icon-img')

plusIconBtn.forEach((plusIcon, index) => {
    plusIcon.addEventListener('click', () => {
    paragraphs[index].style.display = 'block';
    minusIconBtn[index].style.display = 'block';
        plusIcon.style.display = 'none'
        console.log('index', index & 'paragraph', paragraphs[index])
    })
})

minusIconBtn.forEach((minusIcon, index) => {
    minusIcon.addEventListener('click', () => {
    console.log('clicked');
    paragraphs[index].style.display = 'none';
    plusIconBtn[index].style.display = 'block';
    minusIcon.style.display = 'none'
})
})
