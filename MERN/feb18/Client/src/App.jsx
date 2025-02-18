import axios from 'axios'
const App=()=>{

  const handl=()=>{
    let api='http://localhost:8080/home';

    axios.get(api).then((res)=>{  
console.log("home data")
    })
  }
  const handl1=()=>{
    let api='http://localhost:8080/service';

    axios.get(api).then((res)=>{  
console.log("home data")
    })
  }
  const handl2=()=>{
    let api='http://localhost:8080/about';

    axios.get(api).then((res)=>{  
console.log("home data")
    })
  }
  return(
    <>
  <h1>Middleware</h1>

    <button onClick={handl}>Home</button>
    <button onClick={handl1}>Service</button>
    <button onClick={handl2}>About</button>
    
    </>
  )
}

export default App;