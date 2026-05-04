const places = [ // array to put the places with it's url and descriptions
    { name:" Karnak Temples", url: "Karnak Temples.html" , desc:"The world’s largest temple complex; construction began 3,900 years ago. Egypt's most important ancient place of worship."},
    { name: "Luxor Temple", url: "Luxor Temple.html", desc:"A massive temple in the heart of ancient Thebes, dedicated to Amun-Ra and linked to"},
    { name: "Abu Simbel Temples", url: "Abu Simbel Temples.html",desc:"Two massive rock temples carved by Ramses II. Entirely relocated in the 1960s to save them from flooding." },
    { name: "Valley of the Kings", url: "Valley of the Kings.html", desc:"A desert valley containing royal tombs of New Kingdom pharaohs, most famously Tutankhamun."},
    { name: "Valley of the Queens", url: "Valley of the Queens.html",desc:"Final resting place for queens and princes of the New Kingdom; includes the famous Tomb of Nefertari."},
    { name: "Hatshepsut Temple", url: "Hatshepsut Temple.html",desc: "A stunning three-tiered mortuary temple carved into the cliffs, designed by Senenmut for the first female pharaoh."},
    { name: "Philae Temple", url: "Philae Temple.html", desc:"Dedicated to the goddess Isis; moved stone by stone to Agilkia Island to protect it from the High Dam waters."},
    { name: "Edfu Temple", url: "Edfu Temple.html" ,desc:"One of the best-preserved ancient temples, dedicated to Horus. Features massive pylons and exquisite carvings."},
    { name: "Kom Ombo Temple", url: "Kom Ombo Temple.html",desc:"A unique double temple; the southern half is dedicated to Sobek (the crocodile god) and the northern to Horus." },
    { name: "Dendera Temple", url: "Dendera Temple.html", desc:"Dedicated to Hathor (goddess of love and beauty); famous for its magnificent astronomical ceiling."},
    { name: "Abydos Temple", url: "Abydos Temple.html",desc:"A highly sacred site featuring the Temple of Seti I, known for the famous 'Abydos Kings List'" },
    { name: "Saqqara Step Pyramid", url: "Saqqara Step Pyramid.html" ,desc:"The world’s oldest massive stone structure, designed by Imhotep as a tomb for King Djoser."},
    { name: "Dahshur Pyramids", url: "Dahshur Pyramids.html" ,desc:"Site of the Bent and Red Pyramids built by King Sneferu, showcasing the evolution of pyramid building."},
    { name: "Medinet Habu", url: "Medinet Habu.html", desc:"Mortuary temple of Ramses III, famous for well-preserved colored carvings and fortress-like towers."},
    { name: "Colossi of Memnon", url: "Colossi of Memnon.html", desc:"Two giant stone statues of Amenhotep III that once guarded the entrance to his mortuary temple."},
    { name: "Beni Hassan Tombs", url: "Beni Hassan Tombs.html",desc:"Rock-cut tombs of Middle Kingdom provincial rulers, known for scenes of daily life and sports." },
    { name: "Tell el-Amarna", url: "Tell el-Amarna.html",desc:"The site of Akhetaten, the capital built by Akhenaten for the worship of the god Aten." },
    { name: "Grand Egyptian Museum (GEM)", url: "Grand Egyptian Museum (GEM).html", desc:"The world's largest archaeological museum, set to house the full Tutankhamun collection."},
    { name: "Nat. Museum of Egyptian Civilization (NMEC)", url: "Nat. Museum of Egyptian Civilization (NMEC).html",desc: "The first museum in the Arab world focusing on Egyptian civilization from pre-history to the modern era."},
    { name: "Egyptian Museum in Tahrir", url: "Egyptian Museum in Tahrir.html", desc:"Egypt's oldest archaeological museum, home to the largest collection of ancient artifacts."},
    { name: "Museum of Islamic Art", url: "Museum of Islamic Art.html" ,desc:"One of the world’s largest Islamic art museums, housing rare artifacts from various Islamic eras."},
    { name: "Coptic Museum", url: "Coptic Museum.html" ,desc:"Located within the Babylon Fortress, it houses the world's largest collection of Coptic Christian art."},
    { name: "Imhotep Museum", url: "Imhotep Museum.html" ,desc:"A specialized museum in Saqqara showcasing local finds and the history of stone architecture."},
    { name: "Manial Palace Museum", url: "Manial Palace Museum.html",desc: "The historic palace of Prince Mohammed Ali Tewfik, featuring Islamic architectural styles and family artifacts."},


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

    // details box
    div.addEventListener("click", () => {
        detailsBox.classList.remove("hidden");
        detailsBox.innerHTML = `
        <h3>${place.name}</h3>
        <p>${place.desc}</p>
        <button onclick="goToPage('${place.url}')">go to page</button>
        `;
    });

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


// Grid و List
toggleButton.addEventListener("click", () => {
    results.classList.toggle("grid-view");
    results.classList.toggle("list-view");
});


// go to page
function goToPage(url) {
    window.location.href = url;
}

