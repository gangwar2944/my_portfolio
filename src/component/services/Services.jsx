import React from 'react';
import './services.css';
import DoneIcon from '@mui/icons-material/Done';

const Services = () => {
  return (
    <section id='service'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container service_container'>
         <article className='service'>
          <div className='service_head'>
               <h3>UI/UX Design</h3>
          </div>
          <ul className='service_list'>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Designing intuitive and user-centered interfaces for web applications.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Conducting usability testing and incorporating feedback into design iterations.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Creating wireframes, prototypes, and mockups using tools like Figma and Sketch.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Implementing responsive design principles to ensure cross-device compatibility.</p>
            </li>
          </ul>
         </article>
         <article className='service'>
          <div className='service_head'>
               <h3>Web Development</h3>
          </div>
          <ul className='service_list'>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Building scalable and performant web applications using React.js and Redux.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Implementing RESTful APIs and handling CRUD operations with Express.js.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Integrating authentication and authorization mechanisms using JWT tokens.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Deploying applications on AWS EC2 instances and configuring load balancers.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Optimizing web applications for speed, scalability, and SEO.</p>
            </li>
          </ul>
         </article>
         <article className='service'>
          <div className='service_head'>
               <h3>Content Creation</h3>
          </div>
          <ul className='service_list'>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Writing technical documentation, including user guides and API references.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Producing SEO-optimized blog posts and articles on technology trends.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Creating engaging social media content and managing content calendars.</p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Developing case studies and whitepapers to showcase project success stories.</p>
            </li>
          </ul>
         </article>
      </div>
    </section>
  )
}

export default Services;
