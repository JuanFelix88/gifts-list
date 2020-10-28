const withImages = require("next-images")

module.exports =  withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    BACKEND_URL: "https://lista-de-presentes-backend.herokuapp.com"
  }
})
