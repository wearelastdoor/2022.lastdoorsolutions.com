"use client";

import * as React from "react";
import PageBanner from "@/components/pageBanner/PageBanner";
import LinkButton from "@/components/common/button/LinkButton";
import Footer from "@/components/footer/footer";
import * as S from "./not-found-styles/NotFound.style";
import * as BannerStyles from "@/components/pageBanner/PageBanner.style";
import { useAnimateRouteContext } from "@/context/AnimateRouteContext";

const NotFoundPage = () => {
    const { handleRoute } = useAnimateRouteContext();

    return (
        <S.NotFoundContainer>
            <PageBanner
                pageName="404"
                title="404: Not Found"
                pageDescription={
                    <BannerStyles.PageDescription>
                        The page you're looking for can't be found. The page may have been
                        deleted or never existed. If you want some information regarding
                        anything related to Last Door,{" "}
                        <S.InlineLink onClick={() => handleRoute("/contact")}>
                            contact us
                        </S.InlineLink>
                        .
                        <S.ButtonContainer>
                            <LinkButton
                                linkUrl="/"
                                linkTitle="Back to homepage"
                                type="primary"
                                animate
                            />
                        </S.ButtonContainer>
                    </BannerStyles.PageDescription>
                }
            />
 
            <Footer />
        </S.NotFoundContainer>
    );
};

export default NotFoundPage;

