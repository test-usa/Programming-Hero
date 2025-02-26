import React, { useEffect, useState } from "react";
import Card from "./Card";
import data from "./data.json"; // Import JSON directly

interface CardData {
  id: number;
  company: string;
  name: string;
  role: string;
  quote: string;
  image: string;
  batch: string;
}

const CardList: React.FC = () => {
  const [cards, setCards] = useState<CardData[]>([]);

  useEffect(() => {
    setCards(data); // Use the imported JSON data
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4 bg-[#09071f] min-h-screen">
      {cards.length > 0 ? (
        cards.map((card) => <Card key={card.id} {...card} />)
      ) : (
        <p className="text-white">Loading...</p>
      )}
    </div>
  );
};

export default CardList;
