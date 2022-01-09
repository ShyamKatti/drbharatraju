import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

const mediaQueries = {
  smallMax: 480,
  mediumMax: 768,
  largeMin: 769,
  xLargeMin: 1200
};

export const DesktopLarge = ({ children }) => (<MediaQuery minWidth={mediaQueries.xLargeMin} >{children}</MediaQuery>);
export const Desktop = ({ children }) => (<MediaQuery minWidth={mediaQueries.largeMin} >{children}</MediaQuery>);
export const Tablet = ({ children }) => (<MediaQuery minWidth={mediaQueries.mediumMax} maxWidth={mediaQueries.largeMin} >{children}</MediaQuery>);
export const TabletDown = ({ children }) => (<MediaQuery minWidth={mediaQueries.smallMax} maxWidth={mediaQueries.mediumMax} >{children}</MediaQuery>);
export const Mobile = ({ children }) => (<MediaQuery maxWidth={mediaQueries.smallMax} >{children}</MediaQuery>);
export const Default = ({ children }) => (<MediaQuery minWidth={mediaQueries.smallMax} >{children}</MediaQuery>);

Desktop.propTypes = { children: PropTypes.node.isRequired };
Tablet.propTypes = { children: PropTypes.node.isRequired };
TabletDown.propTypes = { children: PropTypes.node.isRequired };
Mobile.propTypes = { children: PropTypes.node.isRequired };
Default.propTypes = { children: PropTypes.node.isRequired };
DesktopLarge.propTypes = { children: PropTypes.node.isRequired };

