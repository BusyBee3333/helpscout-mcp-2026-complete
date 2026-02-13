export const teamOverviewApp = {
  name: 'team-overview',
  description: 'Team structure and member statistics',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Teams</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1200px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .teams { display: grid; gap: 20px; }
    .team-card { background: white; border-radius: 8px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .team-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .team-name { font-size: 20px; font-weight: 600; color: #1f2d3d; }
    .team-count { font-size: 14px; color: #6f7b8a; }
    .members-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 16px; }
    .member-card { padding: 16px; border: 1px solid #e5e7eb; border-radius: 6px; display: flex; align-items: center; gap: 12px; }
    .avatar { width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 16px; }
    .member-info { flex: 1; }
    .member-name { font-size: 14px; font-weight: 500; color: #1f2d3d; margin-bottom: 2px; }
    .member-email { font-size: 12px; color: #6f7b8a; }
    .member-role { font-size: 11px; color: #9ca3af; margin-top: 2px; }
  </style>
</head>
<body>
  <div class="container">
    <h1>👥 Teams</h1>
    
    <div class="teams">
      <div class="team-card">
        <div class="team-header">
          <div class="team-name">Support Team</div>
          <div class="team-count">6 members</div>
        </div>
        <div class="members-grid">
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">JS</div>
            <div class="member-info">
              <div class="member-name">John Smith</div>
              <div class="member-email">john@company.com</div>
              <div class="member-role">Team Lead</div>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);">ED</div>
            <div class="member-info">
              <div class="member-name">Emily Davis</div>
              <div class="member-email">emily@company.com</div>
              <div class="member-role">Senior Agent</div>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);">MJ</div>
            <div class="member-info">
              <div class="member-name">Mike Johnson</div>
              <div class="member-email">mike@company.com</div>
              <div class="member-role">Agent</div>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);">SW</div>
            <div class="member-info">
              <div class="member-name">Sarah Wilson</div>
              <div class="member-email">sarah@company.com</div>
              <div class="member-role">Agent</div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="team-card">
        <div class="team-header">
          <div class="team-name">Sales Team</div>
          <div class="team-count">4 members</div>
        </div>
        <div class="members-grid">
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #fa709a 0%, #fee140 100%);">AB</div>
            <div class="member-info">
              <div class="member-name">Alex Brown</div>
              <div class="member-email">alex@company.com</div>
              <div class="member-role">Sales Lead</div>
            </div>
          </div>
          <div class="member-card">
            <div class="avatar" style="background: linear-gradient(135deg, #30cfd0 0%, #330867 100%);">LG</div>
            <div class="member-info">
              <div class="member-name">Lisa Garcia</div>
              <div class="member-email">lisa@company.com</div>
              <div class="member-role">Sales Rep</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
