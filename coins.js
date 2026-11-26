
/* ==========================================
   PROFILE QUOTATION COINS
   ========================================== */

document.addEventListener("DOMContentLoaded", () => {

  const coin = document.getElementById("profileCoin");
  const inner = document.getElementById("coinInner");
  const icon = document.getElementById("coinIcon");
  const quote = document.getElementById("coinQuote");
  const author = document.getElementById("coinAuthor");
  const source = document.getElementById("coinSource");

  if (!coin || !inner || !icon || !quote || !author || !source) return;

  /* ==========================================
     CATEGORY ICONS
     ========================================== */

  const icons = {

    criminalMinds: `
      <path d="M2 12a10 10 0 0 1 18-6"/>
      <path d="M2 16h.01"/>
      <path d="M21.8 16c.2-2 .2-3 .2-4"/>
      <path d="M5 19.5C5.5 18 6 16 6 12a6 6 0 0 1 12 0c0 4-.5 7-1 9"/>
      <path d="M8.5 22c1-3 1.5-6 1.5-10a2 2 0 0 1 4 0c0 4-.5 7-1 10"/>
    `,

    philosophical: `
      <path d="M20.24 3.76a6 6 0 0 0-8.49 0L3 12.5V21h8.5l8.74-8.75a6 6 0 0 0 0-8.49z"/>
      <path d="M16 8 2 22"/>
      <path d="M9 15h8"/>
    `,

    harryPotter: `
      <path d="m3 21 13-13"/>
      <path d="m12 12 3 3"/>
      <path d="M18 2v4"/>
      <path d="M16 4h4"/>
      <path d="M21 9v4"/>
      <path d="M19 11h4"/>
      <path d="M9 2v4"/>
      <path d="M7 4h4"/>
    `,

    supernatural: `
      <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z"/>
    `,

    hungerGames: `
      <path d="M16 7h.01"/>
      <path d="M3.4 18H12a8 8 0 0 0 8-8V9l2-2-2-2a4 4 0 0 0-7.5 1L2 18"/>
      <path d="m12 18-2 4"/>
      <path d="m16 17 1 5"/>
      <path d="M2 18l7-7"/>
    `,

    loneStar: `
      <path d="M12 22c4.4 0 7-3.1 7-7 0-3.4-2-5.5-4-7 0 3-2 4-3 4 1-5-2-8-4-10 0 4-1 6-3 9-1 2-1 3-1 4 0 4 3.6 7 8 7z"/>
      <path d="M12 22c-2 0-4-1.5-4-4 0-2 2-4 4-5 0 2 4 3 4 5 0 2.5-2 4-4 4z"/>
    `,

    nineOneOne: `
      <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0l-1 1-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
      <path d="M3 12h5l2-4 3 8 2-4h6"/>
    `

  };

  /* ==========================================
     QUOTATION COLLECTION — 38 COINS
     ========================================== */

  const quotes = [

    /* CRIMINAL MINDS — 3 */

    {
      category: "criminalMinds",
      quote: "I don't believe in evil. I believe in people.",
      author: "Spencer Reid",
      source: "Criminal Minds"
    },
    {
      category: "criminalMinds",
      quote: "Sometimes there are no words, no clever quotes to neatly sum up what's happened that day.",
      author: "Aaron Hotchner",
      source: "Criminal Minds"
    },
    {
      category: "criminalMinds",
      quote: "The world is a better place with you in it.",
      author: "Penelope Garcia",
      source: "Criminal Minds"
    },

    /* PHILOSOPHICAL — 15 */

    {
      category: "philosophical",
      quote: "The journey of a thousand miles begins with a single step.",
      author: "Lao Tzu",
      source: "Tao Te Ching"
    },
    {
      category: "philosophical",
      quote: "No great thing is created suddenly.",
      author: "Epictetus",
      source: "Discourses"
    },
    {
      category: "philosophical",
      quote: "Nothing great was ever achieved without enthusiasm.",
      author: "Ralph Waldo Emerson",
      source: "Circles"
    },
    {
      category: "philosophical",
      quote: "Knowing is not enough; we must apply. Willing is not enough; we must do.",
      author: "Johann Wolfgang von Goethe",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "The beginning is the most important part of the work.",
      author: "Plato",
      source: "The Republic"
    },
    {
      category: "philosophical",
      quote: "He who has a why to live can bear almost any how.",
      author: "Friedrich Nietzsche",
      source: "Twilight of the Idols"
    },
    {
      category: "philosophical",
      quote: "Difficulties strengthen the mind, as labor does the body.",
      author: "Attributed to Seneca",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "The unexamined life is not worth living.",
      author: "Socrates",
      source: "Plato's Apology"
    },
    {
      category: "philosophical",
      quote: "He who conquers himself is the mightiest warrior.",
      author: "Attributed to Confucius",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "Act as if what you do makes a difference. It does.",
      author: "Attributed to William James",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "Well done is better than well said.",
      author: "Benjamin Franklin",
      source: "Poor Richard's Almanack"
    },
    {
      category: "philosophical",
      quote: "What we know is a drop, what we don't know is an ocean.",
      author: "Attributed to Isaac Newton",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "Our life is what our thoughts make it.",
      author: "Marcus Aurelius",
      source: "Meditations"
    },
    {
      category: "philosophical",
      quote: "Energy and persistence conquer all things.",
      author: "Attributed to Benjamin Franklin",
      source: "Philosophical quotation"
    },
    {
      category: "philosophical",
      quote: "Forever is composed of nows.",
      author: "Emily Dickinson",
      source: "Poetry"
    },

    /* HARRY POTTER — 5 */

    {
      category: "harryPotter",
      quote: "It matters not what someone is born, but what they grow to be!",
      author: "Albus Dumbledore",
      source: "Harry Potter"
    },
    {
      category: "harryPotter",
      quote: "It is our choices, Harry, that show what we truly are, far more than our abilities.",
      author: "Albus Dumbledore",
      source: "Harry Potter"
    },
    {
      category: "harryPotter",
      quote: "It is the quality of one's convictions that determines success, not the number of followers.",
      author: "Remus Lupin",
      source: "Harry Potter"
    },
    {
      category: "harryPotter",
      quote: "Fear of a name increases fear of the thing itself.",
      author: "Albus Dumbledore",
      source: "Harry Potter"
    },
    {
      category: "harryPotter",
      quote: "We've all got both light and dark inside us.",
      author: "Sirius Black",
      source: "Harry Potter"
    },

    /* SUPERNATURAL — 4 */

    {
      category: "supernatural",
      quote: "We make our own future.",
      author: "Dean Winchester",
      source: "Supernatural"
    },
    {
      category: "supernatural",
      quote: "Family don't end in blood.",
      author: "Bobby Singer",
      source: "Supernatural"
    },
    {
      category: "supernatural",
      quote: "You are who you choose to be.",
      author: "Kelly Kline",
      source: "Supernatural"
    },
    {
      category: "supernatural",
      quote: "There's no such thing as destiny. Just choices.",
      author: "Dean Winchester",
      source: "Supernatural"
    },

    /* THE HUNGER GAMES — 5 */

    {
      category: "hungerGames",
      quote: "Hope. It is the only thing stronger than fear.",
      author: "President Snow",
      source: "The Hunger Games"
    },
    {
      category: "hungerGames",
      quote: "May the odds be ever in your favor.",
      author: "Effie Trinket",
      source: "The Hunger Games"
    },
    {
      category: "hungerGames",
      quote: "You've got to go through it to get to the end of it.",
      author: "Katniss Everdeen",
      source: "The Hunger Games"
    },
    {
      category: "hungerGames",
      quote: "Well, you know I like my pretty with a purpose.",
      author: "Lenore Dove",
      source: "Sunrise on the Reaping"
    },
    {
      category: "hungerGames",
      quote: "And I love you like all-fire.",
      author: "Lenore Dove",
      source: "Sunrise on the Reaping"
    },

    /* 9-1-1: LONE STAR — 1 */

    {
      category: "loneStar",
      quote: "The secret to life isn't thinking less of yourself but thinking of yourself less.",
      author: "Judd Ryder",
      source: "9-1-1: Lone Star"
    },

    /* 9-1-1 — 5 */

    {
      category: "nineOneOne",
      quote: "Life doesn't have any dead ends when you refuse to quit moving.",
      author: "Bobby Nash",
      source: "9-1-1"
    },
    {
      category: "nineOneOne",
      quote: "Pressure doesn't have to break us down.",
      author: "Maddie Buckley",
      source: "9-1-1"
    },
    {
      category: "nineOneOne",
      quote: "Nothing worth doing is easy.",
      author: "Bobby Nash",
      source: "9-1-1"
    },
    {
      category: "nineOneOne",
      quote: "Focus on one task at a time.",
      author: "Bobby Nash",
      source: "9-1-1"
    },
    {
      category: "nineOneOne",
      quote: "I don't want to be anything other than who I am.",
      author: "Evan Buckley",
      source: "9-1-1"
    }

  ];

  /* ==========================================
     RANDOM QUOTATION SELECTION
     ========================================== */

  let lastQuote = -1;

  function selectQuote() {

    let nextQuote;

    do {
      nextQuote = Math.floor(Math.random() * quotes.length);
    } while (nextQuote === lastQuote && quotes.length > 1);

    lastQuote = nextQuote;

    const selected = quotes[nextQuote];

    icon.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        ${icons[selected.category]}
      </svg>
    `;

    quote.textContent = `“${selected.quote}”`;
    author.textContent = `— ${selected.author}`;
    source.textContent = selected.source;

    /* Adjust font size for longer quotations */

    quote.classList.remove(
      "quote-long",
      "quote-extra-long"
    );

    if (selected.quote.length > 85) {
      quote.classList.add("quote-extra-long");
    } else if (selected.quote.length > 60) {
      quote.classList.add("quote-long");
    }

  }

 
/* ==========================================
   CONTINUOUS 360-DEGREE ROTATION
   ========================================== */

let rotation = 0;
let showingQuote = false;
let desiredSide = false;
let animating = false;

const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
);

const animationDuration = 850;

/* Synchronize rotation and face visibility */

function renderCoin(angle) {

  inner.style.transform = `rotateY(${angle}deg)`;

  const normalizedAngle = ((angle % 360) + 360) % 360;

  const backVisible =
    normalizedAngle >= 90 &&
    normalizedAngle < 270;

  inner.classList.toggle("show-quote", backVisible);

}

/* Smooth acceleration and deceleration */

function easeInOut(progress) {

  return (1 - Math.cos(Math.PI * progress)) / 2;

}

/* Animate the next half-turn */

function updateCoin() {

  if (animating || desiredSide === showingQuote) {
    return;
  }

  if (desiredSide) {
    selectQuote();
  }

  animating = true;

  const targetSide = desiredSide;
  const startAngle = rotation;
  const endAngle = startAngle + 180;

  let startTime = null;

  function finishRotation() {

    rotation = endAngle;
    showingQuote = targetSide;

    renderCoin(rotation);

    coin.setAttribute(
      "aria-pressed",
      String(showingQuote)
    );

    coin.setAttribute(
      "aria-label",
      showingQuote
        ? `${quote.textContent} ${author.textContent}. ${source.textContent}. Flip to return to profile picture.`
        : "Flip profile picture to reveal a quotation"
    );

    animating = false;

    updateCoin();

  }

  function animateFrame(timestamp) {

    if (startTime === null) {
      startTime = timestamp;
    }

    const elapsed = timestamp - startTime;

    const progress = Math.min(
      elapsed / animationDuration,
      1
    );

    const easedProgress = easeInOut(progress);

    const currentAngle =
      startAngle + 180 * easedProgress;

    renderCoin(currentAngle);

    if (progress < 1) {

      window.requestAnimationFrame(animateFrame);

    } else {

      finishRotation();

    }

  }

  if (reducedMotion.matches) {

    finishRotation();

  } else {

    window.requestAnimationFrame(animateFrame);

  }

}


  }

  /* ==========================================
     MOUSE INTERACTION
     ========================================== */

  coin.addEventListener("pointerenter", (event) => {

    if (event.pointerType === "mouse") {
      desiredSide = true;
      updateCoin();
    }

  });

  coin.addEventListener("pointerleave", (event) => {

    if (event.pointerType === "mouse") {
      desiredSide = false;
      updateCoin();
    }

  });

  /* ==========================================
     TOUCHSCREEN AND KEYBOARD INTERACTION
     ========================================== */

  coin.addEventListener("pointerup", (event) => {

    if (event.pointerType !== "mouse") {
      desiredSide = !desiredSide;
      updateCoin();
    }

  });

  coin.addEventListener("keydown", (event) => {

    if (event.key === "Enter" || event.key === " ") {

      event.preventDefault();

      if (event.repeat) return;

      desiredSide = !desiredSide;
      updateCoin();

    }

    if (event.key === "Escape") {
      desiredSide = false;
      updateCoin();
    }

  });

  coin.addEventListener("blur", () => {

    desiredSide = false;
    updateCoin();

  });

  /* Initialize the hidden quotation */

  selectQuote();

});
