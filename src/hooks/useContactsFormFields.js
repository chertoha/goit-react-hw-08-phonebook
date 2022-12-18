import { useState } from 'react';

export const useContactsFormFields = ({ defaultName, defaultPhone }) => {
  const [name, setName] = useState(defaultName);
  const [phone, setPhone] = useState(defaultPhone);

  const resetFields = () => {
    setName('');
    setPhone('');
  };

  const onChangeHandle = e => {
    const { name, value } = e.currentTarget;
    if (name === 'name') setName(value);
    if (name === 'phone') setPhone(value);
  };

  return { name, phone, resetFields, onChangeHandle };
};
