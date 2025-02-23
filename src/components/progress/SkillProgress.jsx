"use client";
import React, { useState, useEffect, useRef } from 'react';

const SkillProgress = ({ skill }) => {
  const { title, end } = skill;
  const [progressWidth, setProgressWidth] = useState(0);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        let startWidth = 0;
        const duration = 1000; // Durée de l'animation en millisecondes
        const stepTime = 20; // Intervalle de mise à jour en millisecondes
        const steps = duration / stepTime;
        const increment = (end - startWidth) / steps;

        const animate = () => {
          startWidth += increment;
          if (startWidth >= end) {
            setProgressWidth(end);
            return;
          }
          setProgressWidth(Math.min(startWidth, end)); // Évite de dépasser la valeur finale
          requestAnimationFrame(animate);
        };

        animate();
      }
    }, { threshold: 1.0 });

    const currentRef = progressBarRef.current; // Copier la référence ici

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [end]);

  return (
    <div className="progress-box">
      <h5>{title}</h5>
      <div className="progress" ref={progressBarRef}>
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progressWidth}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ width: `${progressWidth}%`, transition: 'width 0.2s ease-in-out' }}
        >
          <span>{`${end}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;