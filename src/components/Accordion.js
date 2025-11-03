import * as React from "react";
import { motion } from "framer-motion";

const AccordionItem = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = React.useState(defaultOpen);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`c-accordion__item ${isOpen ? "is-open" : ""}`}>
      <div
        className={`c-accordion__header`}
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
        <h3 className={`c-accordion__title`}>{title}</h3>
        <button
          type={`button`}
          className={`c-accordion__button`}
          onClick={(e) => {
            e.stopPropagation();
            toggle();
          }}
          aria-expanded={isOpen}
        >
          <span className={`screen-reader-text`}>accordion action button</span>
        </button>
      </div>
      <motion.div
        className={`c-accordion__body`}
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
        <div className={`c-accordion__body-inner`}>{children}</div>
      </motion.div>
    </div>
  );
};

const Accordion = ({ heading, title, children, additional }) => {
  return (
    <section className={`c-accordion`}>
      <div className={`container`}>
        {heading && (
          <div className="c-accordion__intro">
            <h2 className={`c-accordion__heading`} title={title || heading}>
              {heading}
            </h2>
          </div>
        )}
        {children}
        {additional && (
          <div className={`c-accordion__additional`}>{additional}</div>
        )}
      </div>
    </section>
  );
};

export { Accordion, AccordionItem };
export default Accordion;
