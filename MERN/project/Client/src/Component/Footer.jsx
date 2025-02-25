const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'darkgrey', padding: '1rem', textAlign: 'center', color: 'white' }}>
      <p>&copy; {new Date().getFullYear()} Doctor Appointment App. All rights reserved.</p>
      <p>
        <a href="/privacy" style={{ color: 'white', marginRight: '1rem' }}>Privacy Policy</a>
        <a href="/terms" style={{ color: 'white', marginRight: '1rem' }}>Terms of Service</a>
        <a href="/contact" style={{ color: 'white' }}>Contact Us</a>
      </p>
    </footer>
  );
};

export default Footer;

