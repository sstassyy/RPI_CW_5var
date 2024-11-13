export class MoviePresenter {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddMovie(this.handleAddMovie);
        this.view.bindDeleteMovie(this.handleDeleteMovie);
        this.view.bindToggleMovieStatus(this.handleToggleMovieStatus);

        this.render();
    }

    handleAddMovie = (title, watched) => {
        this.model.addMovie(title, watched);
        this.render();
    };

    handleDeleteMovie = (id) => {
        this.model.deleteMovie(id);
        this.render();
    };

    handleToggleMovieStatus = (id) => {
        this.model.toggleMovieStatus(id);
        this.render();
    };

    render() {
        const movies = this.model.getMovies();
        this.view.renderMovies(movies);
    }
}