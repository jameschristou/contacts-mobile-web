import React from 'react';
import ContactListItemComponent from './ContactListItemComponent';

const ContactsListComponent = ({contactsListData}) => {
  return (
    <div className='contact-list-container'>
      <ul className='contact-list'>
        {contactsListData.contactsListItems.map((value, index) => {
            return <ContactListItemComponent contactData={value} key={index} />
        })}
      </ul>
    </div>
  );
};

export default ContactsListComponent;