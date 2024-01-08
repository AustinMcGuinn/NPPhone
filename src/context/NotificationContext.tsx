import React, {createContext, useState, useContext, useCallback} from 'react';
import AnimatedNotification from '../components/AnimatedNotification';

type NotificationType = {
  header: string;
  description: string;
} | null;

const NotificationContext = createContext<
  | {
      showNotification: (header: string, description: string) => void;
    }
  | undefined
>(undefined);

export const NotificationProvider = ({children}) => {
  const [notification, setNotification] = useState<NotificationType>(null);

  // Using useCallback to ensure this function identity is stable
  const showNotification = useCallback(
    (header: string, description: string) => {
      setNotification({header, description});

      // Set a timeout to hide the notification
      const timeout = setTimeout(() => {
        setNotification(null);
      }, 5000);

      // Clear the timeout when the notification is set to null
      return () => clearTimeout(timeout);
    },
    [],
  );

  return (
    <NotificationContext.Provider value={{showNotification}}>
      {children}
      {notification && <AnimatedNotification {...notification} />}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      'useNotification must be used within a NotificationProvider',
    );
  }
  return context.showNotification;
};
