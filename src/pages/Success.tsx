import React from "react";
import SuccessNav from "../section/helpDesk/components/SuccessNav";
import SuccessBanner from "../section/helpDesk/components/SuccessBanner";
import SuccessBody from "../section/helpDesk/components/SuccessBody";
import CardList from "../section/helpDesk/components/card/CardList";
import SuccessFooter from "../section/helpDesk/components/SuccessFooter";

const Success = () => {
  return (
    <div>
      <SuccessNav />
      <SuccessBanner />
      <SuccessBody />
      <CardList />
      <SuccessFooter />
    </div>
  );
};

export default Success;
