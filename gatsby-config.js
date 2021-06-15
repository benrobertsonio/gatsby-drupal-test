require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

console.log({ VAR: process.env.MAX_LENGTH, LENGTH: process.env.MAX_LENGTH.length });

module.exports = {
    siteMetadata: {
        title: 'drupal-test',
    },
    plugins: ['gatsby-plugin-gatsby-cloud',
        {
            resolve: `gatsby-source-drupal`,
            options: {
                baseUrl: `https://stm60c8fdfd83f6a-cpa912vkrx0prwxitiqqvetvl7no6stm.tugboat.qa/`
            }
        }],
}
