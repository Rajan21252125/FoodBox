/* eslint-disable react/prop-types */
const VegNon = ({data}) => {
    // console.log(data)
    const borderclr = (data) => {
      if (data === true || data === 1) {
        return "bg-green-500"
      } else {
        return "bg-red-500"
      }
    }
    const bgclr = (data) => {
      if (data === true || data === 1) {
        return "border-green-500"
      } else {
        return "border-red-500"
      }
    }
  return (
    <>
      <div className={`border ${bgclr(data)} w-6 h-6 rounded-md flex justify-center items-center`}>
        <div className={`${borderclr(data)} rounded-lg w-3 p-2`}>
        </div>
      </div>
    </>
  )
}

export default VegNon
