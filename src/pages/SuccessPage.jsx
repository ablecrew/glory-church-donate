import { Link } from 'react-router-dom';

function SuccessPage() {
  return (
    <main className="page-container success-page">
      <div className="success-icon">✓</div>
      <h1>Thank You!</h1>
      <p className="success-message">Your generous gift to the Youth Center Building Fund has been received. You are making a lasting impact on our community.</p>
      
      <div className="receipt-box">
        <h3>Tax Receipt</h3>
        <p>A receipt for your tax-deductible contribution has been sent to your email address. Please keep it for your records.</p>
      </div>

      <Link to="/" className="primary-btn secondary-btn">Return Home</Link>
    </main>
  );
}

export default SuccessPage;