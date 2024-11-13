export class MovieView {
    constructor() {
        this.movieListElement = document.getElementById("movie-list");
        this.formElement = document.getElementById("movie-form");
        this.titleInput = document.getElementById("movie-title");
        this.watchedInput = document.getElementById("movie-status");
        this.filterInputs = document.querySelectorAll("input[name='status-filter']");
    }

    bindAddMovie(handler) {
        this.formElement.addEventListener("submit", event => {
            event.preventDefault();
            if (this.titleInput.value.trim()) {
                handler(this.titleInput.value, this.watchedInput.checked);
                this.titleInput.value = "";
                this.watchedInput.checked = false;
            }
        });
    }

    bindDeleteMovie(handler) {
        this.movieListElement.addEventListener("click", event => {
            if (event.target.classList.contains("delete-button")) {
                const id = parseInt(event.target.parentElement.dataset.id, 10);
                handler(id);
            }
        });
    }

    bindToggleMovieStatus(handler) {
        this.movieListElement.addEventListener("click", event => {
            if (event.target.classList.contains("toggle-status")) {
                const id = parseInt(event.target.parentElement.dataset.id, 10);
                handler(id);
            }
        });
    }

    renderMovies(movies) {
        this.movieListElement.innerHTML = "";
        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.className = `card ${movie.watched ? "watched" : ""}`;
            movieCard.dataset.id = movie.id;
            movieCard.innerHTML = `
                <div class="card-title">${movie.title}</div>
                <button class="toggle-status">${movie.watched ? "Отметить как непросмотренный" : "Отметить как просмотренный"}</button>
                <button class="delete-button">Удалить</button>
            `;
            this.movieListElement.appendChild(movieCard);
        });
    }
}