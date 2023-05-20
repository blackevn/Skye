

const useVariants = () => {

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
            x: '200vw'
        },
        show: {
            opacity: 1,
            x: '0',
            transition: {
                type: 'spring',
                stiffness: 300,
                damping: 40,
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
            opacity: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.5
            }
        }, 

        show: {
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              stiffness: 200,
              damping: 25
            }
        }
    }

  return {
    modalVariants, authVariants, authChildrenVariants, modalChildrenVariants, editPostVariants
  }
};

export default useVariants;
