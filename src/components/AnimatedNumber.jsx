import React, { useEffect, useState, useRef } from 'react';

const AnimatedNumber = ({ children }) => {
    const targetNumber = parseInt(children, 10);
    const [currentNumber, setCurrentNumber] = useState(0);
    const numberRef = useRef(null);

    // Intersección y visibilidad
    const [isVisible, setIsVisible] = useState(false);

    // Inicializar el observer en el montaje del componente
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        }, { threshold: 0.5 });

        observer.observe(numberRef.current);

        return () => observer.disconnect();
    }, []);

    // Iniciar o reiniciar la animación cuando el componente entra en el viewport
    useEffect(() => {
        if (isVisible && !isNaN(targetNumber)) {
            setCurrentNumber(0);  // Reiniciar el contador
            const increment = targetNumber / 100;

            const interval = setInterval(() => {
                setCurrentNumber((prevNumber) => {
                    const updatedNumber = prevNumber + increment;
                    if (updatedNumber < targetNumber) {
                        return updatedNumber;
                    } else {
                        clearInterval(interval);
                        return targetNumber;
                    }
                });
            }, 20);

            return () => clearInterval(interval);
        }
    }, [isVisible, targetNumber]);

    return <span ref={numberRef}>{isNaN(targetNumber) ? children : Math.round(currentNumber)}</span>;
};

export default AnimatedNumber;