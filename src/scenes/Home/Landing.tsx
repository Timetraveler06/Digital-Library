import React, { useState, useEffect } from 'react';

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const LandingPage: React.FC = () => {
  const launchDate = new Date('2025-01-01T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });

      if (distance < 0) {
        clearInterval(countdown);
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [launchDate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-900 text-white">
      <h1 className="text-5xl font-bold">BRESC Library - Coming Soon</h1>
      <p className="mt-4 text-lg">Your gateway to limitless knowledge, launching in 5 months.</p>
      <div className="mt-8 flex space-x-4 text-3xl">
        <div>{timeLeft.months}<span className="text-sm"> Months</span></div>
        <div>{timeLeft.days}<span className="text-sm"> Days</span></div>
        <div>{timeLeft.hours}<span className="text-sm"> Hours</span></div>
        <div>{timeLeft.minutes}<span className="text-sm"> Minutes</span></div>
        <div>{timeLeft.seconds}<span className="text-sm"> Seconds</span></div>
      </div>
      <div className="mt-12">
        <p className="mb-4">Follow us for updates:</p>
        <div className="flex space-x-4">
          {/* Social media icons here */}
        </div>
      </div>
      <div className="mt-8">
        <p className="mb-4">Stay in the loop:</p>
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-2 rounded bg-white text-black"
        />
        <button className="ml-2 px-4 py-2 rounded bg-blue-500 text-white">Notify Me</button>
      </div>
    </div>
  );
};

export default LandingPage;
