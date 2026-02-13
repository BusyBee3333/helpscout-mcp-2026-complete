export const happinessReportApp = {
  name: 'happiness-report',
  description: 'Customer satisfaction and happiness metrics',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Happiness Report</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 8px; }
    .subtitle { font-size: 14px; color: #6f7b8a; margin-bottom: 24px; }
    .hero-score { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px; border-radius: 12px; text-align: center; margin-bottom: 24px; }
    .score-value { font-size: 72px; font-weight: bold; margin-bottom: 8px; }
    .score-label { font-size: 16px; opacity: 0.9; }
    .score-change { font-size: 14px; margin-top: 8px; }
    .score-change.positive { color: #a7f3d0; }
    .metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 24px; }
    .metric-card { background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .metric-value { font-size: 32px; font-weight: bold; margin-bottom: 4px; }
    .metric-label { font-size: 13px; color: #6f7b8a; }
    .metric-great { color: #10b981; }
    .metric-okay { color: #f59e0b; }
    .metric-bad { color: #ef4444; }
    .chart-section { background: white; padding: 24px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin-bottom: 24px; }
    .chart-title { font-size: 18px; font-weight: 600; color: #1f2d3d; margin-bottom: 16px; }
    .bar-chart { display: flex; flex-direction: column; gap: 12px; }
    .bar-item { display: flex; align-items: center; gap: 12px; }
    .bar-label { width: 100px; font-size: 14px; color: #6f7b8a; }
    .bar-container { flex: 1; background: #f0f2f5; border-radius: 4px; height: 32px; position: relative; overflow: hidden; }
    .bar-fill { height: 100%; border-radius: 4px; display: flex; align-items: center; padding: 0 12px; font-size: 13px; font-weight: 600; color: white; }
    .bar-great { background: #10b981; }
    .bar-okay { background: #f59e0b; }
    .bar-bad { background: #ef4444; }
  </style>
</head>
<body>
  <div class="container">
    <h1>😊 Happiness Report</h1>
    <div class="subtitle">Customer satisfaction metrics for last 30 days</div>
    
    <div class="hero-score">
      <div class="score-value">94%</div>
      <div class="score-label">Overall Happiness Score</div>
      <div class="score-change positive">↑ 3% from previous period</div>
    </div>
    
    <div class="metrics">
      <div class="metric-card">
        <div class="metric-value metric-great">237</div>
        <div class="metric-label">😊 Great Ratings</div>
      </div>
      <div class="metric-card">
        <div class="metric-value metric-okay">18</div>
        <div class="metric-label">😐 Okay Ratings</div>
      </div>
      <div class="metric-card">
        <div class="metric-value metric-bad">7</div>
        <div class="metric-label">😞 Not Good Ratings</div>
      </div>
    </div>
    
    <div class="chart-section">
      <div class="chart-title">Ratings Distribution</div>
      <div class="bar-chart">
        <div class="bar-item">
          <div class="bar-label">Great</div>
          <div class="bar-container">
            <div class="bar-fill bar-great" style="width: 90%;">237 (90%)</div>
          </div>
        </div>
        <div class="bar-item">
          <div class="bar-label">Okay</div>
          <div class="bar-container">
            <div class="bar-fill bar-okay" style="width: 7%;">18 (7%)</div>
          </div>
        </div>
        <div class="bar-item">
          <div class="bar-label">Not Good</div>
          <div class="bar-container">
            <div class="bar-fill bar-bad" style="width: 3%;">7 (3%)</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
