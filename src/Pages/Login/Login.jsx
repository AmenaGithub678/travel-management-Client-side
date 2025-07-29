import Lottie from 'lottie-react';
import React from 'react';
import loginLottie from '../../assets/lotties/login.json'
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router';
import { auth } from '../../firebase/firebase.init';
import { sendPasswordResetEmail } from 'firebase/auth';
import SocialLogin from '../../Shared/SocialLogin';
import Swal from 'sweetalert2';
const Login = () => {

  const { 
        register,
        handleSubmit, 
        getValues,
        formState:{ errors }
           } = useForm();
const {signIn}= useAuth();
   const navigate = useNavigate();           

     const onSubmit = data => {
        // console.log(data);

         signIn(data.email, data.password)
         .then((result) => {
     // Signed in 
      // console.log(result.user);
      Swal.fire({
          icon: 'success',
          title: 'Login Successfully!!',
          text: 'You have successfully logged in!',
          showConfirmButton: false,
          timer: 2000
        });
        
     navigate("/");
   })
   .catch((error) => {
    // console.log(error);
   });

    }
const handleResetPassward = () => {
      const email = getValues("email");
      if (!email) {
       alert('successfully reset your password')
        return;
      }
    
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('resent email send!')
        })
        .catch((error) => {
          error(error.message);
        });
    };       

return (
<div className="hero bg-base-200 min-h-screen">
<div className="hero-content flex-col lg:flex-row-reverse">

<div className="text-center lg:text-left w-72 lg:w-96">
       <Lottie animationData={loginLottie} 
       loop={true}>
        </Lottie>           
</div>

<div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form 
        onSubmit={handleSubmit(onSubmit)}
      
      className="card-body">
        <h1 className="mt-4 text-5xl font-bold">Login now!</h1>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input 
          type="email"
          {...register('email')}
          name="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password"

    {...register('password', 
         {required: true,minLength: 6}
        )
    }

          name="password"  className="input" placeholder="Password" />

{
            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
        }

        {
        errors.password?.type === 'minLength' && <p className='text-red-500'>Password Must be 6 characters or longer</p>
        }  

          <div><button onClick={handleResetPassward}
           className="link link-hover">Forgot password?</button></div>
          <button className="btn btn-neutral mt-2">Login</button>
        </fieldset>
        <SocialLogin></SocialLogin>
      </form >
    </div>
  </div>
  </div>
    );
};

export default Login;