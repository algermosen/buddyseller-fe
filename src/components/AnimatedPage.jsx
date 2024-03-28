import { motion as m } from 'framer-motion'
import PropTypes from "prop-types"

const animations = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
}
function AnimatedPage({ children }) {
    return (
        <m.div
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{
                duration: 0.215,
                ease: 'easeOut'
            }}
            exit="exit">
            {children}
        </m.div>
    )
}

AnimatedPage.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default AnimatedPage