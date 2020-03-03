const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css");

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

const nextConfig = {
  pageExtensions: ['js', 'jsx', 'tsx', 'mdx'],
  env: {
    AUTH0_DOMAIN: "auth.arweave.org",
    AUTH0_CLIENT_ID: "zrl99vvZ97hiNQ5zsI5oofqk39DLN9Ca",
    CAPTCHA_KEY: "6LfhU5AUAAAAAAuNIcaXg3eWCjY4qQKyemuVDyUu",
    GA_MEASUREMENT_ID: "UA-114639998-1",
    TOKEN_API_SIGNUP: "https://5rd2xqrct6.execute-api.eu-west-2.amazonaws.com/dev/signup",
    TOKEN_API_REDEEM: "https://5rd2xqrct6.execute-api.eu-west-2.amazonaws.com/dev/redeem"
  }
};

module.exports = withSass(withCSS(withMDX(nextConfig)));