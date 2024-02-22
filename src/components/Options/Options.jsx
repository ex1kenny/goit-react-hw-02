import css from "./Options.module.css";

const Options = ({ updateFeedback, onResetClick, total }) => {
  return (
    <div className={css.container}>
      <button className={css.positive} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button className={css.neutral} onClick={() => updateFeedback("neutral")}>
        Neutral
      </button>
      <button className={css.bad} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button onClick={onResetClick} className={css.reset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
