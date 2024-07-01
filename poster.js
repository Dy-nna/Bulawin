const posters = [
  {
    title: "Zom 100: Bucket List of the Dead",
    src: "zom 100.jpg",
    trailer: "Zom 100 Bucket List of the Dead.mp4",
    genres: ["Action", "Comedy", "Sci-fi"],
    year: 2023,
    overview: `Bullied by his boss, worked around the clock, he's nothing more than
        a corporate drone. All it takes is a zombie outbreak for him to
        finally feel alive!`,
  },
  {
    title: "No Way Up",
    src: "No Way Up.jpg",
    trailer: "No Way Up.mp4",
    genres: ["Suspense", "Drama", "Thriller"],
    year: 2024,
    overview: `Trapped underwater when their plane crashes into the ocean, survivors must find a way to escape as sharks start to circle the wreckage.`,
  },
  {
    title: "Nowhere",
    src: "nowhere.jpg",
    trailer: "Nowhere.mp4",
    genres: ["Suspense", "Drama", "Thriller", "Drama"],
    year: 2023,
    overview: `Fleeing a totalitarian country, pregnant Mia must fight for her life when a violent storm knocks the container in which she has been hiding overboard. Trapped, Mia gives birth and is forced to survive to save her baby.`,
  },
  {
    title: "The Devine Fury",
    src: "The_Divine_Fury_poster.jpg",
    trailer: "The Divine Fury.mp4",
    genres: ["Horror", "Action", "Thriller"],
    year: 2019,
    overview: `After waking up with mysterious wounds on his hands, a champion MMA fighter finds himself in an otherworldly battle against evil forces wreaking havoc in the human world.`,
  },
  {
    title: "In Time",
    src: "In_Time_poster.jpg",
    trailer: "In Time.mp4",
    genres: ["Action", "Sci-fi", "Drama"],
    year: 2011,
    overview: `In a future where time is money, Will Salas saves Henry Hamilton from time thieves, receiving a century's worth of life. However, he's falsely accused of murder and must flee with the wealthy daughter.`,
  },
  {
    title: "A Quite Place",
    src: "A_Quiet_Place.jpg",
    trailer: "A Quiet Place.mp4",
    genres: ["Suspense", "Sci-fi", "Drama"],
    year: 2018,
    overview: `If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.`,
  },
  {
    title: "A Quite Place part II",
    src: "A_Quiet_Place_Part_II.jpg",
    trailer: "A Quiet Place Part II.mp4",
    genres: ["Suspense", "Sci-fi", "Drama"],
    year: 2020,
    overview: `Following the deadly events at home, the Abbott family must now face the terrors of the outside world as they continue their fight for survival in silence. Forced to venture into the unknown, they quickly realize that the creatures that hunt by sound are not the only threats that lurk beyond the sand path.`,
  },
  {
    title: "The Flu",
    src: "The_Flu.jpg",
    trailer: "The Flu.mp4",
    genres: ["Action", "Sci-fi", "Drama", "Disaster"],
    year: 2013,
    overview: `Chaos ensues after a lethal, airborne virus infects the population of a South Korean city less than 20 kilometres from Seoul.`,
  },
  {
    title: "Midnight Runners",
    src: "Midnight_Runners.jpg",
    trailer: "Midnight Runners .mp4",
    genres: ["Comedy", "Action", "Mystery", "Thriller"],
    year: 2017,
    overview: `Two apathetic police academy recruits who become best buddies through the tough training together witness a woman being abducted right before their very eyes. As they were taught in the academy, they quickly report the incident to the police, but the police are in no hurry to jump on the case. So the duo decide to take the matter into their own hands and rescue the woman.`,
  },
  {
    title: "The Platform",
    src: "The_Platform_poster.jpg",
    trailer: "The Platform.mp4",
    genres: ["Sci-fi", "Mystery", "Thriller"],
    year: 2019,
    overview: `In a prison where inmates are fed on a descending platform, those on the upper levels take more than their fair share while those below are left to starve on scraps, and one man decides to change the system.`,
  },
  {
    title: "Train to Busan",
    src: "Train_to_Busan.jpg",
    trailer: "Train to Busan.mp4",
    genres: ["Thriller", "Comedy", "Drama", "Mystery"],
    year: 2016,
    overview: `Bullied by his boss, worked around the clock, he's nothing more than
        a corporate drone. All it takes is a zombie outbreak for him to
        finally feel alive!`,
  },
  {
    title: "Peninsula",
    src: "Peninsula_poster.jpg",
    trailer: "Pininsula.mp4",
    genres: ["Sci-fi", "Action", "Thriller"],
    year: 2020,
    overview: `A zombie virus has in the last four years spread to all South Korea. Four Koreans in Hong Kong sail through the blockade to Incheon for USD20,000,000 on a truck.`,
  },
  {
    title: "Terrifier",
    src: "terrifier.jpg",
    trailer: "Terrifier.mp4",
    genres: ["Slasher", "Horror", "Thriller"],
    year: 2016,
    overview: `A crazy clown stalks and tries to kill three women in a wretched old apartment building on Halloween night.`,
  },
  {
    title: "Evil Dead",
    src: "evil dead 2013.jpg",
    trailer: "Evil Dead .mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 1984,
    overview: `Ashley Williams, his girlfriend, and three friends discover an old book, the Necronomicon, which reawakens the dead. They must fight or become possessed, and Ash must make a difficult decision to save his life.`,
  },
  {
    title: "Evil Dead Rise",
    src: "evil-dead-rise.jpg",
    trailer: "Evil Dead Rise.mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2013,
    overview: `A reunion between two estranged sisters gets cut short by the rise of flesh-possessing demons, thrusting them into a primal battle for survival as they face the most nightmarish version of family imaginable.`,
  },
  {
    title: "Truth or Dare",
    src: "truth or dare.jpg",
    trailer: "Truth or Dare.mp4",
    genres: ["Mystery", "Thriller", "Suspense"],
    year: 2018,
    overview: `Olivia, Lucas, and their college friends travel to Mexico for a final getaway before graduation. A stranger leads them to play a game of truth or dare, awakening a demon that forces them to share secrets and confront fears.`,
  },
  {
    title: "Knowing",
    src: "knowing.jpg",
    trailer: "Knowing.mp4",
    genres: ["Disaster", "Mystery", "Drama", "Sci-fi"],
    year: 2009,
    overview: `A cryptic document, buried in a time capsule, reveals every major disaster from the past five decades and predicts three future calamities, including a global cataclysm. Caleb Koestler, son of professor John, tries to prevent the disaster.`,
  },
  {
    title: "Parasite",
    src: "Parasite.jpg",
    trailer: "Parasite.mp4",
    genres: ["Comedy", "Thriller", "Drama"],
    year: 2019,
    overview: `Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.`,
  },
  {
    title: "Final Destination",
    src: "final destination 2000.jpg",
    trailer: "Final Destination .mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2000,
    overview: `Alex Browning, a Parisian flier, witnesses a plane explode after leaving the ground. He forces everyone off, including himself, and seven others, including Alex, to disembark. Their fate is sealed, and they fall victim to the grim reaper.`,
  },
  {
    title: "Final Destination 2",
    src: "final destination 2003.jpg",
    trailer: "Final Destination 2 .mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2003,
    overview: `Kimberly, a premonition of a fatal highway accident, blocks traffic, and as a police trooper arrives, the accident occurs. Death stalks the mistaken survivors, causing them to die.`,
  },
  {
    title: "Final Destination 3",
    src: "final-destination2006.jpg",
    trailer: "Final Destination 3 .mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2006,
    overview: `Six years after a group of high-school students first cheated death, another teen has a premonition that she and her friends will be involved in a horrifying roller-coaster accident. When the vision proves true, the student and her fellow survivors must deal with the repercussions of cheating the Grim Reaper.`,
  },
  {
    title: "Final Destination 4",
    src: "final destination 2009.jpg",
    trailer: "Final Destination  4.mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2009,
    overview: `While enjoying a day at the track, Nick O'Bannon has a horrific premonition of his friends and him all dying in a freak accident involving many racecars. Mere seconds before the vision comes true, he manages to convince them to leave. Although they cheat death then, the survivors each begin to meet a grisly end, and Nick tries to figure a way to escape a similar fate.`,
  },
  {
    title: "Final Destination 5",
    src: "final destination 2011.jpg",
    trailer: "Final Destination 5 .mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2013,
    overview: `Sam, on a bus ride to a corporate retreat, experiences a terrifying vision of a crumbling suspension bridge. He saves his girlfriend Molly and best friend Peter, but soon realizes Death is not denied.`,
  },
  {
    title: "Alive",
    src: "alive.jpg",
    trailer: "Alive.mp4",
    genres: ["Slasher", "Mystery", "Horror", "Suspense"],
    year: 2020,
    overview: `While a grisly virus ravages a Korean city, Joon-woo tries to stay safe by locking himself inside his apartment. Just as he loses hope, he discovers another survivor.`,
  },
  {
    title: "Badland Hunters",
    src: "badland hunter.jpg",
    trailer: "Badland Hunters.mp4",
    genres: ["Action", "Sci-fi", "Drama", "Disaster"],
    year: 2024,
    overview: `After a major earthquake, Seoul, South Korea, transforms into an apocalyptic wasteland where everything from civilization to law and order has collapsed.`,
  },
  {
    title: "In The Tall Grass",
    src: "in-the-tall-grass-poster.jpg",
    trailer: "In The Tall Grass.mp4",
    genres: ["Action", "Sci-fi", "Drama"],
    year: 2019,
    overview: `A brother and sister enter a field of tall grass to rescue a boy, but they soon realize they cannot escape and something evil lurks in the grass.`,
  },
  {
    title: "The House of Wax",
    src: "house of wax poster.jpg",
    trailer: "House Of Wax.mp4",
    genres: ["Suspense", "Horror", "Slasher"],
    year: 2005,
    overview: `A group of college friends, including Wade and Carly, find themselves in a ghost town with a flat tire and seek help at a spooky wax museum. Inside, they discover the museum is being hunted by insane twin brothers.`,
  },
  {
    title: "Ready or Not",
    src: "ready_or_not_poster.jpg",
    trailer: "Ready or Not.mp4",
    genres: ["Thriller", "Comedy", "Drama", "Mystery"],
    year: 2019,
    overview: `Grace couldn't be happier after she marries the man of her dreams at his family's luxurious estate. There's just one catch -- she must now hide from midnight until dawn while her new in-laws hunt her down with guns, crossbows and other weapons. As Grace desperately tries to survive the night, she soon finds a way to turn the tables on her not-so-lovable relatives.`,
  },
  {
    title: "The Silence",
    src: "The_Silence_2019.jpg",
    trailer: "The Silence.mp4",
    genres: ["Thriller", "Sci-fi", "Drama", "Suspense"],
    year: 2019,
    overview: `When the world is under attack from creatures who hunt their human prey by sound, a teenager who lost her hearing at 13, and her family, seek safety in a remote refuge. However, they discover a cult who are eager to exploit her heightened senses.`,
  },
  {
    title: "The Call",
    src: "Call_poster.jpg",
    trailer: "The Call.mp4",
    genres: ["Thriller", "Sci-fi", "Drama", "Mystery", "Crime fiction"],
    year: 2020,
    overview: `Connected by phone in the same home but 20 years apart, a serial killer puts another woman's past -- and life -- on the line to change her own fate.`,
  },
  {
    title: "Innocent Witness",
    src: "Innocent_Witness.jpg",
    trailer: "Innocent Witness.mp4",
    genres: ["Drama", "Mystery", "Crime fiction"],
    year: 2019,
    overview: `Soon-ho, a lawyer from a large law firm, decides to become a snob and defend a case that has a big promotion opportunity for him to become a partner lawyer. He intentionally approaches an autistic girl, Ji-woo, to exonerate his client.`,
  },
  {
    title: "My First Client",
    src: "My First Client Poster.jpg",
    trailer: "My First Client.mp4",
    genres: ["Suspense", "Drama", "Crime fiction"],
    year: 2019,
    overview: `Based on a real crime that happened in 2013: a 10-year-old girl confesses that she killed her little brother by beating him up. An unsuccessful lawyer who started working at a regional children's center, met these siblings before it happened, but he wanted success as a lawyer and cared none for children's welfare.`,
  },
  {
    title: "Pandora ",
    src: "Pandora.jpg",
    trailer: "Pandora.mp4",
    genres: ["Action", "Disaster", "Drama"],
    year: 2016,
    overview: `A nuclear power plant is built in a rural town, but soon an earthquake causes the power plant to explode, exposing the people to radiation.`,
  },
  {
    title: "The Tunnel",
    src: "The_Tunnel.jpeg",
    trailer: "The Tunnel.mp4",
    genres: ["Disaster", "Suspense", "Drama"],
    year: 2016,
    overview: `When a car salesman gets trapped underneath a collapsed tunnel, he fights for survival as rescue workers race against time to free him.`,
  },
  {
    title: "Forgotten",
    src: "forgotten.jpg",
    trailer: "Forgotten.mp4",
    genres: ["Thriller", "Action", "Drama", "Mystery", "Crime fiction"],
    year: 2017,
    overview: `When his abducted brother returns, seemingly a different man with no memory of the past 19 days, Jin-seok chases after the truth behind the mysterious kidnapping.`,
  },
  {
    title: "Unlocked",
    src: "download (92).jpg",
    trailer: "Unlocked.mp4",
    genres: ["Thriller", "Comedy", "Drama", "Mystery", "Crime fiction"],
    year: 2023,
    overview: `A woman's life is turned upside-down after a dangerous man gets a hold of her lost cell phone and uses it to track her every move.`,
  },
  {
    title: "I am Legend",
    src: "I_am_legend_.jpg",
    trailer: "I am Leged.mp4",
    genres: ["Sci-fi", "Action", "Drama", "Thriller"],
    year: 2007,
    overview: `Robert Neville, a scientist surviving a man-made plague, seeks a cure using his immune blood, despite being outnumbered and facing a dangerous situation where the infected await his mistake.`,
  },
  {
    title: "Pawn",
    src: "Pawn.jpg",
    trailer: "Pawn.mp4",
    genres: ["Action", "Comedy", "Drama"],
    year: 2020,
    overview: `In Incheon, South Korea in 1993, Dooseok works as a debt collector. One day, he goes to see Myungja to collect debt. Unexpectedly, Myungja presents her young daughter, Seung-yi, as collateral, and Dooseok becomes Seung-yi's guardian.`,
  },
  {
    title: "Hello Ghost",
    src: "HelloGhost.jpg",
    trailer: "Hello Ghost.mp4",
    genres: ["Horror", "Comedy", "Drama"],
    year: 2010,
    overview: `Sang-man starts seeing four ghosts after a failed suicide attempt and, by carrying out their wishes, he rediscovers the pleasures of life.`,
  },
  {
    title: "The Odd Family: Zombie on Sale",
    src: "oddfamli.jpg",
    trailer: "The Odd Family Zombie On Sale.mp4",
    genres: ["Horror", "Comedy", "Action", "Sci-fi"],
    year: 2019,
    overview: `When a pharmaceutical company's illegal experiments inadvertently create a zombie, the strange Park family finds it and tries to profit from it.`,
  },
  {
    title: "Concrete Utopia",
    src: "Concrete_Utopia.jpeg",
    trailer: "Concrete Utopia.mp4",
    genres: ["Action", "Disaster", "Drama", "Sci-fi"],
    year: 2023,
    overview: `After a massive earthquake, only one apartment building is left standing in Seoul, South Korea. Survivors flock to Hwang Gung Apartments, but residents cannot cope with the increasing numbers.`,
  },
  {
    title: "Escape Room",
    src: "Escape room (2019)_.jpg",
    trailer: "Escape Room.mp4",
    genres: ["Thriller", "Suspense", "Action", "Mystery"],
    year: 2019,
    overview: `Six adventurous strangers travel to a mysterious building to experience the escape room -- a game where players compete to solve a series of puzzles to win $10,000. What starts out as seemingly innocent fun soon turns into a living nightmare as the four men and two women discover each room is an elaborate trap that's part of a sadistic game of life or death.`,
  },
  {
    title: "Escape Room Tournament of Champions",
    src: "Escape Room 2_ Tournament of Champions (2021).jpg",
    trailer: "Escape Room Tournament of Champions .mp4",
    genres: ["Thriller", "Suspense", "Action", "Mystery"],
    year: 2021,
    overview: `Six people unwittingly find themselves locked in another series of escape rooms, slowly uncovering what they have in common to survive -- and discovering they've all played the game before.`,
  },
  {
    title: "Monster",
    src: "Monster.png",
    trailer: "Monster.mp4",
    genres: ["Drama"],
    year: 2019,
    overview: `A single mother demands answers from a school teacher when her son begins acting strangely. A fight at school causes even more trouble.`,
  },
  {
    title: "Bird Box",
    src: "BirdBox.png",
    trailer: "Bird Box.mp4",
    genres: ["Thriller", "Sci-fi", "Drama", "Mystery"],
    year: 2018,
    overview: `A mysterious force decimates the population, and if seen, one dies. Survivors must avoid encountering the entity, and a woman and her children embark on a dangerous journey to find sanctuary, covering their eyes from evil.`,
  },
  {
    title: "What Happened to Monday",
    src: "What_Happened_to_Monday.png",
    trailer: "What Happen to Monday.mp4",
    genres: ["Action", "Thriller", "Drama", "Crime fiction"],
    year: 2017,
    overview: `In a world where families are allowed only one child due to overpopulation, resourceful identical septuplets must avoid governmental execution and dangerous infighting while investigating the disappearance of one of their own.`,
  },
  {
    title: "Cube",
    src: "Cube_2021_film.jpg",
    trailer: "Cube.mp4",
    genres: ["Thriller", "Sci-fi", "Suspense", "Mystery"],
    year: 2021,
    overview: `A group of strangers wake in a mysterious room inscribed with an unfamiliar code. Looking for ways to escape, they discover the room is riddled with lethal traps, and as fear and distrust swirl around them, the group must work together to survive.`,
  },
  {
    title: "Survival Family",
    src: "survival family.png",
    trailer: "Survival Family.mp4",
    genres: ["Disaster", "Comedy", "Drama"],
    year: 2017,
    overview: `When the electricity in Tokyo stops due to a solar flare, the city is on verge of panic. Yoshiyuki and his family are used to being spoilt by modern urban life, but now must learn to deal with the harsh realities of a dystopic Japan.`,
  },
  {
    title: "Battle Royale",
    src: "Battle_Royale-.jpg",
    trailer: "Battle Royale.mp4",
    genres: ["Horror", "Action", "Drama", "Sci-fi"],
    year: 2000,
    overview: `42 9th graders are sent to a deserted island. They are given a map, food, and various weapons. An explosive collar is fitted around their neck. If they break a rule, the collar explodes. Their mission: kill each other and be the last one standing. The last survivor is allowed to leave the island. If there is more than one survivor, the collars explode and kill them all.`,
  },
  {
    title: "Tag",
    src: "Tag_(film)_poster.jpeg",
    trailer: "Tag.mp4",
    genres: ["Sci-fi", "Comedy", "Drama", "Mystery", "Horror"],
    year: 2015,
    overview: `A woman is cast adrift into an increasingly bizarre set of alternate realities in which each scenario ends in bloody carnage.`,
  },
  {
    title: "The Mimic",
    src: "The_Mimic.jpg",
    trailer: "The Mimic.mp4",
    genres: ["Horror", "Drama", "Mystery"],
    year: 2017,
    overview: `The mother of a missing child takes in a lost girl she finds in the woods, but soon begins to wonder if she is even human.`,
  },
  {
    title: "I am a Hero",
    src: "i am herp.png",
    trailer: "I am a Hero.mp4",
    genres: ["Horror", "Comedy", "Drama", "Suspense", "Action", "Sci-fi"],
    year: 2016,
    overview: `A man witnesses a fatal traffic accident on his way home from work, and the victim is clearly killed on impact. A moment later, when the corpse stands up and walks away, it could be a hallucination or something far more extraordinary.`,
  },
  {
    title: "Hope",
    src: "Wish_poster.jpg",
    trailer: "Hope.mp4",
    genres: ["Drama", "Crime fiction"],
    year: 2013,
    overview: `Dong-hoon and Mi-hee start the day with their beloved daughter, So-won. However, an unexpected and miserable event happens to So-won on her way to school. Dong-hoon and Mi-hee fight against the world to bring hope back into So-won's life.`,
  },
  {
    title: "My Annoying Brother",
    src: "Brother_film_Poster.png",
    trailer: "My Annoying Brother.mp4",
    genres: ["Comedy", "Drama"],
    year: 2016,
    overview: `A now-blind athlete must rely on his estranged brother, who may have just used him as an excuse to get himself out of jail. The two were never close, but the two soon realise a connection they couldn't always see.`,
  },
  {
    title: "M3gan",
    src: "M3GAN_Poster.jpeg",
    trailer: "M3gan.mp4",
    genres: ["Thriller", "Horror", "Suspense", "Sci-fi"],
    year: 2022,
    overview: `M3GAN, a lifelike artificial intelligence doll designed by roboticist Gemma, serves as a companion, teacher, and protector for children. Gemma's unexpected gift of an M3GAN prototype leads to significant consequences.`,
  },
  {
    title: "Cargo",
    src: "Cargo _ Ben Howling & Yolanda Ramke - 2015.jpg",
    trailer: "Cargo.mp4",
    genres: ["Thriller", "Drama", "Sci-fi"],
    year: 2017,
    overview: `Stranded in rural Australia in the aftermath of a violent pandemic, an infected father desperately searches for a new home for his infant child and a means to protect her from his own changing nature.`,
  },
  {
    title: "Don't Breathe",
    src: "Don't_Breathe_(2016_film).png",
    trailer: "Don't Breathe.mp4",
    genres: ["Thriller", "Suspense", "Action", "Slasher"],
    year: 2014,
    overview: `Rocky, Alex, and Money, three Detroit thieves, break into wealthy people's homes. Money learns about a blind veteran's cash settlement and invades his secluded home. They must fight for their lives.`,
  },
  {
    title: "Don't Breathe 2",
    src: "DontBreathe2OfficialPoster2021.png",
    trailer: "Don't Breathe 2.mp4",
    genres: ["Thriller", "Suspense", "Action", "Crime fiction"],
    year: 2021,
    overview: `Norman Nordstrom, a blind veteran hiding in an isolated cabin with a young girl, faces criminal kidnaps and must use his darker instincts to save her.`,
  },
  {
    title: "Wrong Turn",
    src: "Wrong_Turn_movie.jpg",
    trailer: "Wrong Turn.mp4",
    genres: ["Horror", "Slasher", "Suspense", "Mystery"],
    year: 2003,
    overview: `Bullied by his boss, worked around the clock, he's nothing more than
        a corporate drone. All it takes is a zombie outbreak for him to
        finally feel alive!`,
  },
  {
    title: "Mad Max: Fury Road",
    src: "Mad_Max_Fury_Road.jpg",
    trailer: "Mad Max Fury Road .mp4",
    genres: ["Thriller", "Action", "Suspense", "Sci-fi"],
    year: 2015,
    overview: `After civilization collapses, Immortan Joe enslaves survivors in the Citadel. Imperator Furiosa and Max Rockatansky escape, forging an alliance to outrun Joe in a deadly chase through the Wasteland.`,
  },
];

const mainPoster = document.getElementById("main-poster");
const allPoster = document.getElementById("all-poster");
const suspensePoster = document.getElementById("suspense-poster");
const horrorPoster = document.getElementById("horror-poster");
const thrillerPoster = document.getElementById("thriller-poster");
const mysteryPoster = document.getElementById("mystery-poster");
const actionPoster = document.getElementById("action-poster");
const dramaPoster = document.getElementById("drama-poster");
const sciFiPoster = document.getElementById("sci-fi-poster");
const comedyPoster = document.getElementById("comedy-poster");
const slasherPoster = document.getElementById("slasher-poster");
const disasterPoster = document.getElementById("disaster-poster");
const crimePoster = document.getElementById("crime-poster");

allPoster.addEventListener("click", () => {
  showPosters(posters);
});

suspensePoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Suspense");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});
horrorPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Horror");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

crimePoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Crime fiction");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

thrillerPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Thriller");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

mysteryPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Mystery");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

actionPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Action");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

dramaPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Drama");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

sciFiPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Sci-fi");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

comedyPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Comedy");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

slasherPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Slasher");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

disasterPoster.addEventListener("click", () => {
  let newItems;

  newItems = posters.filter((item) => {
    let contains = item.genres.includes("Disaster");

    if (contains) {
      return item;
    }
  });

  showPosters(newItems);
});

function showPosters(items) {
  while (mainPoster.lastChild) {
    mainPoster.removeChild(mainPoster.lastChild);
  }

  if (items.length == 0) {
    const h1 = document.createElement("h1");
    h1.innerText = "NO MOVIES WITH THIS GENRE AVAILABLE";
    mainPoster.appendChild(h1);
    return;
  }

  items.map((poster) => {
    const div = document.createElement("div");
    div.classList.add("poster");

    div.addEventListener("click", () =>
      openVideoPlayer(poster.trailer, poster.title)
    );
    div.innerHTML = `
              <img src="${poster.src}" alt="" />
              <div class="poster-info">
              <h3>${poster.title}</h3>
              <span class="green">${poster.year}</span>
              </div>
              <div class="overview">
              <h3>Overview</h3>
                  ${poster.overview}
              </div>
          `;

    mainPoster.appendChild(div);
  });
}
showPosters(posters);

function openVideoPlayer(src, title) {
  vplayer.src = src;
  videoPlayer.style.display = "flex";
  videoPlayerTitle.innerText = title;
}

const btnGenreButtons = document.querySelectorAll(".btn-genres");

btnGenreButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btnGenreButtons.forEach((el) => {
      el.classList.remove("active");
    });

    btn.classList.add("active");
  });
});
