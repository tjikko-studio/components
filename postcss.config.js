/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-env node */
module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {flexbox: 'no-2009'},
      stage: 3,
      features: {'custom-properties': false}
    }),
    process.env.NODE_ENV === 'production'
      ? require('cssnano')({preset: 'default'})
      : null
  ]
}
