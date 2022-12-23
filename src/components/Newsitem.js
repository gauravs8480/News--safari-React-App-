
import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
  let {title,description,imageUrl, newsurl}= this.props;
    return (
      <div className='my-3'>


<div className="card" style={{width: "18rem"}}>
  <img src={!imageUrl?"https://d27jswm5an3efw.cloudfront.net/app/uploads/2019/07/how-to-make-a-url-for-a-picture-on-your-computer-4.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
  </div> 



</div>







      </div>
    )
  }
}

export default Newsitem