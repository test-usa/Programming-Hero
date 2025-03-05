
import CommonContainer from "../../common/CommonContainer";
import { Accordion, AccordionItem } from "@heroui/react";
import useFetch from "../../hooks/shared/useFetch";
import { useParams } from "react-router-dom";

const SingleCourse = () => {
  const { id } = useParams();
  const { data, isLoading, isSuccess, refetch } = useFetch(`course/${id}`);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="p-4 text-white ">
      <CommonContainer>
        <div className="grid grid-cols-2 ">
          <div>A</div>
          <div className="text-white ">
            <Accordion
              variant="splitted"
              selectionMode="multiple"
              className="bg-red-600"
            >
              <AccordionItem
                key="1"
                aria-label="Accordion 1"
                subtitle="Press to expand"
                title="Accordion 1"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="2"
                aria-label="Accordion 2"
                subtitle={
                  <span>
                    Press to expand <strong>key 2</strong>
                  </span>
                }
                title="Accordion 2"
              >
                {defaultContent}
              </AccordionItem>
              <AccordionItem
                key="3"
                aria-label="Accordion 3"
                subtitle="Press to expand"
                title="Accordion 3"
              >
                {defaultContent}
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </CommonContainer>
    </div>
  );
};

export default SingleCourse;
