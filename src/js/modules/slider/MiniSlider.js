import Slider from './Slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => {
            if (this.timerId) {
                clearInterval(this.timerId);
            }

            this.nextSlide();

            if (this.autoplay) {
                this.timerId = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            }
        });

        this.prev.addEventListener('click', () => {
            if (this.timerId) {
                clearInterval(this.timerId);
            }

            for (let i = this.slides.length - 1; i > 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.prepend(active);
                    this.decorizeSlides();
                    break;
                }
            }

            if (this.autoplay) {
                this.timerId = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            }
        });
    }

    nextSlide() {
        if (this.slides[1].tagName == "BUTTON" && this.slides[2].tagName == "BUTTON") {
            for (let i = 0; i < 3; i++) {
                this.container.append(this.slides[0]); 
            }
            this.decorizeSlides();
        } else if (this.slides[1].tagName == "BUTTON"){
            for (let i = 0; i < 2; i++) {
                this.container.append(this.slides[0]); 
            }
            this.decorizeSlides();
        } else {
            this.container.append(this.slides[0]);
            this.decorizeSlides();
        }
    }

    init() {
        try {
            this.container.style.cssText = `
                display: flex;
                flex-wrap: wrap;
                overflow: hidden;
                align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();
            if (this.autoplay) {
                this.timerId = setInterval(() => {
                    this.nextSlide();
                }, 5000);
            }
        } catch(error) {}
    }
}