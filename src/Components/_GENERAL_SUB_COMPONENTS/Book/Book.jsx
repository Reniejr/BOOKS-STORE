// import React, { PureComponent } from 'react'
import "./Book.scss";

// export default class Book extends PureComponent {

//     render() {
//         const {bought, click} = this.props
//         return (
//             <div className='book-container'>
//                 <div className={`book ${bought}`} onClick={click}>
//                     <img src={this.props.cover} alt=""/>
//                 </div>
//             </div>
//         )
//     }
// }

import React from "react";

export default function Book({ cover, click, bought }) {
  return (
    <div className="book-container">
      <div className={`book ${bought}`} onClick={click}>
        <img src={cover} alt="" />
      </div>
    </div>
  );
}
