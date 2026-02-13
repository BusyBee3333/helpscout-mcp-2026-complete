export const workflowDetailApp = {
  name: 'workflow-detail',
  description: 'Detailed view of workflow configuration and execution history',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Workflow Detail</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1000px; margin: 0 auto; }
    .header { background: white; padding: 24px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); display: flex; justify-content: space-between; align-items: center; }
    .workflow-info { flex: 1; }
    .workflow-name { font-size: 24px; font-weight: 600; color: #1f2d3d; margin-bottom: 8px; }
    .workflow-meta { font-size: 14px; color: #6f7b8a; }
    .workflow-type { display: inline-block; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: 500; background: #e0e7ff; color: #3730a3; margin-right: 8px; }
    .toggle { width: 50px; height: 26px; background: #10b981; border-radius: 13px; position: relative; cursor: pointer; }
    .toggle-knob { width: 22px; height: 22px; background: white; border-radius: 50%; position: absolute; top: 2px; left: 26px; box-shadow: 0 1px 3px rgba(0,0,0,0.3); }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 20px; }
    .stat-card { background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat-value { font-size: 32px; font-weight: bold; color: #3197d6; margin-bottom: 4px; }
    .stat-label { font-size: 13px; color: #6f7b8a; }
    .section { background: white; padding: 24px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .section-title { font-size: 18px; font-weight: 600; color: #1f2d3d; margin-bottom: 16px; }
    .condition-item { padding: 16px; background: #f7f9fc; border-radius: 6px; margin-bottom: 12px; border-left: 4px solid #3197d6; }
    .condition-label { font-size: 12px; font-weight: 600; color: #6f7b8a; margin-bottom: 4px; text-transform: uppercase; }
    .condition-value { font-size: 14px; color: #1f2d3d; }
    .action-item { padding: 16px; background: #f0fdf4; border-radius: 6px; margin-bottom: 12px; border-left: 4px solid #10b981; }
    .action-label { font-size: 12px; font-weight: 600; color: #166534; margin-bottom: 4px; text-transform: uppercase; }
    .action-value { font-size: 14px; color: #166534; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="workflow-info">
        <div class="workflow-name">
          <span class="workflow-type">Automatic</span>
          Auto-tag billing conversations
        </div>
        <div class="workflow-meta">Support mailbox • Modified 2 weeks ago</div>
      </div>
      <div class="toggle">
        <div class="toggle-knob"></div>
      </div>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-value">247</div>
        <div class="stat-label">Total Runs</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">245</div>
        <div class="stat-label">Successful</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">2</div>
        <div class="stat-label">Failed</div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">⚙️ Conditions (When to run)</div>
      <div class="condition-item">
        <div class="condition-label">Trigger</div>
        <div class="condition-value">Conversation is created</div>
      </div>
      <div class="condition-item">
        <div class="condition-label">Subject contains</div>
        <div class="condition-value">payment, billing, invoice, subscription</div>
      </div>
      <div class="condition-item">
        <div class="condition-label">Mailbox</div>
        <div class="condition-value">Support</div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">🎯 Actions (What to do)</div>
      <div class="action-item">
        <div class="action-label">Add Tags</div>
        <div class="action-value">billing</div>
      </div>
      <div class="action-item">
        <div class="action-label">Assign To</div>
        <div class="action-value">Billing Team</div>
      </div>
      <div class="action-item">
        <div class="action-label">Set Priority</div>
        <div class="action-value">High</div>
      </div>
    </div>
    
    <div class="section">
      <div class="section-title">📊 Recent Executions</div>
      <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 500; color: #1f2d3d;">Conversation #1247: Payment issue</div>
          <div style="font-size: 13px; color: #6f7b8a;">2 hours ago</div>
        </div>
        <div style="color: #10b981; font-weight: 600;">✓ Success</div>
      </div>
      <div style="padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <div style="font-weight: 500; color: #1f2d3d;">Conversation #1189: Billing problem</div>
          <div style="font-size: 13px; color: #6f7b8a;">3 days ago</div>
        </div>
        <div style="color: #10b981; font-weight: 600;">✓ Success</div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
