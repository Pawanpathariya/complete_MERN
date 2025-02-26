const Sidebar=()=>{
    return(
        <div style={{width:'15vw',backgroundColor:'#f5f5f5',height:'100vh',position:'fixed'}}>
            <h3 style={{textAlign:'center',marginBottom:"100px",marginTop:'20px'}}>Dashboard</h3>
            <ul style={{listStyleType:'none',padding:'0',margin:'0',display:'flex',flexDirection:'column',alignItems:'center',gap:'50px',fontSize:'20px'}}>
               <li>Appointment</li>
              <li>Patient List</li>
               <li>Profile</li>
               <li>Search Patient</li>
               <li>Logout</li>
            </ul>
        </div>
    )
}

export default Sidebar