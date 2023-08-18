
import PropTypes from 'prop-types';
import styles from './Feedback.module.css';

const Feedback = ({ onLeaveFeedback }) => {
  const handleClick = e => {
    const name = e.target.textContent.toLowerCase();
    onLeaveFeedback(name);
  };

  return (
    <div className={styles.container}>
      <button className={styles.btn} onClick={handleClick}>
        Good
      </button>
      <button className={styles.btn} onClick={handleClick}>
        Neutral
      </button>
      <button className={styles.btn} onClick={handleClick}>
        Bad
      </button>
    </div>
  );
};


Feedback.propTypes = {
  onClick: PropTypes.func,
};
export default Feedback;
