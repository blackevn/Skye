import useWidth from "./useWidth";


const useVariants = () => {

    const [ width ] = useWidth()

    const navVariants = {
        hidden: {
            width: '90px',
            zIndex: 0
        },

        show: {
            width: '400px',
            zIndex: 999
        }
    }

    const commentsVariants = {
        hidden: {
            y: 1200,
            height: 0
           },

        show: {
        y: 0,     
        transition: {
                ease: 'easeIn',
                when: 'beforeChildren'
             },
        height: '100vh'
        }
    }

    const commentsVariantsChildren = {
        hidden: {
            opacity: 0,
        },

        show: {
            opacity: 1,
                     
        }
    }

    const toastVariants = {
        hidden: {
            opacity: 0,
            y: -500,
            transition: {
                ease: 'easeIn'
            }
        },

        show: {
            opacity: 1,
            y: 0,
            transition: {
                stiffness: 100,
                damping: 24
            }
        }
    }

    const skyeText = {
        hidden: {   
           opacity: 0
        },

        show: {
            opacity: 1,
            transition: {
                duration: 1.5,
                ease: 'easeIn'
            }
        }
    }

    const modalVariants = {
        hidden: {
            y: 1200,
           },
        show: {
        y: 0,     
            transition: {
                type: 'spring',
                stiffness: 150,
                damping: 20
             }
        }
    }

    const modalChildrenVariants = {
        hidden: {
            opacity: 0,
        },
        show: {
            opacity: 1
        }
    }

    const authVariants = {
        
        hidden: {
            opacity: 0,  
            x: '200vw',
            rotateY: 40
        },
        show: {
            opacity: 1, 
            x: 0,
            rotateY: 0,
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 34,
                staggerChildren: 0.5,
                when: 'beforeChildren'
            }
        }

    }

    const authChildrenVariants = {
        hidden: {
            opacity: 0.3,
            y: -250
        },
        show:{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5
            }
        }
    }

    const editPostVariants = {
        hidden: {
            x: '200vw',
            opacity: 0.3,
            transition: {
                ease: 'easeIn',
                duration: 0.7
            }

        }, 
        show: {
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 300,
              damping: 34,
            //   ease: 'easeOutIn'
            }
        }
    }

  return {

    modalVariants, authVariants, authChildrenVariants, 
    modalChildrenVariants, editPostVariants, skyeText,
    toastVariants, commentsVariants, commentsVariantsChildren,
    navVariants

  }
}

export default useVariants
