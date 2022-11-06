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
})({"data/competitors-data.json":[function(require,module,exports) {
module.exports = [{
  "title": "Blue Jean",
  "description": "Αγγλία, 1988: Η συντηρητική κυβέρνηση της Μάργκαρετ Θάτσερ πρόκειται να ψηφίσει έναν νόμο που στιγματίζει τους γκέι και τις λεσβίες. Η Τζιν, μια γυμνάστρια που προπονεί μια τάξη από οργισμένα λυκειοκόριτσα, αισθάνεται ολοένα και πιο παγιδευμένη στη διπλή της ζωή. Καθώς η πίεση αυξάνεται από όλες τις πλευρές, η άφιξη ενός νέου κοριτσιού στο σχολείο δημιουργεί μια κρίση που θα φέρει τη Ζαν αντιμέτωπη με καινούργιες ηθικές, αξιακές, υπαρξιακές προκλήσεις. Μια Βρετανίδα σκηνοθέτρια που έχει μεταβολίσει την τρυφερή εικονογραφία της δεκαετίας του ’80, τη σύνθετη ιστορία της χώρας της, αλλά και τη σύγχρονη κινηματογραφική παράδοση του βρετανικού ρεαλισμού, παραδίδει με το κινηματογραφικό της ντεμπούτο μια συναρπαστική ιστορία υψηλής αισθητικής για την πολιτική και τη σεξουαλικότητα. Με αφετηρία την ομοφοβική περίοδο του θατσερισμού, διατυπώνει ένα –διαχρονικής αξίας– σχόλιο πάνω στη βιοπολιτική και την προσπάθεια της εξουσίας να ελέγξει τα ανθρώπινα σώματα. Ανοίγοντας έναν γόνιμο διάλογο με το σήμερα και τις σύγχρονες διεκδικήσεις της ΛΟΑΤΚΙ+ κοινότητας, η ταινία μάς καλεί σε επαγρύπνηση ενώ προσφέρει μια καλή αφορμή για συζήτηση πάνω σε θέματα που παραμένουν ανεξάντλητα.",
  "url": "https://www.youtube.com/embed/VLOJWZfhM8g",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "08 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-blue-jean"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "09 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-blue-jean"]]
}, {
  "title": "Άκουσέ με",
  "description": "Οικονομικές δυσκολίες αναγκάζουν την κωφή έφηβη Βαλμίρα να αφήσει το σχολείο Κωφών στην Αθήνα και να επιστρέψει στο νησί του πατέρα της, όπου βρίσκεται αντιμέτωπη με τον κίνδυνο της αδιαφορίας και της απομόνωσης – όχι μόνο εξαιτίας των προκαταλήψεων του χωριού, αλλά, κυρίως, των δικών της.",
  "url": "https://www.youtube.com/embed/_3bOtUcRq1o",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "11 Νοεμβρίου 2022 17:00 ", "https://www.viva.gr/tickets/cinema/tiff63-listen"], ["ONLINE", "12 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/akouse-me-listen/"], ["ΤΖΟΝ ΚΑΣΣΑΒΕΤΗΣ", "12 Νοεμβρίου 2022 22:00", "https://www.viva.gr/tickets/cinema/tiff63-listen"], ["ONLINE", "13 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/akouse-me-listen/"]]
}, {
  "title": "Βροντή (Foudre)",
  "description": "Είναι το καλοκαίρι του 1900, σε μια πεδιάδα της νότιας Ελβετίας. Η Ελίζαμπεθ, 17 ετών, είναι έτοιμη να δώσει όρκο αγνότητας, όταν ο ξαφνικός θάνατος της μεγαλύτερης αδερφής της την αναγκάζει να φύγει από το μοναστήρι και να επιστρέψει στο οικογενειακό αγρόκτημα που άφησε πίσω της πέντε χρόνια νωρίτερα. Όμως η Ελίζαμπεθ δεν είναι πια παιδί. Καθώς οι σκληροί κανόνες του χωριού την οδηγούν σε μια κατάσταση ασφυξίας και η μυστηριώδης εξαφάνιση της αδερφής της τής έχει γίνει εμμονή, η Ελίζαμπεθ θα διεκδικήσει το δικαίωμά της στον πειραματισμό. Μυστικιστική στην ατμόσφαιρά της και εξαιρετικά επίκαιρη στη θεματολογία της, η πρώτη μεγάλου μήκους ταινία της Ελβετίδας σκηνοθέτριας Κάρμεν Ζακιέ μιλάει για την πίστη, τη σεξουαλικότητα, την αυτοδιάθεση του γυναικείου σώματος και το δικαίωμα στον αυτοπροσδιορισμό, με θαυμάσιο εικαστικό ύφος και μυσταγωγικό κινηματογραφικό ρυθμό. Μια συναρπαστική απεικόνιση ενός χαρακτήρα που παλεύει για την ελευθερία να ερωτευτεί – κάτι που η κοινωνία θα προτιμούσε να κρατάει πάντα σε καταστολή.",
  "url": "https://www.youtube.com/embed/dzRqoqHzhF8",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "12 Νοεμβρίου 2022 14:00 ", "https://www.viva.gr/tickets/cinema/tiff63-thunder"], ["ΜΑΚΕΔΟΝΙΚΟΝ", "13 Νοεμβρίου 2022 14:30", "https://www.viva.gr/tickets/cinema/tiff63-thunder"]]
}, {
  "title": "Ένα κομμάτι ουρανού (Drii Winter)",
  "description": "Σ’ ένα απομονωμένο χωριό ένας άγουρος έρωτας μπαίνει σε μια απρόσμενη δοκιμασία. Η Άννα είναι μια νεαρή, μόνη γυναίκα από το χωριό και έχει μια κόρη από προηγούμενη σχέση, ενώ ο Μάρκο είναι ένας παρείσακτος από τον κάμπο, στον οποίο οι αγρότες του βουνού έχουν αναθέσει την καλλιέργεια της τραχιάς γης. Οι δυο τους θα χαρούν τον ενθουσιασμό του καινούργιου έρωτα και την οικογενειακή θαλπωρή. Όταν όμως ο Μάρκο χάνει ξαφνικά τον αυτοέλεγχό του και συμπεριφέρεται με απρόβλεπτο τρόπο, νέες εντάσεις ξεσπούν εντός της κοινότητας. Κόντρα στην αλλαγή των εποχών και στις δυσκολίες της καθημερινότητας, η Άννα παλεύει για να κρατήσει ζωντανό έναν έρωτα που θεωρεί ικανό να νικήσει ακόμα και τον θάνατο.",
  "url": "https://www.youtube.com/embed/nLQKEZ41mLo",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "07 Νοεμβρίου 2022 13:30", "https://www.viva.gr/tickets/cinema/tiff63-a-piece-of-sky"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "08 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-a-piece-of-sky"]]
}, {
  "title": "Έχω ηλεκτρισμένα όνειρα (Tengo sueños eléctricos)",
  "description": "Η Εύα είναι μια πεισματάρα και ατίθαση 16χρονη που ζει με τη μητέρα της, τη μικρότερη αδερφή της και τη γάτα τους, όμως αυτό που θέλει όσο τίποτα είναι να μετακομίσει με τον αποξενωμένο πατέρα της. Προσκολλημένη πάνω του όσο ο ίδιος περνάει μία δεύτερη εφηβεία, η Εύα ισορροπεί μεταξύ της τρυφερότητας και ευαισθησίας της εφηβικής ηλικίας και της σκληρότητας του κόσμου των ενηλίκων. Με εικόνες πλούσιας υφής και ένα αίσθημα ωμής ευαισθησίας να ρέουν καθ’ όλη της τη διάρκεια, η ταινία αποτυπώνει τη λεπτή γραμμή μεταξύ αγάπης και μίσους, σε έναν κόσμο όπου η επιθετικότητα και η οργή είναι συνυφασμένες με την ιλιγγιώδη αφύπνιση της γυναικείας σεξουαλικότητας.",
  "url": "https://www.youtube.com/embed/pFXzZql_Bpk",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "12 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-i-have-electric-dreams"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "13 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-i-have-electric-dreams"]]
}, {
  "title": "Ησυχία 6-9",
  "description": "O Άρης και η Άννα συναντιούνται τυχαία σε μια ερειπωμένη, παραθαλάσσια πόλη γεμάτη με κεραίες που εκμπέμπουν παράξενους ήχους και τις φωνές των Εξαφανισμένων, κατοίκων που έχουν χαθεί ξαφνικά και ανεξήγητα. Mέσα σε αυτόν τον παράξενο κόσμο, η Άννα και ο Άρης ερωτεύονται. Λίγες μέρες μετά, η Άννα εξαφανίζεται.",
  "url": "https://www.youtube.com/embed/CQBFsSLW8R8",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "08 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-silence-6-9"], ["ONLINE", "09 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/esukhia-6-9-silence-6-9/"], ["ΤΖΟΝ ΚΑΣΣΑΒΕΤΗΣ", "09 Νοεμβρίου 2022 22:00", "https://www.viva.gr/tickets/cinema/tiff63-silence-6-9"], ["ONLINE", " 10 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/esukhia-6-9-silence-6-9/"], ["ONLINE", " 11 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/esukhia-6-9-silence-6-9/"], ["ONLINE", " 12 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/esukhia-6-9-silence-6-9/"], ["ONLINE", " 13 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/esukhia-6-9-silence-6-9/"]]
}, {
  "title": "Λύκοι και σκυλιά (Lobo e Cão)",
  "description": "Η Άννα γεννήθηκε στο Σάου Μιγκέλ, ένα νησί στη μέση του Ατλαντικού, το οποίο διέπεται από θρησκευτικούς κανόνες και παραδόσεις. Ως το μεσαίο παιδί της οικογένειας, μεγαλωμένο από τη μητέρα και τη γιαγιά του, η Άννα αντιλήφθηκε από νωρίς πως τα αγόρια και τα κορίτσια κουβαλάνε διαφορετικού είδους ευθύνες. Μέσα από τη φιλία της με τον Λούι, τον queer φίλο της στον οποίο αρέσουν τόσο τα φορέματα όσο τα παντελόνια, η Άννα αμφισβητεί τον κόσμο που της είχαν υποσχεθεί. Όταν η φίλη της η Κλοέ έρχεται από τον Καναδά, κουβαλώντας στις αποσκευές της τις λαμπερές μέρες της νιότης, η Άννα βάζει πλώρη για ένα ταξίδι πέρα από τον ορίζοντα. Γεμάτο πάθος και ελευθερία, το φως του Λύκοι και σκυλιά θα αποκαλύψει στην Άννα ποια είναι για εκείνη η ιδανική θάλασσα να διασχίσει. Μια μαγευτική ωδή στην queer κοινότητα του νησιού, όπου η λάμψη του λυκόφωτος διαχέεται στον απέραντο Ατλαντικό Ωκεανό και διαθλάται σε όλα τα χρώματα του ουράνιου τόξου.",
  "url": "https://www.youtube.com/embed/IE_XG7nH33k",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "10 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-wolf-and-dog"], ["ONLINE", "11 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/lukoi-kai-skulia-wolf-and-dog/"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "11 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-wolf-and-dog"], ["ONLINE", " 12 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/lukoi-kai-skulia-wolf-and-dog/"], ["ONLINE", " 13 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/lukoi-kai-skulia-wolf-and-dog/"]]
}, {
  "title": "Νάρκωση (Narcosis)",
  "description": "Μια δεμένη οικογένεια κλονίζεται όταν ο πατέρας επιχειρεί μια επαγγελματική κατάδυση από την οποία δεν αναδύθηκε ποτέ. Χωρίς κηδεία, χωρίς αντίο, με ένα σπίτι γεμάτο αναμνήσεις να είναι το μόνο που απέμεινε. Καταβεβλημένη από τη συγκεχυμένη αίσθηση της απώλειας, η μητέρα δύο νεαρών παιδιών αποφεύγει να αντιμετωπίσει το γεγονός πως ο συζύγός της είναι νεκρός – και ό,τι σχετίζεται με αυτόν. Τα παιδιά προσπαθούν να χωνέψουν την απώλεια αλλά παγιδεύονται σε ένα μοναχικό κυνήγι απαντήσεων – κάτι που οδηγεί την οικογένεια σε τέλμα. Η γυναίκα δεν έχει άλλη επιλογή παρά να διαχειριστεί το πένθος με τον δικό της τρόπο, αποσκοπώντας να ξεκινήσει μια καινούργια ζωή. Τολμηρή στη δραματουργία της και απρόσμενη ως προς στην παλέτα των συγκινήσεων που διεγείρει, η Νάρκωση αφυπνίζει τις αισθήσεις μας με μια υπόκωφη σπουδή στη δύναμη της οικογένειας και στην ανθρώπινη ανάγκη για αναγέννηση. Με μια αφήγηση που ρέει σχεδόν ονειρικά, σκηνοθεσία που συνδυάζει ιδανικά τον ρεαλισμό με την υπέρβασή του, υπέροχη φωτογραφία και μια άρτια πρωταγωνιστική ερμηνεία, αυτό το χαμηλότονα λυρικό, ανατριχιαστικό κινηματογραφικό ποίημα μας φανερώνει ένα παρελθόν που αρνείται να σβήσει.",
  "url": "https://www.youtube.com/embed/VsTBQcjHPdc",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "11 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-narcosis"], ["ONLINE", "12 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/narkose-narcosis/"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "12 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-narcosis"], ["ONLINE", " 13 Νοεμβρίου 2022 00:00", "https://www.viva.gr/tickets/cinema/tiff63-narcosis"]]
}, {
  "title": "Προς τον βορρά (Spre Nord)",
  "description": "Βρισκόμαστε στο 1996, στα ανοιχτά της θάλασσας. Κατά τη διάρκεια της βάρδιας του στο κατάστρωμα ενός υπερωκεάνιου, ο Τζόελ, ένας θρησκευόμενος ναύτης από τις Φιλιππίνες, ανακαλύπτει τον Ντουμίτρου, έναν λαθρεπιβάτη κρυμμένο ανάμεσα στα κοντέινερ. Σε περίπτωση που τον βρουν οι Ταϊβανοί διοικητές του πλοίου, ο Ντουμίτρου κινδυνεύει να πεταχτεί στη θάλασσα. Ο Τζόελ αποφασίζει να τον προστατεύσει, σε ένδειξη της ευγνωμοσύνης του απέναντι στον Θεό. Σύντομα ξεκινάει ένα επικίνδυνο κρυφτοκυνηγητό. Όταν το πλήρωμα, οι φίλοι του, ακόμα και ο ίδιος ο Θεός τού γυρίζουν την πλάτη, ο Τζόελ αντιλαμβάνεται ότι πρέπει να αντιμετωπίσει μόνος του τη σκληρή του μοίρα… Εμπνευσμένη από αληθινά γεγονότα και σε συνέχεια της πρώτης της παρουσίασης σε μορφή ραδιοφωνικού ντοκιμαντέρ, αυτή είναι μια ιστορία –με τα λόγια του δημιουργού της– «για τις ηθικές επιλογές, την καλοσύνη και τον συμβιβασμό, το θάρρος και τον φόβο. Μια ταινία που θα μπορούσε να μιλήσει στους ανθρώπους για τη δική τους ζωή».",
  "url": "https://www.youtube.com/embed/81wyxfWZff4",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "09 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-to-the-north"], ["ONLINE", "10 Νοεμβρίου 2022 10:00", "https://online.filmfestival.gr/film/pros-ton-borra-to-the-north/"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "10 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-to-the-north"], ["ONLINE", " 11 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/pros-ton-borra-to-the-north/"], ["ONLINE", " 12 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/pros-ton-borra-to-the-north/"], ["ONLINE", " 13 Νοεμβρίου 2022 00:00", "https://online.filmfestival.gr/film/pros-ton-borra-to-the-north/"]]
}, {
  "title": "Σχέδιο 75",
  "description": "Στην Ιαπωνία το κυβερνητικό πρόγραμμα «Σχέδιο 75» παροτρύνει τους ηλικιωμένους πολίτες να επιλέξουν οικειοθελώς την ευθανασία, ως λύση στο πρόβλημα μιας ολοένα και πιο γερασμένης κοινωνίας. Μια ηλικιωμένη γυναίκα με περιορισμένα μέσα επιβίωσης, ένας πραγματιστής «πωλητής» του Πλάνου 75 και ένας νεαρός εργάτης από τις Φιλιππίνες αντιμετωπίζουν διλήμματα ζωής και θανάτου. Μια υπόκωφα ανατρεπτική και ταυτόχρονα παγερή ματιά σε μια στυγνή μελλοντική κοινωνία, που ξεσκεπάζει την ομορφιά και την αξιοπρέπεια της ανθρώπινης ζωής, πίσω από τη βιτρίνα της φιλαγαθίας.",
  "url": "https://www.youtube.com/embed/WNaXEZ7q8Bc",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "07 Νοεμβρίου 2022 17:00", "https://www.viva.gr/tickets/cinema/tiff63-plan-75"], ["ΜΑΚΕΔΟΝΙΚΟΝ", "12 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-plan-75"]]
}, {
  "title": " Το φράγμα (Le Barrage)",
  "description": "Ένα θηρίο από χώμα ξυπνά στην καρδιά του Σουδάν, κοντά στο φαράγγι της Μερόης – του αρχαιότερου οικισμού της περιοχής. Ο Μαχέρ δουλεύει σε ένα παραδοσιακό πλινθοποιείο που βρέχεται από τα νερά του Νείλου. Κάθε απόγευμα, φεύγει κρυφά και κατευθύνεται προς την έρημο, όπου χτίζει μια μυστηριώδη κατασκευή από λάσπη. Καθώς ο Σουδανικός λαός επαναστατεί και διεκδικεί την ελευθερία του, το δημιούργημα του αρχίζει και αποκτά δική του ζωή… Μέρος ενός μεγαλύτερου έργου αφιερωμένου στα τοπία και στις εκτενείς γεωγραφίες της βίας, αυτή η ανατριχιαστική, υποβλητική ταινία εντοπίζει πώς οι βίαιες κρίσεις γίνονται αόρατες σε συγκεκριμένα περιβάλλοντα, ενώ παράλληλα παρουσιάζει ως απτή πραγματικότητα τα πολιτικά, κοινωνικά και γεωπολιτικά γεγονότα που εγγράφονται στα πιο απίθανα μέρη.",
  "url": "https://www.youtube.com/embed/vmHpRZm6h3c",
  "screenings": [["ΟΛΥΜΠΙΟΝ", "09 Νοεμβρίου 2022 17:15", "https://www.viva.gr/tickets/cinema/tiff63-the-dam"], ["ΦΡΙΝΤΑ ΛΙΑΠΠΑ", "10 Νοεμβρίου 2022 14:00", "https://www.viva.gr/tickets/cinema/tiff63-the-dam"]]
}];
},{}],"javascript/competitors.js":[function(require,module,exports) {
"use strict";

var _competitorsData = _interopRequireDefault(require("../data/competitors-data.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function readDataFromJson() {
  var htmlFinal = '';
  _competitorsData.default.forEach(function (movie) {
    var title = movie.title;
    var description = movie.description;
    var videoURL = movie.url;
    var screenings = movie.screenings;
    var screeningHTMLTemplate = function screeningHTMLTemplate(location, date, ticketURL) {
      return "\n            <ul class=\"program-list\">\n                <li class=\"program-cinema\">".concat(location, "</li>\n                <li class=\"program-date\"><?xml version=\"1.0\" ?><svg class=\"calendar-icon\" contentScriptType=\"text/ecmascript\" contentStyleType=\"text/css\" enable-background=\"new 0 0 2048 2048\" height=\"2048px\" id=\"Layer_1\" preserveAspectRatio=\"xMidYMid meet\" version=\"1.1\" viewBox=\"0.0 0 1664.0 2048\" width=\"1664.0px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" zoomAndPan=\"magnify\"><path d=\"M128,1792h288v-288H128V1792z M480,1792h320v-288H480V1792z M128,1440h288v-320H128V1440z M480,1440h320v-320H480V1440z   M128,1056h288V768H128V1056z M864,1792h320v-288H864V1792z M480,1056h320V768H480V1056z M1248,1792h288v-288h-288V1792z M864,1440  h320v-320H864V1440z M512,576V288c0-8.667-3.167-16.167-9.5-22.5S488.667,256,480,256h-64c-8.667,0-16.167,3.167-22.5,9.5  S384,279.333,384,288v288c0,8.667,3.167,16.167,9.5,22.5s13.833,9.5,22.5,9.5h64c8.667,0,16.167-3.167,22.5-9.5S512,584.667,512,576  z M1248,1440h288v-320h-288V1440z M864,1056h320V768H864V1056z M1248,1056h288V768h-288V1056z M1280,576V288  c0-8.667-3.167-16.167-9.5-22.5s-13.833-9.5-22.5-9.5h-64c-8.667,0-16.167,3.167-22.5,9.5s-9.5,13.833-9.5,22.5v288  c0,8.667,3.167,16.167,9.5,22.5s13.833,9.5,22.5,9.5h64c8.667,0,16.167-3.167,22.5-9.5S1280,584.667,1280,576z M1664,512v1280  c0,34.667-12.667,64.667-38,90s-55.333,38-90,38H128c-34.667,0-64.667-12.667-90-38s-38-55.333-38-90V512  c0-34.667,12.667-64.667,38-90s55.333-38,90-38h128v-96c0-44,15.667-81.667,47-113s69-47,113-47h64c44,0,81.667,15.667,113,47  s47,69,47,113v96h384v-96c0-44,15.667-81.667,47-113s69-47,113-47h64c44,0,81.667,15.667,113,47s47,69,47,113v96h128  c34.667,0,64.667,12.667,90,38S1664,477.333,1664,512z\"/></svg>").concat(date, "</li>\n                <li class=\"program-ticket\"><a href=\"").concat(ticketURL, "\" class=\"button\"><?xml version=\"1.0\" ?><svg class=\"ticket-icon\" contentScriptType=\"text/ecmascript\" contentStyleType=\"text/css\" enable-background=\"new 0 0 2048 2048\" height=\"2048px\" id=\"Layer_1\" preserveAspectRatio=\"xMidYMid meet\" version=\"1.1\" viewBox=\"54.0 0 1685.0 2048\" width=\"1685.0px\" xml:space=\"preserve\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" zoomAndPan=\"magnify\"><path d=\"M1024,580l316,316l-572,572l-316-316L1024,580z M813,1559l618-618c12.667-12.667,19-27.667,19-45s-6.333-32.333-19-45  l-362-362c-12-12-27-18-45-18s-33,6-45,18l-618,618c-12.667,12.667-19,27.667-19,45c0,17.333,6.333,32.333,19,45l362,362  c12,12,27,18,45,18S801,1571,813,1559z M1702,922l-907,908c-24.667,24.667-54.833,37-90.5,37s-65.833-12.333-90.5-37l-126-126  c37.333-37.333,56-82.667,56-136s-18.667-98.667-56-136s-82.667-56-136-56s-98.667,18.667-136,56L91,1306  c-24.667-24.667-37-54.833-37-90.5s12.333-65.833,37-90.5l907-906c24.667-24.667,54.833-37,90.5-37s65.833,12.333,90.5,37l125,125  c-37.333,37.333-56,82.667-56,136s18.667,98.667,56,136c37.333,37.333,82.667,56,136,56s98.667-18.667,136-56l126,125  c24.667,24.667,37,54.833,37,90.5S1726.667,897.333,1702,922z\"/></svg>Get Ticket</a></li>\n            </ul>\n        ");
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
},{"../data/competitors-data.json":"data/competitors-data.json"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","javascript/competitors.js"], null)
//# sourceMappingURL=/competitors.0f6fc479.js.map