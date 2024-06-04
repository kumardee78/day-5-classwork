export default function Form(
  inputValue,
  setInputValue,
  handleSubmit,
  hour,
  setHour
) {
  return (
    <>
      <div className="py-32 px-20 border-4">
        <h1 className="text-center text-6xl mb-10 font-semibold ">Geekster Education Planner</h1>
        <form action="" onSubmit={handleSubmit} className="w-[70%] mx-auto">
          <input
            type="text"
          
            value={inputValue}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            className="py-2 px-4 text-2xl border-4 rounded-lg mr-4"
          />
          <input
            type="number"
            placeholder="hour"
            value={hour}
            onChange={(e) => setHour(e.currentTarget.value)}
            className="py-2 px-4 text-2xl border-4 rounded-lg mr-4 w-[20%]"

          />
          <button type="submit" className="py-3 px-8  rounded-xl text-2xl bg-[red] text-[white] shadow-lg shadow-blue-300">Add</button>
        </form>
      </div>
    </>
  );
}
