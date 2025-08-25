type QueryInput = Partial<{
  reading: {
    books: {
      __args: {
        filter: {
          status: {
            includes: "Reading" | "Finished";
          };
        };
      };
    };
  };
}>;

export function basehub() {
  return {
    async query<T = unknown>(_input: QueryInput): Promise<T> {
      return {
        layout: {
          header: {
            avatar: {
              url: "https://assets.basehub.com/f4f66b1c/0ac4add581e424dfc36462a08d571655/me.website.jpg",
              alt: null,
              width: 1036,
              height: 1040,
            },
            navLinks: {
              items: [
                {
                  _title: "about",
                  label: "About",
                  path: "/about",
                  icon: '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="lucide lucide-user-round-icon lucide-user-round"\n>\n  <circle cx="12" cy="8" r="5" />\n  <path d="M20 21a8 8 0 0 0-16 0" />\n</svg>',
                },
                {
                  _title: "work",
                  label: "Work",
                  path: "/work",
                  icon: '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="lucide lucide-briefcase-icon lucide-briefcase"\n>\n  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />\n  <rect width="20" height="14" x="2" y="6" rx="2" />\n</svg>',
                },
                {
                  _title: "writing",
                  label: "Writing",
                  path: "/writing",
                  icon: '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="lucide lucide-square-pen-icon lucide-square-pen"\n>\n  <path\n    d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"\n  />\n  <path\n    d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z"\n  />\n</svg>',
                },
                {
                  _title: "reading",
                  label: "Reading",
                  path: "/reading",
                  icon: '<svg\n  xmlns="http://www.w3.org/2000/svg"\n  width="24"\n  height="24"\n  viewBox="0 0 24 24"\n  fill="none"\n  stroke="currentColor"\n  stroke-width="2"\n  stroke-linecap="round"\n  stroke-linejoin="round"\n  class="lucide lucide-book-text-icon lucide-book-text"\n>\n  <path\n    d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"\n  />\n  <path d="M8 11h8" />\n  <path d="M8 7h6" />\n</svg>',
                },
              ],
            },
          },
          footer: {
            source: "https://github.com/phenrique7/phenrique.me",
            socialLinks: {
              items: [
                {
                  _title: "x-logo",
                  label: "X (Twitter)",
                  icon: '<svg\n  fill="none"\n  viewBox="0 0 20 20"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M1 1.5625H6.90625L11.1072 7.42435L16.1875 1.5625H18.4375L12.1257 8.84539L19 18.4375H13.0938L8.89276 12.5757L3.8125 18.4375H1.5625L7.87435 11.1546L1 1.5625ZM13.9605 16.75L4.28548 3.25H6.03952L15.7146 16.75H13.9605Z"\n    fill="currentColor"\n  ></path>\n</svg>',
                  href: "https://x.com/__phenrique7",
                },
                {
                  _title: "instagram-logo",
                  label: "Instagram",
                  icon: '<svg\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n  viewBox="0 0 25 25"\n>\n  <path\n    d="M17.017 25H6.982C3.142 25 0 21.815 0 17.921V7.08C0 3.185 3.142 0 6.982 0h10.035C20.857 0 24 3.185 24 7.079V17.92C24 21.815 20.857 25 17.017 25Zm0-1.87a5.064 5.064 0 0 0 3.626-1.532 5.207 5.207 0 0 0 1.511-3.677V7.08c0-1.383-.536-2.69-1.51-3.678a5.066 5.066 0 0 0-3.627-1.532H6.982a5.065 5.065 0 0 0-3.627 1.532A5.207 5.207 0 0 0 1.844 7.08V17.92c0 1.384.537 2.689 1.51 3.677a5.065 5.065 0 0 0 3.628 1.532h10.035Z"\n    fill="currentColor"\n  ></path>\n  <path\n    d="M18.645 12.403c0 3.701-2.96 6.7-6.609 6.7s-6.61-3-6.61-6.7 2.96-6.701 6.61-6.701c3.65 0 6.609 3 6.609 6.701Zm-6.641-4.382c-2.39 0-4.328 1.964-4.328 4.388 0 2.423 1.937 4.388 4.328 4.388 2.39 0 4.327-1.965 4.327-4.388.002-2.424-1.936-4.388-4.327-4.388ZM20.316 5.598c0 .876-.7 1.586-1.565 1.586-.864 0-1.564-.71-1.564-1.586 0-.876.7-1.587 1.564-1.587.864 0 1.565.71 1.565 1.587Z"\n    fill="currentColor"\n  ></path>\n</svg>',
                  href: "https://instagram.com/phenrique___",
                },
                {
                  _title: "github-logo",
                  label: "GitHub",
                  icon: '<svg\n  viewBox="0 0 16 16"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    fill-rule="evenodd"\n    clip-rule="evenodd"\n    d="M8 0C3.58 0 0 3.58 0 8a7.993 7.993 0 0 0 5.19 7.49c.185.07.386.15.575.089a.373.373 0 0 0 .255-.369c0-.775-.73-1.301-1.491-1.453-.819-.164-1.099-.668-1.209-.977-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.624 1.048 1.57.933 2.11.747.14-.047.239-.23.276-.372.095-.36-.144-.861-.505-.952C4.17 11.004 2.92 10.088 2.92 7.58c0-.399.065-.766.185-1.1.254-.712.483-1.175.474-1.93-.008-.593.599-1.304 1.156-1.103.08.029.165.063.256.103a4.29 4.29 0 0 0 2.188.356 7.657 7.657 0 0 1 1.667-.001c.754.081 1.52-.06 2.214-.365.09-.039.175-.072.254-.1.553-.199 1.153.512 1.147 1.1-.006.76.225 1.23.479 1.947.117.331.18.695.18 1.093 0 2.147-.914 3.125-2.073 3.587-.574.23-1.037 1.225-1.037 1.843 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8Z"\n    fill="currentColor"\n  ></path>\n</svg>',
                  href: "https://github.com/phenrique7",
                },
                {
                  _title: "linkedin-logo",
                  label: "LinkedIn",
                  icon: '<svg\n  viewBox="0 0 20 20"\n  fill="none"\n  xmlns="http://www.w3.org/2000/svg"\n>\n  <path\n    d="M15 1H5C2.92925 1 1 2.92925 1 5V15C1 17.0707 2.92925 19 5 19H15C17.0715 19 19 17.0707 19 15V5C19 2.92925 17.0715 1 15 1ZM7 15.25H4.75V7H7V15.25ZM5.875 6.049C5.1505 6.049 4.5625 5.4565 4.5625 4.726C4.5625 3.9955 5.1505 3.403 5.875 3.403C6.5995 3.403 7.1875 3.9955 7.1875 4.726C7.1875 5.4565 6.60025 6.049 5.875 6.049ZM16 15.25H13.75V11.047C13.75 8.521 10.75 8.71225 10.75 11.047V15.25H8.5V7H10.75V8.32375C11.797 6.38425 16 6.241 16 10.1808V15.25Z"\n    fill="currentColor"\n  ></path>\n</svg>',
                  href: "https://www.linkedin.com/in/phenrique7",
                },
              ],
            },
          },
        },
        home: {
          bioSection: {
            title: "Paulo Henrique",
            subtitle: "Protestant Christian & Software Engineer",
            description: {
              markdown: `Hello 👋 I'm Paulo — also known by “PH”. I'm a Christian who works as a software engineer, currently based in Fortaleza, Brazil.\n\nHere, I share my thoughts and ideas on software engineering and computer science, along with reflections on theology, philosophy, music, and my faith in Christ.\n\nAs a disciple of Jesus, I'm learning to live my life under his direction. This faith shapes everything I do, from my work in technology to how I serve those around me.\n\nBeyond my work in tech, I serve my Christian community as a Bible professor and musical director. When I'm not coding or writing, you’ll find me deep in thought, spending time with my family, friends, church, playing guitar or reading.\n\nThanks for visiting my website! If you are interested in connecting, feel free to email me at \\[pauloh1288\\@gmail.com]\\(mailto:pauloh1288\\@gmail.com) or reach out my social media in the page’s footer.\n`,
            },
          },
        },
        reading: {
          books:
            _input.reading?.books.__args.filter.status.includes === "Reading"
              ? readingBooks_READING_STATUS
              : readingBooks_FINISHED_STATUS,
        },
        linkbio: {
          bioSection: {
            name: "Paulo Henrique",
            quote: "Working hard, delivering excellence, living by faith.",
            description: "Protestant Christian & Software Engineer",
            avatar: {
              url: "https://assets.basehub.com/f4f66b1c/b6f396a85963156c31ffbcc78a75cf19/me.linkbio.png",
              alt: "A black and white photo of mine",
              width: 235,
              height: 235,
            },
          },
          socialLinks: {
            items: [
              {
                _title: "instagram",
                mediaName: "Instagram",
                mediaSlug: "phenrique___",
                mediaLink: "https://instagram.com/phenrique___",
                mediaLogo: {
                  url: "https://assets.basehub.com/f4f66b1c/8865791dea69e0c47794580e1609b012/instagram-logo.svg",
                },
              },
              {
                _title: "linkedin",
                mediaName: "LinkedIn",
                mediaSlug: "phenrique7",
                mediaLink: "https://www.linkedin.com/in/phenrique7",
                mediaLogo: {
                  url: "https://assets.basehub.com/f4f66b1c/07cc3550076a25ed18449624e54c43dd/linkedin-logo.svg",
                },
              },
              {
                _title: "x-twitter",
                mediaName: "X (Twitter)",
                mediaSlug: "__phenrique7",
                mediaLink: "https://x.com/__phenrique7",
                mediaLogo: {
                  url: "https://assets.basehub.com/f4f66b1c/58316377ceb7ae564fbb7054d744492b/x-logo.svg",
                },
              },
              {
                _title: "github",
                mediaName: "GitHub",
                mediaSlug: "phenrique7",
                mediaLink: "https://github.com/phenrique7",
                mediaLogo: {
                  url: "https://assets.basehub.com/f4f66b1c/6b0df3a9636d190383537913def4b868/github-logo.svg",
                },
              },
              {
                _title: "website",
                mediaName: "Website",
                mediaSlug: "phenrique.me",
                mediaLink: "https://phenrique.me",
                mediaLogo: {
                  url: "https://assets.basehub.com/f4f66b1c/d4589b0e34be902a252730e5a15149ac/me.website.png",
                  alt: null,
                  width: 259,
                  height: 259,
                },
              },
            ],
          },
        },
      } as unknown as T;
    },
  };
}

const readingBooks_READING_STATUS = {
  items: [
    {
      _id: "syqNRI3GPXCfKxZDu9rVG",
      _title: "Manso e humilde",
      genres: ["Christian"],
      authors: ["Dane C. Ortlund"],
      progress: 18,
      cover: {
        url: "https://assets.basehub.com/f4f66b1c/52c6c4be1abd207ed0093f77070db7e9/manso-e-humilde.jpg",
        alt: "The cover of a book with a painting of mountains in the background",
        width: 953,
        height: 1500,
      },
    },
    {
      _id: "YAOQBEYJFgYFliJLxgyxJ",
      _title: "Crafting interpreters",
      genres: ["Software Engineering", "Education"],
      authors: ["Robert Nystrom"],
      progress: 71,
      cover: {
        url: "https://assets.basehub.com/f4f66b1c/d78149cf8234bc2d2ed8d5369db51750/crafting-interpreters.jpg",
        alt: "The cover of a book with a mountain in the background",
        width: 938,
        height: 1500,
      },
    },
  ],
};

const readingBooks_FINISHED_STATUS = {
  items: [
    {
      _id: "HjKoxFk7vCbVUT4QQ2eDc",
      _title: "Hábitos da mente",
      rating: 5,
      authors: ["James W. Sire"],
    },
    {
      _id: "mcBayHbfHcQYBE5hLLabg",
      _title: "Tomando decisões segundo a vontade de Deus",
      rating: 5,
      authors: ["Heber Campos Jr."],
    },
    {
      _id: "sCOWg11fAUncLYBcqfa64",
      _title: "Mentalidade de vida eterna",
      rating: 4,
      authors: ["Costa Neto"],
    },
    {
      _id: "9izBysGFkmGZRDnplKGlX",
      _title: "Vem, Senhor Jesus",
      rating: 5,
      authors: ["John Piper"],
    },
    {
      _id: "t5aRPRdRJ8m4NKgDXvF4T",
      _title: "A vida intelectual",
      rating: 5,
      authors: ["A.-D. Sertillanges"],
    },
    {
      _id: "tKOhCUM0C04feBCYAyA1t",
      _title: "Escatologia e a influência do futuro no dia a dia do Cristão",
      rating: 4,
      authors: ["Russell P. Shedd"],
    },
    {
      _id: "j27m3thrYBbXwv2AULDjl",
      _title: "Viciados em si mesmos",
      rating: 5,
      authors: ["Larry Crabb"],
    },
    {
      _id: "tDr5G0QKTPlwnrA5KY7uv",
      _title: "A fé na era do ceticismo",
      rating: 5,
      authors: ["Timothy Keller"],
    },
    {
      _id: "yIq4xo2iuhbt34k1XgfKs",
      _title: "Ego transformado",
      rating: 5,
      authors: ["Timothy Keller"],
    },
    {
      _id: "BhkcOWBb7thsPyrBlCQXH",
      _title: "A graça do arrependimento",
      rating: 5,
      authors: ["Sinclair B. Ferguson"],
    },
    {
      _id: "Wj3XVCi22CVrdqclNP1W9",
      _title: "Super ocupado",
      rating: 4,
      authors: ["Kevin DeYoung"],
    },
  ],
};
