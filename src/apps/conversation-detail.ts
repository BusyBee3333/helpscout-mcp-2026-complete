export const conversationDetailApp = {
  name: 'conversation-detail',
  description: 'Detailed view of a single conversation with thread history and actions',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Conversation Detail</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { 
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      background: #f7f9fc;
      display: flex;
      height: 100vh;
    }
    .sidebar { width: 300px; background: white; border-right: 1px solid #d9dee4; padding: 20px; overflow-y: auto; }
    .main { flex: 1; display: flex; flex-direction: column; }
    .header { background: white; padding: 16px 24px; border-bottom: 1px solid #d9dee4; display: flex; justify-content: space-between; align-items: center; }
    .subject { font-size: 20px; font-weight: 600; color: #1f2d3d; }
    .actions { display: flex; gap: 8px; }
    .btn { padding: 8px 16px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: 1px solid #d9dee4; background: white; }
    .btn:hover { background: #f7f9fc; }
    .btn-primary { background: #3197d6; color: white; border: none; }
    .btn-primary:hover { background: #2578af; }
    .threads { flex: 1; overflow-y: auto; padding: 24px; }
    .thread { background: white; border-radius: 8px; padding: 20px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .thread-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .thread-author { font-weight: 600; color: #1f2d3d; }
    .thread-time { font-size: 13px; color: #6f7b8a; }
    .thread-body { color: #3e4c59; line-height: 1.6; }
    .thread-note { background: #fff9e6; border-left: 4px solid #f59e0b; }
    .sidebar-section { margin-bottom: 24px; }
    .sidebar-label { font-size: 12px; font-weight: 600; color: #6f7b8a; margin-bottom: 8px; text-transform: uppercase; }
    .sidebar-value { font-size: 14px; color: #1f2d3d; }
    .tag { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 12px; background: #e0e7ff; color: #3730a3; margin-right: 4px; margin-bottom: 4px; }
  </style>
</head>
<body>
  <div class="sidebar">
    <div class="sidebar-section">
      <div class="sidebar-label">Customer</div>
      <div class="sidebar-value" style="color: #3197d6; font-weight: 500;">Sarah Chen</div>
      <div style="font-size: 13px; color: #6f7b8a; margin-top: 4px;">sarah.chen@example.com</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Status</div>
      <div class="sidebar-value">
        <select style="width: 100%; padding: 8px; border: 1px solid #d9dee4; border-radius: 4px;">
          <option>Active</option>
          <option>Pending</option>
          <option>Closed</option>
        </select>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Assigned To</div>
      <div class="sidebar-value">
        <select style="width: 100%; padding: 8px; border: 1px solid #d9dee4; border-radius: 4px;">
          <option>John Smith</option>
          <option>Emily Davis</option>
          <option>Unassigned</option>
        </select>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Tags</div>
      <div>
        <span class="tag">billing</span>
        <span class="tag">urgent</span>
      </div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Mailbox</div>
      <div class="sidebar-value">Support</div>
    </div>
    <div class="sidebar-section">
      <div class="sidebar-label">Created</div>
      <div class="sidebar-value" style="font-size: 13px;">Jan 15, 2025 2:34 PM</div>
    </div>
  </div>
  
  <div class="main">
    <div class="header">
      <div class="subject">Payment issue with subscription</div>
      <div class="actions">
        <button class="btn">Add Note</button>
        <button class="btn btn-primary">Reply</button>
      </div>
    </div>
    
    <div class="threads">
      <div class="thread">
        <div class="thread-header">
          <div class="thread-author">Sarah Chen (Customer)</div>
          <div class="thread-time">2 hours ago</div>
        </div>
        <div class="thread-body">
          Hi, I'm having trouble updating my payment method. Every time I try to save my new credit card, I get an error message. Can you help?
        </div>
      </div>
      
      <div class="thread thread-note">
        <div class="thread-header">
          <div class="thread-author">🔒 John Smith (Internal Note)</div>
          <div class="thread-time">1 hour ago</div>
        </div>
        <div class="thread-body">
          Checking with billing team - seems like a known issue with Visa cards from Canada. Should have a fix deployed by EOD.
        </div>
      </div>
      
      <div class="thread">
        <div class="thread-header">
          <div class="thread-author">John Smith (Agent)</div>
          <div class="thread-time">30 minutes ago</div>
        </div>
        <div class="thread-body">
          Hi Sarah,<br><br>
          Thanks for reaching out! I've identified the issue - there's a temporary problem with processing Canadian Visa cards. Our engineering team is working on a fix that should be live within the next few hours.<br><br>
          In the meantime, if you have an alternative payment method (Mastercard or American Express), that should work without issues.<br><br>
          I'll follow up once the fix is deployed!<br><br>
          Best regards,<br>
          John
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
