import * as React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import { useStaticQuery, graphql } from "gatsby";
import { newContent, animateObjects } from "components/layout";
import {
  FooterMenu,
  FooterMenuList,
  FooterMenuWrap,
  FooterWrapper,
  FooterCopyrightWrapper,
  FooterCopyright,
  FooterContact,
  FooterContactItem,
} from "styles/parts/Footer.Style";

const Footer = () => {
  const data = useStaticQuery(graphql`
    {
      footerData: headerContentJson {
        menuLink {
          link
          title
        }
        contactMenu {
          title
        }
      }
    }
  `);
  return (
    <FooterWrapper>
      <div className="l-container">
        <FooterMenuWrap>
          <FooterMenu>
            {data.footerData.menuLink.map((data) => {
              return (
                <FooterMenuList key={data.title}>
                  <TransitionLink
                    to={data.link}
                    title={data.title}
                    exit={{
                      length: 0.6,
                      trigger: ({ exit, e, node }) =>
                        animateObjects(exit, node),
                    }}
                    entry={{
                      delay: 0.8,
                      trigger: ({ entry, node }) => newContent(node),
                    }}
                  >
                    {data.title}
                  </TransitionLink>
                </FooterMenuList>
              );
            })}
          </FooterMenu>
        </FooterMenuWrap>
        <FooterCopyrightWrapper>
          <FooterCopyright>
            &copy; {new Date().getFullYear()} lastdoor
          </FooterCopyright>
          <FooterContact>
            {data.footerData.contactMenu.map((data) => {
              let contact = data.title.split(" ").join(""),
                getNumber,
                propSyntax;
              if (contact.indexOf("@") !== -1) {
                getNumber = contact;
                propSyntax = "mailto:" + getNumber;
              } else {
                getNumber = contact.replace(/^\D+/g, "");
                propSyntax = "tel:+" + getNumber;
              }
              return (
                <FooterContactItem
                  key={data.title}
                  href={propSyntax}
                  dangerouslySetInnerHTML={{ __html: data.title }}
                />
              );
            })}
          </FooterContact>
        </FooterCopyrightWrapper>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
