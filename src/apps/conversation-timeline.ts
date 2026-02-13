export const conversationTimelineApp = {
  name: 'conversation-timeline',
  description: 'Visual timeline view of conversation history and events',
  content: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Conversation Timeline</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background: #f7f9fc; padding: 20px; }
    .container { max-width: 900px; margin: 0 auto; }
    .header { background: white; padding: 24px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .conv-subject { font-size: 24px; font-weight: 600; color: #1f2d3d; margin-bottom: 8px; }
    .conv-meta { font-size: 14px; color: #6f7b8a; }
    .timeline { position: relative; padding-left: 40px; }
    .timeline::before { content: ''; position: absolute; left: 16px; top: 0; bottom: 0; width: 2px; background: #d9dee4; }
    .timeline-item { position: relative; background: white; padding: 20px; border-radius: 8px; margin-bottom: 16px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .timeline-marker { position: absolute; left: -29px; width: 12px; height: 12px; border-radius: 50%; background: #3197d6; border: 3px solid white; box-shadow: 0 0 0 2px #3197d6; }
    .timeline-marker.note { background: #f59e0b; box-shadow: 0 0 0 2px #f59e0b; }
    .timeline-marker.event { background: #10b981; box-shadow: 0 0 0 2px #10b981; }
    .timeline-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .timeline-author { font-weight: 600; color: #1f2d3d; }
    .timeline-type { font-size: 12px; color: #6f7b8a; margin-left: 8px; }
    .timeline-time { font-size: 13px; color: #9ca3af; }
    .timeline-body { color: #3e4c59; line-height: 1.6; }
    .event-label { display: inline-block; padding: 6px 12px; border-radius: 4px; font-size: 13px; font-weight: 500; background: #f0fdf4; color: #166534; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="conv-subject">Payment issue with subscription</div>
      <div class="conv-meta">Conversation #1247 • Created 2 days ago by Sarah Chen</div>
    </div>
    
    <div class="timeline">
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">Sarah Chen</span>
            <span class="timeline-type">(Customer)</span>
          </div>
          <div class="timeline-time">2 days ago • 2:34 PM</div>
        </div>
        <div class="timeline-body">
          Hi, I'm having trouble updating my payment method. Every time I try to save my new credit card, I get an error message. Can you help?
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker event"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">System Event</span>
          </div>
          <div class="timeline-time">2 days ago • 2:35 PM</div>
        </div>
        <div class="timeline-body">
          <span class="event-label">✓ Assigned to John Smith</span>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker event"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">System Event</span>
          </div>
          <div class="timeline-time">2 days ago • 2:35 PM</div>
        </div>
        <div class="timeline-body">
          <span class="event-label">🏷️ Tags added: billing, urgent</span>
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker note"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">John Smith</span>
            <span class="timeline-type">(Internal Note)</span>
          </div>
          <div class="timeline-time">2 days ago • 3:15 PM</div>
        </div>
        <div class="timeline-body">
          Checking with billing team - seems like a known issue with Visa cards from Canada. Should have a fix deployed by EOD.
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">John Smith</span>
            <span class="timeline-type">(Agent Reply)</span>
          </div>
          <div class="timeline-time">2 days ago • 4:30 PM</div>
        </div>
        <div class="timeline-body">
          Hi Sarah,<br><br>
          Thanks for reaching out! I've identified the issue - there's a temporary problem with processing Canadian Visa cards. Our engineering team is working on a fix that should be live within the next few hours.<br><br>
          In the meantime, if you have an alternative payment method (Mastercard or American Express), that should work without issues.<br><br>
          I'll follow up once the fix is deployed!
        </div>
      </div>
      
      <div class="timeline-item">
        <div class="timeline-marker event"></div>
        <div class="timeline-header">
          <div>
            <span class="timeline-author">System Event</span>
          </div>
          <div class="timeline-time">2 days ago • 4:31 PM</div>
        </div>
        <div class="timeline-body">
          <span class="event-label">Status changed: Active → Pending</span>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
  `,
};
