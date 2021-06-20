module.exports = {
  "env": {
    "test": {
      "presets": [
        "@babel/preset-env"
      ]
    },
    "babel": {
      "presets": [
        "@babel/preset-env"
      ]
    },
    "build": {
      "presets": [
        [
          "@babel/preset-env",
          "@babel/preset-typescript",
          {
            "modules": false,
            "loose": true
          }
        ]
      ]
    }
  }
};
