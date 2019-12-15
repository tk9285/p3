import React from 'react'
import {NavLink} from 'react-router-dom'
import Footer from '../shared/Footer'
import '../screens/styles/home.css'
const Home  = () => {

    return(

        <>

        <div className='home-container'>
            <div className ='Welcome'>Welcome Dolly</div>
            <p className='welcome-text'>Click Categories to see the genres of games we have available. You can then navigate over to your accounts favorite list</p>

     <div>
   

        {/* <NavLink to='/games'>Games</NavLink> */}
         <img className = 'mario-group' src='https://im.ezgif.com/tmp/ezgif-1-eac371cad376.gif'></img>
         <img className = 'portal-orange' src='http://pixelartmaker.com/art/2e79f8bcaf7a637.png'></img>
         <img className = 'portal-blue' src='http://pixelartmaker.com/art/2941db219ca746d.png'></img>
         <img className = 'mario-group2' src='http://26.media.tumblr.com/tumblr_ltxql5ny891r5qrimo1_500.gif'></img>
         <img className = 'portal-blue2' src='http://pixelartmaker.com/art/2941db219ca746d.png'></img>
         <img className = 'pyro-right' src='https://myrealdomain.com/images/bit-gifs-2.gif'></img>
         <img className = 'pyro-left' src='https://im.ezgif.com/tmp/ezgif-1-a761cad0a7c2.gif'></img>
         <img className='pipe' src='https://im.ezgif.com/tmp/ezgif-1-f16723d27b73.png'></img>
         <img className='lara' src='https://thumbs.gfycat.com/ThinDefinitiveHalcyon-small.gif'></img>


         <Footer/>
     </div>
     </div>

     </>
    )
    }
export default Home 