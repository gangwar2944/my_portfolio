import React from 'react'
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
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
          </ul>
         </article>
         <article className='service'>
          <div className='service_head'>
               <h3>Web development</h3>
          </div>
          <ul className='service_list'>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text </p>
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
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
            <li>
               <DoneIcon className='service_list-icon'/>
               <p>Lorem pixcel this is just dummy text for </p>
            </li>
          </ul>
         </article>
      </div>
    </section>
  )
}

export default Services