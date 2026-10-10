import { Building2, Globe, Cpu, Award, BookOpen, CheckCircle, ArrowRight } from 'lucide-react'
import campusImage from '../assets/images/front.jpeg'
import ieeeLogo from '../assets/svgs/ieee.svg'
import smcLogo from '../assets/images/ieee_smc.jpg'

const timeline = [
  { year: '1958', name: 'IRE Professional Group on Human Factors' },
  { year: '1964', name: 'IEEE Human Factors in Electronics Group' },
  { year: '1968', name: 'Man-Machine Systems Group' },
  { year: '1970', name: 'Systems, Man and Cybernetics Group' },
  { year: '1972', name: 'IEEE Systems, Man and Cybernetics Society' },
]

function About() {
  return (
    <div className="about-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">ABOUT OUR CHAPTER</span>
            <h1 className="page-title">Inspiring Technological Leadership &amp; Innovation</h1>
            <p className="page-subtitle">Learn about our institution, the global IEEE network, and the Systems, Man and Cybernetics Society.</p>
          </div>
        </section>

        <section className="about-content">
          {/* Section 1: Institution */}
          <div className="about-card-section">
            <div className="section-title-row">
              <div className="section-title-icon">
                <Building2 size={24} />
              </div>
              <div>
                <span className="section-subtitle">Academic Foundation</span>
                <h2>Our Institution</h2>
              </div>
            </div>

            <div className="institution-intro-card">
              <div className="institution-img-wrapper">
                <img src={campusImage} alt="Sri Sairam Engineering College campus" className="institution-img" />
                <div className="institution-tag">Est. 1995 &bull; Chennai</div>
              </div>
              <div className="institution-text">
                <p>
                  <strong>Sri Sairam Engineering College</strong>, Chennai, was
                  established in the year 1995 by MJF.Ln.Leo Muthu, Chairman of
                  Sapthagiri Educational Trust, is a non-profitable, and
                  non-minority institution. A well-defined vision, highly
                  committed mission, and dedicated leadership facilitate Sri Sairam
                  Engineering College to be in the country’s best educational
                  institutions. Since its inception, our Institution has grown into
                  a vast conglomerate of magnificent buildings, state-of-the-art
                  and sophisticated laboratories internet centers, a modern library, and a superlative sports complex—each a landmark in itself across 300 acres.
                </p>
                <div className="institution-highlights">
                  <div className="highlight-item">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>300+ Acre Lush Green Campus</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>Affiliated with Anna University</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>Approved by AICTE, New Delhi</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle size={16} className="highlight-icon" />
                    <span>ISO:9001:2008 &amp; NBA Accredited</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="institution-details-grid">
              <div className="text-panel">
                <p>
                  Imbibed with the message of Shirdi Saibaba, our Chairman ventured into the realm of providing quality technical education to both urban and rural students from Tamilnadu as well as other states, offering a flexible and real-world based approach in education.
                </p>
                <p>
                  Sri Sairam Institute of Management and Computer Applications, a Sri Sairam Engineering College unit, was established in 1997 and offers MBA and MCA programs. Our Chairman has not only stopped with his vision of providing Technical Education but has also ventured into the arena of medical sciences, by starting a Medical College for Indian Medicine namely Siddha, Ayurveda &amp; Homeopathy. He was also instrumental in starting “The academy for Blind” and “Home for the Aged” under the community service programs of the Lions Club.
                </p>
              </div>
              <div className="text-panel">
                <p>
                  Today, Sri Sairam Engineering College has developed into a reputed Engineering Institution with ISO:9001:2008 certifications and NBA Accreditation to all the disciplines of engineering. Technical bodies like ISTE, IEEE, SAE, ISA, ISOL, and IETE are vibrantly functioning with workshops, guest lectures, and conferences. NSS, YRC, National Environment awareness campaign, Energy, and Eco-Club are religiously conducting various activities.
                </p>
                <p>
                  The department of Training and Counseling and Placement is another sphere where we have made excellent strides. For offering top-quality technical education and molding the younger generation to the society, our Chairman has spared no efforts to induct dedicated faculty and provide adequate infrastructure facilities.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: IEEE Global */}
          <div className="about-card-section">
            <div className="section-title-row">
              <div className="section-title-icon">
                <Globe size={24} />
              </div>
              <div>
                <span className="section-subtitle">Global Organization</span>
                <h2>IEEE: Institute of Electrical and Electronics Engineers</h2>
              </div>
            </div>

            <div className="ieee-about-grid">
              <div className="ieee-about-text">
                <p>
                  <strong>IEEE</strong> is the world’s largest professional
                  association dedicated to advancing technological innovation and
                  excellence for the benefit of humanity. IEEE and its members
                  inspire a global community through IEEE’s highly cited
                  publications, conferences, technology standards, and
                  professional and educational activities. IEEE is the trusted
                  “voice” for engineering, computing, and technology information
                  around the globe.
                </p>
                <div className="ieee-metrics-row">
                  <div className="metric-pill">
                    <strong>430,000+</strong>
                    <span>Members Worldwide</span>
                  </div>
                  <div className="metric-pill">
                    <strong>160+</strong>
                    <span>Countries Represented</span>
                  </div>
                  <div className="metric-pill">
                    <strong>33%</strong>
                    <span>Global Tech Literature Published</span>
                  </div>
                </div>
                <p>
                  The IEEE’s roots go back to 1884 when electricity began to become a major influence in society. There was one major established electrical industry, the telegraph, which since the 1840s had come to connect the world with a data communications system faster than the speed of transportation. The telephone and electric power and light industries had just gotten underway.
                </p>
                <p>
                  IEEE, pronounced “Eye-triple-E,” stands for the Institute of Electrical and Electronics Engineers. The association is chartered under this name and it is the full legal name.
                </p>
              </div>
              <div className="ieee-logo-card">
                <div className="ieee-logo-container">
                  <img src={ieeeLogo} alt="IEEE Logo" />
                </div>
                <div className="ieee-logo-caption">
                  <h4>Advancing Technology for Humanity</h4>
                  <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="read-history-link">
                    <span>Visit IEEE Official Portal</span>
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: SMC Society */}
          <div className="about-card-section">
            <div className="section-title-row">
              <div className="section-title-icon">
                <Cpu size={24} />
              </div>
              <div>
                <span className="section-subtitle">Our Specialization</span>
                <h2>System, Man and Cybernetics Society</h2>
              </div>
            </div>

            <div className="smc-about-grid">
              <div className="smc-logo-card">
                <div className="smc-logo-container">
                  <img src={smcLogo} alt="IEEE Systems, Man, and Cybernetics Society" />
                </div>
                <div className="smc-logo-caption">
                  <h4>IEEE SMC Society</h4>
                  <span>Pioneering systems science and cybernetics since 1958</span>
                </div>
              </div>
              <div className="smc-about-text">
                <p>
                  The <strong>IEEE Systems, Man, and Cybernetics Society</strong> (IEEE SMCS) is a professional society of the IEEE. It aims “to serve the interests of its members and the community at large by promoting the theory, practice, and interdisciplinary aspects of systems science and engineering, human-machine systems, and cybernetics”.
                </p>
                
                {/* Timeline chips */}
                <div className="smc-timeline">
                  <h4 className="timeline-title">Historical Evolution:</h4>
                  <div className="timeline-track">
                    {timeline.map((step) => (
                      <div key={step.year} className="timeline-node">
                        <span className="timeline-year">{step.year}</span>
                        <span className="timeline-name">{step.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="smc-focus-cards">
                  <div className="focus-mini-card">
                    <strong>1. Systems Engineering Technology</strong>
                    <p>Problem definition methods, modeling, simulation, human factors engineering, data methods, and system design and evaluation techniques.</p>
                  </div>
                  <div className="focus-mini-card">
                    <strong>2. Theoretical Integration</strong>
                    <p>Integration of communication theory, control, cybernetics, stochastics, and optimization towards a general systems framework.</p>
                  </div>
                  <div className="focus-mini-card">
                    <strong>3. Multidisciplinary Applications</strong>
                    <p>Application at hardware and software levels to biological, ecological, socio-economic, operational, and man-machine systems.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default About
