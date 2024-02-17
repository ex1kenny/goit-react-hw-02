import css from "./Options.module.css";

const Options = ({
  onPositiveClick,
  onNeutralClick,
  onBadClick,
  onResetClick,
  total,
}) => {
  return (
    <div className={css.container}>
      <button className={css.positive} onClick={onPositiveClick}>
        Good
      </button>
      <button className={css.neutral} onClick={onNeutralClick}>
        Neutral
      </button>
      <button className={css.bad} onClick={onBadClick}>
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
