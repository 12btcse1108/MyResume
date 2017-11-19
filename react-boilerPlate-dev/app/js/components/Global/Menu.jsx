import React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import Login from './Login.jsx';
import Home from './Home.jsx';
import request from 'superagent';


export default class Menu extends React.Component {
  constructor(props){
    super(props);
  }
  userFeedback(event){
    self = this;
    event.preventDefault()
    var name = event.target.elements[0].value;
    var email = event.target.elements[1].value;
    var subject = event.target.elements[2].value;
    var message = event.target.elements[3].value;

    request
    .post("http://127.0.0.1:5000/feedback")
    .send({username: name, useremail: email, subject: subject, message: message})
    .set('Content-Type', 'application/json')
    .end(function(err,res){
      if(err){
        alert("some error occured")
      }
      else{
        alert("your message submitted successfully");
      }
    })
  }

  render() {
    var styles = {
      box: {borderColor: '#AEDBD8'},
      primary: {color: '#fff'},
      educationBox: {borderColor: '#807d7c'},
      educationPrimary: {color: '#3f3f3f'},
      footerTwitter: {color:'#1da1f2'},
      footerFacebook: {color:'#7B6DD2'},
      footerInstagram: {color:'#D4507E'},
      footerLinkedin: {color:'#0077B5'}

    }
    return (
      <div>
        {/* Header area  */}
        <div id="header-wrapper" className="header-slider">
          <header className="clearfix">
            <div className="logo">
              {/* <img src="img/logo-nit.png" alt="" /> */}
            </div>
            <div className="container">
              <div className="row">
                <div className="span12">
                  <div id="main-flexslider" className="flexslider">
                    <ul className="slides">
                      <li>
                        <p className="home-slide-content">
                          <strong>creative</strong> and passion
                        </p>
                      </li>
                      <li>
                        <p className="home-slide-content">
                          Eat and drink <strong>design</strong>
                        </p>
                      </li>
                      <li>
                        <p className="home-slide-content">
                          I loves <strong>simplicity</strong>
                        </p>
                      </li>
                    </ul>
                  </div>
                  {/* end slider  */}
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* navbar  */}
        <div className="navbar-wrapper">
          <div className="navbar navbar-inverse">
            <div className="navbar-inner">
              <div className="container">
                {/* Responsive navbar */}
                <a className="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse"><span className="icon-bar"></span><span className="icon-bar"></span><span className="icon-bar"></span>
              </a>
              {/* <h1 className="brand"><a href="index.html">Maxim</a></h1> */}
              {/* navigation  */}
              <nav className="nav-collapse collapse">
                <div className = "row">
                  <div className = "span10 offset1">
                    <ul id="menu-main" className="nav">
                      <li><a title="team" href="#about">About</a></li>
                      <li><a title="services" href="#services">Services</a></li>
                      <li><a title="my-resume" href="#my-resume">My Resume</a></li>
                      <li><a title="blog" href="#blog">Blog</a></li>
                      <li><a title="contact" href="#contact">Contact</a></li>
                      <li><Link to = "/login">Sign In</Link></li>
                    </ul>
                  </div>
                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>


       {/* spacer section */}
      <section className="spacer green">
        <div className="container">
          <div className = "row">
            <div className = "lazy-load-introduction flyIn">
              <div className = "title-box" style={styles.box}>
                <h2 className = "title-box-primary" style={styles.primary}>Introduction</h2>
                <h3 className = "title-box-secondary" style = {styles.primary}>Developer, Designer</h3>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="span8 alignright flyLeft">
              <div className = "introduction-content">
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Praesent vestibulum molestie lacus. Aenean nonummy hendrerit mauris. Phasellus porta. Fusce suscipit varius mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla dui. Fusce feugiat malesuada odio. Morbi nunc odio, gravida at, cursus nec, luctus a, lorem. Maecenas tristique orci ac sem. Duis ultricies pharetra magna. Donec accumsan malesuada orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
                <div className = "row">
                  <div className="span2">
                    <h1 className = "introduction-content-heading">BIRTHPLACE</h1>
                    <p>Lucknow, India</p>
                  </div>
                  <div className="span2">
                    <h1 className = "introduction-content-heading">RESIDENCE</h1>
                    <p>Bengaluru, India</p>
                  </div>
                  <div className="span2">
                    <h1 className = "introduction-content-heading">HOBBIES</h1>
                    <p>Movies, Cricket</p>
                  </div>
                  <div className="span2">
                    <h1 className = "introduction-content-heading">EDUCATION</h1>
                    <p>B.Tech.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="span4 aligncenter flyRight" >
              <img src="/dist/img/matthew.jpg" alt="" className = "portfolio-image-style" />
            </div>
          </div>
        </div>
      </section>
       {/* end spacer section  */}
       {/* section: team  */}

       <section id="my-resume" className="section">
         <div className="container">
           <div className = "row">
             <div className = "lazy-load-introduction flyIn">
               <div className = "title-box" style={styles.educationBox}>
                 <h2 className = "title-box-primary" style={styles.educationPrimary}>My Resume</h2>
                 <h3 className = "title-box-secondary" style={styles.educationPrimary}>Developer, Designer</h3>
               </div>
             </div>
           </div>
           <div className = "offset1 flyLeft">
             <div className="row my-resume-education">
               <div className = "span1"></div>
               <div className = "span11">
                 <h3>Education<strong>2009-2016</strong></h3>
                 <div className="education-block">
                   <div className="education-block-item">
                     <div className="row">
                       <div className="span2 year">2012-2016</div>
                       <div className="span1"><button type="button" className="btn expandable-button btn-warning" data-toggle="collapse" data-target="#expand-edu" id = "select1">+</button></div>
                       <div className="span7 expand-education"><h2>B.Tech.</h2><div id="expand-edu" className="collapse">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                       </div>
                     </div>
                     </div>
                   </div>
                   <div className="education-block-item">
                     <div className="row">
                       <div className="span2 year">2010-2011</div>
                       <div className="span1"><button type="button" className="btn expandable-button btn-warning" data-toggle="collapse" data-target="#expand-intermediate"  id = "select2">+</button></div>
                       <div className="span7 expand-education"><h2>Intermediate</h2><div id="expand-intermediate" className="collapse">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p></div></div>
                     </div>
                   </div>
                   <div className="education-block-item">
                     <div className="row">
                       <div className="span2 year">2008-2009</div>
                       <div className="span1"><button type="button" className="btn expandable-button btn-warning" data-toggle="collapse" data-target="#expand-highschool" id="textButton"  id = "select3">+</button></div>
                       <div className="span7 expand-education"><h2>High School</h2><div id="expand-highschool" className="collapse">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p></div></div>
                     </div>
                   </div>
                 </div>
               </div>
               {/* <div className = "span1"></div> */}
             </div>
           </div>
           {/* work experience */}

           <div className = "offset1 flyRight">
             <div className="row my-resume-education">
               <div className = "span1"></div>
               <div className = "span11">
                 <h3>Work Experience<strong>2016-now</strong></h3>
                 <div className="education-block">
                   <div className="education-block-item">
                     <div className="row">
                       <div className="span2 year">2016-now</div>
                       <div className="span1"><button type="button" className="btn expandable-button btn-warning" data-toggle="collapse" data-target="#expand-work" id = "select4">+</button></div>
                       <div className="span7 expand-education"><h2>Developer @ Wipro Technologies</h2><div id="expand-work" className="collapse">
                         <h5>tempor incididunt ut labore et dolore</h5>
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                       </p>
                       </div>
                     </div>
                     </div>
                   </div>
                 </div>
               </div>
               {/* <div className = "span1"></div> */}
             </div>
           </div>
         </div>
          {/* /.container  */}
       </section>
        {/* section: contact  */}
	<section id="contact" className="section orange">
		<div className="container">
      <div className = "row">
        <div className = "lazy-load-introduction flyIn">
          <div className = "title-box" style={styles.box}>
            <h2 className = "title-box-primary" style={styles.primary}>Get in Touch</h2>
            {/* <h3 className = "title-box-secondary" style = {styles.primary}>Developer, Designer</h3> */}
          </div>
        </div>
      </div>
			<p>
				Reque facer nostro et ius, cu persius mnesarchum disputando eam, clita prompta et mel vidisse phaedrum pri et. Facilisis posidonium ex his. Mutat iudico vis in, mea aeque tamquam scripserit an, mea eu ignota viderer probatus. Lorem legere consetetur ei eum. Sumo aeque assentior te eam, pri nominati posidonium consttuam
			</p>
			<div className="blankdivider30">
			</div>
			<div className="row">
				<div className="span12">
					<div className="cform" id="contact-form">
						{/* <div id="sendmessage">Your message has been sent. Thank you!</div> */}
						{/* <div id="errormessage"></div> */}
						<form method="post" onSubmit = {this.userFeedback.bind(this)}>
							<div className="row">
								<div className="span6">
									<div className="field your-name form-group">
										<input type="text" name="name" className="form-control contact-form" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
										<div className="validation"></div>
									</div>
									<div className="field your-email form-group">
										<input type="text" className="form-control contact-form" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
										<div className="validation"></div>
									</div>
									<div className="field subject form-group">
										<input type="text" className="form-control contact-form" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
										<div className="validation"></div>
									</div>
								</div>
								<div className="span6">
									<div className="field message form-group">
										<textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
										<div className="validation"></div>
									</div>
                  <button type="submit" className="pull-left feedback-submit contact-form">Send message</button>
									{/* <input type="submit" value="Send message" className="pull-left contact-form"/> */}
								</div>
							</div>
						</form>
					</div>
				</div>

			</div>
		</div>
	</section>
       {/* google map */}
       <div className="container-fluid">
         <div className="row" id="googleMap">
           <iframe
             width="100%"
             height="450"
             frameBorder="0"
             style = {{border: 0}}
             src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA7t1xtAtGzrcayjq1rDeUqnNByG9_VznM&q=3rd+cross+neeladri+nagar+electronic+city+bangalore" allowFullScreen>
           </iframe>
          </div>
       </div>

       <footer>
         <div className="social">
           <div className="container">
             <div className="row" id="footerSocialHeader">
               <h3>Connect socialy with The Face</h3>
             </div>
             <div className="row" id="footerSocial">
               <div className="span3">
                 <center>
                   <a target="_blank" href="https://twitter.com/nitinverma1394"><span className="fa-stack fa-3x">
                     <i className="fa fa-square fa-stack-2x"  style={styles.footerTwitter}></i>
                     <i className="fa fa-twitter fa-stack-1x fa-inverse"></i>
                   </span>
                 </a>
                 <h6>follow on twitter</h6>
               </center>
             </div>
             <div className="span3">
               <center>
                 <a target="_blank" href="#"><span className="fa-stack fa-3x">
                   <i className="fa fa-square fa-stack-2x" style={styles.footerFacebook}></i>
                   <i className="fa fa-facebook fa-stack-1x fa-inverse"></i>
                 </span>
               </a>
               <h6>like on facebook</h6>
             </center>
           </div>
           <div className="span3">
             <center>
               <a target="_blank" href="https://www.linkedin.com/in/nitin-kumar-verma-442095b7/">
               <span className="fa-stack fa-3x">
                 <i className="fa fa-square fa-stack-2x" style={styles.footerLinkedin}></i>
                 <i className="fa fa-linkedin fa-stack-1x fa-inverse"></i>
               </span>
             </a>
             <h6>connect on linkedin</h6>
           </center>
         </div>
         <div className="span3">
           <center>
             <a target="_blank" href="https://www.instagram.com/nitinverma1394/">
             <span className="fa-stack fa-3x">
               <i className="fa fa-square fa-stack-2x" style={styles.footerInstagram}></i>
               <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
             </span>
           </a>
           <h6>follow on instagram</h6>
         </center>
       </div>
     </div>
   </div>
   {/* end container */}
 </div>
 {/* end social */}
 <div className="copyright">
   <div className="container" id="footerHome">
     <div className="row">

       <div className="span2"><a href="#"><h3>Home</h3></a></div>
       <div className="span2"><a href="#"><h3>About</h3></a></div>
       <div className="span2"><a href="#"><h3>Help</h3></a></div>
       <div className="span2"><a href="#"><h3>Contact</h3></a></div>
       <div className="span2"><a href="#"><h3>Policy</h3></a></div>
       <div className="span2"><a href="#"><h3>FAQ</h3></a></div>
     </div>
     <p> © 2017 Resume. All Rights Reserved.</p>
   </div>
 </div>
</footer>
{/* end footer */}
  <a href="#" className="scrollup"><i className="icon-angle-up icon-square icon-bgdark icon-2x"></i></a>
    </div>
  );
}
}
