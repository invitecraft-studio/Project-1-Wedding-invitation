// All wedding details in one place — edit here to update the whole site.

// ▼▼ CHANGE ONLY THESE TWO LINES TO RE-DATE THE WHOLE SITE ▼▼
const WEDDING_DATE = "2026-11-21";   // YYYY-MM-DD (muhurtham day)
const RSVP_BY_DATE = "2026-11-21";   // YYYY-MM-DD
// ▲▲ everything below (labels, calendar files, countdown) is derived ▲▲

const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

function addDays(iso, n) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d + n)).toISOString().slice(0, 10);
}
function parts(iso) {
  const [y, m, d] = iso.split("-").map(Number);
  const dow = WEEKDAYS[new Date(Date.UTC(y, m - 1, d)).getUTCDay()];
  return { y, d, dow, month: MONTHS[m - 1] };
}
function longDay(iso) {
  const p = parts(iso);
  return `${p.dow}, ${p.d} ${p.month} ${p.y}`;
}
function ordinal(n) {
  const v = n % 100;
  return n + (["th","st","nd","rd"][(v - 20) % 10] || ["th","st","nd","rd"][v] || "th");
}

const RECEPTION_DATE = addDays(WEDDING_DATE, -1);

export const weddingDayLong = longDay(WEDDING_DATE);                 // Friday, 12 March 2027
export const weddingDayShort = (() => { const p = parts(WEDDING_DATE); return `${p.d} ${p.month} ${p.y}`; })(); // 12 March 2027
export const weddingWeekday = parts(WEDDING_DATE).dow;               // Friday
export const weddingDotted = WEDDING_DATE.split("-").reverse().join("."); // 12.03.2027
export const weddingOrdinalLong = (() => { const p = parts(WEDDING_DATE); return `${ordinal(p.d)} ${p.month} ${p.y}`; })(); // 12th March 2027

export const couple = {
  brideFirst: "Charishma",
  groomFirst: "Vinay Kumar",
  brideLineage: "D/o Smt. S. Lakshmi & Sri S. Venkatamuni",
  groomLineage: " B/o Sri Alimili Vinod Kumar & Smt. Chandrakala, S/o Smt. Padma & Late Sri Alimili Satyam",
  hashtag: "Charishma Weds Vinay",
};

export const bride = {
  role: "The Bride",
  name: "Charishma",
  lineage: "Daughter of Smt. S. Lakshmi & Sri S. Venkatamuni",
  place: "Avilala, Tirupati Rural · Tirupati District",
};

export const groom = {
  role: "The Groom",
  name: "Vinay Kumar",
  lineage: "Son of Smt. Padma & Late Sri Alimili Satyam",
  extra: "Brother of Sri Alimili Vinod Kumar & Smt. Chandrakala",
  place: "Balireddypalem, Vakadu Mandal · Tirupati District",
};

export const venue = {
  name: "Sri Gandhamaneni Sivaiah Krishna Reddy Bhavan",
  address: "Near C.P.I. Office Prakkana, Bairagi patteda, Tirupati, Andhra Pradesh",
  mapsQuery:
    "Sri+Gandhamaneni+Sivayya+Krishna+Reddy+Bhavan+Bhairogipalem+Tirupati",
  mapsEmbed:
    "https://maps.google.com/maps?q=Bhairogipalem%2C%20Tirupati&t=&z=13&ie=UTF8&iwloc=&output=embed",
};

export const events = {
  reception: {
    key: "reception",
    title: "Reception & Vindu",
    day: longDay(RECEPTION_DATE),
    time: "7:00 PM onwards",
    quote: "An evening of feasting, laughter and gathered hearts.",
    venue: `${venue.name}, Tirupati`,
    icsStart: `${RECEPTION_DATE}T19:00:00+05:30`,
    icsEnd: `${RECEPTION_DATE}T22:00:00+05:30`,
  },
  wedding: {
    key: "wedding",
    title: "The Wedding · Sumuhartham",
    day: longDay(WEDDING_DATE),
    time: "Muhurtham 3:00 – 4:00 AM · Purusha Kalam 3:24 – 3:30 AM",
    quote: "Seven steps, one promise — with your blessings.",
    venue: `${venue.name}, Tirupati`,
    icsStart: `${WEDDING_DATE}T03:00:00+05:30`,
    icsEnd: `${WEDDING_DATE}T04:00:00+05:30`,
  },
};

// Muhurtham instant used by the live countdown
export const muhurthamTarget = `${WEDDING_DATE}T03:00:00+05:30`;

export const rsvpDeadline = (() => { const p = parts(RSVP_BY_DATE); return `${ordinal(p.d)} ${p.month} ${p.y}`; })();

export const contact = {
  hostedBy: "Hosted with love by the family of Smt. S. Lakshmi & Sri S. Venkatamuni",
  address: "1-66, Avilala, Tirupati Rural, Tirupati District",
  phones: ["+91 81064 43437", "+91 91772 19978", "+91 95020 26486"],
};

export const planner = {
  name: "Sree Lakshmi Events & Wedding Planner",
  blurb:
    "From decor to logistics, Sree Lakshmi Events & Wedding Planner curated every detail of this celebration — reach out to them for anything on the day.",
  phone: "+91 9502026483",
  altPhone: "+91 9177219974",
  address: "1-66, Avilala, Tirupati Rural, Tirupati District, Andhra Pradesh",
  mapsQuery: "Sree+Lakshmi+Events+and+Wedding+Planner+Avilala+Tirupati",
};
