"use client";

import { useState } from "react";

import * as S from "./Accordion.style";

interface AccordionItemProps {
  title: string;
  defaultOpen?: boolean;
  children?: React.ReactNode;
}

interface AccordionProps {
  heading: string;
  title?: string;
  children?: React.ReactNode;
  additional?: React.ReactNode;
}

const AccordionItem = ({
  title,
  children,
  defaultOpen = false,
}: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.AccordionItem>
      <S.AccordionHeader
        onClick={toggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
      >
        <S.AccordionTitle>{title}</S.AccordionTitle>
        <S.AccordionButton
          $isOpen={isOpen}
          type={`button`}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          aria-expanded={isOpen}
        >
          {/* <S.ScreenReaderText>accordion action button</S.ScreenReaderText> */}
        </S.AccordionButton>
      </S.AccordionHeader>
      <S.AccordionBody
        animate={
          isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }
        }
        initial={false}
        transition={{
          height: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] },
          opacity: { duration: 0.15, ease: "easeOut" },
        }}
        style={{ overflow: "hidden" }}
        aria-hidden={!isOpen}
      >
        <S.AccordionBodyInner>{children}</S.AccordionBodyInner>
      </S.AccordionBody>
    </S.AccordionItem>
  );
};

const Accordion = ({
  heading,
  title,
  children,
  additional,
}: AccordionProps) => {
  return (
    <S.Accordion>
      <S.AccordionContainer>
        {heading && (
          <S.AccordionIntro>
            <S.AccordionHeading title={title || heading}>
              {heading}
            </S.AccordionHeading>
          </S.AccordionIntro>
        )}
        {children}
        {additional && (
          <S.AccordionAdditional>{additional}</S.AccordionAdditional>
        )}
      </S.AccordionContainer>
    </S.Accordion>
  );
};

export { Accordion, AccordionItem };
export default Accordion;
