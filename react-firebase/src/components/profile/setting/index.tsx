import React from 'react'
import Account from './Account';
import ProfileForm from './ProfileForm';

interface IProps{
    setOnSetting: (onSetting: boolean) => void
}

const Settings:React.FC<IProps> = ({setOnSetting}) => {
    
  return (
    <div className="p-2 rounded-md shadow">
      {/* ProfileForm */}
      <ProfileForm setOnSetting={setOnSetting}/>
      <Account/>
      {/* Change Password */}
      
    </div>
  )
}

export default Settings;