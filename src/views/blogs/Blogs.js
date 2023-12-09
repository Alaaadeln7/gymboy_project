import { useEffect, useState } from "react";
import blog_image from "../../assets/images/img-4.jpg";
import Blog from "./Blog";
import "./blogs.scss";
import Loading from "../../components/Loading";
export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  let mounted = true;
  useEffect(() => {
    const url = "https://gymboy.onrender.com/api/blogs";
    const getData = async () => {
      setLoading(true);
      const response = await fetch(url);
      if (mounted) {
        const result = await response.clone().json();
        setBlogs(result.data.blogs);
        setLoading(false);
      }

      return () => {
        mounted = false;
      };
    };
    getData();
  }, []);
  return (
    <section className="blogs">
      <div className="container">
        <div className="list-filters">
          <ul>
            <li>
              <button>News</button>
            </li>
            <li>
              <button>Recommends</button>
            </li>
            <li>
              <button>Fitness</button>
            </li>
            <li>
              <button>healthy food</button>
            </li>
          </ul>
        </div>
        <div className="blogs-container">
          {loading ? (
            <Loading />
          ) : (
            blogs?.map((item) => (
              <Blog
                blogId={item._id}
                image={item.image}
                title={item.title.slice(0, 100) + "..."}
                description={item.description.slice(0, 150) + "..."}
                date={item.date}
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
