import Footer from "../layout/Footer"
import Header from "../layout/Header"
import CheckoutButton from "../section/enrollment/CheckoutButton";
import StripePayment from "../section/enrollment/StripePayment";

const Enrollment = () => {
  return (
    <div>
      <Header/>
        <StripePayment/>
        <CheckoutButton/>
      <Footer/>
    </div>
  )
}

export default Enrollment;
