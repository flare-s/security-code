import "../scss/main.scss";
import {load} from "../js/loader";
import { toggleNav } from "../js/nav";

const navButton = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const loaderWrapper = document.querySelector(".loader-wrapper");
const wrapper = document.querySelector(".wrapper");

load(loaderWrapper, wrapper);
toggleNav(nav, navButton);
