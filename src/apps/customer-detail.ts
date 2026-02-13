export const customerDetailApp = {
  name: 'customer-detail',
  description: 'Detailed customer profile with history and contact information',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customer Detail</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; }
    .container { max-width: 1200px; margin: 0 auto; padding: 20px; display: grid; grid-template-columns: 350px 1fr; gap: 20px; }
    .sidebar { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .main { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .avatar { width: 80px; height: 80px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 32px; font-weight: bold; margin: 0 auto 16px; }
    .customer-name { font-size: 22px; font-weight: 600; color: #1f2d3d; text-align: center; margin-bottom: 8px; }
    .customer-org { font-size: 14px; color: #6f7b8a; text-align: center; margin-bottom: 24px; }
    .info-section { margin-bottom: 24px; }
    .info-label { font-size: 12px; font-weight: 600; color: #6f7b8a; margin-bottom: 8px; text-transform: uppercase; }
    .info-value { font-size: 14px; color: #1f2d3d; margin-bottom: 8px; }
    .info-value a { color: #3197d6; text-decoration: none; }
    .btn { width: 100%; padding: 10px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: 1px solid #d9dee4; background: white; margin-bottom: 8px; }
    .btn:hover { background: #f7f9fc; }
    .tabs { display: flex; border-bottom: 1px solid #d9dee4; margin-bottom: 24px; }
    .tab { padding: 12px 24px; font-size: 14px; font-weight: 500; color: #6f7b8a; cursor: pointer; border-bottom: 2px solid transparent; }
    .tab.active { color: #3197d6; border-bottom-color: #3197d6; }
    .conversation-item { padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; margin-bottom: 12px; cursor: pointer; }
    .conversation-item:hover { background: #f7f9fc; }
    .conv-subject { font-weight: 500; color: #1f2d3d; margin-bottom: 4px; }
    .conv-meta { font-size: 13px; color: #6f7b8a; }
    .status-badge { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; margin-left: 8px; }
    .status-active { background: #d4f4dd; color: #0a6640; }
    .status-closed { background: #e5e7eb; color: #4b5563; }
  </style>
</head>
<body>
  <div class="container">
    <div class="sidebar">
      <div class="avatar">SC</div>
      <div class="customer-name">Sarah Chen</div>
      <div class="customer-org">Acme Corporation</div>
      
      <button class="btn">📧 Send Email</button>
      <button class="btn">💬 Start Conversation</button>
      
      <div class="info-section">
        <div class="info-label">Email</div>
        <div class="info-value"><a href="mailto:sarah.chen@example.com">sarah.chen@example.com</a></div>
      </div>
      
      <div class="info-section">
        <div class="info-label">Phone</div>
        <div class="info-value"><a href="tel:+15551234567">+1 (555) 123-4567</a></div>
      </div>
      
      <div class="info-section">
        <div class="info-label">Job Title</div>
        <div class="info-value">Product Manager</div>
      </div>
      
      <div class="info-section">
        <div class="info-label">Location</div>
        <div class="info-value">San Francisco, CA</div>
      </div>
      
      <div class="info-section">
        <div class="info-label">Customer Since</div>
        <div class="info-value">January 2024</div>
      </div>
      
      <div class="info-section">
        <div class="info-label">Background</div>
        <div class="info-value" style="font-size: 13px;">Long-time customer, frequently provides valuable product feedback.</div>
      </div>
    </div>
    
    <div class="main">
      <div class="tabs">
        <div class="tab active">Conversations (12)</div>
        <div class="tab">Notes (3)</div>
        <div class="tab">Activity</div>
      </div>
      
      <div class="conversation-item" onclick="alert('Open conversation')">
        <div class="conv-subject">
          Payment issue with subscription
          <span class="status-badge status-active">Active</span>
        </div>
        <div class="conv-meta">Last updated 2 hours ago • Assigned to John Smith</div>
      </div>
      
      <div class="conversation-item" onclick="alert('Open conversation')">
        <div class="conv-subject">
          Feature request: Dark mode
          <span class="status-badge status-closed">Closed</span>
        </div>
        <div class="conv-meta">Closed 3 days ago • Assigned to Emily Davis</div>
      </div>
      
      <div class="conversation-item" onclick="alert('Open conversation')">
        <div class="conv-subject">
          Question about API limits
          <span class="status-badge status-closed">Closed</span>
        </div>
        <div class="conv-meta">Closed 1 week ago • Assigned to John Smith</div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
