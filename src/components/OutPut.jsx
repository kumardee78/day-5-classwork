
function OutPut({item, hour, handleInc, handleDec, idx}){
    return(
        <div key={idx} className="py-4 px-10 shadow-lg shadow-blue-300">
            <p className="shadow-lg shadow-blue-300">
                <span key={idx}>{item} - </span>
                <span key={idx}>{hour} hours</span>
                <button type="button" onClick={() => handleInc(idx)}>+</button>
                <button type="button" onClick={() => handleDec(idx)}>-</button>
            </p>
            
      </div>
    )
}
export default OutPut;