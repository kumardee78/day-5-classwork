function OutPut({ item, hour, handleInc, handleDec, idx }) {
  return (
    <p className="flex justify-between shadow-lg shadow-blue-300 px-10 py-4 mb-10 text-2xl bg-[aqua] w-[55%] mx-auto">
      <div>
        <span key={idx}>{item} - </span>
        <span key={idx} className="mr-8">{hour} hours </span>
      </div>
      <div>
        <button
            type="button"
            onClick={() => handleInc(idx)}
            className="border-2 py-2 px-4 mx-2 text-2xl font-bold rounded-lg bg-red-200">+
        </button>
        <button
            type="button"
            onClick={() => handleDec(idx)}
            className="border-2 py-2 px-4 ml-4 text-2xl font-bold rounded-lg bg-red-200">-
        </button>
      </div>
      
    </p>
  );
}
export default OutPut;
