const TESTIMONIALS = {
    0: ['JOHN', 'img/customer-5.jpg', "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?"],
    1: ['WANDA', 'img/customer-1.jpg', "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."],
    2: ['TYRELL', 'img/customer-2.jpg', "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text."],
    3: ['AMY', 'img/customer-3.jpg', "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."],
    4: ['SANDY', 'img/customer-4.jpg', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock']
}

let currentTestimonial = 0;

function cycleTestimonial (){
    document.querySelector('img').src = TESTIMONIALS[currentTestimonial][1];
    document.querySelector('#customer').innerHTML = TESTIMONIALS[currentTestimonial][0];
    document.querySelector('p').innerHTML = TESTIMONIALS[currentTestimonial][2];
}

document.querySelector('#left').onclick = () => {
    currentTestimonial === 0 ? currentTestimonial = 4 : currentTestimonial--;
    cycleTestimonial();
}
document.querySelector('#right').onclick = () => {
    currentTestimonial === 4 ? currentTestimonial = 0 : currentTestimonial++;
    cycleTestimonial();
}

cycleTestimonial();