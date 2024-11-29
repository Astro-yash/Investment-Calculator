export default function InputFields({ title, onEnter, inputValue }) {
  return (
    <>
      <p>
        <label>{title}</label>
        <input type="number" required onChange={onEnter} value={inputValue} />
      </p>
    </>
  );
}
