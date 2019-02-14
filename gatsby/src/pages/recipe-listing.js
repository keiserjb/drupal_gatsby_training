import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import RecipeTeaser from "../components/recipe-teaser"

const RecipeListing = ({ data }) => (
  <Layout>
    <SEO title="Recipe Listing" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Recipe Listing</h1>
    { data.allNodeRecipe.edges.map((recipe) => (
      <RecipeTeaser
        key={recipe.node.id}
        imgFluid={recipe.node.relationships.field_image.localFile.childImageSharp.fluid}
        recipeDate={recipe.node.created}
        recipeTitle={recipe.node.title}
        recipeSummary={recipe.node.field_summary.value}
      />
    ) )}
  </Layout>
)

export const query = graphql`
  query RecipeQuery {
  	allNodeRecipe {
      edges {
        node {
          id
          field_summary {
            value
          }
          title
          created(formatString: "MMMM Do, YYYY")
          relationships {
            field_image {
              localFile {
                childImageSharp {
                  fluid(maxWidth: 500) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

export default RecipeListing
