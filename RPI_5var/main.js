import { MovieModel } from './model.js';
import { MovieView } from './view.js';
import { MoviePresenter } from './presenter.js';

document.addEventListener("DOMContentLoaded", () => {
    const app = new MoviePresenter(new MovieModel(), new MovieView());
});