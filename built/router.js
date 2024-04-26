import Navigo from './vendor/navigo.js';
import { LoadView } from './utilities/load-view.js';
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
    LoadView.layout($view, layouts.main, `views/home-view.html`);
})
    .notFound((query) => {
    LoadView.layout($view, layouts.main, `views/not-found-view.html`);
})
    .resolve();
