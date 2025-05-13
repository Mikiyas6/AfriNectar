import { Link } from "react-router-dom";

function Button({ disabled, children, to, type, onClick }) {
  const base =
    "inline-block rounded-full bg-pink-900  font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-pink-500 focus:bg-pink-300 focus:outline-none focus:ring focus:ring-pink-300 focus:ring-offset-2 disabled:cursor-not-allowed ";
  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    secondary:
      "px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full border-2 border-white font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-white focus:outline-none focus:ring focus:ring-white focus:ring-offset-2 disabled:cursor-not-allowed focus:bg-white-300 hover:text-white focus:text-white ",
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button onClick={onClick} className={styles[type]} disabled={disabled}>
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
