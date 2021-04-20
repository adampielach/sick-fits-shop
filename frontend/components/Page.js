import PropTypes from 'prop-types';

export default function Page({ children }) {
  return children;
}

Page.propTypes = {
  children: PropTypes.any,
};
