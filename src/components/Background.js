import companyLogo from '../assets/companyLogo.png';
import readyDisplayBg from '../assets/readyDisplayBg.png'

function Background() {
    return (
      <div className="w-full h-screen">
        <div className="h-1/8 w-full bg-white">
            <img src={companyLogo} alt="Company Logo" className="w-64 h-auto mx-auto p-4" />
        </div>
        <img src={readyDisplayBg} className="h-full w-full"/>
      </div>
    );
  }
  
  export default Background;
  