type Props = {};
function AddtoCart({}: Props) {
  return (
    <div className="">
      <div className=" overflow-hidden h-14 w-[200px]   group transition-all relative ease-linear duration-200 cursor-pointer border border-blue-500 text-white bg-blue-500 items-center flex justify-center  rounded-lg">
        <div className=" absolute  w-full top-60 group-hover:top-0  h-full bg-white   transition-all ease-linear duration-200   rounded-lg "></div>
        <p className=" px-4 py-3 group-hover:text-blue-500 z-10 transition-all ease-linear  duration-200 font-semibold text-sm">
          Add to cart
        </p>
      </div>{" "}
    </div>
  );
}
export default AddtoCart;
