import React from "react";
import SuccessNav from "../section/helpDesk/components/SuccessNav";
import SuccessBanner from "../section/helpDesk/components/SuccessBanner";
import SuccessBody from "../section/helpDesk/components/SuccessBody";
import CardList from "../section/helpDesk/components/card/CardList";

const Success = () => {
  return (
    <div>
      <SuccessNav />
      <SuccessBanner />
      <SuccessBody />
      <CardList />
    </div>
  );
};

export default Success;
