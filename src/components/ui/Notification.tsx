import ReactDOM from 'react-dom';
import React from 'react';
import classes from './Notification.module.css';

interface NotificationProps {
    title: string,
    message: string,
    status: string
}

const Notification:React.FC<NotificationProps> = (props) => {
  const { title, message, status } = props;

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
