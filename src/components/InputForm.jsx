function InputForm({
  label, type, placeholder, name, formValues, setFormValues, error, setFormErrors,
}) {
  return (
    <label className="flex flex-col gap-2" htmlFor={name}>
      <p className={`${error !== '' ? 'text-red-600' : 'text-black dark:text-white'} font-bold flex items-center justify-between`}>
        <span>
          {label}
        </span>

        <span className={`${error !== '' ? 'block' : 'hidden'}`}>
          {error}
        </span>
      </p>

      <input
        type={type}
        name={name}
        id={name}
        value={formValues[name]}
        className="rounded-md border-2 border-white dark:border-black bg-black dark:bg-white text-white dark:text-black p-1 px-2 placeholder:dark:text-black/70"
        placeholder={placeholder}
        onFocus={(prevState) => setFormErrors({ ...prevState, [name]: '' })}
        onChange={(e) => setFormValues({ ...formValues, [name]: e.target.value })}
      />
    </label>
  );
}

export default InputForm;
