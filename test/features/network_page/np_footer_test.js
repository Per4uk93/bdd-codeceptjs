Feature('Network Page - Footer Test')

Before((I, networkPage) => { // or Background
  networkPage.validatePage()
})

Scenario('Check The Footer is displayed', (I, basePage) => {
  basePage.validateFooter()
}).retry(2)

Scenario('Check Elsewhere Footer and links are displayed', (I, basePage) => {
  basePage.validateElsewhereFooter()
})

Scenario('Check Sitemap Footer and links are displayed', (I, basePage) => {
  basePage.validateSitemapFooter()
})

Scenario('Check Web Services Footer and links are displayed', (I, basePage) => {
  basePage.validateWebServicesFooter()
})

Scenario('Check Community Footer and links are displayed', (I, basePage) => {
  basePage.validateCommunityFooter()
})

Scenario('Check The Foundation Footer is displayed', (I, basePage) => {
  basePage.validateFoundationFooter()
})
