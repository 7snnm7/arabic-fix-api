export default function handler(req, res) {
  const mapping = {
    q: "ض", w: "ص", e: "ث", r: "ق", t: "ف", y: "غ", u: "ع", i: "ه", o: "خ", p: "ح",
    "[": "ج", "]": "د", a: "ش", s: "س", d: "ي", f: "ب", g: "ل", h: "ا", j: "ت",
    k: "ن", l: "م", ";": "ك", "'": "ط", z: "ئ", x: "ء", c: "ؤ", v: "ر", b: "لا",
    n: "ى", m: "ة", ",": "و", ".": "ز", "/": "ظ"
  };

  const text = req.query.text || "";
  const hasArabic = /[\u0600-\u06FF]/.test(text);

  if (hasArabic) {
    return res.status(200).json({
      message: "Input should be in English, so I’ll shoutout my creator, check out twitch.tv/HassanNM7 :D"
    });
  }

  const converted = text
    .split("")
    .map((char) => mapping[char.toLowerCase()] || char)
    .join("");

  res.status(200).json({ result: converted });
}

