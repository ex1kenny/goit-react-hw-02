import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import { useState, useEffect } from "react";
import css from "./App.module.css";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("feedback");
    return savedFeedback === null
      ? { good: 0, neutral: 0, bad: 0 }
      : JSON.parse(savedFeedback);
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handlePositeve = () => {
    const newGood = feedback.good + 1;
    setFeedback({ ...feedback, good: newGood });
  };
  const handleNeutral = () => {
    const newNeutral = feedback.neutral + 1;
    setFeedback({ ...feedback, neutral: newNeutral });
  };
  const handleBad = () => {
    const newBad = feedback.bad + 1;
    setFeedback({ ...feedback, bad: newBad });
  };
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
        onPositiveClick={handlePositeve}
        onNeutralClick={handleNeutral}
        onBadClick={handleBad}
        onResetClick={handleReset}
        total={totalFeedback}
      />
      <Feedback rating={feedback} total={totalFeedback} />
    </div>
  );
}
