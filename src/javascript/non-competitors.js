import data from '../data/non-competitors-data.json';

function readDataFromJson() {
    let htmlFinal = '';

    data.forEach(movie => {
        const title = movie.title;
        const description = movie.description;
        const videoURL = movie.url;
        const screenings = movie.screenings;

        let screeningHTMLTemplate = (location, date, ticketURL) => `
            <ul class="program-list">
                <li class="program-cinema"><p>${location}</p></li>
                <li class="program-date"><?xml version="1.0" ?><svg class="calendar-icon" contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0.0 0 1664.0 2048" width="1664.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M128,1792h288v-288H128V1792z M480,1792h320v-288H480V1792z M128,1440h288v-320H128V1440z M480,1440h320v-320H480V1440z   M128,1056h288V768H128V1056z M864,1792h320v-288H864V1792z M480,1056h320V768H480V1056z M1248,1792h288v-288h-288V1792z M864,1440  h320v-320H864V1440z M512,576V288c0-8.667-3.167-16.167-9.5-22.5S488.667,256,480,256h-64c-8.667,0-16.167,3.167-22.5,9.5  S384,279.333,384,288v288c0,8.667,3.167,16.167,9.5,22.5s13.833,9.5,22.5,9.5h64c8.667,0,16.167-3.167,22.5-9.5S512,584.667,512,576  z M1248,1440h288v-320h-288V1440z M864,1056h320V768H864V1056z M1248,1056h288V768h-288V1056z M1280,576V288  c0-8.667-3.167-16.167-9.5-22.5s-13.833-9.5-22.5-9.5h-64c-8.667,0-16.167,3.167-22.5,9.5s-9.5,13.833-9.5,22.5v288  c0,8.667,3.167,16.167,9.5,22.5s13.833,9.5,22.5,9.5h64c8.667,0,16.167-3.167,22.5-9.5S1280,584.667,1280,576z M1664,512v1280  c0,34.667-12.667,64.667-38,90s-55.333,38-90,38H128c-34.667,0-64.667-12.667-90-38s-38-55.333-38-90V512  c0-34.667,12.667-64.667,38-90s55.333-38,90-38h128v-96c0-44,15.667-81.667,47-113s69-47,113-47h64c44,0,81.667,15.667,113,47  s47,69,47,113v96h384v-96c0-44,15.667-81.667,47-113s69-47,113-47h64c44,0,81.667,15.667,113,47s47,69,47,113v96h128  c34.667,0,64.667,12.667,90,38S1664,477.333,1664,512z"/></svg><p>${date}</p></li>
                <li class="program-ticket"><a href="${ticketURL}" class="button"><?xml version="1.0" ?><svg class="ticket-icon" contentScriptType="text/ecmascript" contentStyleType="text/css" enable-background="new 0 0 2048 2048" height="2048px" id="Layer_1" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="54.0 0 1685.0 2048" width="1685.0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" zoomAndPan="magnify"><path d="M1024,580l316,316l-572,572l-316-316L1024,580z M813,1559l618-618c12.667-12.667,19-27.667,19-45s-6.333-32.333-19-45  l-362-362c-12-12-27-18-45-18s-33,6-45,18l-618,618c-12.667,12.667-19,27.667-19,45c0,17.333,6.333,32.333,19,45l362,362  c12,12,27,18,45,18S801,1571,813,1559z M1702,922l-907,908c-24.667,24.667-54.833,37-90.5,37s-65.833-12.333-90.5-37l-126-126  c37.333-37.333,56-82.667,56-136s-18.667-98.667-56-136s-82.667-56-136-56s-98.667,18.667-136,56L91,1306  c-24.667-24.667-37-54.833-37-90.5s12.333-65.833,37-90.5l907-906c24.667-24.667,54.833-37,90.5-37s65.833,12.333,90.5,37l125,125  c-37.333,37.333-56,82.667-56,136s18.667,98.667,56,136c37.333,37.333,82.667,56,136,56s98.667-18.667,136-56l126,125  c24.667,24.667,37,54.833,37,90.5S1726.667,897.333,1702,922z"/></svg>Get Ticket</a></li>
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
