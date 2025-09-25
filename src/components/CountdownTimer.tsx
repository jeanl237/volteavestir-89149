import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  initialHours?: number;
  initialMinutes?: number;
  initialSeconds?: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ 
  initialHours = 2, 
  initialMinutes = 30, 
  initialSeconds = 0 
}) => {
  const [time, setTime] = useState({
    hours: initialHours,
    minutes: initialMinutes,
    seconds: initialSeconds
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        if (seconds > 0) {
          seconds -= 1;
        } else if (minutes > 0) {
          minutes -= 1;
          seconds = 59;
        } else if (hours > 0) {
          hours -= 1;
          minutes = 59;
          seconds = 59;
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center space-x-4 bg-neutro-escuro text-white py-4 px-6 rounded-lg shadow-lg">
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-laranja-cta">
          {formatTime(time.hours)}
        </div>
        <div className="text-xs uppercase">Horas</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-laranja-cta">
          {formatTime(time.minutes)}
        </div>
        <div className="text-xs uppercase">Minutos</div>
      </div>
      <div className="text-2xl md:text-3xl font-bold">:</div>
      <div className="text-center">
        <div className="text-2xl md:text-3xl font-bold text-laranja-cta">
          {formatTime(time.seconds)}
        </div>
        <div className="text-xs uppercase">Segundos</div>
      </div>
    </div>
  );
};

export default CountdownTimer;