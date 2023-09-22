import LoadingSkeleton from "../../../../components/Loading-Skeleton";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="  mt-20 flex flex-wrap justify-center  lg:w-[1200px] m-auto ">
      {new Array(10).fill(0).map((_, index) => (
        <LoadingSkeleton key={index} />
      ))}
    </div>
  );
}
