import React, { useEffect, useState } from 'react';
import registerLottie from '../../assets/lotties/register1.json';
import Lottie from 'lottie-react';
import { Link } from 'react-router';
const Register = () => {

const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-07-31T23:59:59"); // change as needed

    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

    return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row w-full justify-between">

      
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <h1 className="ml-8 mt-4 text-3xl lg:text-5xl font-bold">Register now!</h1>

          <form className="card-body">
            <fieldset className="fieldset space-y-2">
              <label className="label">Name</label>
              <input type="text" name="name" className="input" placeholder="Your name" required />

              <label className="label">Photo URL</label>
              <input type="text" name="photo" className="input" placeholder="Photo URL" required />

              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" required />

              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" required />

              <button type="submit" className="btn btn-neutral mt-4">Register</button>

              <p className="text-center pt-3 font-semibold">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-500 underline">Login</Link>
              </p>
            </fieldset>
          </form>

          <div className="px-6 pb-6">
            <div className="divider">OR</div>
            {/* SocialIcon component if needed */}
          </div>
        </div>

        {/*  RIGHT: Countdown + Lottie in Column */}
        <div className="flex flex-col items-center justify-between w-full lg:w-1/2 h-full space-y-8">
          
          {/*  Countdown Section */}
          <div className="mt-6">
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.days }}>{timeLeft.days}</span>
                </span>
                days
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.hours }}>{timeLeft.hours}</span>
                </span>
                hrs
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.minutes }}>{timeLeft.minutes}</span>
                </span>
                min
              </div>
              <div className="flex flex-col">
                <span className="countdown font-mono text-4xl">
                  <span style={{ "--value": timeLeft.seconds }}>{timeLeft.seconds}</span>
                </span>
                sec
              </div>
            </div>
          </div>

          {/*  Lottie Animation Section */}
          <div className="w-72 lg:w-96">
            <Lottie animationData={registerLottie} loop={true} />
          </div>
        </div>

      </div>
    </div>
    );
};

export default Register;