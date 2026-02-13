export const mailboxOverviewApp = {
  name: 'mailbox-overview',
  description: 'Overview of all mailboxes with folder counts and activity',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Mailbox Overview</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .mailboxes { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 20px; }
    .mailbox-card { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
    .mailbox-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    .mailbox-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px; }
    .mailbox-name { font-size: 18px; font-weight: 600; color: #1f2d3d; }
    .mailbox-email { font-size: 13px; color: #6f7b8a; margin-bottom: 20px; }
    .folder-list { display: flex; flex-direction: column; gap: 12px; }
    .folder-item { display: flex; justify-content: space-between; align-items: center; padding: 8px; border-radius: 4px; background: #f7f9fc; }
    .folder-name { font-size: 14px; color: #3e4c59; }
    .folder-count { font-size: 14px; font-weight: 600; color: #3197d6; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📮 Mailboxes</h1>
    <div class="mailboxes">
      <div class="mailbox-card" onclick="alert('Open mailbox detail')">
        <div class="mailbox-header">
          <div class="mailbox-name">Support</div>
          <div style="font-size: 24px;">💬</div>
        </div>
        <div class="mailbox-email">support@company.com</div>
        <div class="folder-list">
          <div class="folder-item">
            <span class="folder-name">📥 Unassigned</span>
            <span class="folder-count">8</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">📋 My Conversations</span>
            <span class="folder-count">23</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">✅ Closed</span>
            <span class="folder-count">147</span>
          </div>
        </div>
      </div>
      <div class="mailbox-card" onclick="alert('Open mailbox detail')">
        <div class="mailbox-header">
          <div class="mailbox-name">Sales</div>
          <div style="font-size: 24px;">💰</div>
        </div>
        <div class="mailbox-email">sales@company.com</div>
        <div class="folder-list">
          <div class="folder-item">
            <span class="folder-name">📥 Unassigned</span>
            <span class="folder-count">3</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">📋 My Conversations</span>
            <span class="folder-count">12</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">✅ Closed</span>
            <span class="folder-count">89</span>
          </div>
        </div>
      </div>
      <div class="mailbox-card" onclick="alert('Open mailbox detail')">
        <div class="mailbox-header">
          <div class="mailbox-name">Billing</div>
          <div style="font-size: 24px;">💳</div>
        </div>
        <div class="mailbox-email">billing@company.com</div>
        <div class="folder-list">
          <div class="folder-item">
            <span class="folder-name">📥 Unassigned</span>
            <span class="folder-count">2</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">📋 My Conversations</span>
            <span class="folder-count">7</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">✅ Closed</span>
            <span class="folder-count">64</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
