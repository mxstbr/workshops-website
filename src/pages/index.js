/** @jsx jsx */
import { jsx } from "strict-ui";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Home</h1>
    <ul>
      {data.allDatoCmsWorkshop.edges.map(({ node: workshop }) => (
        <Link key={workshop.id} to={`/${workshop.slug}`}>
          <li>{workshop.title}</li>
        </Link>
      ))}
    </ul>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allDatoCmsWorkshop {
      edges {
        node {
          id
          title
          level
          slug
          descriptionNode {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`;
