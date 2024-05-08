import Navigo from './vendor/navigo.js';
import {LoadView} from './utilities/load-view.js';

export const router = new Navigo(null, true, `#`);
const $view = document.getElementById(`view`);
const layouts = {
	main: `layouts/layout-main.html`,
};

router
.on(async (query) => {
	router.navigate(`/home`);
})
.on(`/home`, (params, query) => {
	router[`view`] = `home`;
	LoadView.layout($view, layouts.main, `views/home-view.html`);
})
.on(`/resources`, (params, query) => {
	router[`view`] = `resources`;
	LoadView.layout($view, layouts.main, `views/resources-view.html`);
})
.on(`/testimonials`, (params, query) => {
	router[`view`] = `testimonials`;
	LoadView.layout($view, layouts.main, `views/testimonials-view.html`);
})
.on(`/about`, (params, query) => {
	router[`view`] = `about`;
	LoadView.layout($view, layouts.main, `views/about-view.html`);
})
.notFound((query) => {
	router[`view`] = `not-found`;
	LoadView.layout($view, layouts.main, `views/not-found-view.html`);
})
.resolve();

