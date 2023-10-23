function InputForm({
  label, type, placeholder, name,
}) {
  return (
    <label className="flex flex-col gap-2" htmlFor={name}>
      <span className="text-black dark:text-white font-bold">
        {label}
      </span>

      <input
        type={type}
        name={name}
        id={name}
        className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
        placeholder={placeholder}
      />
    </label>
  );
}

export default InputForm;
