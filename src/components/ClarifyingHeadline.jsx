import React, { useState, useEffect, useRef } from "react";
import "./styles/ClarifyingHeadline.css";

const ClarifyingHeadline = ({
  before = "Desgining clarity",
  after = "Designing clarity",
  className = "",
}) => {
  const [currentText, setCurrentText] = useState(before);
  const [swappingIndices, setSwappingIndices] = useState(null);
  const [disableTransition, setDisableTransition] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const hasStartedRef = useRef(false);
  const timeoutRef = useRef(null);
  const letterRefs = useRef([]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const getSwapSequence = (from, to) => {
    const swaps = [];
    const arr = from.split("");
    const target = to.split("");

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== target[i]) {
        let j = -1;

        for (let k = i + 1; k < arr.length; k++) {
          if (arr[k] === target[i]) {
            j = k;
            break;
          }
        }

        if (j !== -1) {
          while (j > i) {
            swaps.push([j - 1, j]);
            [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
            j--;
          }
        }
      }
    }

    return swaps;
  };

  const getLetterWidth = (index) => {
    if (letterRefs.current[index]) {
      return letterRefs.current[index].getBoundingClientRect().width;
    }
    return 0;
  };

  const getTransform = (index) => {
    if (!swappingIndices) return "translateX(0)";

    const [i, j] = swappingIndices;

    if (index === i) {
      const width = getLetterWidth(j);
      return `translateX(${width}px)`;
    }

    if (index === j) {
      const width = getLetterWidth(i);
      return `translateX(-${width}px)`;
    }

    return "translateX(0)";
  };

  const startAnimation = () => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    if (prefersReducedMotion) {
      setCurrentText(after);
      return;
    }

    const swaps = getSwapSequence(before, after);

    if (swaps.length === 0) {
      setCurrentText(after);
      return;
    }

    let textArr = before.split("");
    let swapIndex = 0;

    const doNextSwap = () => {
      if (swapIndex >= swaps.length) {
        setSwappingIndices(null);
        return;
      }

      const [i, j] = swaps[swapIndex];

      setSwappingIndices([i, j]);

      timeoutRef.current = setTimeout(() => {
        setDisableTransition(true);

        [textArr[i], textArr[j]] = [textArr[j], textArr[i]];
        setCurrentText(textArr.join(""));
        setSwappingIndices(null);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setDisableTransition(false);
            swapIndex++;

            timeoutRef.current = setTimeout(doNextSwap, 100);
          });
        });
      }, 400);
    };

    timeoutRef.current = setTimeout(doNextSwap, 150);
  };

  const handleInteraction = () => {
    startAnimation();
  };

  return (
    <span
      className={`clarifying-headline ${className}`}
      onMouseEnter={handleInteraction}
      onFocus={handleInteraction}
      tabIndex={0}
      role="text"
      aria-label={after}
    >
      <span className="clarifying-letters" aria-hidden="true">
        {currentText.split("").map((char, index) => {
          const isSwapping =
            swappingIndices &&
            (index === swappingIndices[0] || index === swappingIndices[1]);

          const isSpace = char === " ";

          return (
            <span
              key={index}
              ref={(el) => (letterRefs.current[index] = el)}
              className={`clarifying-letter ${
                isSwapping ? "swapping" : ""
              } ${disableTransition ? "no-transition" : ""}`}
              style={{
                transform: prefersReducedMotion ? "none" : getTransform(index),
              }}
            >
              {isSpace ? "\u00A0" : char}
            </span>
          );
        })}
      </span>
    </span>
  );
};

export default ClarifyingHeadline;