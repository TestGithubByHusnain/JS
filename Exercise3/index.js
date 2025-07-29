// Element.innerhtml is used to populate a div with inner html. Search online about this method and create a website with a div tag 
// containing a random joke given an array of jokes from the internet ( use array webiste to create the array). Your website
// should show a random joke on every reload. Mix length of your jokes array should be 10.
let myjokes = [
  {
    category: "Programming",
    type: "single",
    joke: "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 38,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "The generation of random numbers is too important to be left to chance.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 39,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "A programmer puts two glasses on his bedside table before going to sleep.\nA full one, in case he gets thirsty, and an empty one, in case he doesn't.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 3,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "Java and C were telling jokes. It was C's turn, so he writes something on the wall, points to it and says \"Do you get the reference?\" But Java didn't.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 4,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "Two C strings walk into a bar.\nThe bartender asks \"What can I get ya?\"\nThe first string says \"I'll have a gin and tonic.\"\nThe second string thinks for a minute, then says \"I'll take a tequila sunriseJF()#$JF(#)$(@J#()$@#())!*FNIN!OBN134ufh1ui34hf9813f8h8384h981h3984h5F!##@\"\nThe first string apologizes, \"You'll have to excuse my friend, he's not null-terminated.\"",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 28,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "ASCII silly question, get a silly ANSI.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 25,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "I've got a really good UDP joke to tell you but I don’t know if you'll get it.",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 0,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "Judge: \"I sentence you to the maximum punishment...\"\nMe (thinking): \"Please be death, please be death...\"\nJudge: \"Learn Java!\"\nMe: \"Damn.\"",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 45,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 220,
    safe: true,
    lang: "en"
  },
  {
    category: "Programming",
    type: "single",
    joke: "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
    flags: {
      nsfw: false,
      religious: false,
      political: false,
      racist: false,
      sexist: false,
      explicit: false
    },
    id: 122,
    safe: true,
    lang: "en"
  }
];

// Select a random joke
let index = Math.floor(Math.random() * myjokes.length);

// Display it (assumes you have an element like: <div id="joke"></div>)
document.getElementById("joke").innerHTML = myjokes[index].joke;
