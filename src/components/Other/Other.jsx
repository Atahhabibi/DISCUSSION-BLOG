import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FetchData } from "../../API";
import "./Other.css";
import noImg from '../../images/no-image2.jpeg'

const Other = () => {
  const { title } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(title.slice(0, 6))
      .then((resp) => {
        setData(resp?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [title]);

  console.log(data);

  return (
    <div className="section-center blog-container">
      {data?.map((a, key) => (
        <div key={key} className="single-blog">
          <div>
            <img src={a.urlToImage || noImg} alt="image" className="blog-img" />
          </div>
          <div className="blog-info">
            <h4 className="title">{a.title.slice(0,100)}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: a?.content.slice(0, 100),
              }}
            ></div>
            <a href={a.url} className="read-btn">Read more</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Other;
