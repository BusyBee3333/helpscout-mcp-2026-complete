export const companyReportApp = {
  name: 'company-report',
  description: 'Overall company performance and KPIs',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Company Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 8px; }
    .subtitle { font-size: 14px; color: #6f7b8a; margin-bottom: 24px; }
    .kpi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .kpi-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .kpi-value { font-size: 32px; font-weight: bold; color: #1f2d3d; margin-bottom: 4px; }
    .kpi-label { font-size: 13px; color: #6f7b8a; margin-bottom: 8px; }
    .kpi-change { font-size: 12px; font-weight: 500; }
    .kpi-change.positive { color: #10b981; }
    .kpi-change.negative { color: #ef4444; }
    .sections-grid { display: grid; grid-template-columns: 2fr 1fr; gap: 20px; }
    .section { background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .section-title { font-size: 18px; font-weight: 600; color: #1f2d3d; margin-bottom: 16px; }
    .chart-placeholder { height: 200px; background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%); border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #0369a1; font-size: 14px; }
    .summary-item { padding: 12px 0; border-bottom: 1px solid #f0f2f5; display: flex; justify-content: space-between; }
    .summary-item:last-child { border-bottom: none; }
    .summary-label { font-size: 14px; color: #6f7b8a; }
    .summary-value { font-size: 14px; font-weight: 600; color: #1f2d3d; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏢 Company Report</h1>
    <div class="subtitle">Overall performance overview for last 30 days</div>
    
    <div class="kpi-grid">
      <div class="kpi-card">
        <div class="kpi-label">CONVERSATIONS CREATED</div>
        <div class="kpi-value">1,524</div>
        <div class="kpi-change positive">↑ 15% vs last month</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">CONVERSATIONS CLOSED</div>
        <div class="kpi-value">1,389</div>
        <div class="kpi-change positive">↑ 12% vs last month</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">CUSTOMERS HELPED</div>
        <div class="kpi-value">847</div>
        <div class="kpi-change positive">↑ 8% vs last month</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">HAPPINESS SCORE</div>
        <div class="kpi-value">94%</div>
        <div class="kpi-change positive">↑ 3% vs last month</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">REPLIES SENT</div>
        <div class="kpi-value">3,247</div>
        <div class="kpi-change positive">↑ 18% vs last month</div>
      </div>
      <div class="kpi-card">
        <div class="kpi-label">AVG RESOLUTION TIME</div>
        <div class="kpi-value">8.4h</div>
        <div class="kpi-change negative">↑ 1.2h vs last month</div>
      </div>
    </div>
    
    <div class="sections-grid">
      <div class="section">
        <div class="section-title">Conversation Volume Trend</div>
        <div class="chart-placeholder">📈 7-day conversation trend chart</div>
      </div>
      
      <div class="section">
        <div class="section-title">Key Metrics Summary</div>
        <div class="summary-item">
          <span class="summary-label">First Response Time</span>
          <span class="summary-value">3.2 hours</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Active Conversations</span>
          <span class="summary-value">147</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Pending Conversations</span>
          <span class="summary-value">23</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Team Members</span>
          <span class="summary-value">12 agents</span>
        </div>
        <div class="summary-item">
          <span class="summary-label">Active Mailboxes</span>
          <span class="summary-value">3</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
