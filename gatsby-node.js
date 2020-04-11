const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allDatoCmsWorkshop {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      console.log(result)
      result.data.allDatoCmsWorkshop.edges.map(({ node: work }) => {
        createPage({
          path: `/${work.slug}`,
          component: path.resolve(`./src/templates/workshop.js`),
          context: {
            slug: work.slug,
          },
        })
      })
      resolve()
    })
  })
}
