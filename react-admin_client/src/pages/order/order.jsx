import React from 'react'
import './order.less'
import emailjs from 'emailjs-com'
import { Modal} from 'antd';

/*
Home路由组件
 */
export default function Order() {
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm(
            'service_nws18ir',
            'template_jcadrbl',
            e.target,
            'user_GHKGu6EwDzeVDlwsz4q43'
        ).then(res=>{
            console.log(res);
            Modal.success({
                content: 'Thanks for your message. We have received your email! We will contact you as soon as possible!',
            });
        }).catch(err=> {
            console.log(err);
            Modal.error({
                title: 'This is an error message',
                content: 'Something went wrong, please try again.',
            });
        });
    }
  return (
    <div className="container border"
    style={{
        height: '100%',
        width: '100%',
        backgroundImage: `url('https://twentyoneton.com/wp-content/uploads/2014/10/contactus-background-right.jpg')`,
        backgroundPosition:'center',
        backgroundSize: 'cover',
    }}
    >
      <h1 style = {{marginTop:'25px', textAlign:'center', color:'#9B5DE5'}}>Contact Us</h1>
        <form className="row" style = {{margin: "25px 85px 75px 100px"}}
        onSubmit={sendEmail}>
            <label style={{fontSize: '25px'}}>Name</label>
            <input type="text" name="name" className="form-control"/>

            <label style={{fontSize: '25px'}}>Email</label>
            <input type="email" name="user_email" className="form-control"/>

            <label style={{fontSize: '25px'}}>Message</label>
            <textarea name="message"  cols="30" rows="5" className="form-control"/>
            <input type="submit" value="Send" className="form-control btn btn-primary"
            style={{
                marginTop:'30px',
                backgroundColor: '#9B5DE5'

            }}/>
        </form>
    </div>
  )
}