const places = [ // array to put the places with it's url and descriptions
    { name:" Karnak Temples", src:"../images/KarnakTemples.jpg", url: "places/KarnakTemples.html" , desc:"The world’s largest temple complex; construction began 3,900 years ago. Egypt's most important ancient place of worship."},


    { name: "Luxor Temple", src:"../images/LuxorTemple.jpg", url: "places/LuxorTemple.html", desc:"A massive temple in the heart of ancient Thebes, dedicated to Amun-Ra and linked to"},

    { name: "Abu Simbel Temples", src:"../images/AbuSimbelTemples.jpg", url: "places/AbuSimbelTemples.html",desc:"Two massive rock temples carved by Ramses II. Entirely relocated in the 1960s to save them from flooding." },

    { name: "Valley of the Kings", src:"../images/ValleyoftheKings.jpg", url: "places/ValleyoftheKings.html", desc:"A desert valley containing royal tombs of New Kingdom pharaohs, most famously Tutankhamun."},

    { name: "Valley of the Queens", src:"../images/ValleyoftheQueens.jpg", url: "places/ValleyoftheQueens.html",desc:"Final resting place for queens and princes of the New Kingdom; includes the famous Tomb of Nefertari."},

    { name: "Hatshepsut Temple", src:"../images/HatshepsutTemple.jpg", url: "places/HatshepsutTemple.html",desc: "A stunning three-tiered mortuary temple carved into the cliffs, designed by Senenmut for the first female pharaoh."},

    { name: "Philae Temple", src:"../images/PhilaeTemple.jpg", url: "places/PhilaeTemple.html", desc:"Dedicated to the goddess Isis; moved stone by stone to Agilkia Island to protect it from the High Dam waters."},

    { name: "Edfu Temple", src:"../images/EdfuTemple.jpg", url: "places/EdfuTemple.html" ,desc:"One of the best-preserved ancient temples, dedicated to Horus. Features massive pylons and exquisite carvings."},

    { name: "Kom Ombo Temple", src:"../images/KomOmboTemple.jpg", url: "places/KomOmboTemple.html",desc:"A unique double temple; the southern half is dedicated to Sobek (the crocodile god) and the northern to Horus." },

    { name: "Dendera Temple", src:"../images/DenderaTemple.jpg", url: "places/DendaraTemple.html", desc:"Dedicated to Hathor (goddess of love and beauty); famous for its magnificent astronomical ceiling."},

    { name: "Abydos Temple", src:"../images/AbydosTemple.jpg", url: "places/AbydosTemple.html",desc:"A highly sacred site featuring the Temple of Seti I, known for the famous 'Abydos Kings List'" },

    { name: "Saqqara Step Pyramid", src:"../images/SaqqaraStepPyramid.jpg", url: "places/SaqqaraStepPyramid.html" ,desc:"The world’s oldest massive stone structure, designed by Imhotep as a tomb for King Djoser."},

    { name: "Dahshur Pyramids", src:"../images/DahshurPyramids.jpg", url: "places/DahshurPyramids.html" ,desc:"Site of the Bent and Red Pyramids built by King Sneferu, showcasing the evolution of pyramid building."},

    { name: "Medinet Habu", src:"../images/MedinetHabu.jpg", url: "places/MedinetHabu.html", desc:"Mortuary temple of Ramses III, famous for well-preserved colored carvings and fortress-like towers."},

    { name: "Colossi of Memnon", src:"../images/ColossiofMemnon.jpg", url: "places/ColossiofMemnon.html", desc:"Two giant stone statues of Amenhotep III that once guarded the entrance to his mortuary temple."},

    { name: "Beni Hassan Tombs", src:"../images/BeniHassanTombs.jpg", url: "places/BeniHassanTombs.html",desc:"Rock-cut tombs of Middle Kingdom provincial rulers, known for scenes of daily life and sports." },

    { name: "Tell el-Amarna", src:"../images/TellelAmarna.jpg", url: "places/TellelAmarna.html",desc:"The site of Akhetaten, the capital built by Akhenaten for the worship of the god Aten." },

    { name: "Grand Egyptian Museum (GEM)", src:"../images/GrandEgyptianMuseumGEM.jpg", url: "places/GrandEgyptianMuseumGEM.html", desc:"The world's largest archaeological museum, set to house the full Tutankhamun collection."},

    { name: "Nat. Museum of Egyptian Civilization (NMEC)", src:"../images/NMECFustat.jpg", url: "places/NMECFustat.html",desc: "The first museum in the Arab world focusing on Egyptian civilization from pre-history to the modern era."},

    { name: "Egyptian Museum in Tahrir", src:"../images/EgyptianMuseumTahrir.jpg", url: "places/EgyptianMuseumTahrir.html", desc:"Egypt's oldest archaeological museum, home to the largest collection of ancient artifacts."},

    { name: "Museum of Islamic Art", src:"../images/MuseumofIslamicArt.jpg", url: "places/MuseumofIslamicArt.html" ,desc:"One of the world’s largest Islamic art museums, housing rare artifacts from various Islamic eras."},

    { name: "Coptic Museum", src:"../images/CopticMuseum.jpg", url: "places/CopticMuseum.html" ,desc:"Located within the Babylon Fortress, it houses the world's largest collection of Coptic Christian art."},

    { name: "Imhotep Museum", src:"../images/ImhotepMuseum.jpg", url: "places/ImhotepMuseum.html" ,desc:"A specialized museum in Saqqara showcasing local finds and the history of stone architecture."},

    { name: "Manial Palace Museum", src:"../images/ManialPalaceMuseum.jpg", url: "places/ManialPalaceMuseum.html",desc: "The historic palace of Prince Mohammed Ali Tewfik, featuring Islamic architectural styles and family artifacts."},

];

const input = document.getElementById("searchInput");
const results = document.getElementById("results");
const pagination = document.getElementById("pagination");
const toggleButton = document.getElementById("toggleButton");
const detailsBox = document.getElementById("detailsBox");

let currentPage = 1;
const itemsPerPage = 3;
let currentResults = [];


// search 
input.addEventListener("input", () => {
    const searchText = input.value.toLowerCase();

    currentResults = places.filter(place =>
    place.name.toLowerCase().includes(searchText)
    );

    currentPage = 1;
    displayResults();
});


// present the result
function displayResults() {
    results.innerHTML = "";

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    const paginated = currentResults.slice(start, end);

    paginated.forEach(place => {
    const div = document.createElement("div");
    div.textContent = place.name;
    div.innerHTML = `
      <figure>
        <a href="${place.url}"><img src="${place.src}"></a>
        <figcaption> ${place.name} </figcaption>
      </figure>
      <p> ${place.desc} </p>
    ` 
    results.appendChild(div);
    });

    setupPagination();
}


// Pagination
function setupPagination() {
    pagination.innerHTML = "";

    const pages = Math.ceil(currentResults.length / itemsPerPage);

    for (let i = 1; i <= pages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;

    btn.addEventListener("click", () => {
    currentPage = i;
    displayResults();
    });

    pagination.appendChild(btn);
    }
}

const views = ["list-view","grid-view", "details-view"];
let currentStep = 0;

toggleButton.addEventListener("click", () => {

  results.classList.remove(views[currentStep]);

  currentStep = (currentStep + 1) % views.length;

  results.classList.add(views[currentStep]);
});

