export const savedRepliesApp = {
  name: 'saved-replies',
  description: 'Manage and browse saved reply templates',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Saved Replies</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .search { flex: 1; max-width: 400px; }
    .search input { width: 100%; padding: 10px 16px; border: 1px solid #d9dee4; border-radius: 6px; font-size: 14px; }
    .btn { padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: none; background: #3197d6; color: white; }
    .replies-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px; }
    .reply-card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
    .reply-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    .reply-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .reply-name { font-size: 16px; font-weight: 600; color: #1f2d3d; }
    .reply-actions { display: flex; gap: 8px; }
    .icon-btn { padding: 4px 8px; border-radius: 4px; border: 1px solid #d9dee4; background: white; cursor: pointer; font-size: 14px; }
    .icon-btn:hover { background: #f7f9fc; }
    .reply-preview { font-size: 14px; color: #6f7b8a; line-height: 1.5; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin-bottom: 12px; }
    .reply-meta { font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <h1>💬 Saved Replies</h1>
    <div class="toolbar">
      <div class="search">
        <input type="text" placeholder="Search saved replies...">
      </div>
      <button class="btn">+ Create Reply</button>
    </div>
    <div class="replies-grid">
      <div class="reply-card" onclick="alert('Edit reply')">
        <div class="reply-header">
          <div class="reply-name">Welcome Message</div>
          <div class="reply-actions">
            <button class="icon-btn">✏️</button>
            <button class="icon-btn">🗑️</button>
          </div>
        </div>
        <div class="reply-preview">
          Hi there! Thanks for reaching out to our support team. We're here to help! Could you please provide more details about the issue you're experiencing?
        </div>
        <div class="reply-meta">Support mailbox • Used 47 times</div>
      </div>
      
      <div class="reply-card" onclick="alert('Edit reply')">
        <div class="reply-header">
          <div class="reply-name">Billing Issue Response</div>
          <div class="reply-actions">
            <button class="icon-btn">✏️</button>
            <button class="icon-btn">🗑️</button>
          </div>
        </div>
        <div class="reply-preview">
          I understand you're experiencing a billing issue. I've escalated this to our billing team and they'll review your account within the next 24 hours. You'll receive an email update shortly.
        </div>
        <div class="reply-meta">Billing mailbox • Used 23 times</div>
      </div>
      
      <div class="reply-card" onclick="alert('Edit reply')">
        <div class="reply-header">
          <div class="reply-name">Feature Request Acknowledgment</div>
          <div class="reply-actions">
            <button class="icon-btn">✏️</button>
            <button class="icon-btn">🗑️</button>
          </div>
        </div>
        <div class="reply-preview">
          Thank you for this feature suggestion! We really appreciate feedback from our users. I've passed this along to our product team for consideration in future updates.
        </div>
        <div class="reply-meta">All mailboxes • Used 34 times</div>
      </div>
      
      <div class="reply-card" onclick="alert('Edit reply')">
        <div class="reply-header">
          <div class="reply-name">Account Access Help</div>
          <div class="reply-actions">
            <button class="icon-btn">✏️</button>
            <button class="icon-btn">🗑️</button>
          </div>
        </div>
        <div class="reply-preview">
          Let me help you regain access to your account. Please try resetting your password using the "Forgot Password" link on the login page. If that doesn't work, I can manually send you a reset link.
        </div>
        <div class="reply-meta">Support mailbox • Used 89 times</div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
