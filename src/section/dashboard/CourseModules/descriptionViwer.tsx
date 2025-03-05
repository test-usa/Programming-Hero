// components/DescriptionViewer.tsx
interface DescriptionViewerProps {
    name: string;
    description: string;
  }
  
  const DescriptionViewer = ({ name, description }: DescriptionViewerProps) => {
    return (
      <div className="max-h-[600px] w-full p-4 bg-[#2a213a] rounded-lg">
        <h2 className="text-[#EAAAFF] font-semibold text-lg mb-2">{name}</h2>
        <p className="text-white">{description}</p>
      </div>
    );
  };
  
  export default DescriptionViewer;