import React from "react"
import { discover } from "../../../dummyData"
import Heading from "../../common/heading/Heading"
import "./style.css"
import { Link } from "react-router-dom"

const Discover = () => {
  return (
    <>
      <section className='discover'>
        <div className='container'>
          <Heading title='Discover' />
          <div className='content'>
            {discover.map((val,index) => {
              return (
                <Link className="box" key={index} to={`/other/${val.title}`}>
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <h1 className="title">{val.title}</h1>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default Discover
