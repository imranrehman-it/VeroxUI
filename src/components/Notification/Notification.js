import React from 'react';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message, type, position }) => {

  return (
    <div style={styles.notification}> {/* Use style instead of className */}
      {message}
    </div>
  );
};

// Define styles as an inline style object
const styles = {
  notification: {
    position: 'fixed',
    top: '10px',
    right: '10px',
    padding: '10px',
    backgroundColor: "green", // Semi-transparent background for the glassy effect
    color: 'white',
    fontSize: '14px',
    fontWeight: 'bold',
    borderRadius: '8px', // Rounded corners
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', // Soft shadow for a floating effect
    zIndex: '1000', // Ensure the notification is on top
  }
};

Notification.propTypes = {
  message: PropTypes.string,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  position: PropTypes.oneOf(['top-left', 'top-right', 'bottom-left', 'bottom-right']),
};

Notification.defaultProps = {
  message: 'This is a notification',
  type: 'info',
  position: 'top-right',
};

export default Notification;
