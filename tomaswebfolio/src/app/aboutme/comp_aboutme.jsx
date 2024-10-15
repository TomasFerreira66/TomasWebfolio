import { FlipWords } from '@/components/ui/flip-words';


const Comp_aboutme = () => {
  const words = ["Hi,", "Hello,", "Sup',", "Greetings,", "Howdy,", "Good day,", "Yo,", "Bonjour,", "Olá,", "Ahoy,"];
  
  const sizes = "text-xl sm:text-lg md:text-2xl lg:text-3xl"

  return (
    <div>
      <div className="flex justify-center items-center font-thin">
        <div className="flex flex-col justify-center items-center">
          <div className="flex text-3xl mb-3">
            ABOUTME
          </div>
          <div className={`flex flex-col justify-center items-center font-thin ${sizes}`}>
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
