import "./styles.css";

export const TextInput = ({ searchValue, handleChange }) => {
  return (
    <input
      className="text-input"
      onChange={handleChange}
      type="search"
      value={searchValue}
      placeholder="Type your search"
    />
  );
};
