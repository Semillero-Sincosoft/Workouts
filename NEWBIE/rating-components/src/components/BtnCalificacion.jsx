

const BtnCalificacion = () => {
    const numbers = [1,2,3,4,5];
  return (
    <div className="flex numbers">
        {numbers.map(number => (
            <button key={number} className='num'>{number}</button>
        ))}
    </div>
  )
}

export default BtnCalificacion
