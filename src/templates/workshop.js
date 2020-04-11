import React from "react";
import { HelmetDatoCms } from "gatsby-source-datocms";
// import Img from 'gatsby-image'
import { graphql } from "gatsby";
import Layout from "../components/layout";

export default ({ data: { datoCmsWorkshop: workshop } }) => (
  <Layout>
    <HelmetDatoCms seo={workshop.seoMetaTags} />
    <h1>{workshop.title}</h1>
    <p
      dangerouslySetInnerHTML={{
        __html: workshop.descriptionNode.childMarkdownRemark.html,
      }}
    />
    <p
      dangerouslySetInnerHTML={{
        __html: workshop.tableOfContentsNode.childMarkdownRemark.html,
      }}
    />
    <p
      dangerouslySetInnerHTML={{
        __html: workshop.prerequisitesNode.childMarkdownRemark.html,
      }}
    />
    {/* <div className="sheet__inner">
        <h1 className="sheet__title">{data.datoCmsWork.title}</h1>
        <p className="sheet__lead">{data.datoCmsWork.excerpt}</p>
        <div className="sheet__slider">
          <Slider infinite={true} slidesToShow={2} arrows>
            {data.datoCmsWork.gallery.map(({ fluid }) => (
              <img alt={data.datoCmsWork.title} key={fluid.src} src={fluid.src} />
            ))}
          </Slider>
        </div>
        <div
          className="sheet__body"
          dangerouslySetInnerHTML={{
            __html: data.datoCmsWork.descriptionNode.childMarkdownRemark.html,
          }}
        />
        <div className="sheet__gallery">
          <Img fluid={data.datoCmsWork.coverImage.fluid} />
        </div>
      </div> */}
  </Layout>
);

export const query = graphql`
  query WorkshopQuery($slug: String!) {
    datoCmsWorkshop(slug: { eq: $slug }) {
      id
      title
      descriptionNode {
        childMarkdownRemark {
          html
        }
      }
      tableOfContentsNode {
        childMarkdownRemark {
          html
        }
      }
      prerequisitesNode {
        childMarkdownRemark {
          html
        }
      }
      level
      slug
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`;
