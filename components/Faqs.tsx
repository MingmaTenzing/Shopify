import { QuestionAnswers } from "../FAQ Questions/questions";
import FaqContainer from "../utils/FaqContainer";

type Props = {};
function Faqs({}: Props) {
  return (
    <div className=" p-4 mt-10 lg:w-[1200px] m-auto">
      <div className=" relative lg:p-0 p-4">
        <h2 className="uppercase  font-semibold text-5xl text-gray-200">
          {" "}
          Have a question{" "}
        </h2>
        <p className=" uppercase text-lg absolute top-10 lg:top-6">
          Our common questions
        </p>
      </div>
      <div className=" mt-4 p-2 space-y-4">
        {QuestionAnswers.map((QA) => (
          <FaqContainer QA={QA} key={QA.id} />
        ))}
      </div>
    </div>
  );
}
export default Faqs;
