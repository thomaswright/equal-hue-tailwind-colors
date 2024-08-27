# equal-hue-tailwind-colors

This is [tailwind's default colors](https://tailwindcss.com/docs/customizing-colors) but with all the hues within a series modified to be equal as determined by the [oklab color space](https://bottosson.github.io/posts/oklab/). This is done with the [@texel/color library](https://github.com/texel-org/color), converting the srgb values to okhsl, setting the hue to the 500-shade hue value and then converting back to srgb. For most colors this is a negligible difference, yellows being the main exception.

See [this page](https://thomaswright.github.io/equal-hue-tailwind-colors) to compare the difference.

## Install

`npm install equal-hue-tailwind-colors`

or just copy the object out of `index.mjs`

## Use

Use like you would any custom colors in your `tailwind.config.cjs` file.

```js
import colors from "equal-hue-tailwind-colors";

module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
};
```
