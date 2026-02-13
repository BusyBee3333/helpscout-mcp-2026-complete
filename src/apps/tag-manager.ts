export const tagManagerApp = {
  name: 'tag-manager',
  description: 'Manage tags with usage stats and color coding',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Tag Manager</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1000px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .btn { padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: none; background: #3197d6; color: white; }
    .tags-grid { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .grid-header { display: grid; grid-template-columns: 1fr 100px 150px 120px; padding: 12px 16px; background: #f7f9fc; border-bottom: 1px solid #d9dee4; font-size: 12px; font-weight: 600; color: #6f7b8a; }
    .grid-row { display: grid; grid-template-columns: 1fr 100px 150px 120px; padding: 16px; border-bottom: 1px solid #f0f2f5; align-items: center; }
    .tag-display { display: inline-flex; align-items: center; gap: 8px; }
    .tag-color { width: 16px; height: 16px; border-radius: 3px; }
    .tag-name { font-size: 14px; font-weight: 500; color: #1f2d3d; }
    .tag-count { font-size: 14px; color: #6f7b8a; text-align: center; }
    .tag-created { font-size: 13px; color: #6f7b8a; }
    .tag-actions { display: flex; gap: 8px; justify-content: flex-end; }
    .action-btn { padding: 6px 12px; font-size: 12px; border-radius: 4px; cursor: pointer; border: 1px solid #d9dee4; background: white; }
    .action-btn:hover { background: #f7f9fc; }
  </style>
</head>
<body>
  <div class="container">
    <h1>🏷️ Tag Manager</h1>
    <div class="toolbar">
      <div style="font-size: 14px; color: #6f7b8a;">Managing 12 tags</div>
      <button class="btn">+ Create Tag</button>
    </div>
    <div class="tags-grid">
      <div class="grid-header">
        <div>TAG NAME</div>
        <div style="text-align: center;">USAGE</div>
        <div>CREATED</div>
        <div style="text-align: right;">ACTIONS</div>
      </div>
      <div class="grid-row">
        <div class="tag-display">
          <div class="tag-color" style="background: #ef4444;"></div>
          <span class="tag-name">urgent</span>
        </div>
        <div class="tag-count">23 conversations</div>
        <div class="tag-created">Jan 2024</div>
        <div class="tag-actions">
          <button class="action-btn">Edit</button>
          <button class="action-btn" style="color: #ef4444;">Delete</button>
        </div>
      </div>
      <div class="grid-row">
        <div class="tag-display">
          <div class="tag-color" style="background: #3b82f6;"></div>
          <span class="tag-name">billing</span>
        </div>
        <div class="tag-count">47 conversations</div>
        <div class="tag-created">Dec 2023</div>
        <div class="tag-actions">
          <button class="action-btn">Edit</button>
          <button class="action-btn" style="color: #ef4444;">Delete</button>
        </div>
      </div>
      <div class="grid-row">
        <div class="tag-display">
          <div class="tag-color" style="background: #10b981;"></div>
          <span class="tag-name">feature-request</span>
        </div>
        <div class="tag-count">31 conversations</div>
        <div class="tag-created">Nov 2023</div>
        <div class="tag-actions">
          <button class="action-btn">Edit</button>
          <button class="action-btn" style="color: #ef4444;">Delete</button>
        </div>
      </div>
      <div class="grid-row">
        <div class="tag-display">
          <div class="tag-color" style="background: #f59e0b;"></div>
          <span class="tag-name">bug</span>
        </div>
        <div class="tag-count">18 conversations</div>
        <div class="tag-created">Oct 2023</div>
        <div class="tag-actions">
          <button class="action-btn">Edit</button>
          <button class="action-btn" style="color: #ef4444;">Delete</button>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
