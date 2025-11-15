// ===== 規則定義：兩種模式 =====
const MODES = {
  // ---- S1 ----
  S1: {
    badge: "S1",
    sub: "請輸入「目前等級」。計分規則：角色/裝備/技能/寵物只計算 <b>&gt; 100級</b> 的部分；遺物只計算 <b>&gt; 10級</b> 的部分。",
    labels: {
      char: "角色賽季等級（>100 才計分：＋100/級）",
      equip: "裝備（>100 只計超過的級數 ×38）",
      skill: "技能（>100 只計超過的級數 ×13）",
      beast: "寵物（>100 只計超過的級數 ×14）",
      relic: "遺物（>10 只計超過的級數 ×57）"
    },
    C: { char: 100, equip: 38, skill: 13, beast: 14, relic: 57 },
    TH: { char: 100, equip: 100, skill: 100, beast: 100, relic: 10 },
    DIV: 100,
    BASE: 10
  },

  // ---- S2 ----
  S2: {
    badge: "S2",
    sub: "評分規則：角色、裝備、技能、寵物超過 130 級才開始計分；遺物超過 13 級才開始計分。",
    labels: {
      char: "角色賽季等級（>130 才計分：＋100/級）",
      equip: "裝備（>130 才計分 ×18）",
      skill: "技能（>130 才計分 ×7）",
      beast: "寵物/幻獸（>130 才計分 ×8）",
      relic: "遺物/古遺物（>13 才計分 ×33）"
    },
    C: { char: 100, equip: 18, skill: 7, beast: 8, relic: 33 },
    TH: { char: 130, equip: 130, skill: 130, beast: 130, relic: 13 },
    DIV: 27,
    BASE: 45,
    COST_PER_POINT: {
      equip: {
        150: 10944,
        151: 11056,
        152: 11167,
        153: 11222,
        154: 11333,
        155: 11444,
        156: 11500,
        157: 11611,
        158: 11722,
        159: 11778,
        160: 11889,
        161: 12000,
        162: 12056,
        163: 12167,
        164: 12278,
        165: 12333,
        166: 12444,
        167: 12556,
        168: 12611,
        169: 12722,
        170: 12833,
        171: 12889,
        172: 13000,
        173: 13111,
        174: 13167,
        175: 13278,
        176: 13389,
        177: 13444,
        178: 13556,
        179: 13667,
        180: 13722,
        181: 13833,
        182: 13944,
        183: 14000,
        184: 14111,
        185: 14222,
        186: 14278,
        187: 14389,
        188: 14500,
        189: 14556,
        190: 14667,
        191: 14778,
        192: 14833,
        193: 14944,
        194: 15056,
        195: 15111,
        196: 15222,
        197: 15333,
        198: 15389,
        199: 15500,
        200: 15611,
        201: 15667,
        202: 15778,
        203: 15889,
        204: 15944,
        205: 16056,
        206: 16167,
        207: 16222,
        208: 16333,
        209: 16444,
        210: 16500,
        211: 16611,
        212: 16722,
        213: 16778,
        214: 16889,
        215: 17000,
        216: 17056,
        217: 17167,
        218: 17278,
        219: 17333,
        220: 17444,
        221: 17500,
        222: 17611,
        223: 17722,
        224: 17778,
        225: 17889,
        226: 18000
      },
      skill: {
        150: 16343,
        151: 16457,
        152: 16571,
        153: 16686,
        154: 16800,
        155: 17029,
        156: 17143,
        157: 17257,
        158: 17371,
        159: 17486,
        160: 17714,
        161: 17829,
        162: 17943,
        163: 18057,
        164: 18171,
        165: 18400,
        166: 18514,
        167: 18629,
        168: 18743,
        169: 18857,
        170: 19086,
        171: 19200,
        172: 19314,
        173: 19429,
        174: 19543,
        175: 19771,
        176: 19886,
        177: 20000,
        178: 20114,
        179: 20229,
        180: 20457,
        181: 20571,
        182: 20686,
        183: 20800,
        184: 20914,
        185: 21143,
        186: 21257,
        187: 21371,
        188: 21486,
        189: 21600,
        190: 21829,
        191: 21943,
        192: 22057,
        193: 22171,
        194: 22286,
        195: 22514,
        196: 22629,
        197: 22743,
        198: 22857,
        199: 22971,
        200: 23200,
        201: 23314,
        202: 23429,
        203: 23543,
        204: 23771,
        205: 23886,
        206: 24000,
        207: 24229,
        208: 24343,
        209: 24457,
        210: 24571,
        211: 24686,
        212: 24914,
        213: 25029,
        214: 25143,
        215: 25257,
        216: 25371,
        217: 25600,
        218: 25714,
        219: 25829,
        220: 25943,
        221: 26057,
        222: 26286,
        223: 26400,
        224: 26514,
        225: 26629,
        226: 26743
      },
      beast: {
        150: 19775,
        151: 20075,
        152: 20350,
        153: 20650,
        154: 20925,
        155: 21225,
        156: 21500,
        157: 21800,
        158: 22075,
        159: 22375,
        160: 22650,
        161: 22925,
        162: 23500,
        163: 23800,
        164: 24075,
        165: 24100,
        166: 24375,
        167: 24650,
        168: 24950,
        169: 25000,
        170: 25500,
        171: 25750,
        172: 26000,
        173: 26250,
        174: 26500,
        175: 26750,
        176: 27250,
        177: 27500,
        178: 27750,
        179: 28000,
        180: 28250,
        181: 28500
      },
      relic: {
        14: 12273,
        15: 13500,
        16: 14727,
        17: 15955,
        18: 17182,
        19: 18409,
        20: 19636,
        21: 20864,
        22: 22091,
        23: 23318
      }
    }
  },

  S3: {
    badge: "S3",
    sub: "評分計算規則：角色賽季等級每提升1級，養成評分提升100。裝備+14，技能+5，幻獸+6，古遺物+26。角色祝福依填充比例換算加分。",
    labels: {
      char: "角色賽季等級（>160 才計分：＋100/級）",
      equip: "裝備總賽季強化等級（>160 每級＋14）",
      skill: "技能總賽季等級（>160 每級＋5）",
      beast: "幻獸總賽季等級（>160 每級＋6）",
      relic: "古遺物總賽季等級（>16 每級＋26）"
    },
    // 係數（你截圖上的那組）
    C: {
      char: 100,
      equip: 14,
      skill: 5,
      beast: 6,
      relic: 26
    },
    // 門檻：超過才計分
    TH: {
      char: 160,
      equip: 160,
      skill: 160,
      beast: 160,
      relic: 16
    },
    // 星數：先沿用 S2 規則，之後有新情報再改
    DIV: 13, // 總分除以 27
    BASE: 65 // 再 +111
  }
};
// ===== 其它常數 =====
const N = { equip: 5, skill: 8, beast: 4, relic: 20 };

// ===== DOM =====
const el = (id) => document.getElementById(id);
const lvChar = el("lvChar");
const blessCur = el("blessCur"),
  blessMax = el("blessMax");
const equipWrap = el("equipInputs"),
  skillWrap = el("skillInputs"),
  beastWrap = el("beastInputs"),
  relicWrap = el("relicInputs");
const totalEl = el("total"),
  kpiChar = el("kpiChar"),
  kpiOther = el("kpiOther"),
  breakdown = el("breakdown"),
  starsEl = el("stars");
const btnCopy = el("btnCopy"),
  btnReset = el("btnReset");
const modeBadge = el("modeBadge"),
  subText = el("subText");
const equipTitle = el("equipTitle"),
  skillTitle = el("skillTitle"),
  beastTitle = el("beastTitle"),
  relicTitle = el("relicTitle");
const charLabel = el("charLabel");
const recommendLine = el("recommendLine"); // ★ 新增：顯示推薦用

// 生成多欄位
function renderGroup(wrapper, prefix, count) {
  const nodes = [];
  for (let i = 1; i <= count; i++) {
    const id = `${prefix}-${i}`;
    const div = document.createElement("div");
    div.className = "inputItem";
    div.innerHTML = `<label for="${id}">${prefix.toUpperCase()}-${i}</label>
      <input id="${id}" type="number" min="0" step="1" value="0" />`;
    wrapper.appendChild(div);
    nodes.push(div.querySelector("input"));
  }
  return nodes;
}
const inputs = {
  equip: renderGroup(equipWrap, "equip", N.equip),
  skill: renderGroup(skillWrap, "skill", N.skill),
  beast: renderGroup(beastWrap, "beast", N.beast),
  relic: renderGroup(relicWrap, "relic", N.relic)
};

// 全欄位
const allInputs = [lvChar, blessCur, blessMax, ...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic];
const LS_KEY = "origin-heart-calc__values";
const LS_MODE = "origin-heart-calc__mode";

// 載入 localStorage
try {
  const saved = JSON.parse(localStorage.getItem(LS_KEY) || "{}");
  allInputs.forEach((f) => {
    if (saved[f.id] != null) f.value = saved[f.id];
  });
} catch (e) {}

let MODE = MODES[localStorage.getItem(LS_MODE) || "S1"];

// ===== 小工具 =====
function normInt(input) {
  input.value = Math.max(0, parseInt(input.value || 0, 10));
}
function clamp() {
  normInt(lvChar);
  normInt(blessCur);
  blessMax.value = Math.max(1, parseInt(blessMax.value || 1, 10));
  [...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic].forEach(normInt);
}
function sumGroup(arr, threshold, coeff) {
  let sum = 0;
  for (const inp of arr) {
    const lv = parseInt(inp.value || 0, 10);
    const add = Math.max(0, lv - threshold);
    sum += add * coeff;
  }
  return sum;
}

// 取得一組欄位中的「最低等級」
function getMinLevel(arr) {
  if (!arr || !arr.length) return 0;
  let min = Infinity;
  for (const inp of arr) {
    const v = parseInt(inp.value || 0, 10);
    if (!isNaN(v)) {
      min = Math.min(min, v);
    }
  }
  return min === Infinity ? 0 : min;
}

// 從當前模式的 COST_PER_POINT 拿「一分價值」
function getCostPerPointFor(mode, type, level) {
  if (!mode || !mode.COST_PER_POINT) return null;
  const table = mode.COST_PER_POINT[type];
  if (!table) return null;

  const keys = Object.keys(table)
    .map((k) => parseInt(k, 10))
    .sort((a, b) => a - b);
  if (!keys.length) return null;

  if (level <= keys[0]) return table[keys[0]];
  if (level >= keys[keys.length - 1]) return table[keys[keys.length - 1]];

  if (table[level] != null) return table[level];

  let best = keys[0];
  for (const k of keys) {
    if (Math.abs(k - level) < Math.abs(best - level)) best = k;
  }
  return table[best];
}

// 更新「建議優先升級」
function updateRecommendation() {
  const mode = MODE;
  if (!mode || !mode.COST_PER_POINT) {
    if (recommendLine) recommendLine.textContent = "";
    return;
  }

  const costs = [];

  // ★ 改成取最低等級
  const lvEquip = getMinLevel(inputs.equip);
  const lvSkill = getMinLevel(inputs.skill);
  const lvBeast = getMinLevel(inputs.beast);
  const lvRelic = getMinLevel(inputs.relic);

  const cEquip = getCostPerPointFor(mode, "equip", lvEquip + 1);
  if (cEquip != null) costs.push({ key: "equip", label: "裝備", cost: cEquip });

  const cSkill = getCostPerPointFor(mode, "skill", lvSkill + 1);
  if (cSkill != null) costs.push({ key: "skill", label: "技能", cost: cSkill });

  const cBeast = getCostPerPointFor(mode, "beast", lvBeast + 1);
  if (cBeast != null) costs.push({ key: "beast", label: "寵物", cost: cBeast });

  const cRelic = getCostPerPointFor(mode, "relic", lvRelic + 1);
  if (cRelic != null) costs.push({ key: "relic", label: "遺物", cost: cRelic });

  if (!costs.length || !recommendLine) {
    if (recommendLine) recommendLine.textContent = "";
    return;
  }

  costs.sort((a, b) => a.cost - b.cost); // 一分價值越小越便宜
  const best = costs[0];

  const detail = costs
    .map((c) => `${c.label}（最低等級 ${c.key === "relic" ? lvRelic : c.key === "beast" ? lvBeast : c.key === "skill" ? lvSkill : lvEquip}）：一分約 ${c.cost.toLocaleString("zh-TW")}`)
    .join("<br>");

  recommendLine.innerHTML = `建議優先升級：<b>${best.label}</b><br><span class="hint">${detail}</span>`;
}

// ===== 主計算 =====
function calc() {
  clamp();
  const vChar = parseInt(lvChar.value || 0, 10);
  const curBless = parseInt(blessCur.value || 0, 10);
  const maxBless = Math.max(1, parseInt(blessMax.value || 1, 10));
  const blessPercent = Math.min(100, (curBless / maxBless) * 100);

  let scoreCharLv, sEquip, sSkill, sBeast, sRelic;
  if (MODE.badge === "S1") {
    scoreCharLv = Math.max(0, vChar - 100) * MODE.C.char;
    sEquip = sumGroup(inputs.equip, 100, MODE.C.equip);
    sSkill = sumGroup(inputs.skill, 100, MODE.C.skill);
    sBeast = sumGroup(inputs.beast, 100, MODE.C.beast);
    sRelic = sumGroup(inputs.relic, 10, MODE.C.relic);
  } else {
    scoreCharLv = Math.max(0, vChar - MODE.TH.char) * MODE.C.char;
    sEquip = sumGroup(inputs.equip, MODE.TH.equip, MODE.C.equip);
    sSkill = sumGroup(inputs.skill, MODE.TH.skill, MODE.C.skill);
    sBeast = sumGroup(inputs.beast, MODE.TH.beast, MODE.C.beast);
    sRelic = sumGroup(inputs.relic, MODE.TH.relic, MODE.C.relic);
  }

  const scoreBless = Math.floor((blessPercent / 100) * MODE.C.char);
  const subtotalChar = scoreCharLv + scoreBless;
  const subtotalOther = sEquip + sSkill + sBeast + sRelic;
  const sum = subtotalChar + subtotalOther;

  const stars = Math.floor(sum / MODE.DIV) + MODE.BASE;

  totalEl.textContent = sum.toLocaleString("zh-TW");
  starsEl.textContent = stars.toLocaleString("zh-TW");
  kpiChar.textContent = subtotalChar.toLocaleString("zh-TW");
  kpiOther.textContent = subtotalOther.toLocaleString("zh-TW");

  const charRule = MODE.badge === "S1" ? `max(0, ${vChar}−100) ×${MODE.C.char}` : `max(0, ${vChar}−${MODE.TH.char}) ×${MODE.C.char}`;
  breakdown.innerHTML = `
    角色等級：${charRule} = ${scoreCharLv}<br/>
    祝福進度：${curBless} / ${maxBless} 萬 ⇒ ${blessPercent.toFixed(2)}% → +${scoreBless}<br/>
    ${MODE.labels.equip}：${sEquip}<br/>
    ${MODE.labels.skill}：${sSkill}<br/>
    ${MODE.labels.beast}：${sBeast}<br/>
    ${MODE.labels.relic}：${sRelic}
  `;

  // ★ 每次計算後更新推薦
  updateRecommendation();

  const data = {};
  allInputs.forEach((f) => (data[f.id] = f.value));
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch (e) {}

  return { sum, stars };
}

// ===== UI 更新 =====
function applyModeText() {
  modeBadge.textContent = MODE.badge;
  subText.innerHTML = MODE.sub;
  charLabel.textContent = MODE.labels.char;
  equipTitle.childNodes[0].nodeValue = MODE.labels.equip + " ";
  skillTitle.childNodes[0].nodeValue = MODE.labels.skill + " ";
  beastTitle.childNodes[0].nodeValue = MODE.labels.beast + " ";
  relicTitle.childNodes[0].nodeValue = MODE.labels.relic + " ";
}

// 綁定輸入事件
const allInputsArr = [lvChar, blessCur, blessMax, ...inputs.equip, ...inputs.skill, ...inputs.beast, ...inputs.relic];
allInputsArr.forEach((f) => {
  f.addEventListener("input", calc);
  f.addEventListener("change", calc);
});

// 清空
btnReset.addEventListener("click", () => {
  allInputsArr.forEach((f) => (f.value = f === blessMax ? 1 : 0));
  calc();
});

// 複製
btnCopy.addEventListener("click", () => {
  const r = calc();
  const text = `【原初之心計算機（${MODE.badge}）】\n合計：${r.sum}\n原初之星：${r.stars} 顆`;
  navigator.clipboard?.writeText(text).then(() => {
    btnCopy.textContent = "已複製！";
    setTimeout(() => (btnCopy.textContent = "複製結果"), 1200);
  });
});

// 模式切換
function setMode(key) {
  MODE = MODES[key] || MODES.S1;
  document.querySelectorAll(".nav button").forEach((b) => b.classList.toggle("on", b.dataset.mode === key));
  try {
    localStorage.setItem(LS_MODE, key);
  } catch (e) {}
  applyModeText();
  calc();
}
document.querySelectorAll(".nav button").forEach((btn) => {
  btn.addEventListener("click", () => setMode(btn.dataset.mode));
});

// 初次計算
applyModeText();
setMode(localStorage.getItem(LS_MODE) || "S1");

// 彈窗（1~4.png）
const modal = document.getElementById("imgModal");
const modalImg = document.getElementById("modalImg");
const spanClose = modal.querySelector(".close");
document.querySelectorAll(".infoBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const imgSrc = btn.dataset.img;
    modal.style.display = "block";
    modalImg.src = imgSrc;
  });
});
spanClose.onclick = () => (modal.style.display = "none");
modal.onclick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};
