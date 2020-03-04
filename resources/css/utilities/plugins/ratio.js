const _ = require("lodash")

module.exports = function({ addUtilities, e, theme, variants = ["responsive"] }) {
  const ratios = theme("ratio", {})

  addUtilities([
      {
        ".ratio": {
            position: "relative",
            display: "block",
            overflow: "hidden",
        },
      },

      {
        ".ratio:before": {
            content: "''",
            display: "block",
            width: "100%",
            paddingBottom: "100%"
        },
      },

      {
        ".ratio > iframe, .ratio > embed, .ratio > object, .ratio > video, .ratio-content": {
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            height: "100%",
            width: "100%"
        },
      },

      ..._.map(ratios, (value, key) => {
        return {
          [`.${e(`ratio-${key}`)}:before`]: {
            paddingBottom: `${value}`,
          },
        }
      }),
    ],
    variants('ratio')
  )
}
