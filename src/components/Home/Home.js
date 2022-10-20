import React from 'react'
import { aboutObj } from '../../constants'
import SITE_IMG from '../../assets/pics/website_320_img.png'
const Home = (props) => {
  const { myRef } = props

  return (
    <div className='Home' ref={myRef}>
      <div className='my-name-is'>{aboutObj.myNameIs}</div>
      <h1 className='full-name'>{aboutObj.fullName}</h1>
      <h1 className='profession'>{aboutObj.web}
        <span
          style={{
            color: '#d200ff'
          }}> {aboutObj.developer}
        </span> {aboutObj.sound}</h1>
      <script src="https://sdk.scdn.co/spotify-player.js"></script>
      <div className='description'>{aboutObj.description}</div>
      <img src={SITE_IMG} alt='stephan web developer' style={{ display: 'none' }} />
    </div>
  )
}

export default Home
