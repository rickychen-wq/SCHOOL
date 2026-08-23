// ===================== 共用設定 =====================
export const firebaseConfig = {
  apiKey: "AIzaSyDrDK9sr3U1239BzbU7xMCc5QddYvCC34s",
  authDomain: "school-e429d.firebaseapp.com",
  projectId: "school-e429d",
  storageBucket: "school-e429d.firebasestorage.app",
  messagingSenderId: "881372767341",
  appId: "1:881372767341:web:b3b66c431594b5c4a94b64",
  measurementId: "G-B1DENGMX27"
};

// 後台密碼
export const ADMIN_PIN = "072929";

// 等級門檻（依累積分，只升不降）
export const TIERS = [
  { key: 0, min: 0,   name: "見習", color: "#8A94A6" },
  { key: 1, min: 30,  name: "金輝", color: "#FFC53D" },
  { key: 2, min: 50,  name: "紫耀", color: "#A855F7" },
  { key: 3, min: 80,  name: "星焰", color: "#22D3EE" },
  { key: 4, min: 120, name: "傳說", color: "#FF4D8D" }
];

export function tierOf(total) {
  let t = TIERS[0];
  for (const x of TIERS) if ((total || 0) >= x.min) t = x;
  return t;
}
export function nextTier(total) {
  for (const x of TIERS) if ((total || 0) < x.min) return x;
  return null;
}

// 預設加減分理由（第一次開後台時會自動寫進 Firestore，之後在設定頁改）
export const DEFAULT_REASONS = {
  add: [
    { label: "舉手回答", points: 2 },
    { label: "準時到班", points: 1 },
    { label: "交作業",   points: 1 },
    { label: "收拾整潔", points: 1 },
    { label: "幫助同學", points: 2 },
    { label: "特別表現", points: 3 }
  ],
  sub: [
    { label: "干擾秩序", points: 2 },
    { label: "遲到",     points: 1 },
    { label: "沒交作業", points: 2 },
    { label: "沒收拾",   points: 1 }
  ]
};

// 頭像選單
export const AVATARS = Array.from("🦊🐼🐧🐯🦁🐸🐵🐨🐰🐱🐶🐹🐢🦉🐙🦄🐷🐔🦖🐳🐝🦋🐬🦕");

// 共用：頭像是網址就吐 img，否則當 emoji
export function avatarHTML(a, cls = "") {
  const v = a || "🙂";
  return /^https?:\/\//.test(v)
    ? `<img class="av-img ${cls}" src="${v}" alt="">`
    : `<span class="av-emo ${cls}">${v}</span>`;
}

export const esc = s => String(s ?? "").replace(/[<>&"]/g,
  c => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" }[c]));
