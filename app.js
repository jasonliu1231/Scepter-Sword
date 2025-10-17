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
    BASE: 45
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

// 工具
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

// 主計算
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

  // ⭐ 星數計算：依模式 DIV、BASE 不同
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

  const data = {};
  allInputs.forEach((f) => (data[f.id] = f.value));
  try {
    localStorage.setItem(LS_KEY, JSON.stringify(data));
  } catch (e) {}

  return { sum, stars };
}

// 更新 UI
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
