import * as React from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import {useStaticQuery, graphql} from "gatsby"

import {
    newContent,
    animateObjects,
    animateObjectsFromMainMenu,
} from "components/layout"

import {
    MainHeader,
    MainHeaderWrap,
    MainHeaderNav,
    IconMenuBar,
    IconMenuBarClose,
    MainHeaderMenu,
    MainHeaderMenuList,
    MainHeaderContactLink,
    MainHeaderContactList,
    MainHeaderContactWrapper,
    MainHeaderNavContainer
} from "styles/header/Header.Style";


const Header = ({logoImage, headerVisible}) => {
    const data = useStaticQuery(graphql`
        {
            headerData: headerContentJson {
                menuLink {
                    link
                    title
                }
                contactMenu {
                    title
                }
            }
        }
    `)

    return (
        <MainHeader className={headerVisible}>
            <MainHeaderWrap>
                <TransitionLink
                    to="/"
                    className={`c-header__logo`}
                    exit={{
                        length: 0.6,
                        trigger: ({exit, e, node}) => animateObjects(exit, node),
                    }}
                    entry={{
                        delay: 0.8,
                        trigger: ({entry, node}) => newContent(node),
                    }}>
                    <span className="visually-hidden"
                          dangerouslySetInnerHTML={{__html: 'Lastdoor Solutions Branding'}}/>
                    <img src={logoImage} alt="Lastdoor Solutions Branding" width={46} height={80}/>
                </TransitionLink>
                <IconMenuBar className={`c-header__ico-menu`}>
                    <svg className="icon icon-menu">
                        <use xlinkHref="#icon-menu"></use>
                    </svg>
                    <span className="visually-hidden" dangerouslySetInnerHTML={{__html: 'Menu Icon'}}/>
                </IconMenuBar>
            </MainHeaderWrap>
            <MainHeaderNav className={`c-main-nav`}>
                <IconMenuBarClose className={`c-main-nav__menu-close`}>
                    <svg className="icon icon-close">
                        <use xlinkHref="#icon-close"></use>
                    </svg>
                    <span className={`visually-hidden`} dangerouslySetInnerHTML={{__html: 'Close'}}/>
                </IconMenuBarClose>
                <MainHeaderNavContainer className={`l-container`}>
                    <MainHeaderMenu className={`main-menu`}>
                        {data.headerData.menuLink.map(data => {
                            return (
                                <MainHeaderMenuList key={data.title}>
                                    <TransitionLink
                                        to={data.link}
                                        title={data.title}
                                        exit={{
                                            length: 0.6,
                                            trigger: ({exit, e, node}) =>
                                                animateObjectsFromMainMenu(exit, node),
                                        }}
                                        entry={{
                                            delay: 0.8,
                                            trigger: ({entry, node}) => newContent(node),
                                        }}
                                    >
                                        {data.title}
                                    </TransitionLink>
                                </MainHeaderMenuList>
                            )
                        })}
                    </MainHeaderMenu>
                    <MainHeaderContactWrapper className={`main-nav__contact`}>
                        {data.headerData.contactMenu.map(data => {
                            let contact = data.title.split(' ').join(''), getNumber, propSyntax
                            if (contact.indexOf('@') !== -1) {
                                getNumber = contact
                                propSyntax = 'mailto:' + getNumber
                            } else {
                                getNumber = contact.replace(/^\D+/g, '')
                                propSyntax = 'tel:+' + getNumber
                            }
                            return (
                                <MainHeaderContactList key={data.title}>
                                    <MainHeaderContactLink href={propSyntax}
                                                           dangerouslySetInnerHTML={{__html: data.title}}/>
                                </MainHeaderContactList>
                            )
                        })}
                    </MainHeaderContactWrapper>
                </MainHeaderNavContainer>
            </MainHeaderNav>
        </MainHeader>
    )
}

export default Header
