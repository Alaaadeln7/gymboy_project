import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./blog-details.scss";
import { LoadingH1, LoadingImage, LoadingText } from "../../components/Loading";
import { FaArrowLeft } from "react-icons/fa";
export default function BlogDetails() {
  const { blogId } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  let mounted = true;
  useEffect(() => {
    const url = `https://gymboy.onrender.com/api/blogs`;
    const getData = async () => {
      setLoading(true);
      const response = await fetch(`${url}/${blogId}`);
      if (mounted) {
        const result = await response.clone().json();
        setBlog(result.data.blog);
        // console.log(result);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  return (
    <section className="blog-details">
      <div className="image">
        {loading ? <LoadingImage /> : <img src={blog.image} alt="" />}
      </div>
      <div className="text">
        <button
          className="btn"
          onClick={() => {
            navigate(-1);
          }}
        >
          <FaArrowLeft />
        </button>
        {loading ? <LoadingH1 /> : <span>{blog.date}</span>}
        {loading ? <LoadingH1 /> : <h1>{blog.title}</h1>}
        {loading ? <LoadingText /> : <p>{blog.description}</p>}
      </div>
    </section>
  );
}
