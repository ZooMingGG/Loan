import Slider from './Slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if (n > this.slides.length ) {
            this.slideIndex = 1;
        } 

        if (n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.opacity = '0';

            if (n === 3) {
                this.hanson.classList.add('animated');
                setTimeout(() => {
                    this.hanson.classList.add('fadeIn');
                }, 3000);
            }
        } catch(error) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex  - 1].style.display = 'block';
    }

    nextSlide(n) {
        this.showSlides(this.slideIndex += n);
    }

    prevSlide(n) {
        this.showSlides(this.slideIndex -= n);
    }

    render() {
        try {
            try {
                this.hanson = document.querySelector('.hanson');
            } catch(error) {}

            this.btns.forEach(item => {
                item.addEventListener('click', () => {
                    this.nextSlide(1);
                });

                item.parentNode.previousElementSibling.addEventListener('click', (event) => {
                    event.preventDefault();

                    this.slideIndex = 1;
                    this.showSlides(this.slideIndex);
                });
            });

            this.showSlides(this.slideIndex);
        } catch(error) {}
    }
}