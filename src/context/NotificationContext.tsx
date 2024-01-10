import React, {createContext, useState, useContext, useCallback} from 'react';
import AnimatedNotification from '../components/AnimatedNotification';
import {View} from 'react-native';

type NotificationType = {
  id: number;
  header: string;
  description: string;
};

const NotificationContext = createContext<
  | {
      showNotification: (header: string, description: string) => void;
    }
  | undefined
>(undefined);

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const NotificationProvider = ({children}: Props) => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);

  const showNotification = useCallback(
    (header: string, description: string) => {
      const newNotification = {
        id: Date.now(), // Unique ID for each notification
        header,
        description,
      };

      setNotifications(prevNotifications => [
        newNotification,
        ...prevNotifications,
      ]);

      // Set a timeout to remove the notification
      setTimeout(() => {
        setNotifications(prevNotifications =>
          prevNotifications.filter(
            notification => notification.id !== newNotification.id,
          ),
        );
      }, 5000);
    },
    [],
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notification => notification.id !== id),
    );
  }, []);

  return (
    <NotificationContext.Provider value={{showNotification}}>
      {children}
      <View
        style={{position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1000}}>
        {notifications.map((notification, index) => (
          <AnimatedNotification
            key={notification.id}
            index={index}
            {...notification}
            onHide={() => removeNotification(notification.id)}
          />
        ))}
      </View>
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
