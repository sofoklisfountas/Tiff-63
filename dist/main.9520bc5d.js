parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hori":[function(require,module,exports) {
module.exports=[{title:"Blue Jean",description:"Αγγλία, 1988: Η συντηρητική κυβέρνηση της Μάργκαρετ Θάτσερ πρόκειται να ψηφίσει έναν νόμο που στιγματίζει τους γκέι και τις λεσβίες. Η Τζιν, μια γυμνάστρια που προπονεί μια τάξη από οργισμένα λυκειοκόριτσα, αισθάνεται ολοένα και πιο παγιδευμένη στη διπλή της ζωή. Καθώς η πίεση αυξάνεται από όλες τις πλευρές, η άφιξη ενός νέου κοριτσιού στο σχολείο δημιουργεί μια κρίση που θα φέρει τη Ζαν αντιμέτωπη με καινούργιες ηθικές, αξιακές, υπαρξιακές προκλήσεις. Μια Βρετανίδα σκηνοθέτρια που έχει μεταβολίσει την τρυφερή εικονογραφία της δεκαετίας του ’80, τη σύνθετη ιστορία της χώρας της, αλλά και τη σύγχρονη κινηματογραφική παράδοση του βρετανικού ρεαλισμού, παραδίδει με το κινηματογραφικό της ντεμπούτο μια συναρπαστική ιστορία υψηλής αισθητικής για την πολιτική και τη σεξουαλικότητα. Με αφετηρία την ομοφοβική περίοδο του θατσερισμού, διατυπώνει ένα –διαχρονικής αξίας– σχόλιο πάνω στη βιοπολιτική και την προσπάθεια της εξουσίας να ελέγξει τα ανθρώπινα σώματα. Ανοίγοντας έναν γόνιμο διάλογο με το σήμερα και τις σύγχρονες διεκδικήσεις της ΛΟΑΤΚΙ+ κοινότητας, η ταινία μάς καλεί σε επαγρύπνηση ενώ προσφέρει μια καλή αφορμή για συζήτηση πάνω σε θέματα που παραμένουν ανεξάντλητα.",url:"https://www.youtube.com/watch?v=VLOJWZfhM8g",screenings:[["ΟΛΥΜΠΙΟΝ","08 Νοεμβρίου 2022 14:00","https://www.viva.gr/tickets/cinema/tiff63-blue-jean"],["ΦΡΙΝΤΑ ΛΙΑΠΠΑ","09 Νοεμβρίου 2022 17:00 ","https://www.viva.gr/tickets/cinema/tiff63-blue-jean"]]},{title:"Άκουσέ με",description:"Οικονομικές δυσκολίες αναγκάζουν την κωφή έφηβη Βαλμίρα να αφήσει το σχολείο Κωφών στην Αθήνα και να επιστρέψει στο νησί του πατέρα της, όπου βρίσκεται αντιμέτωπη με τον κίνδυνο της αδιαφορίας και της απομόνωσης – όχι μόνο εξαιτίας των προκαταλήψεων του χωριού, αλλά, κυρίως, των δικών της.",url:"https://youtu.be/_3bOtUcRq1o",screenings:[["ΟΛΥΜΠΙΟΝ","11 Νοεμβρίου 2022 17:00 ","https://www.viva.gr/tickets/cinema/tiff63-listen"],["ONLINE","12 Νοεμβρίου 2022 10:00","https://online.filmfestival.gr/film/akouse-me-listen/"]]}];
},{}],"vZDL":[function(require,module,exports) {
"use strict";var e=t(require("../data/data.json"));function t(e){return e&&e.__esModule?e:{default:e}}function r(e){return a(e)||i(e)||o(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}function i(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function a(e){if(Array.isArray(e))return c(e)}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=document.querySelector(".mobile-menu"),s=document.querySelector(".nav"),u=document.querySelector(".nav-list-container"),m=document.querySelector("body");function d(){var t="";return e.default.forEach(function(e){var n=e.title,o=e.description,i=e.url,a=e.screenings,c=function(e,t,r){return'\n            <ul class="program-list">\n                <li class="program-cinema">'.concat(e,'</li>\n                <li class="program-date">').concat(t,'</li>\n                <li class="program-ticket"><a href="').concat(r,'" class="button">Get Ticket</a></li>\n            </ul>\n        ')},l=function(e,t){var n="";return e.forEach(function(e){n+=t.apply(void 0,r(e))}),console.log(n),n};l(a,c);t+="".concat(function(e,t,r,n){return'\n            <li class="movie-item">\n                <h2 class="movie-title"><a href="" class="movie-link">'.concat(e,'</a></h2>\n                <p class="movie-description">\n                    ').concat(t,'\n                </p>\n                <div class="movie-trailer iframe-container"><iframe width="80%" height="300px" src="').concat(r,'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>\n                <div class="movie-program">\n                    <h4 class="program-heading">Πρόγραμμα Προβολών</h4>\n                    <div class="program-details">\n                        ').concat(n,"\n                    </div>\n                </div>\n            </li>\n        ")}(n,o,i,l(a,c)))}),t}l.addEventListener("click",function(e){console.log("click: ",e),u.classList.toggle("menu-open"),l.classList.toggle("menu-open"),m.classList.toggle("prevent-scroll"),m.classList.toggle("content-shift-fix")});var f=document.querySelector(".movie-list");f.innerHTML+=d();
},{"../data/data.json":"hori"}]},{},["vZDL"], null)
//# sourceMappingURL=/main.9520bc5d.js.map