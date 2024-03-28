import { Link as UILink } from "@nextui-org/react"
import { Link as RouterLink } from "react-router-dom"

import PropTypes from "prop-types"

function Link(props) {
    const { children, ...propsLeft } = props
    return (
        <UILink {...propsLeft} as={RouterLink}>{children}</UILink>
    )
}

Link.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Link