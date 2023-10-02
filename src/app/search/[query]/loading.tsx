import LoadingSkeleton from "../../../../components/Loading-Skeleton"

type Props = {}
function loading({}: Props) {
  return (
    <div className="  mt-20 flex flex-wrap justify-center  lg:w-[1200px] m-auto ">
    {new Array(5).fill(0).map((_, index) => (
      <LoadingSkeleton key={index} />
    ))}
  </div>
  )
}
export default loading