import React from "react";

interface ViewWrapperProps {
  children: React.ReactNode
}

const ViewWrapper: React.FC<ViewWrapperProps> = ({ 
  children 
}) => {
  return (
    <main 
      className="flex items-center justify-center 
      h-[100dvh] w-full"
    >
      {children}
    </main>
  )
}

export default ViewWrapper