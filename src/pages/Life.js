import Navbar from "../components/navbar.js";
import Footer from "../components/Footer.js";

function Life() {
    return (
        <div className="App">
            <Navbar />
            <div className="page-content">
                <div className="section-header">
                    <h1>Life & Daily Vlogs</h1>
                    <p>Daily life experiences, personal stories, and moments from my journey.</p>
                </div>

                <div className="empty-state">
                    <div className="empty-icon">🎥</div>
                    <h3>No Vlogs Yet</h3>
                    <p>I haven't shared any daily life content yet. Stay tuned for updates!</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Life;
