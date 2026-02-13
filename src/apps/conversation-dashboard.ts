export const conversationDashboardApp = {
  name: 'conversation-dashboard',
  description: 'Dashboard view of conversations with filters and quick actions',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conversation Dashboard</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f7f9fc;
      padding: 20px;
    }
    .dashboard { max-width: 1400px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px; }
    .stat-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .stat-value { font-size: 32px; font-weight: bold; color: #3197d6; }
    .stat-label { font-size: 14px; color: #6f7b8a; margin-top: 4px; }
    .filters { background: white; padding: 16px; border-radius: 8px; margin-bottom: 20px; display: flex; gap: 12px; flex-wrap: wrap; }
    .filter-group { display: flex; flex-direction: column; gap: 4px; }
    .filter-group label { font-size: 12px; color: #6f7b8a; }
    .filter-group select, .filter-group input { padding: 8px; border: 1px solid #d9dee4; border-radius: 4px; font-size: 14px; }
    .conversations { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .conv-header { display: grid; grid-template-columns: 1fr 150px 120px 100px 100px; padding: 12px 16px; background: #f7f9fc; border-bottom: 1px solid #d9dee4; font-size: 12px; font-weight: 600; color: #6f7b8a; }
    .conv-row { display: grid; grid-template-columns: 1fr 150px 120px 100px 100px; padding: 16px; border-bottom: 1px solid #f0f2f5; align-items: center; cursor: pointer; transition: background 0.2s; }
    .conv-row:hover { background: #f7f9fc; }
    .conv-subject { font-weight: 500; color: #1f2d3d; }
    .conv-preview { font-size: 13px; color: #6f7b8a; margin-top: 4px; }
    .conv-customer { font-size: 14px; color: #3197d6; }
    .conv-assignee { font-size: 14px; color: #6f7b8a; }
    .status-badge { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 500; text-align: center; }
    .status-active { background: #d4f4dd; color: #0a6640; }
    .status-pending { background: #fff4cc; color: #b45309; }
    .status-closed { background: #e5e7eb; color: #4b5563; }
    .conv-date { font-size: 13px; color: #6f7b8a; }
  </style>
</head>
<body>
  <div class="dashboard">
    <h1>📬 Conversation Dashboard</h1>
    
    <div class="stats">
      <div class="stat-card">
        <div class="stat-value">147</div>
        <div class="stat-label">Active Conversations</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">23</div>
        <div class="stat-label">Pending</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">8</div>
        <div class="stat-label">Unassigned</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">4.2h</div>
        <div class="stat-label">Avg Response Time</div>
      </div>
    </div>

    <div class="filters">
      <div class="filter-group">
        <label>Status</label>
        <select>
          <option>All</option>
          <option>Active</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Mailbox</label>
        <select>
          <option>All Mailboxes</option>
          <option>Support</option>
          <option>Sales</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Assigned To</label>
        <select>
          <option>Everyone</option>
          <option>Me</option>
          <option>Unassigned</option>
        </select>
      </div>
      <div class="filter-group">
        <label>Search</label>
        <input type="text" placeholder="Search conversations...">
      </div>
    </div>

    <div class="conversations">
      <div class="conv-header">
        <div>SUBJECT</div>
        <div>CUSTOMER</div>
        <div>ASSIGNED</div>
        <div>STATUS</div>
        <div>UPDATED</div>
      </div>
      <div class="conv-row" onclick="alert('Open conversation detail')">
        <div>
          <div class="conv-subject">Payment issue with subscription</div>
          <div class="conv-preview">Customer having trouble with their credit card...</div>
        </div>
        <div class="conv-customer">Sarah Chen</div>
        <div class="conv-assignee">John Smith</div>
        <div><span class="status-badge status-active">Active</span></div>
        <div class="conv-date">2 hours ago</div>
      </div>
      <div class="conv-row" onclick="alert('Open conversation detail')">
        <div>
          <div class="conv-subject">Feature request: Dark mode</div>
          <div class="conv-preview">Would love to have a dark mode option...</div>
        </div>
        <div class="conv-customer">Mike Johnson</div>
        <div class="conv-assignee">Emily Davis</div>
        <div><span class="status-badge status-pending">Pending</span></div>
        <div class="conv-date">5 hours ago</div>
      </div>
      <div class="conv-row" onclick="alert('Open conversation detail')">
        <div>
          <div class="conv-subject">Login problems</div>
          <div class="conv-preview">Cannot log in with my account credentials...</div>
        </div>
        <div class="conv-customer">Alex Brown</div>
        <div class="conv-assignee">—</div>
        <div><span class="status-badge status-active">Active</span></div>
        <div class="conv-date">1 day ago</div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
