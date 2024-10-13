import companyLogo from '../assets/companyLogo.png';
import readyDisplayBg from '../assets/readyDisplayBg.png';
import Calculator from './Calculator';

function Background() {
  return (
    <div className="w-full h-screen relative">
      {/* Logo Section */}
      <div className="h-1/8 w-full bg-white">
        <img src={companyLogo} alt="Company Logo" className="w-64 h-auto mx-auto p-4" />
      </div>

      {/* Background Image */}
      <div className="relative w-full h-full">
        <img src={readyDisplayBg} alt="Background" className="absolute inset-0 h-full w-full object-cover" />

        {/* Centered Calculator */}
        <div className="absolute inset-0 flex items-center justify-center p-6">
            <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Background;
