import React, { useState, useEffect } from 'react';

interface TypingEffectProps {
  sentences: string[];
  typingDelay: number;
  eraseDelay: number;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  sentences,
  typingDelay,
  eraseDelay,
}) => {
  const [text, setText] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        let newText = '';
        if (typing) {
          newText = sentences[sentenceIndex].substring(0, text.length + 1);
          setText(newText);
          if (newText === sentences[sentenceIndex]) {
            setTyping(false);
            setTimeout(() => {
              setTyping(true);
              setSentenceIndex(
                (prevIndex) => (prevIndex + 1) % sentences.length
              );
            }, eraseDelay);
          }
        } else {
          newText = sentences[sentenceIndex].substring(0, text.length - 1);
          setText(newText);
          if (newText === '') {
            setTyping(true);
            setSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
          }
        }
      },
      typing ? typingDelay : eraseDelay
    );
    return () => clearTimeout(timeout);
  }, [text, typing, sentenceIndex, sentences, typingDelay, eraseDelay]);

  return <>{text}</>;
};

export default TypingEffect;
