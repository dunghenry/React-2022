import Settings from 'components/profile/setting'
import Show from 'components/profile/show'
import React, { useState } from 'react'

const Profile = () => {
  const [onSetting, setOnSetting] = useState(false)

  return (
    <div>
      {
        onSetting
          ? <Settings setOnSetting={setOnSetting} />
          : <Show setOnSetting={setOnSetting} />
      }
    </div>
  )
}

export default Profile;