const withImages = require("next-images")

module.exports =  withImages({
  esModule: true,
  devIndicators: {
    autoPrerender: false,
  },
  env: {
    BACKEND_URL: "https://gifts-list.herokuapp.com"
  }
})
