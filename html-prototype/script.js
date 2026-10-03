const S = {
  screen: "home",
  onboard: true,
  step: 0,
  device: "phone",
  modal: "",
};
const templates = [
  ["Velvet Letter", "Wedding", "Romantic", ""],
  ["Olive Garden", "Wedding", "Botanical", "olive"],
  ["After Hours", "Date", "Cinematic", "blue"],
  ["Golden Hour", "Birthday", "Playful", "sun"],
  ["Quiet Form", "Announcement", "Minimal", "blue"],
  ["Postcard", "Anniversary", "Vintage", "olive"],
];
const invites = [
  ["Maya & Daniel", "Wedding", "14 June 2027", "live", "Editorial"],
  ["A little surprise", "Date", "28 October 2026", "draft", "Cinematic"],
  ["Leo turns 30", "Birthday", "02 December 2026", "live", "Playful"],
];
const $ = (id) => document.getElementById(id),
  toast = (s) => {
    $("toast").innerHTML = '<div class="toast">' + s + "</div>";
    setTimeout(() => ($("toast").innerHTML = ""), 2300);
  },
  go = (s) => {
    S.screen = s;
    S.modal = "";
    render();
  };
function nav() {
  let a = [
    ["home", "⌂", "Overview"],
    ["create", "✦", "Create"],
    ["templates", "▦", "Templates"],
    ["invitations", "◫", "Invitations"],
    ["campaigns", "◎", "Campaigns"],
    ["assets", "▧", "Media"],
    ["analytics", "↗", "Analytics"],
    ["settings", "⚙", "Settings"],
  ];
  return (
    '<aside class="side"><div class="brand"><span class="mark">i.</span><span>invite.md</span></div><div class="nav">' +
    a
      .map(
        (x) =>
          '<button class="' +
          (S.screen == x[0] ? "on" : "") +
          '" onclick="go(\'' +
          x[0] +
          "')\"><i>" +
          x[1] +
          "</i><span>" +
          x[2] +
          "</span></button>",
      )
      .join("") +
    '</div><div class="profile"><div class="avatar">AS</div><div><b>Andrei S.</b><div class="muted" style="font-size:11px">Personal workspace</div></div></div></aside>'
  );
}
function topBar(t) {
  return (
    '<header class="top"><span class="muted">Workspace / <b style="color:var(--ink)">' +
    t +
    '</b></span><div><button class="btn sm" onclick="toast(\'No new notifications\')">⌁</button> <button class="btn dark sm" onclick="go(\'create\')">+ New invitation</button></div></header>'
  );
}
function shell(t, b) {
  return (
    '<div class="app">' +
    nav() +
    '<main class="main">' +
    topBar(t) +
    b +
    "</main></div>"
  );
}
function stat(n, l, d) {
  return (
    '<div class="card stat"><div class="num">' +
    n +
    "</div><b>" +
    l +
    '</b><div class="muted" style="font-size:12px;margin-top:6px">' +
    d +
    '</div><div class="trend">↑ Growing this month</div></div>'
  );
}
function home() {
  return shell(
    "Overview",
    '<div class="page"><section class="hero"><div><div class="eyebrow">Your creative studio</div><h2>Turn a feeling into an invitation people remember.</h2><p>Describe the moment. AI shapes the story, design and interactions, then you refine everything in a live preview.</p><div class="hero-actions"><button class="btn accent" onclick="go(\'create\')">Create with AI ✦</button><button class="btn" onclick="go(\'templates\')">Browse templates</button></div></div><div class="hero-art"><small>LIVE PREVIEW</small><b>Maya & Daniel</b><span>14 June · Chişinău</span></div></section><div class="section"><div><h2>Workspace at a glance</h2><span class="muted">Invitations, campaigns and public activity.</span></div></div><div class="grid g4">' +
      stat("3", "Invitations", "2 live · 1 draft") +
      stat("248", "Guests reached", "Across published pages") +
      stat("94%", "RSVP rate", "Maya & Daniel") +
      stat("6", "Templates", "Curated starting points") +
      '</div><div class="section"><h2>Recent invitations</h2><button class="btn sm" onclick="go(\'invitations\')">View all</button></div><div class="grid g3">' +
      invites.map(card).join("") +
      "</div></div>",
  );
}
function card(x) {
  let c =
    x[4] == "Botanical"
      ? "olive"
      : x[4] == "Cinematic"
        ? "blue"
        : x[4] == "Playful"
          ? "sun"
          : "";
  return (
    '<div class="card"><div class="cover ' +
    c +
    '"><div class="cover-title">' +
    x[0] +
    '</div></div><div class="meta"><b>' +
    x[1] +
    '</b><div class="muted" style="font-size:12px;margin:5px 0 12px">' +
    x[2] +
    " · " +
    x[4] +
    '</div><button class="btn sm" onclick="go(\'editor\')">Edit</button> <button class="btn sm" onclick="go(\'published\')">View</button> <span class="status ' +
    x[3] +
    '">' +
    x[3] +
    "</span></div></div>"
  );
}
function site() {
  return '<div class="sitehero"><div><small style="letter-spacing:.16em">A LITTLE SECRET</small><h1>For you,<br>always.</h1><span>Something waiting to unfold.</span></div></div><div class="sitebody"><div class="site-section" style="border:0"><small class="muted">CHAPTER ONE</small><h2>Remember that place?</h2><p class="muted">There is something I have been wanting to show you. Start the journey when you are ready.</p><span class="pill">Begin the story</span></div><div class="site-section"><b>28 October · 19:30</b><p class="muted">Your first clue awaits.</p></div><div class="site-section"><div style="font:25px var(--serif)">“Some places are worth returning to.”</div></div></div>';
}
function create() {
  let m =
    '<div class="msg ai">Hi! Tell me what you are making. It can be vague — “a surprise date that feels like a movie” is enough.</div>';
  if (S.step > 0)
    m +=
      '<div class="msg user">A romantic surprise date. Cinematic but personal.</div><div class="msg ai">I am hearing <b>intimate, cinematic, understated</b>. What should they discover?</div><div class="choices"><button class="choice" onclick="choice()">A story only we know</button><button class="choice" onclick="choice()">A secret destination</button><button class="choice" onclick="choice()">A playful challenge</button></div>';
  if (S.step > 1)
    m +=
      '<div class="msg user">A secret destination. We always talked about going there.</div><div class="msg ai">I will build around <b>memory → clue → reveal</b> with a dark editorial theme and slow reveals.</div><div class="choices"><button class="choice" onclick="choice()">Keep this direction</button><button class="choice" onclick="choice()">Make it warmer</button></div>';
  if (S.step > 2)
    m +=
      '<div class="msg user">Keep this direction.</div><div class="msg ai">First version ready. Open the full editor when you want to refine sections, type, media and motion.</div>';
  return (
    '<div class="create"><section class="chat"><div class="chat-head"><div class="eyebrow">Create with AI</div><h2>Let’s make something personal.</h2><span class="muted">Answer naturally. The system handles design language.</span></div><div class="messages">' +
    m +
    '</div><div class="chat-input"><input id="chat" placeholder="Tell me anything…" onkeydown="if(event.key===\'Enter\')send()"><button class="btn dark" onclick="send()">Send</button></div></section><section class="preview"><div><div class="toolbar"><button class="device ' +
    (S.device == "phone" ? "active" : "") +
    '" onclick="S.device=\'phone\';render()">Phone</button><button class="device ' +
    (S.device == "desktop" ? "active" : "") +
    '" onclick="S.device=\'desktop\';render()">Desktop</button><button class="device" onclick="toast(\'Preview synced\')">↻ Sync</button></div><div class="' +
    (S.device == "phone" ? "phone" : "desktop") +
    '">' +
    site() +
    "</div></div></section></div>"
  );
}
function send() {
  if (!$("chat").value.trim()) return;
  S.step = Math.min(3, S.step + 1);
  render();
  toast("AI updated the invitation");
}
function choice() {
  S.step = Math.min(3, S.step + 1);
  render();
  toast("Design direction updated");
}
function templatesPage() {
  return shell(
    "Templates",
    '<div class="page"><div class="section"><div><div class="eyebrow">Template library</div><h1>Start with a feeling.</h1><span class="muted">AI can reshape every starting point around your story.</span></div><button class="btn dark" onclick="go(\'create\')">Create from scratch ✦</button></div><div class="grid templates">' +
      templates
        .map(
          (t, i) =>
            '<div class="card"><div class="template-cover ' +
            t[3] +
            '" style="background:' +
            [
              "linear-gradient(135deg,#382d42,#b18a9b)",
              "linear-gradient(135deg,#2a3930,#a0a277)",
              "linear-gradient(135deg,#172b3e,#a9bdcd)",
              "linear-gradient(135deg,#7a4a2d,#e1a36b)",
            ][i % 4] +
            '"><div class="paper"><small>' +
            t[2] +
            '</small><div class="big">' +
            t[0] +
            "</div><small>" +
            t[1] +
            '</small></div></div><div class="pad"><b>' +
            t[0] +
            '</b><p class="muted" style="font-size:12px">A polished ' +
            t[2].toLowerCase() +
            " starting point.</p><div class='tags'><span class='tag'>" +
            t[1] +
            "</span><span class='tag'>" +
            t[2] +
            '</span><span class="tag">Responsive</span></div><div style="margin-top:14px"><button class="btn sm" onclick="useTemplate(\'' +
            t[0] +
            '\')">Use template</button> <button class="btn sm" onclick="previewTemplate(\'' +
            t[0] +
            "')\">Preview</button></div></div></div>",
        )
        .join("") +
      "</div></div>",
  );
}
function useTemplate() {
  S.screen = "create";
  S.step = 2;
  toast("Template loaded into AI workspace");
  render();
}
function previewTemplate(n) {
  S.modal =
    '<div class="modal-bg"><div class="modal"><button class="close" onclick="S.modal=\'\';render()">×</button><div class="eyebrow">Template preview</div><h2>' +
    n +
    '</h2><p class="muted">This is a starting point; AI can reshape it.</p><div style="display:flex;justify-content:center"><div class="phone">' +
    site() +
    '</div></div><button class="btn dark" onclick="useTemplate(\'' +
    n +
    "')\">Use this template</button></div></div>";
  render();
}
function invitations() {
  return shell(
    "Invitations",
    '<div class="page"><div class="section"><div><div class="eyebrow">Your invitations</div><h1>Stories in progress.</h1><span class="muted">Draft, publish and revise every invitation.</span></div><button class="btn dark" onclick="go(\'create\')">+ New invitation</button></div><div class="card">' +
      invites
        .map(
          (x) =>
            '<div class="row"><div><b>' +
            x[0] +
            '</b><div class="muted" style="font-size:12px">' +
            x[1] +
            " · " +
            x[2] +
            '</div></div><div><span class="status ' +
            x[3] +
            '">' +
            x[3] +
            '</span> <button class="btn sm" onclick="go(\'editor\')">Edit</button> <button class="btn sm" onclick="go(\'published\')">View</button></div></div>',
        )
        .join("") +
      "</div></div>",
  );
}
function campaigns() {
  return shell(
    "Campaigns",
    '<div class="page"><div class="section"><div><div class="eyebrow">Personalized at scale</div><h1>Campaigns.</h1><span class="muted">One design. Hundreds of personalized invitations.</span></div><button class="btn dark" onclick="newCampaign()">+ New campaign</button></div><div class="grid g3">' +
      campaign(
        "Daniel & Maria — Wedding",
        "248",
        "94%",
        "Live",
        "Velvet Letter",
      ) +
      campaign("Company holiday party", "84", "76%", "Draft", "Olive Garden") +
      campaign("Birthday guest list", "32", "—", "Live", "Golden Hour") +
      '</div><div class="section"><h2>Campaign flow</h2></div><div class="grid g3"><div class="card pad"><div class="eyebrow">01 · Template</div><h3>Shared creative system</h3><span class="muted">Structure, media, typography and motion are reused safely.</span></div><div class="card pad"><div class="eyebrow">02 · Variables</div><h3>Personal content</h3><span class="muted">Names, tables and RSVP tokens use approved fields.</span></div><div class="card pad"><div class="eyebrow">03 · Delivery</div><h3>Stable links + QR</h3><span class="muted">Each recipient gets a unique public URL.</span></div></div></div>',
  );
}
function campaign(a, b, c, d, e) {
  return (
    '<div class="card pad"><span class="status ' +
    (d == "Live" ? "live" : "draft") +
    '">' +
    d +
    '</span><span class="muted" style="float:right;font-size:11px">' +
    e +
    '</span><h3 style="margin-top:18px">' +
    a +
    '</h3><div class="grid g3"><div><b>' +
    b +
    '</b><div class="muted" style="font-size:10px">recipients</div></div><div><b>' +
    c +
    '</b><div class="muted" style="font-size:10px">RSVP</div></div><div><b>✓</b><div class="muted" style="font-size:10px">stable</div></div></div><button class="btn sm" style="margin-top:16px" onclick="toast(\'Campaign opened\')">Manage</button></div>'
  );
}
function newCampaign() {
  S.modal =
    '<div class="modal-bg"><div class="modal"><button class="close" onclick="S.modal=\'\';render()">×</button><div class="eyebrow">New campaign</div><h2>Personalize at scale.</h2><p class="muted">Create the template first. Recipient CSV import comes next.</p><label>Campaign name</label><input class="field" value="My wedding guests" style="margin:7px 0 14px"><label>Template</label><select class="field" style="margin:7px 0 18px"><option>Velvet Letter</option><option>Golden Hour</option></select><button class="btn dark" onclick="S.modal=\'\';toast(\'Campaign created as draft\');render()">Create campaign</button></div></div>';
  render();
}
function assets() {
  return shell(
    "Media",
    '<div class="page"><div class="section"><div><div class="eyebrow">Media library</div><h1>Your visual ingredients.</h1><span class="muted">Images, videos and audio are processed into device-ready variants.</span></div><button class="btn dark" onclick="toast(\'Upload dialog opened\')">Upload media</button></div><div class="grid g4">' +
      [
        "Couple portrait",
        "Venue sunset",
        "Old postcard",
        "Dinner table",
        "City at night",
        "Garden detail",
        "Polaroid memory",
        "Texture",
      ]
        .map(
          (x, i) =>
            '<div class="card"><div style="height:150px;background:' +
            [
              "linear-gradient(135deg,#382d42,#b18a9b)",
              "linear-gradient(135deg,#2a3930,#a0a277)",
              "linear-gradient(135deg,#172b3e,#a9bdcd)",
              "linear-gradient(135deg,#7a4a2d,#e1a36b)",
            ][i % 4] +
            ';display:grid;place-items:center;color:#fff;font-size:28px">◒</div><div class="pad"><b style="font-size:12px">' +
            x +
            '</b><div class="muted" style="font-size:10px;margin-top:4px">4K · optimized · WebP</div></div></div>',
        )
        .join("") +
      "</div></div>",
  );
}
function analytics() {
  return shell(
    "Analytics",
    '<div class="page"><div><div class="eyebrow">Analytics</div><h1>See how the story travels.</h1><span class="muted">Aggregated public activity.</span></div><div class="grid g4" style="margin-top:24px">' +
      stat("1,284", "Views", "Last 30 days") +
      stat("892", "Unique visitors", "Last 30 days") +
      stat("248", "RSVPs", "Last 30 days") +
      stat("3m 42s", "Avg. time", "Across pages") +
      '</div><div class="grid g2" style="margin-top:18px"><div class="card"><div class="pad"><h3>Public visits</h3><span class="muted">Last 14 days</span></div><div class="chart">' +
      [38, 50, 44, 67, 58, 72, 62, 80, 74, 91, 86, 70, 95, 88]
        .map((x) => '<i class="bar" style="height:' + x + '%"></i>')
        .join("") +
      '</div></div><div class="card pad"><h3>Invitation performance</h3><table class="table"><tr><th>Invitation</th><th>Views</th><th>RSVP</th></tr><tr><td>Maya & Daniel</td><td>892</td><td>94%</td></tr><tr><td>Leo turns 30</td><td>314</td><td>—</td></tr><tr><td>A little surprise</td><td>78</td><td>—</td></tr></table></div></div></div>',
  );
}
function settings() {
  return shell(
    "Settings",
    '<div class="page"><div><div class="eyebrow">Workspace</div><h1>Settings.</h1><span class="muted">Account, defaults and publishing preferences.</span></div><div class="grid g2" style="margin-top:24px"><div class="card pad"><h3>Profile</h3><div class="prop" style="border:0"><label>Name</label><input class="field" value="Andrei Sîrbu"></div><div class="prop"><label>Email</label><input class="field" value="andrei@example.com"></div><button class="btn dark" onclick="toast(\'Profile saved\')">Save changes</button></div><div class="card pad"><h3>Creation defaults</h3><div class="prop" style="border:0"><label>Language</label><select class="field"><option>Romanian</option><option>English</option><option>Russian</option></select></div><div class="prop"><label>Motion</label><select class="field"><option>Subtle</option><option>Moderate</option><option>Cinematic</option></select></div><button class="btn" onclick="toast(\'Defaults saved\')">Save defaults</button></div></div></div>',
  );
}
function editor() {
  return (
    '<div class="editor"><aside class="editor-side"><div class="eyebrow">Editor</div><h3>A little surprise</h3><button class="btn sm" onclick="go(\'create\')">← Back to AI</button><div class="muted" style="font-size:10px;text-transform:uppercase;margin:20px 0 7px">Page structure</div><div class="layer active">Hero · For you, always</div><div class="layer">Story · Chapter one</div><div class="layer">Date · 28 October</div><div class="layer">Quote · Memory</div><div class="layer">Reveal · Destination</div><div class="layer">Footer · RSVP</div><div class="prop"><button class="btn sm" style="width:100%" onclick="toast(\'Section picker opened\')">+ Add section</button></div></aside><main class="stage"><div><div class="toolbar"><button class="device active">Desktop</button><button class="device">Mobile</button><button class="device">Full page</button></div><div class="desktop">' +
    site() +
    '</div></div></main><aside class="inspector"><b>Hero section</b><div class="prop"><label>Headline</label><textarea class="field" rows="3">For you, always.</textarea></div><div class="prop"><label>Eyebrow</label><input class="field" value="A little secret"></div><div class="prop"><label>Theme</label><select class="field"><option>Cinematic</option><option>Romantic</option><option>Editorial</option></select></div><div class="prop"><label>Motion</label><select class="field"><option>Subtle</option><option>Moderate</option><option>Cinematic</option></select></div><div class="prop"><label>AI actions</label><button class="btn sm" onclick="go(\'create\')">Make it warmer</button> <button class="btn sm" onclick="toast(\'Three alternatives generated\')">3 alternatives</button></div></aside><div class="publish"><small>Draft · saved just now</small><button class="btn accent sm" onclick="publish()">Publish invitation</button></div></div>'
  );
}
function publish() {
  invites[1][3] = "live";
  toast("Published · invite.md/i/a-little-surprise");
  setTimeout(() => go("published"), 600);
}
function published() {
  return (
    '<div style="background:#1e1b1d;min-height:calc(100vh - 70px)"><div style="padding:12px 20px;background:#171516;color:#fff;display:flex;justify-content:space-between;position:sticky;top:0;z-index:3"><span style="font-size:11px">Published · invite.md/i/a-little-surprise</span><div><button class="btn sm" onclick="share()">Share</button> <button class="btn sm" onclick="go(\'editor\')">Edit</button></div></div><div style="display:flex;justify-content:center;padding:28px"><div class="desktop">' +
    site() +
    "</div></div></div>"
  );
}
function share() {
  S.modal =
    '<div class="modal-bg"><div class="modal"><button class="close" onclick="S.modal=\'\';render()">×</button><div class="eyebrow">Share invitation</div><h2>Your stable public link.</h2><p class="muted">QR codes always point to this logical URL, never to a build or storage URL.</p><div class="card pad"><b>invite.md/i/a-little-surprise</b><div class="muted" style="font-size:11px;margin-top:5px">Published · version 4</div></div><div style="display:grid;place-items:center;padding:20px"><div style="width:150px;height:150px;background:repeating-linear-gradient(45deg,#222 0 4px,#fff 4px 8px);border:12px solid #fff"></div></div><button class="btn dark" onclick="S.modal=\'\';toast(\'Public URL copied\');render()">Copy public URL</button></div></div>';
  render();
}
function onboard() {
  return '<div class="onboard"><div class="onboard-box"><div class="onboard-copy"><div class="brand" style="padding:0 0 30px"><span class="mark">i.</span><span>invite.md</span></div><div class="eyebrow">AI invitation studio</div><h1>Make something they’ll remember.</h1><p class="muted" style="font-size:16px;line-height:1.6">Describe the moment. Invite.md turns your story into a beautiful, interactive invitation — then lets you refine every detail.</p><div style="margin-top:25px"><button class="btn dark" onclick="S.onboard=false;go(\'create\')">Start creating ✦</button> <button class="btn" onclick="S.onboard=false;go(\'home\')">Explore workspace</button></div></div><div class="onboard-art"><div class="paper"><small>A LITTLE SECRET</small><div class="big">For you,<br>always.</div><small>28 October · 19:30</small></div></div></div></div>';
}
function render() {
  if (S.onboard) {
    $("app").innerHTML = onboard();
    return;
  }
  let b = {
    home: home,
    create: create,
    templates: templatesPage,
    invitations: invitations,
    campaigns: campaigns,
    assets: assets,
    analytics: analytics,
    settings: settings,
    editor: editor,
    published: published,
  }[S.screen]();
  $("app").innerHTML = b;
  if (S.modal) $("app").insertAdjacentHTML("beforeend", S.modal);
}
render();
