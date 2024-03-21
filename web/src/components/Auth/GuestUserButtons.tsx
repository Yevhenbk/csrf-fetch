import React from "react";
import Button from "../Button";
import Link from "next/link";

const GuestUserButtons: React.FC = () => {
  return (
    <div
      className="flex flex-col w-[17.25rem] 
      gap-4"
    > 
      <Link href="/login">
        <Button 
          type="button"
          arialLabel="Log In Button"
        >
          Log In
        </Button>
      </Link>
      <Link href="/signup">
        <Button
          type="button"
          arialLabel="Sign Up Button"
        >
          Sign Up
        </Button>        
      </Link>
    </div>
  )
}

export default GuestUserButtons