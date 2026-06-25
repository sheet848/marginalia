export interface Book {
  id: string;
  title: string;
  author: string;
  price: number;
  genre: string;
  year: number;
  condition: "New" | "Like New" | "Very Good" | "Good" | "Rare";
  description: string;
  pages: number;
  publisher: string;
  coverColor: string;
  coverAccent: string;
  featured?: boolean;
}

export const genres = [
  "All",
  "Literary Fiction",
  "Mystery",
  "Poetry",
  "Philosophy",
  "Sci-Fi & Fantasy",
  "History",
  "Memoir",
] as const;

export const books: Book[] = [
  {
    id: "the-quiet-cartographer",
    title: "The Quiet Cartographer",
    author: "Elena Marchetti",
    price: 22,
    genre: "Literary Fiction",
    year: 2021,
    condition: "Like New",
    description:
      "A mapmaker in post-war Trieste charts not just borders, but the secret geographies of grief and longing. A slow, luminous novel about the lines we draw around ourselves.",
    pages: 304,
    publisher: "Driftwood Press",
    coverColor: "#3b2a4a",
    coverAccent: "#d4a84b",
    featured: true,
  },
  {
    id: "saltwater-hours",
    title: "Saltwater Hours",
    author: "Hiroshi Tanaka",
    price: 18,
    genre: "Poetry",
    year: 2019,
    condition: "Very Good",
    description:
      "Spare, ocean-haunted poems that move between Osaka and the Oregon coast. Tanaka writes about silence the way other poets write about light.",
    pages: 96,
    publisher: "Lantern House",
    coverColor: "#1f3a4a",
    coverAccent: "#e8d3a0",
    featured: true,
  },
  {
    id: "house-of-borrowed-light",
    title: "House of Borrowed Light",
    author: "Adaeze Okafor",
    price: 26,
    genre: "Literary Fiction",
    year: 2023,
    condition: "New",
    description:
      "Three generations of women share a crumbling Lagos townhouse, a hidden ledger, and a secret that rewrites everything they thought they knew about their mother.",
    pages: 412,
    publisher: "Harbor & Quill",
    coverColor: "#5c1f1f",
    coverAccent: "#f1c87a",
    featured: true,
  },
  {
    id: "the-glass-detective",
    title: "The Glass Detective",
    author: "August Pendleton",
    price: 16,
    genre: "Mystery",
    year: 2018,
    condition: "Good",
    description:
      "A locked-room mystery set in a snowbound Vermont observatory. Five astronomers, one telescope, and a body that shouldn't be there.",
    pages: 288,
    publisher: "Cinder & Smoke",
    coverColor: "#2a3b2e",
    coverAccent: "#c9b079",
  },
  {
    id: "notes-on-stillness",
    title: "Notes on Stillness",
    author: "Maren Holst",
    price: 24,
    genre: "Philosophy",
    year: 2020,
    condition: "Like New",
    description:
      "A Norwegian philosopher's slim, radiant meditations on attention, weather, and the ethics of doing less. Read it slowly, with a window open.",
    pages: 168,
    publisher: "Driftwood Press",
    coverColor: "#e8d3a0",
    coverAccent: "#3b2a1a",
    featured: true,
  },
  {
    id: "the-orchid-archive",
    title: "The Orchid Archive",
    author: "Vera Ashworth",
    price: 42,
    genre: "Sci-Fi & Fantasy",
    year: 2017,
    condition: "Rare",
    description:
      "First edition, signed. A botanist on a generation ship catalogs species that no longer have a planet to belong to. Quietly devastating science fiction.",
    pages: 360,
    publisher: "Lantern House",
    coverColor: "#1a3a2e",
    coverAccent: "#e8a8b9",
  },
  {
    id: "a-history-of-quiet-rooms",
    title: "A History of Quiet Rooms",
    author: "Tomás Reyes",
    price: 28,
    genre: "History",
    year: 2022,
    condition: "Very Good",
    description:
      "From monastic cells to listening booths, a cultural history of the spaces humans build to be alone in. Beautifully illustrated.",
    pages: 336,
    publisher: "Harbor & Quill",
    coverColor: "#4a3a2a",
    coverAccent: "#e8d3a0",
  },
  {
    id: "the-baker-of-bruges",
    title: "The Baker of Bruges",
    author: "Margriet de Vries",
    price: 20,
    genre: "Memoir",
    year: 2019,
    condition: "Good",
    description:
      "A memoir told in recipes, set against the canals and bakeries of a small Flemish city. About bread, mourning, and starting again at sixty.",
    pages: 224,
    publisher: "Cinder & Smoke",
    coverColor: "#7a3a1a",
    coverAccent: "#f1d8a0",
  },
  {
    id: "midnight-at-the-radio-station",
    title: "Midnight at the Radio Station",
    author: "Ivo Lindqvist",
    price: 19,
    genre: "Mystery",
    year: 2020,
    condition: "Like New",
    description:
      "A late-night DJ in Stockholm receives a call from a listener who shouldn't be alive. A slow-burn Nordic noir about loneliness and broadcast static.",
    pages: 312,
    publisher: "Lantern House",
    coverColor: "#1a1f3a",
    coverAccent: "#d4a84b",
  },
  {
    id: "the-language-of-windows",
    title: "The Language of Windows",
    author: "Yusra Khalil",
    price: 23,
    genre: "Poetry",
    year: 2024,
    condition: "New",
    description:
      "Poems written from the perspective of windows in a Beirut apartment building over fifty years. Architectural, tender, and politically alert.",
    pages: 120,
    publisher: "Driftwood Press",
    coverColor: "#3a4a5c",
    coverAccent: "#f1c87a",
  },
  {
    id: "the-cartwheel-summer",
    title: "The Cartwheel Summer",
    author: "Beatrice Hollowell",
    price: 17,
    genre: "Literary Fiction",
    year: 2016,
    condition: "Good",
    description:
      "Two estranged sisters, one shared inheritance: a peach orchard in Georgia and the brother neither one wants to talk about.",
    pages: 296,
    publisher: "Harbor & Quill",
    coverColor: "#9a5a3a",
    coverAccent: "#f1e3c0",
  },
  {
    id: "treatise-on-small-weathers",
    title: "Treatise on Small Weathers",
    author: "Per Sandström",
    price: 30,
    genre: "Philosophy",
    year: 2015,
    condition: "Very Good",
    description:
      "Short essays on fog, drizzle, the moment before rain, and what these in-between weathers teach us about thinking.",
    pages: 192,
    publisher: "Lantern House",
    coverColor: "#5a6a7a",
    coverAccent: "#e8d3a0",
  },
];

export const getBook = (id: string) => books.find((b) => b.id === id);