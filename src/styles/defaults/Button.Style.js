import {createUseStyles} from "react-jss";

const phoneWidth = 640;
export const ButtonStyle = createUseStyles({
        button: {
            '-webkit-appearance': 'none',
            textDecoration: 'none',
            boxShadow: 'none',
            border: 0,
            borderRadius: 0,
            backgroundColor: `rgb(var(--c-white))`,
            color: `rgb(var(--c-brand-primary))`,
            fontFamily: `var(--ff-primary-black)`,
            fontWeight: `normal`,
            fontSize: '14px',
            lineHeight: 1.142,
            padding: '24px 60px 21px',
            transition: 'none',
            letterSpacing: '-0.4px',
            pointerEvents: 'all',
            cursor: 'pointer',
            textTransform: 'uppercase',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            zIndex: '1',
            '&.is-loaded': {
                transition: 'all 300ms ease',
            }
            ,
            '&:after,&:before': {
                content: '""',
                height: '10px',
                width: '10px',
                backgroundColor: 'transparent',
                position: 'absolute',
                zIndex: -1,
                display: 'block',
                borderColor: 'rgb(var(--c-primary))',
                borderStyle: 'solid',
                transition: 'all 600ms cubic-bezier(0.2, 1, 0.3, 1)',
            },

            '&:after': {
                left: 0,
                top: 0,
                borderWidth: ' 2px 0 0 2px',
            },

            '&:before': {
                bottom: 0,
                right: 0,
                borderWidth: '0 2px 2px 0',
            },

            '& .icon': {
                marginRight: '10px',
            },
            '& span': {
                position: 'absolute',
                left: 0,
                overflow: 'hidden',
                height: '100%',
                top: 0,
                zIndex: -2,
                width: '100%',
                '&:after, &:before': {
                    content: '""',
                    height: ' 106%',
                    width: '100%',
                    position: 'absolute',
                    zIndex: -1,
                    top: 0,
                    left: 0,
                    transform: 'skewY(168deg)',
                    backgroundColor: ` rgb(var(--c-primary))`,
                    transition: 'transform 1s cubic-bezier(0.2, 1, 0.3, 1)',
                },

                '&:after': {
                    transformOrigin: 'left top',
                    transform: 'skewY(168deg) translateY(-100%)',
                },

                '&:before': {
                    transformOrigin: 'right bottom',
                    transform: 'skewY(168deg) translateY(100%)',
                }
            },

            '&:hover, &:focus': {
                color: 'rgb(var(--c-brand-primary))',
                ' &:after, &:before': {
                    height: '100%',
                    width: '100%',
                    borderColor: 'rgb(var(--c-brand))',
                },
                '& span': {
                    '&:after': {
                        transform: 'translateY(0)',
                    },
                    '&:before': {
                        transform: 'translateY(0)',
                    }
                }
            }
        },

        [`@media screen and (max-width: ${phoneWidth}px)`]: {
            button: {
                padding: '19px 40px 16px',
            }
        },

        buttonLightDark: {
            backgroundColor: '#323b42',
            color: 'rgb(var(--c-primary))',
            '&:after,&:before': {
                borderColor: 'rgb(var(--c-tertiary))',
            },
            '& span': {
                '&:after,&:before': {
                    backgroundColor: 'rgb(var(--c-tertiary))',
                },
            },
            '&:hover,&:focus': {
                color: 'rgb(var(--c-brand-primary))',
                '&:after,&:before': {
                    width: '100%',
                    height: '100%',
                    borderColor: 'rgb(var(--c-primary))',
                },
                '& span': {
                    '&:after': {
                        transform: 'translateY(0)',
                    },
                    '&:before': {
                        transform: 'translateY(0)',
                    },
                },
            },
        },
        buttonDark: {
            backgroundColor: 'rgb(var(--c-brand-primary))',
            color: 'rgb(var(--c-primary))',
            '&:after,&:before': {
                borderColor: 'rgb(var(--c-tertiary))',
            },
            '& span': {
                '&:after,&:before': {
                    backgroundColor: 'rgb(var(--c-tertiary))',
                },
            },
            '&:hover,&:focus': {
                color: 'rgb(var(--c-brand-primary))',
                '&:after,&:before': {
                    width: '100%',
                    height: '100%',
                    borderColor: 'rgb(var(--c-primary))',
                },
                '& span': {
                    '&:after': {
                        transform: 'translateY(0)',
                    },
                    '&:before': {
                        transform: 'translateY(0)',
                    },
                },
            },
        }, buttonDarkAlt: {
            backgroundColor: 'rgb(var(--c-brand-primary))',
            color: 'rgb(var(--c-tertiary))',
            '&:after,&:before': {
                borderColor: 'rgb(var(--c-tertiary))',
            },
            '& span': {
                '&:after,&:before': {
                    backgroundColor: 'rgb(var(--c-tertiary))',
                },
            },
            '&:hover,&:focus': {
                color: 'rgb(var(--c-brand-primary))',
                '&:after,&:before': {
                    width: '100%',
                    height: '100%',
                    borderColor: 'rgb(var(--c-primary))',
                },
                '& span': {
                    '&:after': {
                        transform: 'translateY(0)',
                    },
                    '&:before': {
                        transform: 'translateY(0)',
                    },
                },
            },
        },
        buttonLight: {
            backgroundColor: 'rgb(var(--c-secondary))',
            color: 'rgb(var(--c-brand-primary))',
            '&:after,&:before': {
                borderColor: 'rgb(var(--c-tertiary))',
            },
            '& span': {
                '&:after,&:before': {
                    backgroundColor: '#323b42',
                },
            },
            '&:hover,&:focus': {
                color: 'rgb(var(--c-primary))',
                '&:after,&:before': {
                    width: '100%',
                    height: '100%',
                    borderColor: 'rgb(var(--c-primary))',
                },
                '& span': {
                    '&:after': {
                        transform: 'translateY(0)',
                    },
                    '&:before': {
                        transform: 'translateY(0)',
                    },
                },
            },
        },
        buttonDisabled: {
            pointerEvents: 'none',
            opacity: .5,
            cursor: 'default',
            userSelect: 'none',
        },
    }
)
