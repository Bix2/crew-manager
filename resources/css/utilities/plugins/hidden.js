const _ = require("lodash")

module.exports = function({ addUtilities, theme }) {

  addUtilities([
    {
      ".hidden-visually": {
        border: "0 !important",
        height: "1px !important",
        margin: "-1px !important",
        overflow: "hidden !important",
        padding: "0 !important",
        position: "absolute !important",
        width: "1px !important",
        clip: "rect(0 0 0 0) !important",
        "-webkit-clip-path": "inset(50%) !important",
        "clip-path": "inset(50%) !important",
        'white-space': "nowrap !important",
      },
    }
  ])
}
