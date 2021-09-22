import React, {Component} from 'react'
import {
  Carousel,
} from 'antd'

import './home.less'


export default class Home extends Component {

  state = {
    isVisited: true
  }

  handleChange = (isVisited) => {
    return () => this.setState({isVisited})
  }

  render() {
    const contentStyle = {
      height: '600px',
      color: '#fff',
      top: '50%',
      lineHeight: '60px',
      textAlign: 'center',
      fontSize: '30px',
      verticalAlign: 'middle',
      display: 'block',
      wordWrap: 'break-word',
      background: '#364d79',
      paddingTop: '200px'
    };


    return (
      <div className='home'>
        <Carousel autoplay>
          <div>
            <div style={contentStyle}>Welcome to Suze's User Management Module </div>
          </div>
          <div>
            <div style={contentStyle}>Here you can create new usernames and passwords, and update user information</div>
          </div>
          <div>
            <div style={contentStyle}>
              <span>If you have any questions</span>
              <br/>
              <span>Don't hesitate to contact me~ </span>
            </div>
          </div>
          <div>
            <div style={contentStyle}>Hope you like this system!</div>
          </div>
        </Carousel>

      </div>
    )
  }
}