export const searchResultsApp = {
  name: 'search-results',
  description: 'Search results interface for finding conversations and customers',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Search Results</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 1000px; margin: 0 auto; }
    .search-bar { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .search-bar input { width: 100%; padding: 12px 16px; border: 2px solid #3197d6; border-radius: 6px; font-size: 16px; }
    .results-header { font-size: 14px; color: #6f7b8a; margin-bottom: 16px; }
    .results-count { font-weight: 600; color: #1f2d3d; }
    .tabs { display: flex; gap: 8px; margin-bottom: 20px; }
    .tab { padding: 10px 20px; border-radius: 6px; font-size: 14px; font-weight: 500; cursor: pointer; border: 1px solid #d9dee4; background: white; }
    .tab.active { background: #3197d6; color: white; border-color: #3197d6; }
    .result-item { background: white; padding: 20px; border-radius: 8px; margin-bottom: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.2s; }
    .result-item:hover { transform: translateX(4px); box-shadow: 0 2px 6px rgba(0,0,0,0.15); }
    .result-type { display: inline-block; padding: 4px 8px; border-radius: 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; margin-bottom: 8px; }
    .type-conversation { background: #e0f2fe; color: #0369a1; }
    .type-customer { background: #fef3c7; color: #92400e; }
    .result-title { font-size: 16px; font-weight: 600; color: #1f2d3d; margin-bottom: 8px; }
    .result-snippet { font-size: 14px; color: #6f7b8a; line-height: 1.5; margin-bottom: 8px; }
    .highlight { background: #fef08a; padding: 2px 4px; border-radius: 2px; }
    .result-meta { font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="search-bar">
      <input type="text" placeholder="Search conversations, customers, and more..." value="payment issue">
    </div>
    
    <div class="results-header">
      Found <span class="results-count">12 results</span> for "payment issue"
    </div>
    
    <div class="tabs">
      <button class="tab active">All (12)</button>
      <button class="tab">Conversations (8)</button>
      <button class="tab">Customers (3)</button>
      <button class="tab">Articles (1)</button>
    </div>
    
    <div class="result-item" onclick="alert('Open conversation')">
      <span class="result-type type-conversation">Conversation #1247</span>
      <div class="result-title">Payment issue with subscription</div>
      <div class="result-snippet">
        Customer having trouble with their credit card. Error appears when trying to update <span class="highlight">payment</span> method. The <span class="highlight">issue</span> started yesterday...
      </div>
      <div class="result-meta">Sarah Chen • Active • 2 hours ago</div>
    </div>
    
    <div class="result-item" onclick="alert('Open conversation')">
      <span class="result-type type-conversation">Conversation #1189</span>
      <div class="result-title">Billing problem - double charge</div>
      <div class="result-snippet">
        I was charged twice for my subscription this month. Can you help resolve this <span class="highlight">payment issue</span>?
      </div>
      <div class="result-meta">Mike Johnson • Closed • 3 days ago</div>
    </div>
    
    <div class="result-item" onclick="alert('Open customer')">
      <span class="result-type type-customer">Customer</span>
      <div class="result-title">Sarah Chen</div>
      <div class="result-snippet">
        Background: VIP customer, frequently reports <span class="highlight">payment issues</span>. Works at Acme Corp as Product Manager.
      </div>
      <div class="result-meta">sarah.chen@example.com • 12 conversations</div>
    </div>
    
    <div class="result-item" onclick="alert('Open conversation')">
      <span class="result-type type-conversation">Conversation #1156</span>
      <div class="result-title">Can't complete checkout</div>
      <div class="result-snippet">
        Checkout process fails at the <span class="highlight">payment</span> step. Tried multiple cards, same <span class="highlight">issue</span>.
      </div>
      <div class="result-meta">Alex Brown • Closed • 1 week ago</div>
    </div>
  </div>
</body>
</html>
  `,
};
