// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"data/non-competitors-data.json":[function(require,module,exports) {
module.exports = [{
  "title": "Robe of Gems",
  "description": "Ένα οπτικά καθηλωτικό και βαθιά ανησυχαστικό ντεμπούτο (βραβευμένο με Αργυρή Άρκτο στην Μπερλινάλε του 2022), το οποίο ξεναγεί τον θεατή σε αθέατα τοπία της μεξικανικής εξοχής. Σ’ έναν τόπο που καθορίζεται από την κοινωνική αναταραχή και την εγκληματικότητα, τα πεπρωμένα τριών γυναικών συγκρούονται όταν η έρευνα γύρω από μια υπόθεση ενός αγνοούμενου ατόμου τις παρασέρνει σ’ ένα μονοπάτι πόνου και μετάνοιας. Οι τάφοι των ανταρτών στοιχειώνουν τους κατοίκους της χώρας, οι οποίοι βλέπουν τα παιδιά τους να εξαφανίζονται, ή ακόμα και να δολοφονούνται. «Το Μεξικό είναι ένας Θεός με πολλαπλά πρόσωπα και αντίστοιχα πολλές αντιθέσεις», λέει η σκηνοθέτρια, η οποία γνωρίζει από πρώτο χέρι το σκοτάδι που φέρνει την ασφυξία στους εύθραυστους κοινωνικούς δεσμούς.",
  "url": "https://youtube.com/embed/zDO2f6bvtiQ",
  "screenings": [["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "12 Νοεμβρίου 2022 20:00", "https://www.viva.gr/tickets/cinema/tiff63-robe-of-gems"]]
}, {
  "title": "Άλογο του πολέμου",
  "description": "Το Άλογο του πολέμου ακολουθεί τις αλληλένδετες ιστορίες δύο νεαρών ανδρών της φυλής Oglala Lakota, οι οποίοι μεγαλώνουν στο Πάιν Ριτζ – έναν προστατευόμενο καταυλισμό αυτόχθονων Αμερικανών στον Αμερικανικό Νότο. Ο 23χρονος Μπιλ φιλοδοξεί να κάνει πράγματα για τον εαυτό του. Είτε πρόκειται για παράδοση προϊόντων ή για εκτροφή Πουντλ, είναι αποφασισμένος να κατακτήσει σύντομα το Αμερικάνικο Όνειρο. Στο μεταξύ, ο 12χρονος Μάθο ανυπομονεί να γίνει άντρας. Αποζητώντας απεγνωσμένα την αποδοχή του πατέρα του, παίρνει μια σειρά παρορμητικών αποφάσεων που θα φέρουν τα πάνω κάτω στη ζωή του, ενώ αντιλαμβάνεται πως δεν έχει τα εφόδια για να αντιμετωπίσει τις σκληρές αλήθειες του κόσμου των ενηλίκων. Ενωμένοι με έναν άρρηκτο δεσμό λόγω της κοινής αναζήτησης του ανήκειν, τα δύο αγόρια παλεύουν με την ταυτότητά τους, τις οικογένειές τους και την απώλεια, καθώς εξερευνούν –μέσα από τους δικούς τους μοναδικούς δρόμους– την ανδρική ταυτότητα.",
  "url": "https://www.youtube.com/embed/_mW60hoGJcQ",
  "screenings": [["ΜΑΚΕΔΟΝΙΚΟΝ", "13 Νοεμβρίου 2022 22:00", "https://www.viva.gr/tickets/cinema/tiff63-war-pony"]]
}, {
  "title": "Αξίωμα",
  "description": "Ο Γιούλιους είναι ένας νεαρός υπάλληλος μουσείου, ευφραδής και αγαπητός σε όλους – στους φίλους, στους συναδέλφους και στην κοπέλα του. Μια μέρα, προσκαλεί τους συναδέλφους του σε ένα ιστιοπλοϊκό ταξίδι με το σκάφος της αριστοκρατικής οικογένειάς του. Όμως κάτι δεν πάει καλά. Ο Γιούλιους δεν είναι αυτός που φαίνεται... Μια ανατριχιαστική, ιλιγγιώδης και συναρπαστική διερεύνηση της ανησυχητικής αντίφασης ανάμεσα στο μοντέρνο ιδεώδες του αυτοπροσδιορισμού και στην ανθρώπινη συμπεριφορά που βλάπτει το σύνολο της κοινωνίας, η οποία αναπτύσσεται με αξιοθαύμαστη χάρη και ευελιξία.",
  "url": "https://youtube.com/embed/4S0DMjV9oyU",
  "screenings": [["ΤΩΝΙΑ ΜΑΡΚΕΤΑΚΗ", "10 Νοεμβρίου 2022 16:00", "https://www.viva.gr/tickets/cinema/tiff63-axiom"], ["ONLINE", "10 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/axioma-axiom/"], ["ONLINE", "12 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/axioma-axiom/"], ["ONLINE", "13 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/axioma-axiom/"], ["ΤΩΝΙΑ ΜΑΡΚΕΤΑΚΗ", "13 Νοεμβρίου 2022 22:00", "https://www.viva.gr/tickets/cinema/tiff63-axiom"]]
}, {
  "title": "Λόλα",
  "description": "Τι θα γινόταν αν το Space Oddity του Ντέιβιντ Μπόουι μπορούσε να ακουστεί το 1941; Αυτό είναι ένα από τα πολλά ερωτήματα που θέτει η Λόλα – μια ταινία αντιπροσωπευτική της προσήλωσης του είδους της επιστημονικής φαντασίας στην τεχνολογία, στις «υποσχέσεις» της για αιώνια ευδαιμονία, αλλά και στις καταστροφικές της συνέπειες. Με καθηλωτικές ασπρόμαυρες εικόνες και πλάνα γυρισμένα σε φιλμ 16mm που αναδύουν μια αύρα «αυθεντικότητας», η ταινία ξεδιπλώνεται σ’ έναν παράλληλο χωροχρόνο. Εκεί δύο αδερφές εφευρίσκουν ένα μηχάνημα που φέρνει στις συχνότητες του οικιακού ραδιοφώνου εκπομπές από το μέλλον – του δίνουν μάλιστα το γυναικείο όνομα Λόλα, σαν να επρόκειτο για την καλύτερή τους φίλη. Όταν όμως ξεσπά ο Β΄ Παγκόσμιος Πόλεμος, η ηθική συγκρούεται με την ευθύνη, καθώς οι δύο αδερφές καλούνται να αποφασίσουν πώς θα αξιοποιήσουν αυτή τη γνώση – που, όπως ξέρουμε, είναι η απόλυτη μορφή εξουσίας.",
  "url": "https://www.youtube.com/embed/KbphuI_7FtI",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "06 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-lola"], ["ΤΩΝΙΑ ΜΑΡΚΕΤΑΚΗ", "07 Νοεμβρίου 2022 22:00", "https://www.viva.gr/tickets/cinema/tiff63-lola"]]
}, {
  "title": "Με τα μάτια της Ντάλβα",
  "description": "Σε μια εποχή όπου τα φαινόμενα οικογενειακής βίας κατά των γυναικών μικρής και μεγάλης ηλικίας μοιάζει να εντείνονται (ή, τουλάχιστον, να γίνονται πλέον ορατά πέρα από τους τοίχους της οικίας), μια ταινία διερευνά το σύνθετο δίκτυο δύναμης και εξουσίας που ενθαρρύνει την κακοποίηση. Όταν η αστυνομία εισβάλλει απότομα στο σπίτι της Ντάλβα για να την μεταφέρει σε μια μονάδα ανάδοχης φροντίδας, εκείνη αρχίζει σιγά σιγά να συνειδητοποιεί πως αντιλαμβανόταν διαφορετικά την αγάπη τους με τον πατέρα της. Με τη βοήθεια της νέας της συγκατοίκου και μιας κοινωνική λειτουργού, η Ντάλβα θα μάθει πώς να είναι και πάλι παιδί. Σε αυτό το αιχμηρό ντεμπούτο, η Εμανουέλ Νικό διερευνά τις διάφορες εκδοχές της βίας που εκδηλώνονται κατά τη διάρκεια της ευάλωτης παιδικής ηλικίας, με βαθιά ευαισθησία και απαράμιλλη ευγένεια, σ’ ένα ελπιδοφόρο ταξίδι προς την επούλωση.",
  "url": "https://www.youtube.com/embed/yHPbu4jsYTY",
  "screenings": [["", "Δεν υπάρχουν προγραμματισμένες προβολές. (｡•́︿•̀｡)", ""]]
}, {
  "title": "Οι πέντε διάβολοι (Les Cinq Diables)",
  "description": "Η Βικί, ένα ιδιαίτερο και μοναχικό κορίτσι, έχει ένα μαγικό χάρισμα: μπορεί να αναπαράγει οποιαδήποτε μυρωδιά της αρέσει, και τις συλλέγει όλες σε μια σειρά από βάζα τα οποία διαχωρίζει προσεκτικά χρησιμοποιώντας καρτελάκια. Στα κρυφά, έχει «αιχμαλωτίσει» τη μυρωδιά της μητέρας της, Ζοάν, για την οποία θρέφει μια ασυγκράτητη, υπέρμετρη αγάπη. Όταν η αδερφή του πατέρα τους, η Ζουλιά, έρχεται ξαφνικά στη ζωή τους, η Βικί αναπαράγει τη μυρωδιά της και μεταφέρεται σε σκοτεινές, αρχέγονες αναμνήσεις οι οποίες την οδηγούν στην ανακάλυψη μυστικών του χωριού, της οικογένειας και της ίδιας της ύπαρξης της. Η ανφάν γκατέ του σύγχρονου γαλλικού σινεμά (συμπεριλαμβανομένης της Δάφνης Πατακιά και της ελληνικής καταγωγής Αντέλ Εξαρχοπουλος) συμπυκνώνει σε ενενήντα μόλις λεπτά το άρωμα του μύθο, του πειρασμού και της φαντασίας αιώνων.",
  "url": "https://youtube.com/embed/D5C3U5tlu4U",
  "screenings": [["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "11 Νοεμβρίου 2022 20:00", "https://www.viva.gr/tickets/cinema/tiff63-the-five-devils"]]
}, {
  "title": "Ροντέο",
  "description": "Ήδη από τις εξεγέρσεις του 2005, τα προάστια του Παρισιού επιμένουν να μας θυμίζουν συνεχώς τις σφοδρές ταξικές συγκρούσεις και τις εσωτερικές, εθνοτικές διαμάχες που χαρακτηρίζουν τη –μάλλον ανομοιογενή– γαλλική επικράτεια. Παρατηρώντας από κοντά και επί σειρά ετών μια underground κοινότητα μοτοσικλετιστών στα βόρεια του Παρισιού, μια νεαρή σκηνοθέτρια αντλεί από τη δική της προσωπική εμπειρία για να αφηγηθεί την ιστορία της Ζουλιά, μιας ασυμβίβαστης, ανεξάρτητης αμαζόνας, η οποία βρίσκει διέξοδο στο πάθος της για τις μοτοσικλέτες και στον έρωτα για τις υψηλές ταχύτητες. Ο κόσμος της είναι αυτός των αστικών «ροντέο» – των παράνομων συγκεντρώσεων όπου οι αναβάτες κάνουν επίδειξη των μηχανών τους και παράτολμων ακροβατικών. Σε μια ταινία όπου οι μοτοσυκλέτες γίνονται μηχανικά άλογα ενός σύγχρονου γουέστερν, η γυναικεία κατάσταση σε έναν ανδροκρατούμενο κόσμο εξετάζεται από μια πρωτόγνωρη σκοπιά, ενώ ταυτόχρονα αποκαλύπτονται οι όψεις της σκληρής κοινωνικής πραγματικότητας που τροφοδοτούν τις συγκρούσεις.",
  "url": "https://youtube.com/embed/ZYbg2kJbD7M",
  "screenings": [["", "Δεν υπάρχουν προγραμματισμένες προβολές. (╥﹏╥)", ""]]
}, {
  "title": "Το σπουργίτι",
  "description": "Στο μεγάλου μήκους ντεμπούτο του, ο Μάικλ Κινίρονς επιστρατεύει το ψυχολογικό σχήμα της αβάσταχτης ενοχής και το αντισταθμίζει με την ανακούφιση που μπορεί να φέρει μια καταλυτική εξομολόγηση και η συγχώρεση· αφηγείται εδώ την ιστορία του Κέβιν, ενός ατίθασου εφήβου. Ο Κέβιν δεν έχει άλλη επιλογή παρά να παρατηρεί με τρόμο τη ζωή να γλιστρά μπροστά απ’ τα μάτια του, καθώς οι συνέπειες του μυστικού του ξεδιπλώνονται μπροστά στα μάτια του. Μόνο του στήριγμα είναι ένα πουλί – ένα μικρό σπουργίτι που φυλάει στο δωμάτιο του. Μια συναρπαστική διερεύνηση της προβληματικής ανδρικής δυναμικής εντός της οικογένειας και των καταστροφικών επιπτώσεων του ψέματος, της μυστικοπάθειας και του φόβου που προξενεί η πατρική αυθεντία.",
  "url": "https://www.youtube.com/embed/VsTBQcjHPdc",
  "screenings": [["ΣΤΑΥΡΟΣ ΤΟΡΝΕΣ", "11 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-the-sparrow"], ["ΜΑΚΕΔΟΝΙΚΟΝ", "12 Νοεμβρίου 2022 19:30", "https://www.viva.gr/tickets/cinema/tiff63-the-sparrow"]]
}];
},{}],"javascript/non-competitors.js":[function(require,module,exports) {
"use strict";

var _nonCompetitorsData = _interopRequireDefault(require("../data/non-competitors-data.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function readDataFromJson() {
  var htmlFinal = '';
  _nonCompetitorsData.default.forEach(function (movie) {
    var title = movie.title;
    var description = movie.description;
    var videoURL = movie.url;
    var screenings = movie.screenings;
    var screeningHTMLTemplate = function screeningHTMLTemplate(location, date, ticketURL) {
      return "\n            <ul class=\"program-list\">\n                <li class=\"program-cinema\">".concat(location, "</li>\n                <li class=\"program-date\">").concat(date, "</li>\n                <li class=\"program-ticket\"><a href=\"").concat(ticketURL, "\" class=\"button\">Get Ticket</a></li>\n            </ul>\n        ");
    };
    var programListHTMLTemplate = function programListHTMLTemplate(screenings, template) {
      var temp = '';
      screenings.forEach(function (screening) {
        temp += template.apply(void 0, _toConsumableArray(screening));
      });
      return temp;
    };
    programListHTMLTemplate(screenings, screeningHTMLTemplate);
    var movieHtmlTemplate = function movieHtmlTemplate(title, description, videoURL, programListHTMLTemp) {
      return "\n            <li class=\"movie-item\">\n                <h2 class=\"movie-title\"><a href=\"\" class=\"movie-link\">".concat(title, "</a></h2>\n                <p class=\"movie-description\">\n                    ").concat(description, "\n                </p>\n                <div class=\"movie-trailer iframe-container\"><iframe width=\"80%\" height=\"300px\" src=\"").concat(videoURL, "\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>\n                <div class=\"movie-program\">\n                    <h4 class=\"program-heading\">\u03A0\u03C1\u03CC\u03B3\u03C1\u03B1\u03BC\u03BC\u03B1 \u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03CE\u03BD</h4>\n                    <div class=\"program-details\">\n                        ").concat(programListHTMLTemp, "\n                    </div>\n                </div>\n            </li>\n        ");
    };
    htmlFinal += "".concat(movieHtmlTemplate(title, description, videoURL, programListHTMLTemplate(screenings, screeningHTMLTemplate)));
  });
  return htmlFinal;
}
var movieList = document.querySelector('.movie-list');
movieList.innerHTML += readDataFromJson();
},{"../data/non-competitors-data.json":"data/non-competitors-data.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56033" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/non-competitors.js"], null)
//# sourceMappingURL=/non-competitors.48118e06.js.map