 
import TextField from "@/components/TextField";

export default function Auth() {
  return (
    <div>

      <div className='flex h-screen'>
        <div className='bg-gray-500 w-1/2'></div>

        <div className='w-1/2 pr-[clamp(1rem,-0.3043rem+5.7971vw,5rem)]'>
          <h1 className='text-l7'>Login</h1>
          <p>Don't have an account? Create Account</p>


          <TextField />
          <TextField />
 
          
        </div>

      </div>

    </div>
  )
}
