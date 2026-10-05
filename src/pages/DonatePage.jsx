import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DonatePage() {
  const [fund, setFund] = useState('building');
  const [frequency, setFrequency] = useState('One-Time');
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const navigate = useNavigate();

  const presetAmounts = [25, 50, 100, 250, 500, 1000];
  const frequencies = ['One-Time', 'Weekly', 'Monthly'];

  const handlePresetClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const handleDonate = (e) => {
    e.preventDefault();
    // In a real app, you would process Stripe/PayPal here.
    // On success, redirect to the thank you page:
    navigate('/success');
  };

  const displayAmount = customAmount ? `$${customAmount}` : `$${selectedAmount}`;

  return (
    <main className="page-container donate-page">
      <Link to="/" className="back-link">← Back to Story</Link>
      
      <header className="header">
        <h1>Complete Your Gift</h1>
        <p className="secure-text">Secure, encrypted donation</p>
      </header>

      <form className="form-section" onSubmit={handleDonate}>
        <div className="form-group">
          <label className="label" htmlFor="fund">I am giving to:</label>
          <select id="fund" className="select-input" value={fund} onChange={(e) => setFund(e.target.value)}>
            <option value="building">Youth Center Building Fund</option>
            <option value="tithe">General Tithe & Offering</option>
            <option value="missions">Global Missions</option>
          </select>
        </div>

        <div className="form-group">
          <span className="label">Frequency:</span>
          <div className="toggle-group">
            {frequencies.map((freq) => (
              <button type="button" key={freq} className={`toggle-btn ${frequency === freq ? 'active' : ''}`} onClick={() => setFrequency(freq)}>
                {freq}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <span className="label">Amount:</span>
          <div className="amount-grid">
            {presetAmounts.map((amount) => (
              <button type="button" key={amount} className={`amount-btn ${selectedAmount === amount ? 'active' : ''}`} onClick={() => handlePresetClick(amount)}>
                ${amount}
              </button>
            ))}
            <div className="custom-input-wrapper">
              <span className="currency-symbol">$</span>
              <input type="number" className="custom-input" placeholder="Custom" value={customAmount} onChange={handleCustomChange} />
            </div>
          </div>
        </div>

        <button type="submit" className="primary-btn">
          Give {displayAmount} Now
        </button>

        <div className="divider"><span>OR PAY WITH</span></div>
        <div className="wallets">
          <button type="button" className="wallet-btn"> Pay</button>
          <button type="button" className="wallet-btn google">G Pay</button>
        </div>
      </form>

      <footer className="footer">
        <div className="secure-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          256-bit SSL Secure Encryption
        </div>
        <p>Grace Community Church is a registered 501(c)(3).<br />Your gift is tax-deductible.</p>
      </footer>
    </main>
  );
}

export default DonatePage;