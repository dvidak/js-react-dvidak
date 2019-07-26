import React  from 'react';
import styles from './EditProfile.module.css'
import { observer } from 'mobx-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


function EditProfileComponent(props) {

  return (
     <div>Bok iz edit profile
       <button className = {styles.icon} 
                  onClick = {props.onClick}>
                  <FontAwesomeIcon  icon = {faWindowClose}/>
          </button>
        </div>

  );
};

export const EditProfile = observer (EditProfileComponent)

