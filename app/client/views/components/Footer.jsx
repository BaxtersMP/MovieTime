import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Footer = ({ className, message, featured, ...other }) => {
    // generic approach to add additional class names and set default class name
    const classes = classNames('helloWorld', className)

    return (
        <footer className="footer">
            &copy; 2018 Baxters
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
}

Footer.defaultProps = {
}


export default Footer