import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <main className="page-container landing-page">
      <header className="landing-header">
        <div className="logo">✝</div>
        <h1>Grace Community Church</h1>
      </header>

      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">Building Hope: The New Youth Center</h2>
          <p className="hero-subtitle">Help us create a safe, inspiring space for the next generation to grow in faith and community.</p>
        </div>
      </section>

      {/* Added inline style for the Light Gray background to perfectly match the palette */}
      <section className="story-section" style={{ background: '#EDEDED' }}>
        <h3>Why We Need You</h3>
        <p>For over a decade, our youth ministry has operated out of a cramped basement. As our community has grown, so has the need for a dedicated space where our teenagers can gather, study, and build lifelong friendships.</p>
        <p>We are raising <strong>$50,000</strong> to renovate the adjacent property into a state-of-the-art Youth Center. This space will include a study hall, a recreation area, and a dedicated worship room.</p>
        
        <div className="scripture-block">
          <p>"Train up a child in the way he should go; even when he is old he will not depart from it."</p>
          <span>— Proverbs 22:6</span>
        </div>

        <h3>Your Impact</h3>
        <ul className="impact-list">
          <li><strong>$50</strong> provides Bibles and study materials for one student for a year.</li>
          <li><strong>$100</strong> sponsors a student's ticket to our annual summer retreat.</li>
          <li><strong>$500</strong> helps furnish the new recreation area.</li>
        </ul>
      </section>

      <div className="sticky-footer">
        <Link to="/donate" className="primary-btn cta-btn">
          Make a Donation
        </Link>
        <p className="tax-notice">100% of your gift goes directly to the Building Fund.</p>
      </div>
    </main>
  );
}

export default LandingPage;