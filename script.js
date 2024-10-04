// 
// 
// Review Sentences
// 
// 

function sentence() {
  var places = ["at a busy In-n-Out drive-thru","behind a 7/11 dumpster","in bed","after he rear-ended me","in a sketchy Taco-Bell™ parking lot","at a techno goth club","at a comedy club","looking at me through my window","in the women's restroom","while playing Fortnite", "in a Minecraft server", "at a local goldfish tournament", "at a maximum security prison", "at a swingers event", "in my backyard", "in the sewers", "after we had a fist fight", "after stabbing him with a Samurai Sword", "while I attempted to rob him", "while stealing his car", "while sitting on the toilet", "when I was attempting to kidnap and harvest his organs", "while I was trying to summon the devil", "at a cult meeting", "at a Scientology meeting", "at my local orgy event", "while trying to scam him", "on a message board for horny locals", "on my OnlyFans page", "on his OnlyFans page", "after he slid in my DMs", "while trying to buy illegal drugs on the street", "at my therapist's office", "in a Planned Parenthood restroom", "in a disgusting gas station restroom", "after I caught him looking at porn in the public library", "on Tinder", "on Bumble", "on Hinge", "on FarmersOnly.com", "in Facebook group for horny locals", "on ClownDating.com", "on AmishDating.com",
  ];

  var verbpast = ["loved","felt","kissed","groped","punched","slapped","squeezed","licked","smelled","beat up", "bit", "broke", "cut", "hurt", "shook", "stole", "tore", "cooked", "washed", "needed", "fried", "tried", "clapped", "stung",];

  var adjectives = ["beautiful", "ugly", "silly", "lovely", "dumb", "smelly", "soft", "sexy", "sticky", "slimy","weird", "adorable", "aggressive", "annoying", "average", "bad", "bloody", "clumsy", "creepy", "cute", "dangerous", "depressed", "disturbing", "disgusting", "evil", "filthy", "fragile", "famous", "fine", "funny", "gentle", "handsome", "healthy", "itchy", "nasty", "mushy", "naughty", "nice", "odd", "outstanding", "perfect", "plain", "pleasant", "powerful", "repulsive", "scary", "shiny", "silly", "stupid", "strange", "super", "tasty", "tender", "terrible", "thoughtful", "wild",];

  var looks = ["blood","heart","smile","eyes","cum","penis","armpit hair","teeth","ass","tongue","knee skin","stretch marks", "ear lobes", "nose hair", "butthole", "pee", "poop", "leg hair", "toenails", "hairy ankles", "smooth legs", "taint", "ball sack", "scrotum", "foreskin", "pubes", "child-birthing hips", "love handles", "belly button", "man boobs", "reptilian neck", "ear hole", "nose hole", "mouth", "eyeballs", "hair",
  ];

  var adverbs = ["slowly", "elegantly", "sensually", "quickly", "energetically", "easily", "proudly", "cheerfully",
  "hesitantly", "passionately", "always", "anxiously", "awkwardly", "bitterly", "blindly", "blissfully", "boldly", "carefully", "curiously", "deeply", "deliberately", "ferociously", "foolishly", "frantically", "furiously", "generously", "gently", "gleefully", "gracefully", "happily", "helplessly", "honestly", "hopelessly", "hungrily", "immediately", "innocently", "instantly", "intensely", "jealously", "judgmentally", "kindheartedly", "lazily", "longingly", "loosely", "loudly", "meaningfully", "miserably", "mockingly", "mysteriously", "nervously", "never", "obediently", "offensively", "openly", "overconfidently", "painfully", "politely", "positively", "promptly", "queasily", "questionably", "rapidly", "recklessly", "repeatedly", "selfishly", "silently", "sleepily", "sometimes", "suddenly", "tenderly", "terribly", "tightly", "truly", "truthfully", "unethically", "unexpectedly", "unimpressively", "urgently", "vainly", "verbally", "viciously", "violently", "weakly", "wrongly",
  ];

  var verbs = ["love", "suck", "kiss", "grope", "punch", "slap", "tickle", "squeeze", "butt kiss", "lick","touch", "acquire", "admire", "adopt", "bathe", "bake", "beat", "bite", "peg", "bend", "blow", "burn", "buy", "change", "chop", "creep", "desire", "destroy", "drink", "enjoy", "forgive", "grind", "get", "hate", "have", "hug", "hurt", "keep", "kiss", "laugh at", "invest in", "hold", "like", "need", "observe", "obtain", "pinch", "possess", "protect", "pull", "push", "receive", "refuse", "replace", "resist", "ride", "satisfy", "shoot", "sit on", "spit on", "steal", "submit to", "take", "taste", "want", "wash", "whip", "adore", "care for", "appreciate", "smash",];

  var lastSentence = ["5 stars.","4 stars.","3 stars.","2 stars."," 1 star.","I'm definitely letting him stick his penis in me.","I'm definitely not letting him stick his penis in me.","He'll pay for what he did that night.","Ask him to do that 'thing'.", "I'm definitely going to let him do that 'thing' to me again.", "I'm definitely not going to let him do that 'thing' to me again.", "Overall, I had a great time with him but I wish he didn't get arrested that night.", "Definitely 'take him home and let him meet your mother' material!", "Definitely 'take him home and let him meet your husband' material!", "Definitely 'take him home and tie him up in the dungeon' material!", "I had a great time with him overall, can't wait for more.", "I had an awful time with him overall.", "Wasn't murdered, would recommend.", "Didn't have to use my pepper spray, would recommend.", "He wasn't a criminal, sadly.", "He is definitely the real deal.", "We're married now but will get a divorce if you want to see him.",
  ];

  var lastName = ["Stark", "Arryn", "Baratheon", "Tully", "Greyjoy", "Lannister", "Tyrell", "Martell", "Targaryen", "Karstark"];

  var firstName = ["Missandei", "Ygritte", "Ayra", "Melisandre", "Dany", "Brienne", "Gilly", "Sansa", "Margaery", "Cersei"];

  var rand1 = Math.floor(Math.random() * places.length); // places
  var rand2 = Math.floor(Math.random() * verbpast.length); // verb past tense
  var rand3 = Math.floor(Math.random() * adjectives.length); // adjectives
  var rand4 = Math.floor(Math.random() * looks.length); // looks
  var rand5 = Math.floor(Math.random() * verbs.length); // verbs
  var rand6 = Math.floor(Math.random() * lastSentence.length); // last sentence
  var rand7 = Math.floor(Math.random() * firstName.length); // first name
  var rand8 = Math.floor(Math.random() * lastName.length); // last name
  var rand9 = Math.floor(Math.random() * adverbs.length); // adverbs
  var rand10 = Math.floor(Math.random() * looks.length); // looks
  var rand11 = Math.floor(Math.random() * adjectives.length); // adjectives

  var content =  "I met Kevin " + places[rand1] + " and " + verbpast[rand2] + " his " + adjectives[rand3] + " " + looks[rand4] + ". I want to " + adverbs[rand9] + " " + verbs[rand5] + " his " + adjectives[rand11] + " " + looks[rand10] + ". " + lastSentence[rand6];

  var fullName = " - " + firstName[rand7] + " " + lastName[rand8];
 
  document.getElementById('sentence').innerHTML = "&quot;" + content + "&quot;" + fullName;
};

// 
// 
// Sound Effects
// 
// 

function randomAstro(){
  var sounds = [
    new Audio(
    "./audio/ast1.mp3",
  ),
	new Audio(
    "./audio/ast2.mp3",
	),
	new Audio(
    "./audio/ast3.mp3",
	),
	new Audio(
    "./audio/ast4.mp3",
	),
	new Audio(
    "./audio/ast5.mp3",
	),
	new Audio(
    "./audio/ast6.mp3",
	),
	new Audio(
    "./audio/ast7.mp3",
	),
	new Audio(
    "./audio/ast8.mp3",
	),
	new Audio(
    "./audio/ast9.mp3",
	),
	new Audio(
    "./audio/ast10.mp3",
	),
 ];
 
  var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
  soundFile.play()

};

function soundMusic(){
  var music = new Audio('./audio/wii.mp3');
  music.play();
};

function soundGenerate(){
  var sound = new Audio('./audio/select.mp3');
  sound.play();
};

function soundPOV(){
  var sound = new Audio('./audio/ff.mp3');
  sound.play();
};

function soundError(){
  var sound = new Audio('./audio/error.mp3');
  sound.play();
};

function soundFart1(){
  var sound = new Audio('./audio/fart1.mp3');
  sound.play();
};

function soundFart2(){
  var sound = new Audio('./audio/fart2.mp3');
  sound.play();
};

function soundFart3(){
  var sound = new Audio('./audio/fart3.mp3');
  sound.play();
};

function soundFart4(){
  var sound = new Audio('./audio/fart4.mp3');
  sound.play();
};

function soundBoing(){
  var sound = new Audio('./audio/boing.mp3');
  sound.play();
};

function soundClown(){
  var sound = new Audio('./audio/clown.mp3');
  sound.play();
};

function soundDrink(){
  var sound = new Audio('./audio/drink.mp3');
  sound.play();
};

function soundFartDeath(){
  var sound = new Audio('./audio/fartdie.mp3');
  sound.play();
}

function soundMgs(){
  var sound = new Audio('./audio/mgs.mp3');
  sound.play();
};

function soundSleep(){
  var sound = new Audio('./audio/sleep.mp3');
  sound.play();
};

function soundCock(){
  var sound = new Audio('./audio/cock.mp3');
  sound.play();
};


// 
// 
// Sound Effects for Accessibility 
// 
// 



// 
// 
// ARIA settings for POV accordion
// 
// 

// POV: Lunch
function ariaButton1() {
  var x = document.getElementById("ariaButton1").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("ariaButton1").setAttribute("aria-expanded", x);
};

// POV: BJJ
function ariaButton2() {
  var x = document.getElementById("ariaButton2").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("ariaButton2").setAttribute("aria-expanded", x);
}

// POV: Farts
function ariaButton3() {
  var x = document.getElementById("ariaButton3").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("ariaButton3").setAttribute("aria-expanded", x);
}

// POV: Sleeping
function ariaButton4() {
  var x = document.getElementById("ariaButton4").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("ariaButton4").setAttribute("aria-expanded", x);
};

// POV: Cock
function ariaButton5() {
  var x = document.getElementById("ariaButton5").getAttribute("aria-expanded"); 
  if (x == "true") 
  {
  x = "false"
  } else {
  x = "true"
  }
  document.getElementById("ariaButton5").setAttribute("aria-expanded", x);
}; 

