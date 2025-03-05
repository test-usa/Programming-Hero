
import CommonContainer from "../../common/CommonContainer";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../../components/ui/accordion";
import useFetch from "../../hooks/shared/useFetch";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetch(`course/${id}`);


  return (
    <div className="bg-[#010313] p-4 text-white">
      <CommonContainer>
        <div className="grid grid-cols-2 ">
          <div>A</div>
          <div className="text-white ">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  Yes. It comes with default styles that matches the other
                  components&apos; aesthetic.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it animated?</AccordionTrigger>
                <AccordionContent>
                  Yes. It&apos;s animated by default, but you can disable it if
                  you prefer.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
        {/* <div className="md:w-[85%] w-full mx-auto">
            <div className="md:w-[70%] w-full mx-auto">
              <h1 className="mb-6 text-2xl font-semibold text-center text-white md:text-4xl">
                Course Curriculum
              </h1>
            </div>

            <div className="mt-12">
              <div className="p-4 bg-gradient-to-r from-[#405aff] to-[#ff37f2] rounded-tl-lg rounded-tr-lg">
                <h2 className="text-xl font-semibold text-white capitalize md:text-2xl">
                  Course Modules
                </h2>
              </div>
              <div className="bg-[#0A0329] p-5 rounded-bl-lg rounded-br-lg">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="p-2 text-left text-white">Module</th>
                      <th className="p-2 text-left text-white">Title</th>

                      <th className="p-2 text-left text-white">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.length > 0 ? (
                      modules.map((module) => (
                        <tr
                          key={module.id}
                          className="border-b border-gray-600"
                        >
                          <td className="p-2 text-white">
                            {module.moduleNumber}
                          </td>
                          <td className="p-2 text-white">{module.title}</td>

                          <td className="p-2">
                            <button className="px-3 py-1 mr-2 text-white transition-colors bg-purple-600 rounded-lg hover:bg-purple-700">
                              Show Details
                            </button>
                            {module.status === "completed" && (
                              <button className="px-3 py-1 text-white transition-colors bg-red-600 rounded-lg hover:bg-red-700">
                                Remove
                              </button>
                            )}
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="p-4 text-center text-white">
                          Loading...
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
      </CommonContainer>
    </div>
  );
};

export default SingleCourse;
