import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";

function Bugs() {
    return (
        <div className="App">
            <Navbar />
            <div className="page-content">
                <div className="section-header">
                    <h1>Bugs & Vulnerabilities</h1>
                    <p>My bug bounty journey - what I'm learning and what I've found.</p>
                </div>

                {/* What I'm Learning Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">📚</span>
                        <h2>What I'm Learning</h2>
                    </div>
                    <p className="subsection-desc">Current topics I'm studying and skills I'm developing in bug bounty hunting.</p>

                    <div className="empty-state">
                        <div className="empty-icon">🎓</div>
                        <h3>Learning in Progress</h3>
                        <p>I'm currently learning various bug bounty techniques and will share my learning journey soon!</p>
                    </div>
                </div>

                {/* What I Found Section */}
                <div className="bugs-subsection">
                    <div className="subsection-title">
                        <span className="subsection-icon">🔍</span>
                        <h2>What I Found</h2>
                    </div>
                    <p className="subsection-desc">Bugs and vulnerabilities I've discovered during my bug bounty hunting.</p>

                    <div className="empty-state">
                        <div className="empty-icon">🐛</div>
                        <h3>No Findings Yet</h3>
                        <p>I haven't found any vulnerabilities to share publicly yet. Keep checking back!</p>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default Bugs;
