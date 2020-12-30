import React, { PureComponent } from 'react'
import './PageLoader.scss'

export default class PageLoader extends PureComponent {
    render() {
        return (
            <div className="loader" style={{opacity : this.props.loader? '1' : '0'}}>
                <div className='page-loader'>
                    <div className="page">
                        <div className="front">
                            <h2>Fantasy</h2>
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="page">
                        <div className="front">
                            <h2>History</h2>
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="page">
                        <div className="front">
                            <h2>Horror</h2>
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="page">
                        <div className="front">
                            <h2>Romance</h2>
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="page">
                        <div className="front">
                            <h2>Sci-Fi</h2>
                        </div>
                        <div className="back"></div>
                    </div>
                    <div className="categories">
                        <p>...Loading Categories</p>
                    </div>
                </div>
            </div>
        )
    }
}
