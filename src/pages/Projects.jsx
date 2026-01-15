export default function Projects() {
  return (
    <>
      <section className="hero">
        <h2>Innovation & Technology Projects</h2>
        <p>Pioneering AI-driven solutions for enhanced safety and operational excellence</p>
      </section>

      <section className="content-section">
        <div className="about-content">
          <h2 style={{ textAlign: 'center', color: '#003366', marginBottom: '40px' }}>
            AI-Based Real-Time PPE Compliance Monitoring and Alert System
          </h2>
          
          <div style={{ background: '#f5f5f5', padding: '30px', borderRadius: '8px', marginBottom: '30px' }}>
            <h3>Project Overview</h3>
            <p><strong>Location:</strong> Indian Oil Corporation Limited (IOCL), Guwahati Refinery</p>
            <p><strong>Team Name:</strong> Zenith</p>
            <p><strong>Team Members:</strong></p>
            <ul style={{ marginLeft: '20px', marginTop: '10px' }}>
              <li>Jenifa Rahman (Captain)</li>
              <li>Pubali Saikia</li>
              <li>Meenakshi Paul</li>
            </ul>
          </div>

          <h3>The Challenge</h3>
          <p>Industrial environments such as oil refineries, construction sites, and manufacturing plants present hazardous working conditions where strict adherence to Personal Protective Equipment (PPE) protocols is critical for preventing injuries and maintaining operational safety. Traditional supervision methods rely heavily on manual monitoring by safety officers, which is often inefficient, time-consuming, and susceptible to human oversight—especially across large, distributed facilities.</p>

          <h3>Our Solution</h3>
          <p>This project introduces an AI-based Real-Time PPE Compliance Monitoring and Alert System that leverages computer vision and deep learning to identify and validate the use of safety gear such as helmets and safety vests. The system processes live video streams from existing surveillance cameras and applies a YOLO-based object detection model to detect PPE elements at the frame level with high accuracy and low latency.</p>

          <h3>Key Features</h3>
          <div className="service-grid" style={{ marginTop: '20px' }}>
            <div className="service-card">
              <div className="service-icon">🎥</div>
              <h3>Real-Time Monitoring</h3>
              <p>Continuous 24/7 video stream analysis using existing surveillance infrastructure</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🤖</div>
              <h3>AI-Powered Detection</h3>
              <p>YOLO-based object detection model for high-accuracy PPE identification</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚠️</div>
              <h3>Instant Alerts</h3>
              <p>Real-time notifications to supervisors for immediate corrective action</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🖥️</div>
              <h3>Web Interface</h3>
              <p>Centralized monitoring dashboard for control rooms and safety departments</p>
            </div>
            <div className="service-card">
              <div className="service-icon">📊</div>
              <h3>Compliance Tracking</h3>
              <p>Automated classification of compliant vs non-compliant personnel</p>
            </div>
            <div className="service-card">
              <div className="service-icon">⚡</div>
              <h3>Low Latency</h3>
              <p>Frame-level detection with minimal processing delay</p>
            </div>
          </div>

          <h3>Technical Stack</h3>
          <p>Developed using cutting-edge technologies including:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', lineHeight: '2' }}>
            <li><strong>Python:</strong> Core programming language</li>
            <li><strong>OpenCV:</strong> Computer vision and image processing</li>
            <li><strong>Flask:</strong> Web application framework</li>
            <li><strong>YOLO (You Only Look Once):</strong> Deep learning object detection</li>
            <li><strong>Deep Learning Frameworks:</strong> For model training and inference</li>
          </ul>

          <h3>System Architecture</h3>
          <p>The system adopts a modular and scalable architecture capable of supporting continuous 24/7 operation. It integrates seamlessly with existing surveillance infrastructure, making deployment cost-effective and straightforward.</p>

          <h3>Key Benefits</h3>
          <div style={{ background: '#e8f4f8', padding: '25px', borderRadius: '8px', marginTop: '20px' }}>
            <ul style={{ marginLeft: '20px', lineHeight: '2' }}>
              <li>✅ <strong>Reduced Manual Supervision:</strong> Automates compliance monitoring across large facilities</li>
              <li>✅ <strong>Enhanced Safety Standards:</strong> Ensures consistent PPE protocol adherence</li>
              <li>✅ <strong>Improved Situational Awareness:</strong> Real-time visibility of safety compliance</li>
              <li>✅ <strong>Timely Intervention:</strong> Immediate alerts enable quick corrective action</li>
              <li>✅ <strong>Regulatory Compliance:</strong> Supports adherence to safety regulations</li>
              <li>✅ <strong>Accident Prevention:</strong> Proactive safety culture minimizes incidents</li>
              <li>✅ <strong>Operational Efficiency:</strong> Reduces accident-related downtime</li>
            </ul>
          </div>

          <h3>Industry Applications</h3>
          <p>The framework demonstrates strong potential for adoption within high-risk industries including:</p>
          <ul style={{ marginLeft: '20px', marginTop: '10px', lineHeight: '2' }}>
            <li>Oil and Gas Refineries</li>
            <li>Construction Sites</li>
            <li>Manufacturing Plants</li>
            <li>Logistics and Warehousing</li>
            <li>Mining Operations</li>
          </ul>

          <h3>Impact</h3>
          <p>By reducing dependence on manual supervision, improving situational awareness, and ensuring timely intervention, the proposed system enhances workplace safety standards and supports regulatory compliance. The framework contributes to a proactive safety culture and minimizes accident-related downtime across IOCL facilities.</p>

          <div style={{ background: '#003366', color: 'white', padding: '30px', borderRadius: '8px', marginTop: '40px', textAlign: 'center' }}>
            <h3 style={{ color: 'white', marginBottom: '15px' }}>Project Status</h3>
            <p style={{ fontSize: '18px', margin: 0 }}>
              <strong>Active Development</strong> | IOCL Guwahati Refinery
            </p>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3>24/7</h3>
            <p>Continuous Monitoring</p>
          </div>
          <div className="stat-item">
            <h3>Real-Time</h3>
            <p>Alert System</p>
          </div>
          <div className="stat-item">
            <h3>AI-Powered</h3>
            <p>Detection Model</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Compliance Target</p>
          </div>
        </div>
      </section>
    </>
  );
}
