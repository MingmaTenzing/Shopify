type Props = {
    title:string;
}
function TitleSection({title}: Props) {
  return (
   <div className=" flex items-center space-x-4">
    <h2 className=" font-semibold text-2xl md:text-3xl lg:text-4xl ">{title}</h2>
    <span className="   flex-grow h-1 bg-gray-200"></span>
    </div>
  )
}
export default TitleSection