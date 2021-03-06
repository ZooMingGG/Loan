'use strict';
import MainSlider from './modules/slider/MainSlider';
import MiniSlider from './modules/slider/MiniSlider';
import Difference from './modules/Difference';
import VideoPlayer from './modules/VideoPlayer';
import Form from './modules/Form';
import ShowInfo from './modules/ShowInfo';
import Download from './modules/Download';

window.addEventListener('DOMContentLoaded', () => {
    const mainSlider = new MainSlider({btns: '.next', container: '.page'});
    mainSlider.render();

    const moduleSlider = new MainSlider({container: '.moduleapp', btns: '.next'});
    moduleSlider.render();

    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        next: '.showup__next',
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    showUpSlider.init();

    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate: true,
        autoplay: true
    });
    modulesSlider.init();

    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    feedSlider.init();

    new VideoPlayer('.showup .play', '.overlay').init();
    new VideoPlayer('.module__video-item .play', '.overlay').init();

    const difference = new Difference('.officerold', '.officernew', '.officer__card-item');
    difference.init();

    const form = new Form('.form');
    form.init();

    const showModalsInfo = new ShowInfo('.plus__content');
    showModalsInfo.init();

    const downloadModalsInfo = new Download('.download');
    downloadModalsInfo.init();
});