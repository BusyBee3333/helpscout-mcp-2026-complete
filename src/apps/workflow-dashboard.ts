export const workflowDashboardApp = {
  name: 'workflow-dashboard',
  description: 'Dashboard for workflows with activation status and stats',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Workflows</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .workflows { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .workflow-item { padding: 20px; border-bottom: 1px solid #f0f2f5; display: flex; justify-content: between; align-items: center; gap: 16px; }
    .workflow-info { flex: 1; }
    .workflow-name { font-size: 16px; font-weight: 600; color: #1f2d3d; margin-bottom: 4px; }
    .workflow-meta { font-size: 13px; color: #6f7b8a; }
    .workflow-type { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; background: #e0e7ff; color: #3730a3; margin-right: 8px; }
    .workflow-stats { display: flex; gap: 24px; align-items: center; }
    .stat { text-align: center; }
    .stat-value { font-size: 20px; font-weight: 600; color: #1f2d3d; }
    .stat-label { font-size: 11px; color: #6f7b8a; text-transform: uppercase; }
    .toggle { width: 50px; height: 26px; background: #d1d5db; border-radius: 13px; position: relative; cursor: pointer; transition: background 0.3s; }
    .toggle.active { background: #10b981; }
    .toggle-knob { width: 22px; height: 22px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 2px; transition: left 0.3s; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
    .toggle.active .toggle-knob { left: 26px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>⚡ Workflows</h1>
    <div class="workflows">
      <div class="workflow-item">
        <div class="workflow-info">
          <div class="workflow-name">
            <span class="workflow-type">Automatic</span>
            Auto-tag billing conversations
          </div>
          <div class="workflow-meta">Support mailbox • Modified 2 weeks ago</div>
        </div>
        <div class="workflow-stats">
          <div class="stat">
            <div class="stat-value">247</div>
            <div class="stat-label">Total Runs</div>
          </div>
          <div class="stat">
            <div class="stat-value">245</div>
            <div class="stat-label">Successful</div>
          </div>
        </div>
        <div class="toggle active" onclick="this.classList.toggle('active')">
          <div class="toggle-knob"></div>
        </div>
      </div>
      <div class="workflow-item">
        <div class="workflow-info">
          <div class="workflow-name">
            <span class="workflow-type" style="background: #fef3c7; color: #92400e;">Manual</span>
            Escalate to senior support
          </div>
          <div class="workflow-meta">Support mailbox • Modified 1 month ago</div>
        </div>
        <div class="workflow-stats">
          <div class="stat">
            <div class="stat-value">34</div>
            <div class="stat-label">Total Runs</div>
          </div>
          <div class="stat">
            <div class="stat-value">34</div>
            <div class="stat-label">Successful</div>
          </div>
        </div>
        <div class="toggle active" onclick="this.classList.toggle('active')">
          <div class="toggle-knob"></div>
        </div>
      </div>
      <div class="workflow-item">
        <div class="workflow-info">
          <div class="workflow-name">
            <span class="workflow-type">Automatic</span>
            Close spam conversations
          </div>
          <div class="workflow-meta">All mailboxes • Modified 3 days ago</div>
        </div>
        <div class="workflow-stats">
          <div class="stat">
            <div class="stat-value">89</div>
            <div class="stat-label">Total Runs</div>
          </div>
          <div class="stat">
            <div class="stat-value">89</div>
            <div class="stat-label">Successful</div>
          </div>
        </div>
        <div class="toggle active" onclick="this.classList.toggle('active')">
          <div class="toggle-knob"></div>
        </div>
      </div>
      <div class="workflow-item">
        <div class="workflow-info">
          <div class="workflow-name">
            <span class="workflow-type">Automatic</span>
            Send satisfaction survey
          </div>
          <div class="workflow-meta">Support mailbox • Modified 1 week ago</div>
        </div>
        <div class="workflow-stats">
          <div class="stat">
            <div class="stat-value">156</div>
            <div class="stat-label">Total Runs</div>
          </div>
          <div class="stat">
            <div class="stat-value">154</div>
            <div class="stat-label">Successful</div>
          </div>
        </div>
        <div class="toggle" onclick="this.classList.toggle('active')">
          <div class="toggle-knob"></div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
