const _ = require("lodash")

module.exports = function({ addUtilities, e, theme, variants = ["responsive"] }) {
  const themeGaps = theme("grid.gaps", {})
  const widths = theme("width", {})

  addUtilities([
      {
        ".grid": {
          display: "flex",
          flexWrap: "wrap",
          flex: "1 1 0%",
          marginLeft: `-${theme("grid.gaps.default")}`,
          marginRight: `-${theme("grid.gaps.default")}`,
        },
      },

      {
        ".grid .grid-col": {
          paddingLeft: `${theme("grid.gaps.default")}`,
          paddingRight: `${theme("grid.gaps.default")}`,
        },
      },

      ..._.map(widths, (value, key) => {
        return {
          [`.${e(`push-${key}`)}`]: {
            marginLeft: `${value}`,
          },
        }
      }),

      ..._.map(themeGaps, (size, name) => {
        if (name !== "default") {
          return {
            [`.grid-${name}`]: {
              display: "flex",
              flexWrap: "wrap",
              marginLeft: `-${size}`,
              marginRight: `-${size}`,
            },
          }
        }
      }),

      ..._.map(themeGaps, (size, name) => {
        if (name !== "default") {
          return {
            [`.grid-${name} .grid-col`]: {
              paddingLeft: `${size}`,
              paddingRight: `${size}`,
            },
          }
        }
      }),
    ],
    variants('grid')
  )
}
