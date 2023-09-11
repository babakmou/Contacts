import React, { useContext, useEffect, useRef } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const { filterContacts, clearFilter, filtered } = contactContext;

  const text = useRef('');
  //   let text = '';

  useEffect(() => {
    if (filtered === null) {
      text.current = ''; // text.current instead of text.current.value
      //   text = '';
    }
  });

  const onChange = (e) => {
    if (text.current !== '') {
      // if (e.target.value !== '') {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <form>
      <input
        ref={text}
        type="text"
        placeholder="Filter Contacts"
        onChange={onChange}
      />
    </form>
  );
};

export default ContactFilter;
