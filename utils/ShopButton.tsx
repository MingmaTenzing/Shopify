type Props = {
  title: string;
};
function Shopbutton({ title }: Props) {
  return (
    <div>
      <div className=" overflow-hidden  group transition-all relative ease-linear duration-200 cursor-pointer border border-black text-black  items-center flex justify-center  rounded-lg">
        <div className=" absolute  w-full top-60 group-hover:top-0  h-full bg-black   transition-all ease-linear duration-200   rounded-lg "></div>
        <p className=" px-4 py-3 group-hover:text-white z-10 transition-all ease-linear  duration-200 font-semibold text-sm">
          {title}
        </p>
      </div>{" "}
    </div>
  );
}
export default Shopbutton;
