/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import {Helmet} from "react-helmet"
import {useStaticQuery, graphql} from "gatsby"

function Seo({title, description, lang, meta}) {
    const {site, sitelogo, dataScreenshot} = useStaticQuery(
        graphql`
             query {
                 site {
                     siteMetadata {
                         title
                         description
                         author
                     }
                 }
 
                 sitelogo: allFile(filter: { relativePath: { eq: "logo.png" } }) {
                     edges {
                         node {
                             id
                             publicURL
                         }
                     }
                 }
                 dataScreenshot: allFile(
                     filter: { relativePath: { eq: "home-screenshot.png" } }
                 ) {
                     edges {
                         node {
                             id
                             publicURL
                         }
                     }
                 }
             }
         `)

    const metaDescription = description ? description : site.siteMetadata.description
    const defaultTitle = title ? title : site.siteMetadata.title

    const logo = sitelogo.edges.map(data => {
        return data.node.publicURL
    })

    const screenshot = dataScreenshot.edges.map(data => {
        return data.node.publicURL
    })

    return (
        <Helmet
            htmlAttributes={{
                lang,
            }}
            title={defaultTitle}
            meta={[
                {
                    name: `geo:placename`,
                    content: `Kathmandu`,
                },
                {
                    name: `geo:position`,
                    content: ``,
                },
                {
                    name: `geo:region`,
                    content: `NP`,
                },
                {
                    name: `description`,
                    content: metaDescription,
                },
                {
                    property: `og:locale`,
                    content: `en_US`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },

                {
                    property: `business:contact_data:street_address`,
                    content: `Ganesh Chowk,`,
                },
                {
                    property: `business:contact_data:locality`,
                    content: `Kathmandu`,
                },
                {
                    property: `business:contact_data:country_name`,
                    content: `Nepal`,
                },
                {
                    property: `business:contact_data:postal_code`,
                    content: ``,
                },
                {
                    property: `business:contact_data:website`,
                    content: `https://lastdoorsolutions.com/`,
                },
                {
                    property: `business:contact_data:email`,
                    content: `pravash@lastdoorsolutions.com`,
                },
                {
                    property: `business:contact_data:phone_number`,
                    content: `+9779851167777`,
                },
                {
                    property: `business:hours:day`,
                    content: `monday`,
                },
                {
                    property: `business:hours:start`,
                    content: "09:00",
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `tuesday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `wednesday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `thursday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `friday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `saturday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `business:hours:day`,
                    content: `sunday`,
                },
                {
                    property: `business:hours:start`,
                    content: `09:00`,
                },
                {
                    property: `business:hours:end`,
                    content: `18:00`,
                },
                {
                    property: `og:title`,
                    content: defaultTitle,
                },
                {
                    property: `og:description`,
                    content: metaDescription,
                },
                {
                    property: `og:url`,
                    content: `https://lastdoorsolutions.com/`,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:image`,
                    content: `https://www.lastdoorsolutions.com${screenshot}`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`,
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata?.author || ``,
                },
                {
                    name: `twitter:title`,
                    content: defaultTitle,
                },
                {
                    name: `twitter:description`,
                    content: metaDescription,
                },
                {
                    name: `twitter:image`,
                    content: `https://www.lastdoorsolutions.com${screenshot}`,
                },
            ].concat(meta)}
        >
            <script type="application/ld+json">
                {`
  {   "@context": "https://schema.org",
       "@type": "WebSite",
       "url": "https://www.lastdoorsolutions.com/",
       "potentialAction": {
         "@type": "SearchAction",
         "target": {
           "@type": "EntryPoint",
           "urlTemplate": "https://lastdoorsolutions.com/search?q={search_term_string}"
         },
         "query-input": "required name=search_term_string"
       }
     }
  `}
            </script>
            <script type="application/ld+json">
                {`
   {"@context":"https://schema.org",
   "@type":"Organization",
   "url":"https://www.lastdoorsolutions.com/",
   "sameAs":["https://www.facebook.com/wearelastdoor/",
   "https://www.instagram.com/wearelastdoor/",
   "https://www.linkedin.com/company/wearelastdoor",
   "https://twitter.com/wearelastdoor"],
   "@id":"https://www.lastdoorsolutions.com/",
   "name":"Last Door Solutions pvt. ltd.",
   "logo": "https://www.lastdoorsolutions.com${logo}",
   "image":"https://www.lastdoorsolutions.com${screenshot}",
   "address":{"@type":"PostalAddress",
   "streetAddress":"Ganesh Chowk, New Colony, Hattigauda",
   "addressLocality":"Kathmandu",
   "postalCode":"",
   "addressRegion":"Bagmati",
   "addressCountry":"NP"
 },
 "geo":{
   "@type":"GeoCoordinates",
   "latitude":"",
   "longitude":""},
   "openingHours":["Mo 9:00 AM-6:00 PM","Tu 9:00 AM-6:00 PM","We 9:00 AM-6:00 PM","Th 9:00 AM-6:00 PM",
   "Fr 9:00 AM-6:00 PM","Sa 9:00 AM-6:00 PM","Su 9:00 AM-6:00 PM"],
   "email":"pravash@lastdoorsolutions.com",
   "telePhone":"+9779851167777"}
       `}
            </script>
        </Helmet>
    )
}

Seo.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

Seo.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
}

export default Seo