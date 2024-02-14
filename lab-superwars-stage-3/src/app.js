const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo",
  ];
  
  // initialize players with image and strength
  const initPlayers = (players) => {
    let detailedPlayers = [];
  
    // Instead of forloop use Map method
    // Code here
    players.map((player, index) => {
      let data = {
        name: player,
        strength: getRandomStrength(),
        image: `images/super-${index + 1}.png`,
        type: index % 2 === 0 ? "hero" : "villain",
      };
      detailedPlayers.push(data);
    });
  
    return detailedPlayers;
  };
  
  // getting random strength
  const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
  };
  
  // Build player template
  const buildPlayers = (players, type) => {
    let fragment = "";
  
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    fragment = players
      .filter((player) => player.type === type)
      .map(
        (player) => `<div class="player">
          <img src="${player.image}" alt="">
          <div class="name">${player.name}</div>
          <div class="strength">${player.strength}</div></div>`
      )
      .join("");
  
    return fragment;
  };
  
  // Display players in HTML
  const viewPlayers = (players) => {
    document.getElementById("heroes").innerHTML = buildPlayers(players, "hero");
    document.getElementById("villains").innerHTML = buildPlayers(
      players,
      "villain"
    );
  };
  
  window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
  };
