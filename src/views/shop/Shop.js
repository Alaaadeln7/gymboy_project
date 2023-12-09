import ProductList from "./ProductList";
import Poster from "../../components/poster/Poster";
import landing_page from "../../assets/images/shop/landing_page.png";
import "./shop.scss";
import Offer from "./Offer";
import image_offer_one from "../../assets/images/shop/offer_1.png";
import image_offer_two from "../../assets/images/shop/offer_2.png";
export default function Shop() {
  return (
    <section>
      <div className="container" style={{ flexDirection: "column" }}>
        <Poster
          fristBtn={"Buy Now"}
          lastBtn={"See All"}
          title={"get product with spical price"}
          description={
            "We provide special protein supplements with good quality and very affordable prices."
          }
          image={landing_page}
        />
        <div className="offers-container">
          <Offer
            image={image_offer_one}
            title={"offer one"}
            description={"description offer one"}
            colorText={"#ffc832"}
            bg={"#22272e"}
            btnText={"buy now"}
            bgBtn={"#ffc832"}
            textColorBtn={"#22272e"}
          />
          <Offer
            image={image_offer_two}
            title={"offer two"}
            description={"description offer two"}
            colorText={"#15141b"}
            bg={"#ffc832"}
            btnText={"buy now"}
            bgBtn={"#15141b"}
            textColorBtn={"#ffc832"}
          />
        </div>
        <ProductList />
      </div>
    </section>
  );
}
