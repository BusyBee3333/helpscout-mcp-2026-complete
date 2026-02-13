export const customerGridApp = {
  name: 'customer-grid',
  description: 'Grid view of all customers with search and filtering',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Customers</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1400px; margin: 0 auto; }
    h1 { font-size: 28px; color: #1f2d3d; margin-bottom: 20px; }
    .toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .search { flex: 1; max-width: 400px; }
    .search input { width: 100%; padding: 10px 16px; border: 1px solid #d9dee4; border-radius: 6px; font-size: 14px; }
    .btn { padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: none; }
    .btn-primary { background: #3197d6; color: white; }
    .customer-grid { background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .grid-header { display: grid; grid-template-columns: 250px 200px 150px 1fr 120px; padding: 12px 16px; background: #f7f9fc; border-bottom: 1px solid #d9dee4; font-size: 12px; font-weight: 600; color: #6f7b8a; }
    .grid-row { display: grid; grid-template-columns: 250px 200px 150px 1fr 120px; padding: 16px; border-bottom: 1px solid #f0f2f5; align-items: center; cursor: pointer; transition: background 0.2s; }
    .grid-row:hover { background: #f7f9fc; }
    .customer-name { font-weight: 500; color: #1f2d3d; }
    .customer-email { font-size: 13px; color: #3197d6; margin-top: 2px; }
    .customer-phone { font-size: 14px; color: #6f7b8a; }
    .customer-org { font-size: 14px; color: #6f7b8a; }
    .customer-location { font-size: 14px; color: #6f7b8a; }
    .customer-count { font-size: 13px; color: #6f7b8a; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <h1>👥 Customers</h1>
    <div class="toolbar">
      <div class="search">
        <input type="text" placeholder="Search customers by name, email, or organization...">
      </div>
      <button class="btn btn-primary">+ Add Customer</button>
    </div>
    <div class="customer-grid">
      <div class="grid-header">
        <div>NAME</div>
        <div>EMAIL</div>
        <div>PHONE</div>
        <div>ORGANIZATION</div>
        <div>CONVERSATIONS</div>
      </div>
      <div class="grid-row" onclick="alert('Open customer detail')">
        <div>
          <div class="customer-name">Sarah Chen</div>
          <div class="customer-email">sarah.chen@example.com</div>
        </div>
        <div class="customer-email">sarah.chen@example.com</div>
        <div class="customer-phone">+1 (555) 123-4567</div>
        <div class="customer-org">Acme Corp</div>
        <div class="customer-count">12 conversations</div>
      </div>
      <div class="grid-row" onclick="alert('Open customer detail')">
        <div>
          <div class="customer-name">Mike Johnson</div>
          <div class="customer-email">mike.j@techstart.io</div>
        </div>
        <div class="customer-email">mike.j@techstart.io</div>
        <div class="customer-phone">+1 (555) 987-6543</div>
        <div class="customer-org">TechStart</div>
        <div class="customer-count">8 conversations</div>
      </div>
      <div class="grid-row" onclick="alert('Open customer detail')">
        <div>
          <div class="customer-name">Emily Davis</div>
          <div class="customer-email">emily@startup.com</div>
        </div>
        <div class="customer-email">emily@startup.com</div>
        <div class="customer-phone">+1 (555) 456-7890</div>
        <div class="customer-org">Startup Inc</div>
        <div class="customer-count">5 conversations</div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
