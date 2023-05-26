import { useState, useEffect } from "react";
import { FetchData } from "../../API";
import './Box.css'
import noImg from "../../images/no-image2.jpeg";
import moment from "moment";

const Boxed = () => {
  const title = "Health";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true);
    FetchData(title)
      .then((resp) => {
        setData(resp.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if(isLoading){
   return <div className="blog-container section-center" style={{textAlign:'center',display:'block'}}>

     <div className="loading"></div>
      
    </div>
  }



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

export default Boxed;
