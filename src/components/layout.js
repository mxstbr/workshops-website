import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, useStaticQuery } from "gatsby";
import { StaticQuery, graphql } from "gatsby";
import { HelmetDatoCms } from "gatsby-source-datocms";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SEOQuery {
      datoCmsSite {
        globalSeo {
          siteName
        }
        faviconMetaTags {
          ...GatsbyDatoCmsFaviconMetaTags
        }
      }
      datoCmsSeoMetaTags {
        tags
      }
    }
  `);

  console.log(data);

  return (
    <>
      <HelmetDatoCms
        favicon={data.datoCmsSite.faviconMetaTags}
        seo={data.datoCmsSeoMetaTags}
      />
      <div>{children}</div>
    </>
  );
};

export default Layout;
