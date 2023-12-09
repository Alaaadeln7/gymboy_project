import Poster from "../../components/poster/Poster";
import landing_image from "../../assets/images/home/landing-page.png";
import image from "../../assets/images/home/img-1.png";
import Plan from "./Plan";
import { useContext, useEffect, useState } from "react";
import "./home.scss";
import Trainner from "./Trainner";
import MyImage from "../../components/LazyImage";
import { appContext } from "../../App";
import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";
export default function Home() {
  const [plans, setPlans] = useState([]);
  const { theme } = useContext(appContext);
  useEffect(() => {
    try {
      fetch("https://gymboy.onrender.com/api/plans")
        .then((res) => res.json())
        .then((data) => setPlans(data));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [trainners, setTrainners] = useState([]);
  useEffect(() => {
    fetch("https://gymboy.onrender.com/api/trainners")
      .then((res) => res.json())
      .then((data) => setTrainners(data));
  }, []);
  return (
    <section>
      <Poster
        title={"you can transform your body in gymboy"}
        description={
          "GYMBOY is a online gym, also known as a virtual gym or an e-gym, is a platform that provides fitness and exercise services through the internet. It offers a variety of resources and tools to help individuals achieve their fitness goals from the comfort of their own homes or any location with an internet connection."
        }
        image={landing_image}
        fristBtn={"go to classes"}
        lastBtn={"let's get started"}
      />
      <div className="pricing">
        <h1>the collection form prices</h1>
        <p>this is a collection from prices and some plans </p>
      </div>
      <div className="palns">
        {plans.data?.plans?.map((item) => (
          <Plan
            key={item._id}
            title={item.title}
            oldPrice={item.oldPrice}
            price={item.price}
            items={item.items}
          />
        ))}
      </div>
      <div className="meet">
        <h1>Meet your profesional trainner</h1>
        <div className="trainners-box">
          {trainners?.data?.trainners?.map((item) => (
            <Trainner
              key={item._id}
              image={item.image}
              userName={item.userName}
              email={item.email}
            />
          ))}
        </div>
        <button className="view-more">Veiw more</button>
      </div>
      <div className="why-choose">
        <div className="text-list">
          <h1
            style={theme === false ? { color: "#fff" } : { color: "#32363c" }}
          >
            why you should have to workout with <span>GYMBOY.</span>
          </h1>

          <ul>
            <li>helps strong then muscles and bonse.</li>
            <li>Reducing the risk of cardiovascular discase.</li>
            <li>Helps maintain ideal body weight.</li>
            <li>Reducing the risk of falling and breaking bones.</li>
            <li>increase the chances of langevity.</li>
            <li>Trained by profesional trainners.</li>
          </ul>
        </div>
        <div className="image">
          <MyImage src={image} alt={"image"} />
        </div>
      </div>
    </section>
  );
}
