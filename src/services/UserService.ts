import {getData} from '../context/AsyncStore';
import {useAuth} from '../context/AuthContext';
import {useNotification} from '../context/NotificationContext';
import {
  characterDataDummy,
  charactersDummy,
  contactsDummy,
  conversationDummy,
  messagesDummy,
} from './dummyData';

import {API_URL} from '@env';

export const useUserService = () => {
  const authContext = useAuth();
  if (!authContext) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  const {character} = authContext;
  const showNotification = useNotification();
  const useDummyData = true;

  const getCharacters = async () => {
    if (useDummyData) {
      return charactersDummy;
    }
    const jwt = await getData('jwt');
    try {
      const response = await fetch(`${API_URL}/GetCharacters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });
      if (!response.ok) {
        showNotification('Error', 'Error fetching characters');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      showNotification('Error', 'Error fetching characters');
      console.log(error);
    }
  };

  const getMessages = async () => {
    if (useDummyData) {
      return messagesDummy;
    }

    const jwt = await getData('jwt');
    try {
      const response = await fetch(`${API_URL}/GetMessages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({characterId: character.id}),
      });
      if (!response.ok) {
        showNotification('Error', 'Error fetching messages');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      showNotification('Error', 'Error fetching messages');
      console.log(error);
    }
  };

  const getCharacterInfo = async () => {
    if (useDummyData) {
      return characterDataDummy;
    }

    const jwt = await getData('jwt');
    try {
      const response = await fetch(`${API_URL}/GetCharacterData`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({characterId: character.id}),
      });
      if (!response.ok) {
        showNotification('Error', 'Error fetching character data');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      showNotification('Error', 'Error fetching character data');
      console.log(error);
    }
  };

  const getContacts = async () => {
    if (useDummyData) {
      return contactsDummy;
    }

    const jwt = await getData('jwt');
    try {
      const response = await fetch(`${API_URL}/GetContacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({characterId: character.id}),
      });
      if (!response.ok) {
        showNotification('Error', 'Error fetching contacts');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      showNotification('Error', 'Error fetching contacts');
      console.log(error);
    }
  };

  const getConversation = async () => {
    if (useDummyData) {
      return conversationDummy;
    }

    const jwt = await getData('jwt');
    try {
      const response = await fetch(`${API_URL}/GetConversation`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: JSON.stringify({characterId: character.id}),
      });
      if (!response.ok) {
        showNotification('Error', 'Error fetching contacts');
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      showNotification('Error', 'Error fetching contacts');
      console.log(error);
    }
  };

  return {
    getCharacters,
    getMessages,
    getCharacterInfo,
    getContacts,
    getConversation,
  };
};
