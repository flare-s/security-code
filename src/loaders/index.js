import "../scss/main.scss";
import {load} from "../js/loader";
import { toggleNav } from "../js/nav";
import { progressObserver } from "../js/progress";
import {countersObserver} from "../js/counter";
import {slide} from "../js/slide";
import { animeObserver } from "../js/animation";

const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const loaderWrapper = document.querySelector(".loader-wrapper");
const wrapper = document.querySelector(".wrapper");
const animeElements = Array.from(document.querySelectorAll("[data-anime]"));
const progressBars = Array.from(document.querySelectorAll("[data-progress]"));
const counters = Array.from(document.querySelectorAll("[data-counter]"));
const slides = Array.from(document.querySelectorAll("[data-slide]"));
const slider = document.querySelector("[data-slider]");
const indicators = Array.from(document.querySelectorAll(".carousel__indicator"));

load(loaderWrapper, wrapper);
animeElements.forEach(el => animeObserver.observe(el));
toggleNav(nav, navButton);
progressBars.forEach(progress => progressObserver.observe(progress));
counters.forEach(counter => countersObserver.observe(counter));
slide(slides, slider, indicators);


