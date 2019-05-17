import {calc} from './parts/calc';
import {form} from './parts/form';
import {modal} from './parts/modal';
import {tabs} from './parts/tabs';
import {timer} from './parts/timer';
import {slider} from './parts/slider';

window.addEventListener('DOMContentLoaded', () => {

    'use sctrict';

    form();
    calc();
    tabs();
    modal();
    timer();
    slider();

});