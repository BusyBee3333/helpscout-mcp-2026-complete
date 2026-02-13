export const folderBrowserApp = {
  name: 'folder-browser',
  description: 'Browse and manage mailbox folders',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Folder Browser</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 300px 1fr; gap: 20px; }
    .sidebar { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); height: fit-content; }
    .main { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .mailbox-section { margin-bottom: 24px; }
    .mailbox-name { font-size: 14px; font-weight: 600; color: #6f7b8a; margin-bottom: 12px; text-transform: uppercase; }
    .folder-list { display: flex; flex-direction: column; gap: 4px; }
    .folder-item { padding: 10px 12px; border-radius: 6px; cursor: pointer; transition: background 0.2s; display: flex; justify-content: space-between; align-items: center; }
    .folder-item:hover { background: #f7f9fc; }
    .folder-item.active { background: #e0f2fe; color: #0369a1; font-weight: 500; }
    .folder-name { font-size: 14px; display: flex; align-items: center; gap: 8px; }
    .folder-count { font-size: 12px; padding: 2px 8px; border-radius: 10px; background: #e5e7eb; color: #4b5563; font-weight: 600; }
    .folder-item.active .folder-count { background: #0369a1; color: white; }
    .main-header { margin-bottom: 24px; }
    .main-title { font-size: 24px; font-weight: 600; color: #1f2d3d; margin-bottom: 8px; }
    .main-subtitle { font-size: 14px; color: #6f7b8a; }
    .conv-list { display: flex; flex-direction: column; gap: 12px; }
    .conv-item { padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; cursor: pointer; transition: all 0.2s; }
    .conv-item:hover { border-color: #3197d6; background: #f7f9fc; }
    .conv-subject { font-size: 15px; font-weight: 500; color: #1f2d3d; margin-bottom: 4px; }
    .conv-meta { font-size: 13px; color: #6f7b8a; }
  </style>
</head>
<body>
  <div class="container">
    <div class="sidebar">
      <div class="mailbox-section">
        <div class="mailbox-name">Support Mailbox</div>
        <div class="folder-list">
          <div class="folder-item active">
            <span class="folder-name">📥 Unassigned</span>
            <span class="folder-count">8</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">📋 My Conversations</span>
            <span class="folder-count">23</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">📌 Drafts</span>
            <span class="folder-count">2</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">👥 Assigned</span>
            <span class="folder-count">47</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">✅ Closed</span>
            <span class="folder-count">147</span>
          </div>
          <div class="folder-item">
            <span class="folder-name">🚫 Spam</span>
            <span class="folder-count">3</span>
          </div>
        </div>
      </div>
      
      <div class="mailbox-section">
        <div class="mailbox-name">Sales Mailbox</div>
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
    </div>
    
    <div class="main">
      <div class="main-header">
        <div class="main-title">📥 Unassigned</div>
        <div class="main-subtitle">8 conversations need to be assigned</div>
      </div>
      
      <div class="conv-list">
        <div class="conv-item" onclick="alert('Open conversation')">
          <div class="conv-subject">Payment issue with subscription</div>
          <div class="conv-meta">Sarah Chen • 2 hours ago • #1247</div>
        </div>
        <div class="conv-item" onclick="alert('Open conversation')">
          <div class="conv-subject">Login problems</div>
          <div class="conv-meta">Alex Brown • 1 day ago • #1245</div>
        </div>
        <div class="conv-item" onclick="alert('Open conversation')">
          <div class="conv-subject">Question about API limits</div>
          <div class="conv-meta">Emily Davis • 1 day ago • #1244</div>
        </div>
        <div class="conv-item" onclick="alert('Open conversation')">
          <div class="conv-subject">Account upgrade request</div>
          <div class="conv-meta">Mike Johnson • 2 days ago • #1238</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
