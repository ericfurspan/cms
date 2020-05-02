/**
 *
 * LeftMenuLink
 *
 */

import React from 'react';
import { startsWith, upperFirst } from 'lodash';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import en from '../../translations/en.json';
import Li from './Li';

const LeftMenuLink = ({
  source,
  location,
  destination,
  label,
  suffixUrlToReplaceForLeftMenuHighlight,
}) => {
  const isLinkActive = location && startsWith(
    location.pathname.replace('/admin', '').concat('/'),

    destination
      .replace(suffixUrlToReplaceForLeftMenuHighlight, '')
      .concat('/')
  );

  const plugin =
    source !== 'content-manager' && source !== '' ? (
      <div className="plugin">
        <span>{upperFirst(source.split('-').join(' '))}</span>
      </div>
    ) : (
      ''
    );

  // Check if messageId exists in en locale to prevent warning messages
  const content = en[label] ? (
    <FormattedMessage
      id={label}
      defaultMessage="{label}"
      values={{
        label: `${label}`,
      }}
      className="linkLabel"
    />
  ) : (
    <span className="linkLabel">{label}</span>
  );

  // Icon.

  const icon = <FontAwesomeIcon className={`linkIcon`} icon={icon} />;

  // Create external or internal link.
  const link = destination.includes('http') ? (
    <a
      className={`link ${isLinkActive ? 'linkActive' : ''}`}
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
      {content}
    </a>
  ) : (
    <Link
      className={`link ${isLinkActive ? 'linkActive' : ''}`}
      to={{
        pathname: destination,
        search: source ? `?source=${source}` : '',
      }}
    >
      {icon}
      {content}
    </Link>
  );

  return (
    <Li>
      {link}
      {plugin}
    </Li>
  );
}

LeftMenuLink.propTypes = {
  destination: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
  pluginSuffixUrl: PropTypes.string,
  source: PropTypes.string,
  suffixUrlToReplaceForLeftMenuHighlight: PropTypes.string,
};

LeftMenuLink.defaultProps = {
  pluginSuffixUrl: '',
  source: '',
  suffixUrlToReplaceForLeftMenuHighlight: '',
};

export default LeftMenuLink;
