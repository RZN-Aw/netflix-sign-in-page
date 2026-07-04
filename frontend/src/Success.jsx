import logo from './assets/logo.svg'
import bell from './assets/bell.png'
import na from './assets/na.png'
import mh3 from './assets/mh3.png'
import ms from './assets/ms.png'

function Success(){
    return(
        <>
        <div className='navbar'>
        <div  style={{color:"white"}} className="navbar__s1">
<img  src={logo} alt="" />

        </div>
        <div style={{color:"white"}} className="navbar__s2">
<h4>Home</h4>
<h4>Tv Shows</h4>
<h4>Movies</h4>
<h4>New & popular</h4>
<h4>My List</h4>
<h4>Browse by Language</h4>
            
        </div>
        <div style={{color:"white"}} className="navbar__s3">
            🔍︎
            <span>
            kids

            </span>
            <span style={{color:"white"}}>
            🔔

            </span>
            <img style={{width:"20px"}} src={na} alt="" />
        </div>
       </div>
       <div className="banner">
            <img src={mh3} alt=""/>
        </div>
        <div className="banner__header">
<h1>MONEY HEIST</h1>
<h3>part-5</h3>
<p>AS a criminal mastermind launches his most and ambitious heist yet,a giftrd group
    of robbers and their professor assemble for ascore that could set them up for life
</p>
<button className='play'>▶︎ play</button>
<button className='info'>🛈︎ More Info</button>

        </div>
       
        <div className='img-1'>
            <img src={ms} alt="" />
            
        </div>

       </>
    )
}
export default Success