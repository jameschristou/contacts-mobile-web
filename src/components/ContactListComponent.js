import React from 'react';
import ContactListItemComponent from './ContactListItemComponent';

const ContactListComponent = ({contactList}) => {
  return (
    <div className='contact-list-container'>
      <ul className='contact-list'>
        {contactList.map((value, index) => {
            return <ContactListItemComponent contactData={value} key={index} />
        })}
      </ul>
    </div>
  );
};

export default ContactListComponent;