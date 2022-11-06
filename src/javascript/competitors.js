import data from '../data/competitors-data.json';

function readDataFromJson() {
    let htmlFinal = '';

    data.forEach(movie => {
        const title = movie.title;
        const description = movie.description;
        const videoURL = movie.url;
        const screenings = movie.screenings;

        let screeningHTMLTemplate = (location, date, ticketURL) => `
            <ul class="program-list">
                <li class="program-cinema">${location}</li>
                <li class="program-date">${date}</li>
                <li class="program-ticket"><a href="${ticketURL}" class="button">Get Ticket</a></li>
            </ul>
        `;

        let programListHTMLTemplate = (screenings, template) => {
            let temp = '';
            screenings.forEach((screening) => {
                temp += template(...screening);
            });
            return temp;
        }

        programListHTMLTemplate(screenings, screeningHTMLTemplate);

        const movieHtmlTemplate = (title, description, videoURL, programListHTMLTemp) => `
            <li class="movie-item">
                <h2 class="movie-title"><a href="" class="movie-link">${title}</a></h2>
                <p class="movie-description">
                    ${description}
                </p>
                <div class="movie-trailer iframe-container"><iframe width="80%" height="300px" src="${videoURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                <div class="movie-program">
                    <h4 class="program-heading">Πρόγραμμα Προβολών</h4>
                    <div class="program-details">
                        ${programListHTMLTemp}
                    </div>
                </div>
            </li>
        `;

        htmlFinal += `${movieHtmlTemplate(title, description, videoURL, programListHTMLTemplate(screenings, screeningHTMLTemplate))}`;
    });
    return htmlFinal;
}

const movieList = document.querySelector('.movie-list');

movieList.innerHTML += readDataFromJson();