import Notification from "../Notification/Notification";

const Feedback = ({ rating: { good, neutral, bad }, total }) => {
  const positive = Math.round(((good + neutral) / total) * 100);
  if (total === 0) {
    return <Notification />;
  } else {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive: {positive}%</p>
      </div>
    );
  }
};

export default Feedback;
