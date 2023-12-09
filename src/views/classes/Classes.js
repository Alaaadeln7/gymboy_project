import Poster from "../../components/poster/Poster";
import landing_img from "../../assets/images/classes/landing-image.png";
import { useEffect } from "react";
import { useState } from "react";
import ClassItem from "./ClassItem";
import Loading from "../../components/Loading";
import "./classes.scss";
export default function Classes() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(false);
  let mounted = true;
  useEffect(() => {
    const getData = async () => {
      const url = "https://gymboy.onrender.com/api/classes";
      setLoading(true);
      const response = await fetch(url);
      if (mounted) {
        const result = await response.clone().json();
        setClasses(result);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  return (
    <section>
      <div className="container">
        <Poster
          title={"join our class with best trainner"}
          description={
            "make your dream healthy body come true with guidance from our professional trainer"
          }
          image={landing_img}
          fristBtn={"Join Class"}
          lastBtn={"Explore More"}
        />
      </div>
      <div className="beginners-section">
        <div className="classes-header">
          <h1>Trainer for beginner class</h1>
        </div>
        <div className="contain-classes">
          {loading ? (
            <Loading />
          ) : (
            classes?.data?.classess?.map((item) =>
              item.category === "beginners" ? (
                <ClassItem image={item.image} name={item.name} id={item._id} />
              ) : null
            )
          )}
        </div>
      </div>
      <div className="meduim-section">
        <div className="classes-header">
          <h1>Trainer for meduim class</h1>
        </div>
        <div className="contain-classes">
          {loading ? (
            <Loading />
          ) : (
            classes?.data?.classess?.map((item) =>
              item.category === "meduim" ? (
                <ClassItem image={item.image} name={item.name} id={item._id} />
              ) : null
            )
          )}
        </div>
      </div>
      <div className="export-section">
        <div className="classes-header">
          <h1>Trainer for export class</h1>
        </div>
        <div className="contain-classes">
          {loading ? (
            <Loading />
          ) : (
            classes?.data?.classess?.map((item) =>
              item.category === "export" ? (
                <ClassItem image={item.image} name={item.name} id={item._id} />
              ) : null
            )
          )}
        </div>
      </div>
    </section>
  );
}
