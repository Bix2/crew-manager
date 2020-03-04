const _ = require("lodash")

module.exports = function({ addUtilities, variants }) {
  addUtilities([
      {
        ".block-cover": {
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
        }
      },
    ],
    variants('block')
  )
}
