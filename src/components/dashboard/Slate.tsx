import { Bold, Italic, Underline } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "../ui/toggle-group";
const Slate = () => {
  return (
    <div>
      <ToggleGroup type="multiple" size="lg">
        <ToggleGroupItem
          className="bg-gray-500"
          value="bold"
          aria-label="Toggle bold"
        >
          <Bold className="h-4 w-4 text-white hover:text-black" />
        </ToggleGroupItem>
        <ToggleGroupItem
          className="bg-gray-500"
          value="italic"
          aria-label="Toggle italic"
        >
          <Italic className="h-4 w-4 text-white hover:text-black " />
        </ToggleGroupItem>
        <ToggleGroupItem
          className="bg-gray-500"
          value="strikethrough"
          aria-label="Toggle strikethrough"
        >
          <Underline className="h-4 w-4 text-white hover:text-black" />
        </ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
};

export default Slate;
