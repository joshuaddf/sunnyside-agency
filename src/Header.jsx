import Navbar from './Navbar'

const Header = () => {
  return (
    <div className="bg-[url('./public/images/mobile/image-header.jpg')] lg:bg-[url('./public/images/desktop/image-header.jpg')] lg:h-[80vh] bg-center bg-cover h-[63vh] z-10 ">
    <Navbar />
     <p className='flex mt-[2rem] items-center justify-center text-White font-[fraunces] font-900 text-[3rem] text-center tracking-widest'>WE ARE CREATIVES</p> 
     <svg className='mx-auto mt-[2rem]' width="36" height="114" xmlns="http://www.w3.org/2000/svg"><g stroke="#FFF" strokeWidth="6" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3v100M3 95.484l15 15 15-15"/></g></svg>
    </div>
  )
}

export default Header
