import axios from 'axios'
const App=()=>{

  const handl=async()=>{
    let api='http://localhost:8080/home';
    try {
      const res=await axios.get(api)
      console.log(res)
    } catch (error) {
      alert(error.response.data.msg)
      console.log(error.response.data);
    }
  }

  return(
    <>
  <h1>Try catch</h1>

    <button onClick={handl}>Home</button>
    
    </>
  )
}

export default App;