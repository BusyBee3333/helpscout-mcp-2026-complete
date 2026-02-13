export const productivityReportApp = {
  name: 'productivity-report',
  description: 'Team productivity metrics and response times',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Productivity Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 8px; }
    .subtitle { font-size: 14px; color: #6f7b8a; margin-bottom: 24px; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat-value { font-size: 36px; font-weight: bold; color: #3197d6; margin-bottom: 4px; }
    .stat-label { font-size: 14px; color: #6f7b8a; }
    .stat-change { font-size: 12px; margin-top: 4px; }
    .stat-change.positive { color: #10b981; }
    .stat-change.negative { color: #ef4444; }
    .chart-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
    .chart-section { background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .chart-title { font-size: 18px; font-weight: 600; color: #1f2d3d; margin-bottom: 16px; }
    .metric-item { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f2f5; }
    .metric-item:last-child { border-bottom: none; }
    .metric-name { font-size: 14px; color: #3e4c59; }
    .metric-val { font-size: 14px; font-weight: 600; color: #1f2d3d; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Productivity Report</h1>
    <div class="subtitle">Team performance metrics for last 30 days</div>
    
    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">1,247</div>
        <div class="stat-label">Replies Sent</div>
        <div class="stat-change positive">↑ 12% from last month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">3.2h</div>
        <div class="stat-label">Avg First Response Time</div>
        <div class="stat-change positive">↓ 0.5h from last month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">8.4h</div>
        <div class="stat-label">Avg Resolution Time</div>
        <div class="stat-change negative">↑ 1.2h from last month</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">892</div>
        <div class="stat-label">Resolved Conversations</div>
        <div class="stat-change positive">↑ 8% from last month</div>
      </div>
    </div>
    
    <div class="chart-grid">
      <div class="chart-section">
        <div class="chart-title">Top Performers (Replies)</div>
        <div class="metric-item">
          <span class="metric-name">🥇 John Smith</span>
          <span class="metric-val">324 replies</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">🥈 Emily Davis</span>
          <span class="metric-val">287 replies</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">🥉 Mike Johnson</span>
          <span class="metric-val">219 replies</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">Sarah Wilson</span>
          <span class="metric-val">198 replies</span>
        </div>
      </div>
      
      <div class="chart-section">
        <div class="chart-title">Response Time by Agent</div>
        <div class="metric-item">
          <span class="metric-name">John Smith</span>
          <span class="metric-val">2.8h</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">Emily Davis</span>
          <span class="metric-val">3.1h</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">Mike Johnson</span>
          <span class="metric-val">3.5h</span>
        </div>
        <div class="metric-item">
          <span class="metric-name">Sarah Wilson</span>
          <span class="metric-val">4.2h</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
