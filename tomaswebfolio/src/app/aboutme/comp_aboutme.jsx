import { FlipWords } from '@/components/ui/flip-words';
import { span } from 'framer-motion/client';

const Comp_aboutme = () => {
  const words = ["Hi,", "Hello,", "Sup',", "Greetings,", "Howdy,", "Good day,", "Yo,", "Bonjour,", "Olá,", "Ahoy,"];
  
  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex text-6xl">
            ABOUTME
          </div>
          <div className="flex flex-col text-2xl justify-center items-center">
            <span>
              <FlipWords words={words}/>my name is <span className='text-blue-300'>Tomás Ferreira</span>
            </span>
            <span>
              I'm a senior full-stack web developer (in the making), but right now I'm a student in my last year of university taking software engineer.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comp_aboutme;
