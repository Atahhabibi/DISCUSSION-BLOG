import { useState, useEffect } from "react";
import { FetchData } from "../../API";
import "./Culture.css";
import noImg from "../../images/no-image2.jpeg";

const Culture = () => {
  const title = "Culture ";
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(title)
      .then((resp) => {
        setData(resp?.articles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return  <div className="section-center blog-container">
      {data?.map((a, key)=> {
      


        return <div key={key} className="single-blog">
          <div>
            {console.log(a.urlToImage)}
            <img
              src={a.urlToImage || noImg}
              alt={a.title}
              className="blog-img"
            />
          </div>
          <div className="blog-info">
            <h4 className="title">{a.title.slice(0, 100)}</h4>
            <div
              dangerouslySetInnerHTML={{
                __html: a?.content.slice(0, 100),
              }}
            ></div>
            <a href={a.url} className="read-btn">
              Read more
            </a>
          </div>
        </div>
        
      })
    }
    </div>
};

export default Culture;
