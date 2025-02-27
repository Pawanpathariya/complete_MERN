const Home=()=>{
    return(
        <>
        <h1>Home </h1> <button onClick={()=>{
            localStorage.clear();
        }}>Logout</button>
        </>
    )
}

export default Home;