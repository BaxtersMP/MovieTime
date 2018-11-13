import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Header = ({ className, message, featured, ...other }) => {
    // generic approach to add additional class names and set default class name
    const classes = classNames('helloWorld', className)

    return (
        <header className="header">
            <h1>Movie Time</h1>
        </header>
    )
}

Header.propTypes = {
    className: PropTypes.string,
}

Header.defaultProps = {
}


export default Header