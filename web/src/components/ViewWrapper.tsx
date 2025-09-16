import React, { useMemo } from "react";
import { techBadges } from "../constants/techBadges";
import { icons } from "../constants/icons";

interface ViewWrapperProps {
  children: React.ReactNode;
}

const ViewWrapper: React.FC<ViewWrapperProps> = ({ children }) => {
  const gridBgStyle = useMemo(
    () => ({
      backgroundImage: `
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
      `,
      backgroundSize: "50px 50px",
    }),
    []
  );

  return (
    <div className="h-[100dvh] bg-gray-50">
      <div className="relative w-full h-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={gridBgStyle} />
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-15 h-15 bg-white/5 rounded-lg animate-pulse"></div>
          <div className="absolute top-[20%] right-[10%] w-20 h-20 bg-white/5 rounded-lg animate-pulse delay-1000"></div>
          <div className="absolute bottom-[15%] left-[10%] w-10 h-10 bg-white/5 rounded-lg animate-pulse delay-2000"></div>
          <div className="absolute bottom-[25%] right-[20%] w-16 h-16 bg-white/5 rounded-lg animate-pulse delay-500"></div>
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-2xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Secure Authentication
          </h1>
          <p className="mb-8">
            Building robust auth systems with Django & Next.js
          </p>
          <div className="mb-8 text-lg md:text-xl max-w-3xl text-shadow-md">
            {children}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {techBadges.map((badge) => (
              <div
                key={badge.label}
                className="bg-white/15 backdrop-blur-md border border-white/20 px-6 py-3 rounded-full font-semibold text-lg flex items-center gap-2 shadow-lg"
              >
                {badge.label}
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-8">
            {icons.map((icon) => (
              <div
                key={icon}
                className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 text-2xl"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewWrapper;