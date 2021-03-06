export function state() {
  return {
    portfolio: [{
      "type": "library",
      "name": "steam-web",
      "icon": "fa-steam-square",
      "github": "https://github.com/Tidwell/nodeSteam",
      "description": "Node.js API client for the Steam Web API.",
      "indexProjectLibrary": true,
      "technology": ["node.js"]
    }, {
      "type": "library",
      "name": "node-challonge",
      "icon": "fa-trophy",
      "github": "https://github.com/Tidwell/node-challonge",
      "description": "Node.js API client for the challonge API.",
      "indexProjectLibrary": true,
      "technology": ["node.js"]
    }, {
      "type": "library",
      "name": "dgeni static generator",
      "icon": "fa-file-code-o",
      "github": "https://github.com/Tidwell/dgeni-static-gen",
      "description": "Dgeni package for generating static sites from markdown.",
      "indexProjectLibrary": true,
      "technology": ["node.js", "dgeni"]
    }, {
      "type": "library",
      "name": "fwk",
      "icon": "fa-rocket",
      "github": "https://github.com/Tidwell/generator-fwk",
      "description": "Yeoman scaffolding tool for module-based node.js projects.",
      "indexProjectLibrary": true,
      "technology": ["node.js", "yeoman", "mongodb"]
    }, 
    {
      "type": "content site",
      "name": "RHPSNews.com",
      "url": "http://www.rhpsnews.com",
      "image": "/images/portfolio-rhpsnews.png",
      "description": "News Site Catering to the Rocky Horror Community.",
      "indexProjectSite": true,
      "technology": ["vue.js", "nuxt", "node.js", "mongodb"]
    },
    {
      "type": "application",
      "name": "RHPSLive.com",
      "url": "http://www.rhpslive.com",
      "image": "/images/portfolio-rhpslive.png",
      "description": "Live Streaming Video Site catering to the Rocky Horror Community.",
      "indexProjectSite": true,
      "technology": ["vue.js", "nuxt", "node.js", "mongodb"]
    },
    {
      "type": "application",
      "name": "Faeria Decks",
      "url": "http://www.faeriadecks.com",
      "github": "https://github.com/Tidwell/faeriadecks",
      "image": "/images/portfolio-faeriadecks.jpg",
      "description": "Faeria deckbuilder and card designer.",
      "indexProjectSite": true,
      "technology": ["node.js", "angular.js", "angular-material", "mongodb"]
    }, {
      "type": "content site",
      "name": "hearthstone.gg",
      "url": "http://www.hearthstone.gg",
      "image": "/images/portfolio-hsgg.jpg",
      "github": "https://github.com/Tidwell/hearthstone.gg-static",
      "description": "Hearthstone content.",
      "technology": ["node.js", "dgeni", "grunt"]
    }, {
      "type": "application",
      "name": "HSTRNY",
      "url": "http://www.hstrny.com",
      "github": "https://github.com/Tidwell/hearth-angular",
      "image": "/images/portfolio-hstrny.jpg",
      "description": "Automated 8-man Hearthstone tournaments.",
      "indexProjectSite": true,
      "technology": ["node.js", "socket.io", "angular.js", "mongodb"]
    }, {
      "type": "application",
      "name": "Scrolls Toolbox",
      "url": "http://www.scrollstoolbox.com",
      "image": "/images/portfolio-scrollstoolbox.jpg",
      "github": "https://github.com/Tidwell/scrollstoolbox",
      "description": "Scrolls collection tracking MOD and application.",
      "technology": ["node.js", "socket.io", "angular.js", "mongodb"]
    }, {
      "type": "application",
      "name": "Yak Bot",
      "github": "https://github.com/Tidwell/faeria-discord-bot",
      "icon": "fa-comment",
      "description": "Discord Bot for the official Faeria Discord Server.",
      "technology": ["node.js", "mongodb", "discord.js"]
    }, {
      "type": "library / application",
      "name": "js IP Service",
      "url": "http://www.jsipservice.com",
      "github": "https://github.com/Tidwell/jsipservice-node",
      "icon": "fa-cloud",
      "description": "Service and library for grabbing a user's ip address from the client.",
      "technology": ["node.js", "jQuery"]
    }, {
      "type": "library",
      "name": "jQuery Event Counter",
      "github": "https://github.com/Tidwell/jquery.eventCounter",
      "icon": "fa-plug",
      "description": "jQuery plugin for counting events",
      "technology": ["jQuery"]
    }, {
      "type": "content site",
      "name": "NYCRHPS",
      "image": "/images/portfolio-nycrhps.jpg",
      "url": "http://www.nycrhps.org",
      "description": "NYC Rocky Horror Picture Show Cast website.",
      "technology": ["php", "jQuery", "mysql"]
    }, {
      "type": "content site",
      "name": "Scrolls Academy",
      "image": "/images/portfolio-scrollsacademy.jpg",
      "url": "http://academy.scrollsguide.com/",
      "description": "Scrolls articles.",
      "technology": ["php", "jQuery", "bootstrap", "postgres"]
    }, {
      "type": "application",
      "name": "Scrolls Prices",
      "image": "/images/portfolio-scrollsprices.jpg",
      "url": "http://trading.scrollsguide.com/",
      "description": "Scrolls pricecheck app.",
      "technology": ["angular.js", "bootstrap"]
    }, {
      "type": "application",
      "name": "Hearthstone Game Tracker",
      "github": "https://github.com/hearthstone-gg",
      "image": "/images/hsgg.png",
      "description": "Microservice-based game tracker.  Desktop app and several services.",
      "technology": ["node.js", "socket.io", "angular.js", "mongodb", "node webkit"]
    }]
  };
}
