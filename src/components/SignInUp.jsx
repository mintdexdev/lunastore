import { useState } from 'react';
import { Link } from 'react-router';

import { AUTH_CONSTANTS } from '@/app/constants/auth.constants';
import { Button, Container, Divider, SplitButton, TextField } from '@/components';

const socialWith = ['Google', 'Facebook', 'X']

export default function SignInUp() {
  const [currentAuth, setcurrentAuth] = useState(AUTH_CONSTANTS.SIGN_IN);
  return (
    <Container variant='form' className='py-6 max-w-[640px]'>
      {currentAuth === AUTH_CONSTANTS.SIGN_IN ?
        <SignIn setcurrentAuth={setcurrentAuth} /> :
        <SignUp setcurrentAuth={setcurrentAuth} />
      }
    </Container>
  )
}

function SignUp({ setcurrentAuth }) {
  return (
    <>
      <h1 className='text-l6'>Create Account</h1>

      <form action=''>
        <div className='grid gap-8'>
          <div className='flex gap-4'>
            <TextField label='First Name' type='text' id='firstName' />
            <TextField label='Last Name' type='text' id='lastName' />
          </div>
          <TextField label='Email Address' type='email' id='emailAddress' />
          <TextField label='Password' type='password' id='pasword' />
          <SplitButton inputType='number' label='Verification Code'>
            Send Verification Code
          </SplitButton >
        </div>

        <div className='grid gap-2 mt-8 mb-2 text-sm'>
          <p>luna may keep me informed with personalized email about products and services.<br />
            See our <span className='underline'><Link to={{ pathname: '/privacy' }}>Privacy Policy</Link></span> for more details.</p>
          <div>
            <input type='checkbox' name='' id='contact' /> <label htmlFor=''>Please contact me via e-mail</label>
          </div>
          <div>
            <input type='checkbox' name='' id='accept-terms' /> <label htmlFor=''>I have read and accept the terms and Conditions</label>
          </div>
        </div>

        <Button>Create Account</Button>
      </form>

      <p className='mt-2 mb-8'>Already have an account? <span className='underline cursor-pointer' onClick={() => setcurrentAuth(AUTH_CONSTANTS.SIGN_IN)}>Login</span></p>

      <Divider />

      <p className='text-center mt-4 '>or register with</p>

      <div className='flex gap-4 mt-4 mx-auto w-fit'>
        {socialWith.map(item => (
          <div className='flex gap-2 items-center px-4 py-2 border rounded-xl'><div className='bg-gray-500 w-4 h-4 rounded-full'
            key={item}
          /> {item}</div>
        ))}
      </div>
    </>
  )
}

function SignIn({ setcurrentAuth }) {
  return (
    <>
      <h1 className='text-l6'>Login to Account</h1>

      <form>
        <div className='grid gap-8'>
          <TextField label='Email Address' type='email' id='emailAddress' />
          <TextField label='Password' type='password' id='pasword' />
          <div className='flex gap-2'>
            <input type='checkbox' name='' id='accept-terms' />
            <label htmlFor=''>Keep me logged in</label>
          </div>
          <Button className=''>Login</Button>
        </div>
      </form>
      <p className='mt-2 mb-8'>Don't have an account? <span className='underline cursor-pointer' onClick={() => setcurrentAuth(AUTH_CONSTANTS.SIGN_UP)}>Create Account</span></p>

      <Divider />

      <p className='text-center mt-4 '>or login with</p>

      <div className='flex gap-4 mt-4 mx-auto w-fit'>
        {socialWith.map(item => (
          <div className='flex gap-2 items-center px-4 py-2 border rounded-xl'><div className='bg-gray-500 w-4 h-4 rounded-full'
            key={item}
          /> {item}</div>
        ))}
      </div>
    </>
  )
}