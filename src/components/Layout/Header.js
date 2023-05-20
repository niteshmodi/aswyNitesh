import wysaLogo from "../../assets/wysalogo.png";
import classes from "./Header.module.css";

const Header = ({
  onLogout,
  onSwitchTheme,
  onIntervalDurationChange,
  intervalDuration,
}) => {
  return (
    <>
      <div className={classes.header}>
        <div className={classes.button2}>
          <label htmlFor="intervalDuration">Bubble Speed:</label>
          <select
            id="intervalDuration"
            value={intervalDuration}
            onChange={onIntervalDurationChange}
          >
            <option value={100}>100ms</option>
            <option value={500}>500ms</option>
            <option value={1000}>1000ms</option>
          </select>
        </div>
        <header className={classes.header}>
        <div className={classes.items}>
          <button className={classes.button} onClick={onLogout}>
            Log out
          </button>
          <button className={classes.button} onClick={onSwitchTheme}>
            Switch Theme
          </button>
        </div>
      </header>
      </div>
      
    </>
  );
};

export default Header;
