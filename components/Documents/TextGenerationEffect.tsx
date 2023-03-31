import { useState, useEffect } from 'react';

type TextGenerationEffectProps = {
  paragraph: string[];
};

const TextGenerationEffect: React.FC<TextGenerationEffectProps> = ({
  paragraph,
}) => {
  const [text, setText] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setText(paragraph);
    setIsVisible(false);
  }, []);

  let id: NodeJS.Timeout;
  useEffect(() => {
    id = setTimeout(() => {
      setIsVisible(true);
    }, 1000);
    return () => clearTimeout(id);
  }, [text]);
  
  if (text.length === 0) return null;

  return (
    <p className={`sm:mx-3 sm:my-2 sm:p-1 sm:rounded-xl sm:text-lg xl:mx-4 xl:rounded-2xl justify-center xl:my-4 text-justify xl:text-xl xl:p-2  hover:bg-s2condINPROGRESS transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {text.map(sentence => <span className="text-black">{sentence}. </span>)}
    </p>
  );
};

export default TextGenerationEffect;