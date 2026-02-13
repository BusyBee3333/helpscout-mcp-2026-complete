export const userStatsApp = {
  name: 'user-stats',
  description: 'Individual user performance statistics and metrics',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>User Statistics</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1000px; margin: 0 auto; }
    .profile { background: white; border-radius: 8px; padding: 32px; text-align: center; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .avatar { width: 100px; height: 100px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 40px; font-weight: bold; margin: 0 auto 16px; }
    .user-name { font-size: 24px; font-weight: 600; color: #1f2d3d; margin-bottom: 4px; }
    .user-role { font-size: 14px; color: #6f7b8a; margin-bottom: 4px; }
    .user-email { font-size: 13px; color: #9ca3af; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
    .stat-card { background: white; padding: 24px; border-radius: 8px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat-value { font-size: 36px; font-weight: bold; color: #3197d6; margin-bottom: 8px; }
    .stat-label { font-size: 13px; color: #6f7b8a; }
    .metrics-section { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .metrics-title { font-size: 18px; font-weight: 600; color: #1f2d3d; margin-bottom: 16px; }
    .metric-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #f0f2f5; }
    .metric-row:last-child { border-bottom: none; }
    .metric-label { font-size: 14px; color: #6f7b8a; }
    .metric-value { font-size: 14px; font-weight: 600; color: #1f2d3d; }
  </style>
</head>
<body>
  <div class="container">
    <div class="profile">
      <div class="avatar">JS</div>
      <div class="user-name">John Smith</div>
      <div class="user-role">Support Team Lead</div>
      <div class="user-email">john.smith@company.com</div>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">324</div>
        <div class="stat-label">Replies Sent (30d)</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">97%</div>
        <div class="stat-label">Happiness Score</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">2.8h</div>
        <div class="stat-label">Avg Response Time</div>
      </div>
    </div>
    
    <div class="metrics-section">
      <div class="metrics-title">Performance Metrics (Last 30 Days)</div>
      <div class="metric-row">
        <span class="metric-label">Conversations Created</span>
        <span class="metric-value">89</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Conversations Closed</span>
        <span class="metric-value">147</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Average Resolution Time</span>
        <span class="metric-value">7.2 hours</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">First Response Time</span>
        <span class="metric-value">2.8 hours</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Active Conversations</span>
        <span class="metric-value">23</span>
      </div>
      <div class="metric-row">
        <span class="metric-label">Customer Ratings</span>
        <span class="metric-value">72 ratings (97% positive)</span>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
