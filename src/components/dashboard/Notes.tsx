import { Button, Form, Input, Textarea } from "@heroui/react";
import { useState } from "react";
import Slate from "./Slate";

const Notes = () => {
  const [action, setAction] = useState<string | null>(null);
  return (
    <div className="bg-[#0D0E1F] p-8 rounded-lg  ">
      <Form
        className="w-full flex flex-col gap-4"
        validationBehavior="native"
        onReset={() => setAction("reset")}
        onSubmit={(e) => {
          e.preventDefault();
          let data = Object.fromEntries(new FormData(e.currentTarget));

          setAction(`submit ${JSON.stringify(data)}`);
        }}
      >
        <Input
          isRequired
          errorMessage="Please enter a valid username"
          placeholder="Note Title"
          type="text"
          radius="sm"
          classNames={{
            input: "bg-[#2c2243] text-white",
            innerWrapper: "bg-[#2c2243] ",
            inputWrapper: "bg-[#2c2243] ",
            label: "text-white",
          }}
        />

        <Textarea
          radius="sm"
          className="w-full"
          label="Description"
          placeholder="Enter your description"
          classNames={{
            input: "bg-[#2c2243] text-white",
            innerWrapper: "bg-[#2c2243] ",
            inputWrapper: "bg-[#2c2243] ",
            label: "text-white",
          }}
        />
        <div className="flex items-center justify-between gap-2">
          <Slate />
          <Button radius="sm" color="secondary" type="submit">
            Submit
          </Button>
        </div>
        {action && (
          <div className="text-small text-default-500">
            Action: <code>{action}</code>
          </div>
        )}
      </Form>
    </div>
  );
};

export default Notes;
