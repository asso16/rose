import "../Css/contact.css";
export default function Contact() {
return (
    <div className="contact-container">
        <div className="contact-body">
     <div className="info">
        <h2>Contact Us</h2>
        <p>Feel free to reach out to us at any time. We are here to help you!</p>
     </div>
        
        <div className="contact-details">
            <div className="loction">
                <h3>Location</h3>
            <p>Alger, Algeria</p>
            </div>
            <div className="work">
                <h3>Working Hours</h3>
            <p>Monday - Thursday: 8:00 AM - 4:00 PM</p>
            <p>Friday: 8:00 AM - 12:00 PM</p>
            <p>Saturday - Sunday: Closed</p>
            </div>
            
            <div className="social">
                 <h3>Social Media</h3>
            <p>Follow us on:</p>
            <ul>
                <li><a href="" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            </div>
            <div className="customer"> 
                           <h3>Customer Support</h3>

                 <h2>For any inquiries, please contact our customer support team:</h2>
            <p>Email: laib.assma16@gmail.com</p>
            <p>Phone: +213 554673077</p>
            </div>
           
           
        </div>
        </div>
    </div>
)
}
