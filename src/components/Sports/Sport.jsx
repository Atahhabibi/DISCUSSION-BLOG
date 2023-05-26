import { useState, useEffect } from "react";
import { FetchData } from "../../API";
import './Sports.css'
import noImg from "../../images/no-image2.jpeg";

import moment from "moment";

const Sport = () => {
  const title = "Sport";
  const [data, setData] = useState([]);

  useEffect(() => {
    FetchData(title)
      .then((resp) => {
        setData(resp.data);
        
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <div className="section-center blog-container">
      {data?.map((a, key) => (
        <div key={key} className="single-blog">
          <div>
            <img src={a.photo_url || noImg} alt={a.title.slice(0,100)} className="blog-img" />
          </div>
          <div className="blog-info">
            <h4 className="title date">{moment(a.published_datetime_utc).format("MMM Do YYYY")}</h4>
            <h4 className="title ">{a.title.slice(0,50)}</h4>
            <a href={a.source_url} className="source-link">{a.source_url}</a>
            <a href={a.link} className="read-btn">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sport;
