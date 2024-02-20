import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";
import css from "./App.module.css";

export default function App() {
  const updateFeedback = (feedbackType) => {
    return () => {
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    };
  };

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback === null
      ? { good: 0, neutral: 0, bad: 0 }
      : JSON.parse(savedFeedback);
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleReset = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  return (
    <div className={css.container}>
      <Description />
      <Options
        onPositiveClick={updateFeedback("good")}
        onNeutralClick={updateFeedback("neutral")}
        onBadClick={updateFeedback("bad")}
        onResetClick={handleReset}
        total={totalFeedback}
      />
      <Feedback rating={feedback} total={totalFeedback} />
    </div>
  );
}
