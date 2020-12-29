import React, { PureComponent } from 'react'
import {Row, Col} from 'react-bootstrap'
import './Jumbotron.scss'

export default class Jumbotron extends PureComponent {

    state={
        welcome:false
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({welcome: true})
        }, 500)
    }

    render() {
        return (
            <div className='jumbotron'>
                <img src="./assets/images/bg.jpg" alt=""/>
                <Row>
                    <Col xs={12} sm={6} className='welcome'>
                        <p 
                        style={{opacity: this.state.welcome? '1' : 0}}
                        >
                            Be <span>Wherever</span> You Want
                        </p>
                        <p 
                        style={{opacity: this.state.welcome? '1' : 0}}
                        >
                            Be <span>Whoever</span> You Want
                        </p>
                        <p 
                        style={{opacity: this.state.welcome? '1' : 0}}
                        >
                            Read.
                        </p>
                    </Col>
                </Row>
            </div>
        )
    }
}
