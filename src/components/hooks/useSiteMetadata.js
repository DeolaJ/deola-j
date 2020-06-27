import { graphql, useStaticQuery } from 'gatsby';

const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteDataQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
}

export default useSiteMetadata;