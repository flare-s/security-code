import "../scss/main.scss";

import {load} from "../js/loader";
import { toggleNav } from "../js/nav";
import { toggleTab } from "../js/info-bar";
import { animeObserver } from "../js/animation";

const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const loaderWrapper = document.querySelector(".loader-wrapper");
const wrapper = document.querySelector(".wrapper");
const animeElements = Array.from(document.querySelectorAll("[data-anime]"));
const barContainer = document.querySelector(".bars-container")


load(loaderWrapper, wrapper);
animeElements.forEach(el => animeObserver.observe(el));
toggleNav(nav, navButton);
toggleTab(barContainer);