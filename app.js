{
  "name": "tedzo",
  "description": "Bosco is a whatsapp bot made by @pepe sir with baileys",
  "repository": "https://github.com/pepesir/Bosco",
  "logo": "https://telegra.ph/file/f40d0ef77439f516c050f.jpg",
  "keywords": ["bosco", "nodejs", "bot", "whatsapp bot", "whatsapp automation"],
  "buildpacks": [
    {
      "url": "heroku/nodejs"
    },
    {
      "url": "https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest"
    },
    {
      "url": "https://github.com/DuckyTeam/heroku-buildpack-imagemagick"
    },
    {
      "url": "https://github.com/clhuang/heroku-buildpack-webp-binaries.git"
    }
  ],
   "formation": {
        "worker": {
            "quantity": 1,
            "size": "free"
        }
    }
}
