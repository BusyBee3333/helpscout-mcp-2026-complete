export const conversationGridApp = {
  name: 'conversation-grid',
  description: 'Alternative grid layout for conversations with card view',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Conversations Grid</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .conv-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(350px, 1fr)); gap: 16px; }
    .conv-card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
    .conv-card:hover { transform: translateY(-2px); box-shadow: 0 4px 8px rgba(0,0,0,0.15); }
    .conv-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 12px; }
    .conv-number { font-size: 12px; color: #9ca3af; font-weight: 500; }
    .status-badge { padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 500; }
    .status-active { background: #d4f4dd; color: #0a6640; }
    .status-pending { background: #fff4cc; color: #b45309; }
    .conv-subject { font-size: 16px; font-weight: 600; color: #1f2d3d; margin-bottom: 8px; }
    .conv-preview { font-size: 13px; color: #6f7b8a; line-height: 1.5; margin-bottom: 16px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
    .conv-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 12px; border-top: 1px solid #f0f2f5; }
    .customer-info { display: flex; align-items: center; gap: 8px; }
    .customer-avatar { width: 28px; height: 28px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 11px; font-weight: 600; }
    .customer-name { font-size: 13px; color: #3197d6; font-weight: 500; }
    .conv-time { font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <h1>📬 Conversations</h1>
    <div class="conv-grid">
      <div class="conv-card" onclick="alert('Open conversation')">
        <div class="conv-header">
          <span class="conv-number">#1247</span>
          <span class="status-badge status-active">Active</span>
        </div>
        <div class="conv-subject">Payment issue with subscription</div>
        <div class="conv-preview">Customer having trouble with their credit card. Error appears when trying to update payment method...</div>
        <div class="conv-footer">
          <div class="customer-info">
            <div class="customer-avatar">SC</div>
            <span class="customer-name">Sarah Chen</span>
          </div>
          <span class="conv-time">2h ago</span>
        </div>
      </div>
      
      <div class="conv-card" onclick="alert('Open conversation')">
        <div class="conv-header">
          <span class="conv-number">#1246</span>
          <span class="status-badge status-pending">Pending</span>
        </div>
        <div class="conv-subject">Feature request: Dark mode</div>
        <div class="conv-preview">Would love to have a dark mode option for the application. Many users work late hours...</div>
        <div class="conv-footer">
          <div class="customer-info">
            <div class="customer-avatar" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">MJ</div>
            <span class="customer-name">Mike Johnson</span>
          </div>
          <span class="conv-time">5h ago</span>
        </div>
      </div>
      
      <div class="conv-card" onclick="alert('Open conversation')">
        <div class="conv-header">
          <span class="conv-number">#1245</span>
          <span class="status-badge status-active">Active</span>
        </div>
        <div class="conv-subject">Login problems</div>
        <div class="conv-preview">Cannot log in with my account credentials. Password reset doesn't seem to work either...</div>
        <div class="conv-footer">
          <div class="customer-info">
            <div class="customer-avatar" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">AB</div>
            <span class="customer-name">Alex Brown</span>
          </div>
          <span class="conv-time">1d ago</span>
        </div>
      </div>
      
      <div class="conv-card" onclick="alert('Open conversation')">
        <div class="conv-header">
          <span class="conv-number">#1244</span>
          <span class="status-badge status-active">Active</span>
        </div>
        <div class="conv-subject">Question about API limits</div>
        <div class="conv-preview">What are the rate limits for the API? We're planning to scale our integration...</div>
        <div class="conv-footer">
          <div class="customer-info">
            <div class="customer-avatar" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">ED</div>
            <span class="customer-name">Emily Davis</span>
          </div>
          <span class="conv-time">1d ago</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
