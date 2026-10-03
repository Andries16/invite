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
    ["account", "◎", "Account & plan"],
    ["billing", "▤", "Billing"],
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
    '</div><div class="side-bottom"><div class="plan-mini"><div style="display:flex;justify-content:space-between;align-items:center"><b style="font-size:11px">Creator plan</b><span style="font-size:9px;color:#bdb4ff">PRO</span></div><div class="bar"><i></i></div><div style="font-size:9px;color:#aaa49b">38 / 100 generations</div><button class="btn sm" style="width:100%;margin-top:9px;background:#fff;color:#211f1c" onclick="go('billing')">Manage plan</button></div><div class="profile"><div class="avatar">AS</div><div class="profile-copy"><b>Andrei S.</b><span>andrei@example.com</span></div><button class="icon-btn" style="width:30px;height:30px" onclick="go('account')">⋯</button></div></div></aside>'
  );
}
function topBar(t) {
  return (
    '<header class="top"><span class="crumb">Workspace / <b>' +
    t +
    '</b></span><div class="top-actions"><button class="icon-btn" title="Search" onclick="toast('Search is ready')">⌕</button><button class="icon-btn" title="Notifications" onclick="toast('You are all caught up')">⌁</button><button class="btn soft sm" onclick="go('billing')">Creator · 38%</button><button class="btn dark sm" onclick="go('create')">+ New invitation</button></div></header>'
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
    '<div class="msg ai"><div class="ai-meta"><span class="ai-orb">✦</span> Invite AI · Creative director</div>Hi! I’ll turn your idea into a complete invitation. You can be vague — I’ll ask only what matters.</div>';
  if (S.step > 0)
    m += '<div class="msg user">A romantic surprise date. Cinematic but personal.</div><div class="msg ai"><div class="ai-meta"><span class="ai-orb">✦</span> Invite AI</div>I’m hearing <b>intimate, cinematic, understated</b>. I’ve prepared a direction with a dark editorial palette, slow reveals and a story-first structure.<div class="choices" style="margin-top:9px"><button class="choice" onclick="choice()">A story only we know <span>→</span></button><button class="choice" onclick="choice()">A secret destination <span>→</span></button><button class="choice" onclick="choice()">A playful challenge <span>→</span></button></div></div>';
  if (S.step > 1)
    m += '<div class="msg user">A secret destination. We always talked about going there.</div><div class="msg ai"><div class="ai-meta"><span class="ai-orb">✦</span> Invite AI</div>Perfect. The experience now follows <b>memory → clue → reveal</b>. I’ve also added a final RSVP moment so the invitation has a clear payoff.</div><div class="choices"><button class="choice" onclick="choice()">Keep this direction <span>✓</span></button><button class="choice" onclick="choice()">Make it warmer <span>→</span></button></div>';
  if (S.step > 2)
    m += '<div class="msg user">Keep this direction.</div><div class="msg ai"><div class="ai-meta"><span class="ai-orb">✦</span> Invite AI</div><b>First concept is ready.</b> You can edit the content, theme, media and motion without leaving this workspace.</div><div class="msg ai"><div class="ai-meta"><span class="ai-orb">✓</span> System</div>Design consistency check passed · Mobile layout passed · Accessibility warnings: 0</div>';
  return '<div class="create"><section class="chat"><div class="chat-head"><div style="display:flex;justify-content:space-between;align-items:start"><div><div class="eyebrow">Create with AI</div><h2>Let’s make something personal.</h2><span class="muted small">Your AI creative director · always editable</span></div><button class="icon-btn" onclick="toast('AI context panel opened')">i</button></div><div class="ai-status"><span class="ai-dot"></span><b>AI is ready</b><span style="margin-left:auto">Context · 82%</span></div><div class="chat-progress"><i class="on"></i><i class="' + (S.step > 0 ? "on" : "") + '"></i><i class="' + (S.step > 1 ? "on" : "") + '"></i><i class="' + (S.step > 2 ? "on" : "") + '"></i></div></div><div class="messages">' + m + '</div><div class="suggestions"><button class="suggestion" onclick="quickPrompt('warm')">Make it warmer</button><button class="suggestion" onclick="quickPrompt('cinematic')">More cinematic</button><button class="suggestion" onclick="quickPrompt('minimal')">Simplify it</button></div><div class="chat-input"><div class="composer"><div class="composer-tools"><button title="Add media" onclick="toast('Media picker opened')">＋</button><button title="Mention" onclick="toast('Context picker opened')">@</button></div><input id="chat" placeholder="Describe what you want to change…" onkeydown="if(event.key==='Enter')send()"><button class="send" onclick="send()">↑</button></div><div style="display:flex;justify-content:space-between;margin-top:7px;color:#9a958b;font-size:9px"><span>AI can propose copy, structure, design and motion.</span><span>⌘ ↵</span></div></div></section><section class="preview"><div class="preview-inner"><div class="preview-top"><div><b>Live canvas</b><div class="preview-label">Changes update as your direction evolves</div></div><div class="toolbar"><button class="device ' + (S.device == "phone" ? "active" : "") + '" onclick="S.device=\'phone\';render()">Phone</button><button class="device ' + (S.device == "desktop" ? "active" : "") + '" onclick="S.device=\'desktop\';render()">Desktop</button><button class="device" onclick="toast('Preview synced with latest AI version')">↻</button><button class="device" onclick="go('editor')">Open editor ↗</button></div></div><div class="' + (S.device == "phone" ? "phone" : "desktop") + '">' + site() + '</div><div class="preview-footer"><button class="btn sm" onclick="toast('Version saved')">✓ Saved</button><button class="btn sm" onclick="share()">Share preview</button><button class="btn sm accent" onclick="go('editor')">Refine design</button></div></div></section></div>';
}
function quickPrompt(type){S.step=Math.min(3,S.step+1);render();toast(type==='warm'?'Warmth added to the direction':type==='cinematic'?'Cinematic motion increased':'Visual system simplified')}
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
function account(){
  return shell("Account & plan", '<div class="page"><div class="section"><div><div class="eyebrow">Account</div><h1>Your creative workspace.</h1><span class="muted">Profile, plan, usage and workspace identity in one place.</span></div><button class="btn dark" onclick="go('billing')">Manage billing</button></div><div class="account-grid"><div class="card pad"><div class="section-title"><div class="avatar">AS</div><div><b>Andrei Sîrbu</b><div class="muted small">andrei@example.com</div></div></div><div class="prop" style="border:0"><label>Display name</label><input class="field" value="Andrei Sîrbu"></div><div class="prop"><label>Workspace</label><input class="field" value="Andrei's invitations"></div><button class="btn dark" onclick="toast('Account profile saved')">Save profile</button></div><div class="card pad"><div style="display:flex;justify-content:space-between"><div><div class="eyebrow">Current plan</div><h3>Creator</h3></div><span class="status live">Active</span></div><div class="price">$19 <span>/ month</span></div><div class="muted small" style="margin-top:5px">Renews on 14 Nov 2026</div><div class="usage" style="margin-top:18px"><i></i></div><div style="display:flex;justify-content:space-between;margin-top:6px;font-size:10px"><span>38 generations used</span><span>100 included</span></div><button class="btn soft" style="margin-top:15px" onclick="go('billing')">View plan & billing</button></div></div><div class="section"><h2>Security</h2></div><div class="card"><div class="billing-row pad"><div><b>Password & authentication</b><div class="muted small">Password, sessions and sign-in methods.</div></div><button class="btn sm" onclick="toast('Security settings opened')">Manage</button></div><div class="billing-row pad"><div><b>Active sessions</b><div class="muted small">2 trusted devices.</div></div><button class="btn sm" onclick="toast('All sessions are active')">Review</button></div></div></div>');
}
function billing(){
  return shell("Billing", '<div class="page"><div class="section"><div><div class="eyebrow">Billing & plans</div><h1>Choose the workspace that fits.</h1><span class="muted">Plans control creation capacity and collaboration features — your published invitations stay yours.</span></div><div class="seg"><button class="on">Monthly</button><button onclick="toast('Annual pricing selected')">Annual · save 20%</button></div></div><div class="grid g3"><div class="card pad plan-card"><div class="eyebrow">Free</div><h2>Starter</h2><div class="price">$0 <span>/ month</span></div><p class="muted small">Explore the invitation studio.</p><div class="feature-list"><div><span class="check">✓</span>3 active invitations</div><div><span class="check">✓</span>Basic templates</div><div><span class="check">✓</span>Community media limits</div><div><span class="check">✓</span>Public sharing</div></div><button class="btn" style="width:100%" onclick="toast('Starter is available')">Current limits</button></div><div class="card pad plan-card current"><span class="plan-badge">Current</span><div class="eyebrow">For creators</div><h2>Creator</h2><div class="price">$19 <span>/ month</span></div><p class="muted small">For polished invitations and campaigns.</p><div class="feature-list"><div><span class="check">✓</span>100 AI generations / month</div><div><span class="check">✓</span>Unlimited drafts</div><div><span class="check">✓</span>Premium templates</div><div><span class="check">✓</span>Campaigns + personalization</div><div><span class="check">✓</span>Custom public links</div></div><button class="btn dark" style="width:100%" onclick="toast('You are already on Creator')">Manage subscription</button></div><div class="card pad plan-card"><div class="eyebrow">Teams</div><h2>Studio</h2><div class="price">$49 <span>/ month</span></div><p class="muted small">For agencies and collaborative creative teams.</p><div class="feature-list"><div><span class="check">✓</span>500 AI generations / month</div><div><span class="check">✓</span>5 workspace members</div><div><span class="check">✓</span>Advanced campaigns</div><div><span class="check">✓</span>Shared asset library</div><div><span class="check">✓</span>Priority generation queue</div></div><button class="btn" style="width:100%" onclick="toast('Studio plan selected')">Choose Studio</button></div></div><div class="section"><div><h2>Billing history</h2><span class="muted small">Invoices and payment method.</span></div><button class="btn sm" onclick="toast('Payment method editor opened')">Update payment method</button></div><div class="card pad"><div class="billing-row"><div><b>Visa ending in 4242</b><div class="muted small">Default payment method</div></div><span class="status live">Active</span></div><div class="invoice"><b>14 Oct 2026</b> · Creator monthly · $19.00 <button class="btn sm" style="float:right" onclick="toast('Invoice downloaded')">Invoice</button></div><div class="invoice"><b>14 Sep 2026</b> · Creator monthly · $19.00 <button class="btn sm" style="float:right" onclick="toast('Invoice downloaded')">Invoice</button></div></div></div>');
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
  return '<div class="onboard"><div class="onboard-box"><div class="onboard-copy"><div class="brand" style="padding:0 0 28px"><span class="mark">i.</span><span>invite.md</span></div><div class="eyebrow">AI invitation studio</div><h1>Make something they’ll remember.</h1><p class="muted" style="font-size:16px;line-height:1.65">A professional creative workspace for invitations that feel personal. Start with a conversation, choose a direction, refine the experience, then publish.</p><div style="display:flex;gap:7px;flex-wrap:wrap;margin:22px 0"><span class="tag">AI creative director</span><span class="tag">Live preview</span><span class="tag">Campaigns</span><span class="tag">Stable links</span></div><div style="margin-top:25px"><button class="btn dark lg" onclick="S.onboard=false;go('create')">Create your workspace ✦</button> <button class="btn lg" onclick="S.onboard=false;go('home')">Explore demo</button></div><div class="muted small" style="margin-top:14px">Free workspace · No credit card required</div></div><div class="onboard-art"><div class="paper"><small>A LITTLE SECRET</small><div class="big">For you,<br>always.</div><small>28 October · 19:30</small></div></div></div></div>';
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
    account: account,
    billing: billing,
    editor: editor,
    published: published,
  }[S.screen]();
  $("app").innerHTML = b;
  if (S.modal) $("app").insertAdjacentHTML("beforeend", S.modal);
}
render();
