import React from 'react';

const ContactListItemComponent = ({contactData}) => {
  var avatarTextStyle = {
    backgroundColor: contactData.avatar.colour
  };

  return (
    <li className='contact-list-item'>
      <div className='contact-list-item-avatar-container'>
        <div className='contact-list-item-avatar'>
          <div className='contact-list-item-avatar__text' style={avatarTextStyle}>
            {contactData.avatar.text}
          </div>
        </div>
      </div>
      <div className='contact-list-item-info'>
        <div className='contact-list-item__primary-display-text'>{contactData.primaryDisplayText}</div>
        <div className='contact-list-item__primary-secondary-display-text'>{contactData.secondaryDisplayText}</div>
      </div>
    </li>
  );
};

export default ContactListItemComponent;