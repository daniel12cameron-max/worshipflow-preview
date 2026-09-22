const backgrounds = [
  { name: "Deep Blue", value: "radial-gradient(circle at 74% 18%,rgba(93,181,255,.72),transparent 25%),radial-gradient(circle at 18% 88%,rgba(20,67,120,.9),transparent 33%),linear-gradient(145deg,#071528,#0b4d82 54%,#08131f)" },
  { name: "Sunrise", value: "radial-gradient(circle at 72% 24%,rgba(255,227,158,.88),transparent 22%),linear-gradient(155deg,#202b4a 4%,#9b4c55 47%,#e99a62 72%,#403550)" },
  { name: "Forest", value: "radial-gradient(circle at 68% 18%,rgba(127,218,174,.5),transparent 26%),linear-gradient(150deg,#071c1d,#0b4b42 52%,#071313)" },
  { name: "Midnight", value: "radial-gradient(circle at 18% 24%,rgba(94,75,236,.68),transparent 28%),radial-gradient(circle at 80% 72%,rgba(30,159,232,.42),transparent 31%),linear-gradient(145deg,#130b2f,#21165b,#071429)" }
];

const library = [
  {
    id: "welcome",
    type: "media",
    mediaKind: "image",
    title: "Sunday Welcome",
    meta: "Image · Welcome slide · Media team",
    atomic: true,
    sections: [{ label: "Welcome", short: "W", lines: ["WELCOME", "We are glad you are here"] }]
  },
  {
    id: "amazing-grace",
    type: "song",
    title: "Amazing Grace",
    meta: "John Newton · Public domain",
    sections: [
      { label: "Verse 1", short: "V1", lines: ["Amazing grace, how sweet the sound", "That saved a wretch like me", "I once was lost, but now am found", "Was blind, but now I see"] },
      { label: "Verse 2", short: "V2", lines: ["'Twas grace that taught my heart to fear", "And grace my fears relieved", "How precious did that grace appear", "The hour I first believed"] }
    ]
  },
  {
    id: "blessed-assurance",
    type: "song",
    title: "Blessed Assurance",
    meta: "Fanny Crosby · Public domain",
    sections: [
      { label: "Verse 1", short: "V1", lines: ["Blessed assurance, Jesus is mine", "O what a foretaste of glory divine", "Heir of salvation, purchase of God", "Born of His Spirit, washed in His blood"] },
      { label: "Chorus", short: "C", lines: ["This is my story, this is my song", "Praising my Savior all the day long", "This is my story, this is my song", "Praising my Savior all the day long"] }
    ]
  },
  {
    id: "holy-holy-holy",
    type: "song",
    title: "Holy, Holy, Holy",
    meta: "Reginald Heber · Public domain",
    sections: [
      { label: "Verse 1", short: "V1", lines: ["Holy, holy, holy", "Lord God Almighty", "Early in the morning", "Our song shall rise to Thee"] },
      { label: "Verse 2", short: "V2", lines: ["Holy, holy, holy", "Merciful and mighty", "God in three Persons", "Blessed Trinity"] }
    ]
  },
  {
    id: "psalm-23",
    type: "bible",
    title: "Psalm 23",
    meta: "Bible passage · Demo text",
    sections: [
      { label: "Verse 1", short: "v1", lines: ["The Lord is my shepherd; I shall not want."] },
      { label: "Verse 2", short: "v2", lines: ["He leads me beside still waters."] },
      { label: "Verse 3", short: "v3", lines: ["He restores my soul."] },
      { label: "Verse 6", short: "v6", lines: ["Surely goodness and mercy shall follow me all my days."] }
    ]
  },
  {
    id: "giving",
    type: "announcement",
    title: "Ways to Give",
    meta: "Approved announcement · Finance ministry",
    atomic: true,
    sections: [{ label: "Announcement", short: "A", lines: ["WAYS TO GIVE", "Online · In person · By mail"] }]
  },
  {
    id: "message",
    type: "media",
    mediaKind: "presentation",
    title: "Sunday Message",
    meta: "PowerPoint · Pastor Allen",
    atomic: true,
    sections: [
      { label: "Title", short: "T", lines: ["WALKING BY FAITH", "Pastor Allen"] },
      { label: "Point 1", short: "P1", lines: ["Faith begins", "where certainty ends"] }
    ]
  },
  {
    id: "countdown-video",
    type: "media",
    mediaKind: "video",
    title: "Service Countdown",
    meta: "Video · MP4 · 05:00",
    atomic: true,
    sections: [{ label: "Video", short: "V", lines: ["SERVICE COUNTDOWN", "Video ready · 05:00"] }]
  },
  {
    id: "missions-image",
    type: "media",
    mediaKind: "image",
    title: "Missions Sunday",
    meta: "Image · PNG · 1920 × 1080",
    atomic: true,
    sections: [{ label: "Image", short: "I", lines: ["MISSIONS SUNDAY", "Reaching every nation"] }]
  },
  {
    id: "sermon-powerpoint",
    type: "media",
    mediaKind: "presentation",
    title: "Sermon Slides",
    meta: "PowerPoint · 12 slides",
    atomic: true,
    sections: [
      { label: "Slide 1", short: "P1", lines: ["WALKING BY FAITH", "Hebrews 11:1"] },
      { label: "Slide 2", short: "P2", lines: ["Faith sees", "what sight cannot"] }
    ]
  },
  {
    id: "browser-screen",
    type: "media",
    mediaKind: "screen",
    title: "Browser Screen",
    meta: "Screen share · Not connected",
    atomic: true,
    sections: [{ label: "Screen", short: "S", lines: ["BROWSER SCREEN", "Choose a tab or window to begin"] }]
  }
];

let schedule = [
  { id: "schedule-welcome", contentId: "welcome", owner: "Media team" },
  { id: "schedule-song-1", contentId: "amazing-grace", owner: "Worship team" },
  { id: "schedule-scripture", contentId: "psalm-23", owner: "Pastor Allen" },
  { id: "schedule-giving", contentId: "giving", owner: "Finance ministry" },
  { id: "schedule-song-2", contentId: "blessed-assurance", owner: "Worship team" },
  { id: "schedule-message", contentId: "message", owner: "Pastor Allen" },
  { id: "schedule-song-3", contentId: "holy-holy-holy", owner: "Worship team" },
  { id: "schedule-closing", contentId: "amazing-grace", owner: "Worship team" }
];

let pendingAnnouncements = [{
  id: "pending-food-drive",
  title: "Community Food Drive",
  details: "Bring canned goods next Sunday for the community pantry.",
  author: "Outreach Ministry",
  eventDate: "Oct 4",
  expires: "Oct 4"
}];

let currentItem = library.find(function (item) { return item.id === "amazing-grace"; });
let currentScheduleId = "schedule-song-1";
let lineMode = 1;
let currentCues = [];
let previewCueIndex = 0;
let previewBackground = 0;
let programBackground = 0;
let programMode = "content";
let program = {
  scheduleId: "schedule-welcome",
  itemId: "welcome",
  title: "Sunday Welcome",
  cueIndex: 0,
  lines: ["WELCOME", "We are glad you are here"],
  nextLines: ["Amazing grace, how sweet the sound"]
};
let resourceTab = "song";
let mediaFilter = "all";
let selectedOutputView = "stage";
let ndiEnabled = false;
let webEnabled = false;
let serviceReady = true;
let toastTimer;

const byId = function (id) { return document.getElementById(id); };
const escapeHtml = function (value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[character];
  });
};

function iconFor(type, mediaKind) {
  if (type === "media") return ({ video: "▶", image: "▧", presentation: "P", screen: "⌁" })[mediaKind] || "▧";
  return ({ song: "♫", bible: "✦", announcement: "◆" })[type] || "•";
}

function typeLabel(type, mediaKind) {
  if (type === "media") return ({ video: "Video", image: "Image", presentation: "PowerPoint", screen: "Screen share" })[mediaKind] || "Media";
  return ({ song: "Song", bible: "Scripture", announcement: "Announcement" })[type] || type;
}

function itemById(id) {
  return library.find(function (item) { return item.id === id; });
}

function buildCues(item, mode) {
  mode = mode || lineMode;
  if (!item) return [];
  const cues = [];
  item.sections.forEach(function (section, sectionIndex) {
    if (item.atomic) {
      cues.push({ section: section.label, sectionIndex: sectionIndex, code: section.short, lines: section.lines.slice() });
      return;
    }
    for (let index = 0; index < section.lines.length; index += mode) {
      cues.push({
        section: section.label,
        sectionIndex: sectionIndex,
        code: section.short + "." + (Math.floor(index / mode) + 1),
        lines: section.lines.slice(index, index + mode)
      });
    }
  });
  return cues;
}

function openDialog(id) {
  const dialog = byId(id);
  if (dialog && !dialog.open) dialog.showModal();
}

function setScene(element, index) {
  element.style.setProperty("--scene", backgrounds[index].value);
}

function renderScreens() {
  const previewCue = currentCues[previewCueIndex] || { code: "", lines: [] };
  const previewMonitor = byId("previewMonitor");
  const programMonitor = byId("programMonitor");
  setScene(previewMonitor, previewBackground);
  setScene(programMonitor, programBackground);
  byId("previewCopy").className = "screen-copy";
  byId("previewCopy").innerHTML = previewCue.lines.map(function (line) { return "<p>" + escapeHtml(line) + "</p>"; }).join("");
  byId("previewNumber").textContent = previewCue.code || "Preview";

  programMonitor.classList.toggle("blackout", programMode === "black");
  byId("programCopy").className = "screen-copy";
  if (programMode === "clear") {
    byId("programCopy").innerHTML = "";
    byId("programNumber").textContent = "Cleared";
  } else if (programMode === "logo") {
    byId("programCopy").className = "screen-copy logo-copy";
    byId("programCopy").innerHTML = "<p>WORSHIPFLOW</p><p>WELCOME TO CHURCH</p>";
    byId("programNumber").textContent = "Logo live";
  } else {
    byId("programCopy").innerHTML = program.lines.map(function (line) { return "<p>" + escapeHtml(line) + "</p>"; }).join("");
    byId("programNumber").textContent = programMode === "black" ? "Black screen" : program.title;
  }
  updateStagePreview();
  renderOutputPreview();
}

function renderSchedule() {
  byId("scheduleList").innerHTML = schedule.map(function (entry, index) {
    const item = itemById(entry.contentId);
    const active = entry.id === currentScheduleId;
    const live = entry.id === program.scheduleId && programMode === "content";
    return '<button class="schedule-item' + (active ? " active" : "") + (live ? " live-now" : "") + '" data-schedule-index="' + index + '" type="button">' +
      '<span class="schedule-order">' + (index + 1) + '</span>' +
      '<span><strong>' + escapeHtml(item ? item.title : "Missing item") + '</strong><small>' + escapeHtml(typeLabel(item ? item.type : "item", item ? item.mediaKind : null)) + ' · ' + escapeHtml(entry.owner) + '</small></span>' +
      '<span class="schedule-state">' + (live ? "●" : "›") + '</span></button>';
  }).join("");
}

function cueState(index) {
  const states = [];
  if (index === previewCueIndex) states.push("Preview");
  if (programMode === "content" && program.itemId === currentItem.id && index === program.cueIndex) states.push("Live");
  return states.join(" · ");
}

function renderCues() {
  currentCues = buildCues(currentItem);
  previewCueIndex = Math.min(previewCueIndex, Math.max(0, currentCues.length - 1));
  const groups = [];
  currentCues.forEach(function (cue, index) {
    let group = groups.find(function (entry) { return entry.sectionIndex === cue.sectionIndex; });
    if (!group) {
      group = { section: cue.section, sectionIndex: cue.sectionIndex, cues: [] };
      groups.push(group);
    }
    group.cues.push({ cue: cue, index: index });
  });
  byId("cueList").innerHTML = groups.map(function (group) {
    const buttons = group.cues.map(function (entry) {
      const cue = entry.cue;
      const index = entry.index;
      const isPreview = index === previewCueIndex;
      const isLive = programMode === "content" && program.itemId === currentItem.id && index === program.cueIndex;
      return '<button class="cue-button' + (isPreview ? " preview-selected" : "") + (isLive ? " program-selected" : "") + '" data-cue-index="' + index + '" type="button">' +
        '<span class="cue-code">' + escapeHtml(cue.code) + '</span>' +
        '<span class="cue-lines">' + cue.lines.map(function (line) { return "<span>" + escapeHtml(line) + "</span>"; }).join("") + '</span>' +
        '<span class="cue-state">' + escapeHtml(cueState(index)) + '</span></button>';
    }).join("");
    return '<section class="cue-section"><div class="cue-section-title">' + escapeHtml(group.section) + '</div>' + buttons + '</section>';
  }).join("");
}

function syncCueSelection() {
  byId("cueList").querySelectorAll("[data-cue-index]").forEach(function (button) {
    const index = Number(button.dataset.cueIndex);
    button.classList.toggle("preview-selected", index === previewCueIndex);
    button.classList.toggle("program-selected", programMode === "content" && program.itemId === currentItem.id && index === program.cueIndex);
    button.querySelector(".cue-state").textContent = cueState(index);
  });
}

function renderResources() {
  const query = byId("searchInput").value.trim().toLowerCase();
  const labels = { song: "Songs", bible: "Scripture", media: "Media", announcement: "Announcements" };
  const icons = { song: "♫", bible: "✦", media: "▧", announcement: "◆" };
  const filtered = library.filter(function (item) {
    const tabMatch = item.type === resourceTab;
    const mediaMatch = resourceTab !== "media" || mediaFilter === "all" || item.mediaKind === mediaFilter;
    return tabMatch && mediaMatch && (item.title + " " + item.meta).toLowerCase().includes(query);
  });
  byId("mediaSubtabs").hidden = resourceTab !== "media";
  byId("currentResourceLabel").textContent = labels[resourceTab] || "Resources";
  byId("currentResourceIcon").textContent = icons[resourceTab] || "•";
  byId("searchInput").placeholder = "Search " + (labels[resourceTab] || "resources").toLowerCase();
  byId("resourceActionButton").textContent = ({ song: "＋ Add song", bible: "＋ Open Bible", media: "＋ Add media", announcement: "＋ Submit" })[resourceTab] || "＋ Add";
  byId("resourceList").innerHTML = filtered.length ? filtered.map(function (item) {
    return '<button class="resource-item' + (item.id === currentItem.id ? " active" : "") + '" data-resource-id="' + item.id + '" type="button">' +
      '<span class="resource-icon">' + iconFor(item.type, item.mediaKind) + '</span>' +
      '<span><strong>' + escapeHtml(item.title) + '</strong><small>' + escapeHtml(item.meta) + '</small></span></button>';
  }).join("") : '<div class="empty-state">No matching ' + escapeHtml(resourceTab) + ' resources.</div>';
}

function renderBackgrounds() {
  byId("backgroundList").innerHTML = backgrounds.map(function (background, index) {
    return '<button class="background-option' + (index === previewBackground ? " active" : "") + '" data-background-index="' + index + '" type="button" aria-label="' + escapeHtml(background.name) + ' background" title="' + escapeHtml(background.name) + '">' +
      '<span class="background-swatch" style="--scene:' + background.value + '"></span><small>' + escapeHtml(background.name) + '</small></button>';
  }).join("");
}

function renderCurrentItem() {
  byId("currentType").textContent = typeLabel(currentItem.type, currentItem.mediaKind);
  byId("currentTitle").textContent = currentItem.title;
  byId("currentMeta").textContent = currentItem.meta;
  renderCues();
  renderScreens();
  renderResources();
}

function renderInbox() {
  const count = pendingAnnouncements.length;
  byId("inboxCount").textContent = count;
  byId("inboxCount").hidden = count === 0;
  byId("pendingSummary").textContent = count;
  byId("inboxList").innerHTML = count ? pendingAnnouncements.map(function (entry) {
    return '<article class="inbox-card" data-announcement-id="' + entry.id + '"><div>' +
      '<h3>' + escapeHtml(entry.title) + '</h3><p>' + escapeHtml(entry.details) + '</p>' +
      '<div class="inbox-meta"><span>From ' + escapeHtml(entry.author) + '</span><span>Event ' + escapeHtml(entry.eventDate) + '</span><span>Expires ' + escapeHtml(entry.expires) + '</span></div></div>' +
      '<div class="inbox-actions"><button data-action="reject" type="button">Decline</button><button class="approve" data-action="approve" type="button">Approve</button></div></article>';
  }).join("") : '<div class="empty-state">Nothing is waiting for approval.</div>';
}

function renderPlanner() {
  byId("serviceItemCount").textContent = schedule.length;
  byId("plannerList").innerHTML = schedule.map(function (entry, index) {
    const item = itemById(entry.contentId);
    const title = item ? item.title : "Missing item";
    return '<div class="planner-item"><span>' + (index + 1) + '</span><div><strong>' + escapeHtml(title) + '</strong>' +
      '<small>' + escapeHtml(entry.owner) + ' · ' + escapeHtml(typeLabel(item ? item.type : "item", item ? item.mediaKind : null)) + '</small></div>' +
      '<div class="planner-move"><button data-move="up" data-index="' + index + '" type="button" aria-label="Move ' + escapeHtml(title) + ' up">↑</button>' +
      '<button data-move="down" data-index="' + index + '" type="button" aria-label="Move ' + escapeHtml(title) + ' down">↓</button></div></div>';
  }).join("");
  byId("readyPlanButton").textContent = serviceReady ? "Reopen planning" : "Mark service ready";
  byId("serviceStatusText").textContent = serviceReady ? "Ready for Sunday" : "Planning in progress";
  byId("saveState").innerHTML = serviceReady ? "<i></i> Saved locally" : "<i></i> Changes saved";
}

function renderOutputState() {
  byId("ndiButton").classList.toggle("enabled", ndiEnabled);
  byId("ndiStatus").textContent = ndiEnabled ? "On" : "Off";
  byId("routingNdi").textContent = ndiEnabled ? "Broadcasting" : "Off";
  byId("routingNdi").classList.toggle("good", ndiEnabled);
  byId("webOutputButton").classList.toggle("enabled", webEnabled);
  byId("webStatus").textContent = webEnabled ? "Connected" : "Pair";
  byId("routingWeb").textContent = webEnabled ? "Connected" : "Not paired";
  byId("routingWeb").classList.toggle("good", webEnabled);
  renderOutputPreview();
}

function renderAll() {
  renderSchedule();
  renderCurrentItem();
  renderBackgrounds();
  renderInbox();
  renderPlanner();
  renderOutputState();
}

function loadItem(item, scheduleId) {
  if (!item) return;
  currentItem = item;
  currentScheduleId = scheduleId || null;
  previewCueIndex = 0;
  renderCurrentItem();
  renderSchedule();
  showToast(item.title + " loaded into Preview");
}

function loadScheduleIndex(index) {
  const entry = schedule[index];
  if (!entry) return;
  loadItem(itemById(entry.contentId), entry.id);
}

function selectPreview(index) {
  if (!currentCues[index]) return;
  previewCueIndex = index;
  renderScreens();
  syncCueSelection();
}

function sendToProgram(index) {
  index = typeof index === "number" ? index : previewCueIndex;
  const cue = currentCues[index];
  if (!cue) return;
  const nextCue = currentCues[index + 1];
  program = {
    scheduleId: currentScheduleId,
    itemId: currentItem.id,
    title: currentItem.title,
    cueIndex: index,
    lines: cue.lines.slice(),
    nextLines: nextCue ? nextCue.lines.slice() : ["End of item"]
  };
  programBackground = previewBackground;
  programMode = "content";
  renderScreens();
  renderSchedule();
  syncCueSelection();
  showToast(cue.code + " is now Live");
}

function updateStagePreview() {
  byId("stageCurrent").textContent = programMode === "content" ? program.lines.join(" / ") : programMode === "black" ? "Black screen" : programMode === "logo" ? "Welcome logo" : "Program cleared";
  byId("stageNext").textContent = program.nextLines ? program.nextLines.join(" / ") : "End of item";
  byId("stageMessage").textContent = serviceReady ? "Service ready · All systems normal" : "Planning changes in progress";
}

function outputProgramLines() {
  if (programMode === "black") return ["BLACK SCREEN"];
  if (programMode === "clear") return ["OUTPUT CLEARED"];
  if (programMode === "logo") return ["WORSHIPFLOW", "WELCOME TO CHURCH"];
  return program.lines.slice();
}

function outputMarkup(view) {
  const lines = outputProgramLines();
  if (view === "stage") {
    return '<div class="output-stage-copy"><div><small>CURRENT</small><strong>' + escapeHtml(lines.join(" / ")) + '</strong></div>' +
      '<div class="next"><small>NEXT</small><strong>' + escapeHtml((program.nextLines || ["End of item"]).join(" / ")) + '</strong></div></div>';
  }
  if (view === "ndi") {
    return '<div class="output-ndi-copy"><strong>' + escapeHtml(lines.join(" · ")) + '</strong><small>WorshipFlow NDI · Transparent lower third</small></div>';
  }
  return '<div class="output-main-copy">' + lines.map(function (line) { return '<p>' + escapeHtml(line) + '</p>'; }).join("") + '</div>' +
    (view === "web" ? '<span class="output-web-chip">' + (webEnabled ? "WEB CONNECTED" : "WEB NOT PAIRED") + '</span>' : "");
}

function renderOutputPreview() {
  const titles = { main: "Main display", stage: "Stage output", ndi: "NDI stream", web: "Web output" };
  const badges = { main: "MAIN", stage: "STAGE", ndi: "NDI · " + (ndiEnabled ? "ON" : "OFF"), web: "WEB" };
  byId("outputPreviewTitle").textContent = titles[selectedOutputView];
  byId("largeOutputTitle").textContent = titles[selectedOutputView];
  byId("miniOutputBadge").textContent = badges[selectedOutputView];
  byId("largeOutputBadge").textContent = badges[selectedOutputView];
  byId("miniOutputContent").innerHTML = outputMarkup(selectedOutputView);
  byId("largeOutputContent").innerHTML = outputMarkup(selectedOutputView);
  byId("miniOutputCanvas").className = "mini-output " + selectedOutputView + "-mini";
  byId("largeOutputCanvas").className = "large-output-canvas " + selectedOutputView + "-large";
  setScene(byId("miniOutputCanvas"), programBackground);
  setScene(byId("largeOutputCanvas"), programBackground);
  document.querySelectorAll("[data-output-view]").forEach(function (button) {
    button.classList.toggle("active", button.dataset.outputView === selectedOutputView);
  });
}

function updateClock() {
  byId("stageClock").textContent = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function showToast(message) {
  const toast = byId("toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(function () { toast.classList.remove("show"); }, 2200);
}

function showInfo(title, eyebrow, html) {
  byId("infoTitle").textContent = title;
  byId("infoEyebrow").textContent = eyebrow;
  byId("infoContent").innerHTML = html;
  openDialog("infoDialog");
}

function copyDemoLink(label) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(label).catch(function () {});
  }
  showToast("Demo link copied");
}

function syncFocusButton() {
  const focused = document.body.classList.contains("schedule-collapsed") && document.body.classList.contains("controls-collapsed");
  byId("focusModeButton").classList.toggle("active", focused);
  byId("focusModeButton").setAttribute("aria-pressed", String(focused));
  byId("focusModeButton").textContent = focused ? "Exit focus" : "Focus view";
}

function setScheduleCollapsed(collapsed) {
  document.body.classList.toggle("schedule-collapsed", collapsed);
  byId("toggleSchedulePanel").setAttribute("aria-expanded", String(!collapsed));
  byId("toggleSchedulePanel").setAttribute("aria-label", collapsed ? "Expand Sunday schedule" : "Collapse Sunday schedule");
  byId("toggleSchedulePanel").textContent = collapsed ? "›" : "‹";
  syncFocusButton();
}

function setControlsCollapsed(collapsed) {
  document.body.classList.toggle("controls-collapsed", collapsed);
  byId("toggleControlPanel").setAttribute("aria-expanded", String(!collapsed));
  byId("toggleControlPanel").setAttribute("aria-label", collapsed ? "Expand output controls" : "Collapse output controls");
  byId("toggleControlPanel").textContent = collapsed ? "‹" : "›";
  syncFocusButton();
}

byId("toggleSchedulePanel").addEventListener("click", function () {
  setScheduleCollapsed(!document.body.classList.contains("schedule-collapsed"));
});

byId("toggleControlPanel").addEventListener("click", function () {
  setControlsCollapsed(!document.body.classList.contains("controls-collapsed"));
});

byId("focusModeButton").addEventListener("click", function () {
  const focused = document.body.classList.contains("schedule-collapsed") && document.body.classList.contains("controls-collapsed");
  setScheduleCollapsed(!focused);
  setControlsCollapsed(!focused);
  showToast(focused ? "Side panels restored" : "Focus view enabled");
});

byId("toggleLineWorkspace").addEventListener("click", function () {
  const panel = document.querySelector(".line-workspace");
  const collapsed = panel.classList.toggle("collapsed");
  document.querySelector(".operator-panel").classList.toggle("lines-collapsed", collapsed);
  this.setAttribute("aria-expanded", String(!collapsed));
  this.setAttribute("aria-label", collapsed ? "Expand lyric lines" : "Collapse lyric lines");
  this.textContent = collapsed ? "⌄" : "⌃";
});

function setResourceTrayCollapsed(collapsed) {
  const panel = document.querySelector(".resource-tray");
  panel.classList.toggle("collapsed", collapsed);
  document.querySelector(".operator-panel").classList.toggle("resources-collapsed", collapsed);
  byId("toggleResourceTray").setAttribute("aria-expanded", String(!collapsed));
  byId("toggleResourceTray").setAttribute("aria-label", collapsed ? "Expand resource library" : "Collapse resource library");
  byId("toggleResourceTray").textContent = collapsed ? "⌄" : "⌃";
}

byId("toggleResourceTray").addEventListener("click", function () {
  setResourceTrayCollapsed(!document.querySelector(".resource-tray").classList.contains("collapsed"));
});

byId("librarySearchButton").addEventListener("click", function () {
  setResourceTrayCollapsed(false);
  document.querySelector(".resource-tray").scrollIntoView({ behavior: "smooth", block: "nearest" });
  setTimeout(function () { byId("searchInput").focus(); }, 180);
});

byId("scheduleList").addEventListener("click", function (event) {
  const button = event.target.closest("[data-schedule-index]");
  if (button) loadScheduleIndex(Number(button.dataset.scheduleIndex));
});

byId("cueList").addEventListener("click", function (event) {
  const button = event.target.closest("[data-cue-index]");
  if (button) selectPreview(Number(button.dataset.cueIndex));
});

byId("cueList").addEventListener("dblclick", function (event) {
  const button = event.target.closest("[data-cue-index]");
  if (button) sendToProgram(Number(button.dataset.cueIndex));
});

document.querySelector(".line-mode").addEventListener("click", function (event) {
  const button = event.target.closest("[data-line-mode]");
  if (!button) return;
  lineMode = Number(button.dataset.lineMode);
  document.querySelectorAll("[data-line-mode]").forEach(function (entry) { entry.classList.toggle("active", entry === button); });
  previewCueIndex = 0;
  renderCurrentItem();
  showToast(lineMode === 1 ? "Line Mode: one line per click" : "Slide Mode: two lines per click");
});

function selectResourceTab(tabName) {
  resourceTab = tabName;
  document.querySelectorAll("[data-resource-tab]").forEach(function (button) {
    button.classList.toggle("active", button.dataset.resourceTab === resourceTab);
  });
  setResourceTrayCollapsed(false);
  renderResources();
  if (window.innerWidth <= 900) document.querySelector(".resource-tray").scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function selectMediaFilter(filterName) {
  mediaFilter = filterName;
  document.querySelectorAll("[data-media-filter]").forEach(function (button) {
    button.classList.toggle("active", button.dataset.mediaFilter === mediaFilter);
  });
  renderResources();
}

document.querySelector(".resource-tabs").addEventListener("click", function (event) {
  const button = event.target.closest("[data-resource-tab]");
  if (!button) return;
  selectResourceTab(button.dataset.resourceTab);
});

byId("mediaSubtabs").addEventListener("click", function (event) {
  const button = event.target.closest("[data-media-filter]");
  if (button) selectMediaFilter(button.dataset.mediaFilter);
});

byId("resourceList").addEventListener("click", function (event) {
  const button = event.target.closest("[data-resource-id]");
  if (button) loadItem(itemById(button.dataset.resourceId));
});

byId("backgroundList").addEventListener("click", function (event) {
  const button = event.target.closest("[data-background-index]");
  if (!button) return;
  previewBackground = Number(button.dataset.backgroundIndex);
  renderBackgrounds();
  renderScreens();
  showToast(backgrounds[previewBackground].name + " loaded into Preview");
});

byId("searchInput").addEventListener("input", renderResources);
byId("sendButton").addEventListener("click", function () { sendToProgram(); });

byId("clearButton").addEventListener("click", function () {
  programMode = "clear";
  renderScreens();
  renderSchedule();
  syncCueSelection();
  showToast("Live output cleared");
});

byId("blackButton").addEventListener("click", function () {
  programMode = programMode === "black" ? "content" : "black";
  renderScreens();
  renderSchedule();
  syncCueSelection();
  showToast(programMode === "black" ? "Black screen is Live" : "Live content restored");
});

byId("logoButton").addEventListener("click", function () {
  programMode = "logo";
  programBackground = previewBackground;
  renderScreens();
  renderSchedule();
  syncCueSelection();
  showToast("Welcome logo is Live");
});

byId("resourceActionButton").addEventListener("click", function () {
  if (resourceTab === "song") openDialog("songDialog");
  if (resourceTab === "media") openDialog("mediaDialog");
  if (resourceTab === "bible") showInfo("Open a Bible", "Scripture library", "<p>The Windows app will include installed Bible translations, passage search, verse ranges, and offline use. This preview currently includes Psalm 23.</p>");
  if (resourceTab === "announcement") openDialog("announcementDialog");
});
byId("songForm").addEventListener("submit", function (event) {
  if (!event.submitter || event.submitter.value !== "default") return;
  event.preventDefault();
  const title = byId("songTitleInput").value.trim();
  const rawLyrics = byId("lyricsInput").value.trim();
  if (!title || !rawLyrics) {
    showToast("Add a title and lyrics first");
    return;
  }
  const sections = rawLyrics.split(/\n\s*\n/).map(function (block, index) {
    return {
      label: index === 0 ? "Verse 1" : "Part " + (index + 1),
      short: index === 0 ? "V1" : "P" + (index + 1),
      lines: block.split("\n").map(function (line) { return line.trim(); }).filter(Boolean)
    };
  }).filter(function (section) { return section.lines.length; });
  const item = { id: "custom-song-" + Date.now(), type: "song", title: title, meta: "Added in this preview", sections: sections };
  library.unshift(item);
  byId("songTitleInput").value = "";
  byId("lyricsInput").value = "";
  byId("songDialog").close();
  selectResourceTab("song");
  loadItem(item);
  const totalLines = sections.reduce(function (total, section) { return total + section.lines.length; }, 0);
  showToast(title + " added with " + totalLines + " selectable lines");
});

byId("mediaForm").addEventListener("click", function (event) {
  const button = event.target.closest("[data-media-add]");
  if (!button) return;
  const kind = button.dataset.mediaAdd;
  if (kind === "screen") {
    byId("mediaDialog").close();
    setTimeout(function () { openDialog("screenShareDialog"); }, 120);
    return;
  }
  const details = {
    image: { title: "New Church Image", meta: "Image · PNG · Added in preview", label: "Image", short: "I", lines: ["NEW CHURCH IMAGE", "Ready in Preview"] },
    video: { title: "New Church Video", meta: "Video · MP4 · Added in preview", label: "Video", short: "V", lines: ["NEW CHURCH VIDEO", "Video ready to play"] },
    presentation: { title: "Imported PowerPoint", meta: "PowerPoint · 8 slides · Added in preview", label: "Slide 1", short: "P1", lines: ["IMPORTED POWERPOINT", "Slide 1 of 8"] }
  }[kind];
  if (!details) return;
  const item = { id: "custom-media-" + Date.now(), type: "media", mediaKind: kind, title: details.title, meta: details.meta, atomic: true, sections: [{ label: details.label, short: details.short, lines: details.lines }] };
  library.push(item);
  byId("mediaDialog").close();
  selectResourceTab("media");
  selectMediaFilter(kind);
  loadItem(item);
  showToast(details.title + " added to the offline media library demo");
});

byId("screenShareForm").addEventListener("submit", function (event) {
  if (!event.submitter || event.submitter.value !== "default") return;
  event.preventDefault();
  const selected = document.querySelector('input[name="shareSource"]:checked');
  const source = selected ? selected.value : "Browser tab";
  const audio = byId("shareAudio").checked;
  const screenItem = itemById("browser-screen");
  screenItem.meta = "Screen share · " + source + (audio ? " · Audio" : "");
  screenItem.sections = [{ label: "Screen", short: "S", lines: [source.toUpperCase(), audio ? "Computer audio included" : "Video only"] }];
  byId("screenShareDialog").close();
  selectResourceTab("media");
  selectMediaFilter("screen");
  loadItem(screenItem);
  showToast(source + " placed in Preview");
});

byId("submitAnnouncementButton").addEventListener("click", function () { openDialog("announcementDialog"); });
byId("fakeUploadButton").addEventListener("click", function () { showToast("Media picker simulated"); });

byId("announcementForm").addEventListener("submit", function (event) {
  if (!event.submitter || event.submitter.value !== "default") return;
  event.preventDefault();
  const title = byId("announcementTitle").value.trim();
  const details = byId("announcementDetails").value.trim();
  const author = byId("announcementAuthor").value.trim();
  if (!title || !details || !author) {
    showToast("Complete the title, details, and submitter");
    return;
  }
  pendingAnnouncements.push({
    id: "pending-" + Date.now(),
    title: title,
    details: details,
    author: author,
    eventDate: byId("announcementDate").value || "Not set",
    expires: byId("announcementExpires").value || "Not set"
  });
  event.currentTarget.reset();
  byId("announcementDate").value = "2026-10-04";
  byId("announcementExpires").value = "2026-10-04";
  byId("announcementDialog").close();
  renderInbox();
  renderPlanner();
  showToast("Announcement sent to the church approval inbox");
  setTimeout(function () { openDialog("inboxDialog"); }, 180);
});

function openInbox() {
  renderInbox();
  openDialog("inboxDialog");
}

byId("inboxButton").addEventListener("click", openInbox);
byId("inboxList").addEventListener("click", function (event) {
  const actionButton = event.target.closest("[data-action]");
  const card = event.target.closest("[data-announcement-id]");
  if (!actionButton || !card) return;
  const index = pendingAnnouncements.findIndex(function (entry) { return entry.id === card.dataset.announcementId; });
  if (index < 0) return;
  const entry = pendingAnnouncements[index];
  if (actionButton.dataset.action === "approve") {
    const approved = {
      id: "announcement-" + Date.now(),
      type: "announcement",
      title: entry.title,
      meta: "Approved · " + entry.author + " · Expires " + entry.expires,
      atomic: true,
      sections: [{ label: "Announcement", short: "A", lines: [entry.title.toUpperCase(), entry.details] }]
    };
    library.push(approved);
    const messageIndex = schedule.findIndex(function (item) { return item.contentId === "message"; });
    const insertAt = Math.max(1, messageIndex);
    schedule.splice(insertAt, 0, { id: "schedule-" + Date.now(), contentId: approved.id, owner: entry.author });
    showToast(entry.title + " approved and added to the schedule");
  } else {
    showToast(entry.title + " declined");
  }
  pendingAnnouncements.splice(index, 1);
  renderInbox();
  renderPlanner();
  renderSchedule();
  renderResources();
});

function openPlanner() {
  renderPlanner();
  openDialog("planDialog");
}

byId("planButton").addEventListener("click", openPlanner);
byId("openPlanButton").addEventListener("click", openPlanner);
byId("copyPlanLinkButton").addEventListener("click", function () { copyDemoLink("https://plan.worshipflow.app/sunday-demo"); });
byId("readyPlanButton").addEventListener("click", function () {
  serviceReady = !serviceReady;
  renderPlanner();
  updateStagePreview();
  showToast(serviceReady ? "Service marked ready for Sunday" : "Planning reopened for the team");
});
byId("reviewInboxFromPlan").addEventListener("click", function () {
  byId("planDialog").close();
  setTimeout(openInbox, 160);
});
byId("plannerList").addEventListener("click", function (event) {
  const button = event.target.closest("[data-move]");
  if (!button) return;
  const index = Number(button.dataset.index);
  const nextIndex = button.dataset.move === "up" ? index - 1 : index + 1;
  if (nextIndex < 0 || nextIndex >= schedule.length) return;
  const current = schedule[index];
  schedule[index] = schedule[nextIndex];
  schedule[nextIndex] = current;
  renderPlanner();
  renderSchedule();
  showToast("Service order updated");
});

byId("addScheduleItemButton").addEventListener("click", function () {
  const newEntry = { id: "schedule-" + Date.now(), contentId: currentItem.id, owner: "Media team" };
  schedule.push(newEntry);
  currentScheduleId = newEntry.id;
  renderSchedule();
  renderPlanner();
  showToast(currentItem.title + " added to the end of the schedule");
});

byId("toggleOutputPreview").addEventListener("click", function () {
  const panel = byId("outputPreviewPanel");
  const collapsed = panel.classList.toggle("collapsed");
  this.setAttribute("aria-expanded", String(!collapsed));
  this.querySelector(".output-preview-chevron").textContent = collapsed ? "⌄" : "⌃";
});

document.querySelector(".output-view-tabs").addEventListener("click", function (event) {
  const button = event.target.closest("[data-output-view]");
  if (!button) return;
  selectedOutputView = button.dataset.outputView;
  renderOutputPreview();
});

byId("openOutputLargeButton").addEventListener("click", function () {
  renderOutputPreview();
  openDialog("outputViewerDialog");
});

byId("stageButton").addEventListener("click", function () {
  updateStagePreview();
  updateClock();
  openDialog("stageDialog");
});

byId("ndiButton").addEventListener("click", function () {
  ndiEnabled = !ndiEnabled;
  renderOutputState();
  showToast(ndiEnabled ? "NDI lower-third output simulated" : "NDI simulation turned off");
});

byId("webOutputButton").addEventListener("click", function () { openDialog("webDialog"); });
byId("pairOutputButton").addEventListener("click", function () {
  webEnabled = true;
  renderOutputState();
  showToast("Web Output connection simulated");
});
byId("copyOutputLinkButton").addEventListener("click", function () { copyDemoLink("https://display.worshipflow.app/482731"); });
byId("outputSetupButton").addEventListener("click", function () {
  renderOutputState();
  openDialog("outputDialog");
});

byId("settingsButton").addEventListener("click", function () {
  openDialog("settingsDialog");
});

function showSettingsInfo(title, eyebrow, html) {
  byId("settingsDialog").close();
  setTimeout(function () { showInfo(title, eyebrow, html); }, 140);
}

byId("settingsSignInButton").addEventListener("click", function () {
  showSettingsInfo(
    "Church accounts",
    "Account & team",
    "<p>The finished app will let each church create its own private workspace, then invite planners, presenters, worship leaders, and announcement contributors with separate permissions.</p><p>After the first sign-in, the Windows app will keep working offline and synchronize changes when the internet returns. Account creation is not active in this browser preview yet.</p>"
  );
});

byId("settingsOutputButton").addEventListener("click", function () {
  byId("settingsDialog").close();
  setTimeout(function () {
    renderOutputState();
    openDialog("outputDialog");
  }, 140);
});

byId("manageBiblesButton").addEventListener("click", function () {
  showSettingsInfo(
    "Bible downloads",
    "Offline Scripture library",
    "<p>WorshipFlow can support a large downloadable Bible catalog. The first release can start with these 12 redistribution-safe English editions, with the most useful three installed by default.</p>" +
    '<div class="bible-starter-list">' +
      '<div><strong>King James Version</strong><span>Installed</span></div>' +
      '<div><strong>World English Bible</strong><span>Installed</span></div>' +
      '<div><strong>Berean Standard Bible</strong><span>Installed</span></div>' +
      '<div><strong>American Standard Version</strong><span class="available">Download</span></div>' +
      '<div><strong>Open English Bible</strong><span class="available">Download</span></div>' +
      '<div><strong>Literal Standard Version</strong><span class="available">Download</span></div>' +
      '<div><strong>Darby Translation</strong><span class="available">Download</span></div>' +
      '<div><strong>Young\'s Literal Translation</strong><span class="available">Download</span></div>' +
      '<div><strong>Douay-Rheims 1899</strong><span class="available">Download</span></div>' +
      '<div><strong>Geneva Bible 1599</strong><span class="available">Download</span></div>' +
      '<div><strong>World English Bible British</strong><span class="available">Download</span></div>' +
      '<div><strong>World Messianic Bible</strong><span class="available">Download</span></div>' +
    "</div><p>Translations such as NIV, NLT, NKJV, ESV, and Amplified require separate publisher permission and cannot simply be bundled.</p>"
  );
});

byId("songSelectSettingsButton").addEventListener("click", function () {
  showSettingsInfo(
    "SongSelect connection",
    "CCLI integration",
    "<p>Yes, SongSelect can be integrated so a church signs into its own CCLI account, searches licensed songs, and imports lyrics and song details.</p><p>The live connection requires WorshipFlow to be approved as a CCLI partner and issued official API credentials. We will never ask churches to paste their CCLI password into WorshipFlow or scrape the SongSelect website.</p>"
  );
});

byId("easyWorshipSettingsButton").addEventListener("click", function () {
  showSettingsInfo(
    "Import and backup",
    "Migration",
    "<p>The Windows migration assistant will scan an EasyWorship 7 installation, show exactly what it found, and let the operator choose songs, schedules, images, videos, and presentations before copying anything.</p><p>The original EasyWorship files will remain untouched. WorshipFlow will keep a local church library and can add encrypted cloud backup after the church signs in.</p>"
  );
});

byId("helpButton").addEventListener("click", function () {
  showInfo(
    "Try the Sunday workflow",
    "Interactive preview",
    "<ol><li>The Preview and Live monitors stay pinned while you scroll through lyrics and media.</li><li>Choose an item from the Sunday Schedule, then click a lyric line to place it in Preview.</li><li>Double-click it—or press <b>Go Live</b>—to send it to the congregation.</li><li>Use the arrow controls or <b>Focus view</b> to collapse panels and make more room.</li><li>Open <b>Media</b> for videos, images, PowerPoint, and browser screen sharing.</li><li>Expand <b>Other screens</b> to inspect Main, Stage, NDI, and Web outputs.</li></ol>"
  );
});

document.addEventListener("keydown", function (event) {
  if (document.querySelector("dialog[open]")) return;
  if (document.activeElement && ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName)) return;
  if (event.key === "Enter") {
    event.preventDefault();
    sendToProgram();
  }
  if (event.key === "ArrowDown" || event.key === "ArrowRight") {
    event.preventDefault();
    selectPreview(Math.min(previewCueIndex + 1, currentCues.length - 1));
  }
  if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
    event.preventDefault();
    selectPreview(Math.max(previewCueIndex - 1, 0));
  }
});

updateClock();
setInterval(updateClock, 1000);
renderAll();
setTimeout(function () { showToast("Click any lyric line to place it in Preview"); }, 500);
