const backgrounds = [
  { name: "Deep Blue", value: "radial-gradient(circle at 72% 18%, rgba(84,170,255,.8), transparent 25%), radial-gradient(circle at 22% 85%, rgba(17,65,125,.82), transparent 34%), linear-gradient(145deg,#061426,#0a4a83 52%,#071321)" },
  { name: "Sunrise", value: "radial-gradient(circle at 72% 24%, rgba(255,224,151,.88), transparent 22%), linear-gradient(155deg,#1d294a 5%,#9b4852 45%,#ef995e 72%,#3f3350)" },
  { name: "Forest", value: "radial-gradient(circle at 68% 18%,rgba(128,215,173,.52),transparent 26%),linear-gradient(150deg,#071d20,#0b4a42 50%,#071416)" },
  { name: "Ocean", value: "radial-gradient(circle at 24% 25%,rgba(70,202,255,.55),transparent 29%),linear-gradient(155deg,#071b38,#075987 55%,#062238)" },
  { name: "Abstract", value: "radial-gradient(circle at 18% 25%,rgba(101,82,255,.74),transparent 28%),radial-gradient(circle at 78% 70%,rgba(34,180,255,.46),transparent 31%),linear-gradient(145deg,#130b31,#231760,#08152b)" }
];

const library = [
  { id: "amazing-grace", type: "song", title: "Amazing Grace", meta: "John Newton · Public domain", slides: [
    ["Amazing grace, how sweet the sound", "That saved a wretch like me"],
    ["I once was lost, but now am found", "Was blind, but now I see"],
    ["'Twas grace that taught my heart to fear", "And grace my fears relieved"],
    ["How precious did that grace appear", "The hour I first believed"]
  ]},
  { id: "blessed-assurance", type: "song", title: "Blessed Assurance", meta: "Fanny Crosby · Public domain", slides: [
    ["Blessed assurance, Jesus is mine", "O what a foretaste of glory divine"],
    ["Heir of salvation, purchase of God", "Born of His Spirit, washed in His blood"],
    ["This is my story, this is my song", "Praising my Savior all the day long"]
  ]},
  { id: "holy-holy-holy", type: "song", title: "Holy, Holy, Holy", meta: "Reginald Heber · Public domain", slides: [
    ["Holy, holy, holy", "Lord God Almighty"],
    ["Early in the morning", "Our song shall rise to Thee"],
    ["Merciful and mighty", "God in three Persons, blessed Trinity"]
  ]},
  { id: "psalm-23", type: "bible", title: "Psalm 23", meta: "Bible passage · Demo text", slides: [
    ["The Lord is my shepherd", "I shall not want"],
    ["He leads me beside still waters", "He restores my soul"],
    ["Surely goodness and mercy", "Shall follow me all my days"]
  ]},
  { id: "welcome", type: "media", title: "Sunday Welcome", meta: "Announcement slide", slides: [["WELCOME", "We are glad you are here"]] }
];

let currentItem = library[0];
let currentSlides = currentItem.slides;
let previewIndex = 0;
let programIndex = 0;
let previewBackground = 0;
let programBackground = 0;
let activeFilter = "all";
let programMode = "content";
let toastTimer;

const byId = id => document.getElementById(id);
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character]);

function copyMarkup(lines, logo = false) {
  return `<div class="slide-copy${logo ? " logo-copy" : ""}">${lines.map(line => `<p>${escapeHtml(line)}</p>`).join("")}</div>`;
}

function setScene(element, backgroundIndex) {
  element.style.setProperty("--scene", backgrounds[backgroundIndex].value);
}

function renderLibrary() {
  const query = byId("searchInput").value.trim().toLowerCase();
  const filtered = library.filter(item => {
    const filterMatch = activeFilter === "all" || item.type === activeFilter;
    const queryMatch = `${item.title} ${item.meta}`.toLowerCase().includes(query);
    return filterMatch && queryMatch;
  });
  byId("itemCount").textContent = `${filtered.length} item${filtered.length === 1 ? "" : "s"}`;
  byId("libraryList").innerHTML = filtered.length ? filtered.map(item => `
    <button class="library-item${item.id === currentItem.id ? " active" : ""}" data-item-id="${item.id}" type="button">
      <span class="content-icon">${item.type === "song" ? "♫" : item.type === "bible" ? "✦" : "▧"}</span>
      <span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.type)}</small></span>
      <span>›</span>
    </button>`).join("") : `<div class="empty-state">No matching library items.</div>`;
}

function renderScreens() {
  const previewMonitor = byId("previewMonitor");
  const programMonitor = byId("programMonitor");
  previewMonitor.classList.remove("blackout");
  setScene(previewMonitor, previewBackground);
  setScene(programMonitor, programBackground);
  byId("previewCopy").innerHTML = currentSlides[previewIndex].map(line => `<p>${escapeHtml(line)}</p>`).join("");
  byId("previewNumber").textContent = `Slide ${previewIndex + 1} of ${currentSlides.length}`;

  programMonitor.classList.toggle("blackout", programMode === "black");
  if (programMode === "clear") {
    byId("programCopy").innerHTML = "";
    byId("programNumber").textContent = "Cleared";
  } else if (programMode === "logo") {
    byId("programCopy").className = "slide-copy logo-copy";
    byId("programCopy").innerHTML = "<p>WORSHIPFLOW</p><p>CHURCH PRESENTATION</p>";
    byId("programNumber").textContent = "Logo live";
  } else {
    byId("programCopy").className = "slide-copy";
    byId("programCopy").innerHTML = currentSlides[programIndex].map(line => `<p>${escapeHtml(line)}</p>`).join("");
    byId("programNumber").textContent = programMode === "black" ? "Black screen live" : `Live · Slide ${programIndex + 1}`;
  }
}

function renderSlides() {
  byId("slideCount").textContent = currentSlides.length;
  byId("slidesGrid").innerHTML = currentSlides.map((lines, index) => `
    <button class="slide-thumbnail${index === previewIndex ? " preview-selected" : ""}${index === programIndex && programMode === "content" ? " program-selected" : ""}" data-slide-index="${index}" type="button" style="--scene:${backgrounds[previewBackground].value}">
      <span class="slide-number">${index + 1}</span>
      <span class="mini-copy">${lines.map(line => `<p>${escapeHtml(line)}</p>`).join("")}</span>
    </button>`).join("");
}

function renderBackgrounds() {
  byId("backgroundList").innerHTML = backgrounds.map((background, index) => `
    <button class="background-option${index === previewBackground ? " active" : ""}" data-background-index="${index}" type="button">
      <span class="background-swatch" style="--scene:${background.value}"></span>
      <small>${index + 1}. ${escapeHtml(background.name)}</small>
    </button>`).join("");
}

function renderAll() {
  byId("currentTitle").textContent = currentItem.title;
  byId("currentMeta").textContent = `${currentItem.meta} · ${currentSlides.length} slide${currentSlides.length === 1 ? "" : "s"}`;
  renderLibrary();
  renderScreens();
  renderSlides();
  renderBackgrounds();
}

function selectItem(id) {
  const item = library.find(entry => entry.id === id);
  if (!item) return;
  currentItem = item;
  currentSlides = item.slides;
  previewIndex = 0;
  programIndex = 0;
  programMode = "content";
  renderAll();
  showToast(`${item.title} loaded into Preview`);
}

function sendToProgram(index = previewIndex) {
  programIndex = index;
  programBackground = previewBackground;
  programMode = "content";
  renderScreens();
  renderSlides();
  showToast(`Slide ${index + 1} is now live`);
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function showInfo(title, eyebrow, html) {
  byId("infoTitle").textContent = title;
  byId("infoEyebrow").textContent = eyebrow;
  byId("infoContent").innerHTML = html;
  byId("infoDialog").showModal();
}

byId("libraryList").addEventListener("click", event => {
  const button = event.target.closest("[data-item-id]");
  if (button) selectItem(button.dataset.itemId);
});

byId("slidesGrid").addEventListener("click", event => {
  const button = event.target.closest("[data-slide-index]");
  if (!button) return;
  previewIndex = Number(button.dataset.slideIndex);
  renderScreens();
  renderSlides();
});

byId("slidesGrid").addEventListener("dblclick", event => {
  const button = event.target.closest("[data-slide-index]");
  if (button) sendToProgram(Number(button.dataset.slideIndex));
});

byId("backgroundList").addEventListener("click", event => {
  const button = event.target.closest("[data-background-index]");
  if (!button) return;
  previewBackground = Number(button.dataset.backgroundIndex);
  renderScreens();
  renderSlides();
  renderBackgrounds();
  showToast(`${backgrounds[previewBackground].name} loaded into Preview`);
});

document.querySelector(".filter-tabs").addEventListener("click", event => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll("[data-filter]").forEach(tab => tab.classList.toggle("active", tab === button));
  renderLibrary();
});

byId("searchInput").addEventListener("input", renderLibrary);
byId("sendButton").addEventListener("click", () => sendToProgram());
byId("clearButton").addEventListener("click", () => { programMode = "clear"; renderScreens(); renderSlides(); showToast("Program cleared"); });
byId("blackButton").addEventListener("click", () => { programMode = programMode === "black" ? "content" : "black"; renderScreens(); showToast(programMode === "black" ? "Black screen is live" : "Program restored"); });
byId("logoButton").addEventListener("click", () => { programMode = "logo"; programBackground = previewBackground; renderScreens(); renderSlides(); showToast("Logo is now live"); });
byId("addSongButton").addEventListener("click", () => byId("songDialog").showModal());
byId("addMediaButton").addEventListener("click", () => showInfo("Add media", "Desktop feature", "<p>The Windows app opens a file picker and copies selected images or videos into WorshipFlow's local media library. The web preview leaves your files untouched.</p>"));
byId("importButton").addEventListener("click", () => showInfo("EasyWorship 7 import", "Migration preview", "<p>The finished importer will copy compatible songs, schedules, themes and media into WorshipFlow while leaving the original EasyWorship library unchanged.</p><p>This browser demonstration does not inspect files on your computer.</p>"));
byId("helpButton").addEventListener("click", () => showInfo("How to try it", "Interactive preview", "<ol><li>Choose a song or Bible passage from the Library.</li><li>Click a slide once to place it in Preview.</li><li>Double-click it—or press <b>Send to Program</b>—to make it live.</li><li>Choose a background, then test Clear, Black Screen and Show Logo.</li><li>Use <b>Add song</b> to paste your own lyrics.</li></ol>"));

byId("ndiButton").addEventListener("click", event => {
  const card = event.currentTarget.closest(".ndi-card");
  const enabled = card.classList.toggle("enabled");
  event.currentTarget.textContent = enabled ? "Demo enabled" : "Enable demo";
  showToast(enabled ? "NDI workflow simulated" : "NDI demo disabled");
});

byId("songForm").addEventListener("submit", event => {
  if (event.submitter?.value !== "default") return;
  const title = byId("songTitleInput").value.trim();
  const rawLyrics = byId("lyricsInput").value.trim();
  if (!title || !rawLyrics) {
    event.preventDefault();
    showToast("Add a title and lyrics first");
    return;
  }
  const slides = rawLyrics.split(/\n\s*\n/).map(block => block.split("\n").map(line => line.trim()).filter(Boolean)).filter(Boolean);
  const item = { id: `custom-${Date.now()}`, type: "song", title, meta: "Added in this preview", slides };
  library.unshift(item);
  byId("songTitleInput").value = "";
  byId("lyricsInput").value = "";
  selectItem(item.id);
  showToast(`${title} added with ${slides.length} slide${slides.length === 1 ? "" : "s"}`);
});

document.addEventListener("keydown", event => {
  if (event.key === "ArrowRight" && !document.querySelector("dialog[open]")) {
    previewIndex = Math.min(previewIndex + 1, currentSlides.length - 1);
    renderScreens(); renderSlides();
  }
  if (event.key === "ArrowLeft" && !document.querySelector("dialog[open]")) {
    previewIndex = Math.max(previewIndex - 1, 0);
    renderScreens(); renderSlides();
  }
});

renderAll();
setTimeout(() => showToast("Try clicking a slide, then double-click it to go live"), 500);
