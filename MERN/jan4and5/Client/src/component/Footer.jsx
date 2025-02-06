import { Link } from "react-router-dom"
const Footer = () => {
    return (
        <footer className="footer" style={{ backgroundColor: '#343a40', color: '#fff', padding: '20px 0',marginTop:"50px" }}>
            <div className="footer-content" style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
                <div className="footer-section about" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vehicula, nisl vel facilisis egestas, eros erat facilisis ex, eget cursus quam felis a nunc.</p>
                </div>
                <div className="footer-section links" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>Quick Links</h2>
                    <ul style={{ listStyleType: 'none', padding: 0 }}>
                        <li><Link to="/home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                        <li><Link to="/insert" style={{ color: '#fff', textDecoration: 'none' }}>Insert</Link></li>
                        <li><Link to="/display" style={{ color: '#fff', textDecoration: 'none' }}>Display</Link></li>
                        <li><Link to="/update" style={{ color: '#fff', textDecoration: 'none' }}>Update</Link></li>
                    </ul>
                </div>
                <div className="footer-section contact" style={{ flex: 1, padding: '0 20px' }}>
                    <h2 style={{ color: '#fff' }}>Contact Us</h2>
                    <p>Email: contact@example.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div className="footer-bottom" style={{ textAlign: 'center', padding: '10px 0', backgroundColor: '#23272b' }}>
                <p>&copy; {new Date().getFullYear()} All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer

