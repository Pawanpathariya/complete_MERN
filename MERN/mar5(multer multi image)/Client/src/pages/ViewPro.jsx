import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewPro = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [images, setImages] = useState([]);
    const [defaultimage, setDefaultImage] = useState("");

    const loadData = async () => {
        let api = "http://localhost:8080/employee/view";
        const response = await axios.post(api, { id });
        setData(response.data);
        setDefaultImage(response.data.defaultimage);
        setImages(response.data.images);
    }

    useEffect(() => {
        loadData();
    }, []);

    const imageGallery = images.map((item) => (
        <img
            key={item}
            src={`http://localhost:8080/${item}`}
            width="50px"
            height="50px"
            onMouseMove={() => { setDefaultImage(item) }}
            style={{ cursor: "pointer", border: "2px solid #ccc", borderRadius: "5px" }}
        />
    ));

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>View Product Page</h1>
            <div style={{ display: "flex", justifyContent: "space-evenly", marginBottom: "20px" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "10px" ,marginTop:"50px"}}>
                    <h3>Name: {data.name}</h3>
                    <h3>Empno: {data.empno}</h3>
                    <h3>City: {data.city}</h3>
                </div>
                <img
                    src={`http://localhost:8080/${defaultimage}`}
                    style={{ width: "300px", height: "400px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
                />
            </div>
            <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                {imageGallery}
            </div>
        </div>
    );
}

export default ViewPro;
