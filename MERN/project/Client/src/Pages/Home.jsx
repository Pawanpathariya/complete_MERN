import { useState,useEffect } from "react"
import BASE_URL from "../confiq"
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import doctor1 from '../Images/doc1.avif'
import doctor2 from '../Images/doc2.avif'
import doctor3 from '../Images/doc3.avif'
const Home=()=>{
    const [mydata,setmydata]=useState([]);


const loadData=async()=>{ 
 let api=`${BASE_URL}/doctors/showdoctor`
 try {
    let response= await axios.get(api)
    setmydata(response.data)
    console.log(mydata)
 } catch (error) {
    alert(error.response.data.msg)
 }
}

useEffect(()=>{
    loadData();
},[])


const ans=mydata.map((key)=>{
    return(
        <>
        


         <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title> Dr. {key.doctorName}</Card.Title>
        <Card.Text>
          Specialization : {key.specialization} <br />
          Address : {key.address} <br />
          City : {key.city} <br />
          Mobile : {key.mobile} <br />
          Email : {key.email}
        </Card.Text>
        <Button variant="primary">Book Appointment</Button>
      </Card.Body>
    </Card>
        </>
    )
})

    return(
        <>

        <div id='head'>
    <Carousel>
      <Carousel.Item>
       <img src={doctor1}/>
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={doctor2} />
              <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={doctor3} />
              <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    </div>
        <div id='card'>
        {ans}
        </div>
       
        </>
    )
}

export default Home