import Cookies from "js-cookie"

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = url => {
  const allowCookies = Cookies.get('does_allow_cookies_usage');
  if (!allowCookies || allowCookies !== "true") return;

  window.gtag('config', process.env.GA_MEASUREMENT_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  const allowCookies = Cookies.get('does_allow_cookies_usage');
  if (!allowCookies || allowCookies !== "true") return;

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}