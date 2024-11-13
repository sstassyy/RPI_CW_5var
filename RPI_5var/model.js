export class MovieModel {
    constructor() {
        this.movies = [
            { id: 1, title: "Железный человек", watched: true },
            { id: 2, title: "Сияние", watched: false },
            { id: 3, title: "500 дней лета", watched: true }
        ];
    }

    addMovie(title, watched = false) {
        const movie = {
            id: Date.now(), 
            title,
            watched
        };
        this.movies.push(movie);
        return movie;
    }

    deleteMovie(id) {
        this.movies = this.movies.filter(movie => movie.id !== id);
    }

    toggleMovieStatus(id) {
        const movie = this.movies.find(movie => movie.id === id);
        if (movie) {
            movie.watched = !movie.watched;
        }
    }

    getMovies() {
        return this.movies;
    }
}