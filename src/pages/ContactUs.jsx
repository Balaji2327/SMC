import { useState } from 'react'
import { MapPin, Mail, Phone, Send, CheckCircle2, MessageSquare, Clock } from 'lucide-react'

function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <div className="contact-page">
      {/* Page Header Banner */}
        <section className="page-header-strip">
          <div className="page-header-inner">
            <span className="page-badge">GET IN TOUCH &bull; SOCIALIZE WITH US</span>
            <h1 className="page-title">Contact IEEE SMC Chapter</h1>
            <p className="page-subtitle">
              Have questions regarding student membership, upcoming events, or research collaborations? We would love to hear from you.
            </p>
          </div>
        </section>

        <section className="contact-content">
          <div className="contact-grid">
            {/* Left: Contact Info Cards */}
            <div className="contact-info-column">
              {/* Address Card */}
              <div className="contact-card">
                <div className="contact-card-icon-wrapper">
                  <MapPin size={24} />
                </div>
                <div className="contact-card-text">
                  <h3>Campus Address</h3>
                  <address>
                    Sri Sairam Engineering College<br />
                    Sai Leo Nagar, West Tambaram,<br />
                    Chennai &ndash; 600 044, Tamil Nadu, India.
                  </address>
                </div>
              </div>

              {/* Email Card */}
              <div className="contact-card">
                <div className="contact-card-icon-wrapper">
                  <Mail size={24} />
                </div>
                <div className="contact-card-text">
                  <h3>Direct Email</h3>
                  <p>Send your queries or proposals directly to our branch coordinators:</p>
                  <a className="contact-email-link" href="mailto:ieeesbsec@sairam.edu.in">
                    ieeesbsec@sairam.edu.in
                  </a>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="contact-card">
                <div className="contact-card-icon-wrapper">
                  <Clock size={24} />
                </div>
                <div className="contact-card-text">
                  <h3>Chapter Office Hours</h3>
                  <p>Monday to Friday: 9:00 AM &ndash; 4:30 PM</p>
                  <span className="office-subtext">Open to all students, faculty members, and IEEE delegates.</span>
                </div>
              </div>
            </div>

            {/* Right: Modern Message Inquiry Form */}
            <div className="contact-form-column">
              <div className="contact-form-card">
                <div className="form-header">
                  <div className="form-icon-pill">
                    <MessageSquare size={18} />
                    <span>Send Message</span>
                  </div>
                  <h2>Drop Us a Line</h2>
                  <p>Fill out the form below and an IEEE student representative will reply shortly.</p>
                </div>

                {submitted ? (
                  <div className="form-success-banner">
                    <CheckCircle2 size={28} />
                    <div>
                      <h4>Thank You!</h4>
                      <p>Your message has been sent successfully. We will get in touch with you shortly.</p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="inquiry-form">
                    <div className="form-group-row">
                      <div className="form-field">
                        <label htmlFor="contact-name">Full Name</label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                      </div>
                      <div className="form-field">
                        <label htmlFor="contact-email">Email Address</label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="you@domain.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-subject">Subject</label>
                      <input
                        id="contact-subject"
                        type="text"
                        required
                        placeholder="Membership inquiry, workshop question, etc."
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      />
                    </div>

                    <div className="form-field">
                      <label htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        rows="5"
                        required
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <button type="submit" className="submit-inquiry-btn">
                      <span>Send Inquiry</span>
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default ContactUs
