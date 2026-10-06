import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const analytics = (() => {
  const hasGtag = typeof window !== 'undefined' && typeof window.gtag === 'function';
  const noop = () => {};
  const gtagSafe = hasGtag ? (...a) => window.gtag(...a) : noop;
  const log = (...a) => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log('📊 Analytics (simulated):', ...a);
    }
  };
  return {
    event: (action, params) => {
      log(action, params);
      gtagSafe('event', action, params);
    },
  };
})();

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.error('Application Error:', error);
      // eslint-disable-next-line no-console
      console.error('Error Info:', errorInfo);
    }
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f7fafc, #edf2f7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          <div style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '600px', width: '100%', textAlign: 'center', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', border: '1px solid #e2e8f0' }}>
            <div style={{ fontSize: '64px', marginBottom: '20px' }}>🌾</div>
            <h1 style={{ color: '#1a365d', fontSize: '1.8rem', marginBottom: '15px', fontWeight: '600' }}>SugarTrade Global</h1>
            <h2 style={{ color: '#e53e3e', fontSize: '1.3rem', marginBottom: '20px', fontWeight: '500' }}>Oops! Something went wrong</h2>
            <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', marginBottom: '30px' }}>
              We're experiencing a technical issue with our import/export platform. Our team has been notified and is working to resolve this quickly.
            </p>
            <div style={{ marginBottom: '30px' }}>
              <button onClick={() => window.location.reload()} style={{ background: 'linear-gradient(135deg, #22c55e, #16a34a)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '25px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', marginRight: '15px', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.target.style.transform = 'translateY(-2px)'; e.target.style.boxShadow = '0 8px 25px rgba(34, 197, 94, 0.3)'; }}
                onMouseOut={(e) => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = 'none'; }}>🔄 Refresh Page</button>
              <button onClick={() => window.location.href = 'mailto:support@sugartradeglobal.com'} style={{ background: 'white', color: '#22c55e', border: '2px solid #22c55e', padding: '12px 24px', borderRadius: '25px', fontSize: '1rem', fontWeight: '600', cursor: 'pointer', transition: 'all 0.3s ease' }}
                onMouseOver={(e) => { e.target.style.background = '#22c55e'; e.target.style.color = 'white'; e.target.style.transform = 'translateY(-2px)'; }}
                onMouseOut={(e) => { e.target.style.background = 'white'; e.target.style.color = '#22c55e'; e.target.style.transform = 'translateY(0)'; }}>📧 Contact Support</button>
            </div>
            <div style={{ background: '#f7fafc', padding: '20px', borderRadius: '10px', fontSize: '0.9rem', color: '#718096' }}>
              <p><strong>Alternative Contact Methods:</strong></p>
              <p>📞 Phone: +91 98765 43210</p>
              <p>📧 Email: support@sugartradeglobal.com</p>
              <p>🌐 Website: www.sugartradeglobal.com</p>
            </div>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details style={{ marginTop: '20px', textAlign: 'left', background: '#fef2f2', padding: '15px', borderRadius: '8px', border: '1px solid #fecaca' }}>
                <summary style={{ cursor: 'pointer', color: '#dc2626', fontWeight: '600', marginBottom: '10px' }}>🔍 Technical Details (Development Mode)</summary>
                <pre style={{ fontSize: '0.8rem', color: '#7f1d1d', overflow: 'auto', maxHeight: '200px' }}>
                  {this.state.error && this.state.error.toString()}
                  <br />
                  {this.state.errorInfo.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function measureWebVitals() {
  reportWebVitals((metric) => {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.log(`📊 ${metric.name}:`, metric.value);
    }
    if (process.env.NODE_ENV === 'production') {
      analytics.event(metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true,
      });
    }
  });
}

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-console
  console.log(
    `%c🌾 SugarTrade Global %c
    
🚀 Welcome to our Import/Export Business Platform!
📊 Professional Agricultural Trade Solution
🌍 Serving Global Markets Since 2010

%cDeveloper Info:
• Built with React 18 & Modern Web Technologies
• Optimized for Performance & SEO  
• Responsive Design for All Devices
• Student Portal Integration Available

%c💡 Need help? Contact: support@sugartradeglobal.com
`,
    'color: #22c55e; font-size: 20px; font-weight: bold;',
    'color: #4a5568; font-size: 14px; line-height: 1.6;',
    'color: #2d3748; font-size: 12px; font-weight: 600;',
    'color: #718096; font-size: 11px;'
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
measureWebVitals();

if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    fetch('/sw.js')
      .then((res) => (res.status === 200 ? navigator.serviceWorker.register('/sw.js') : Promise.reject(new Error('SW not found'))))
      .then((reg) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.log('SW registered:', reg.scope);
        }
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                if (window.confirm('🔄 New version available! Refresh to update?')) {
                  window.location.reload();
                }
              }
            });
          }
        });
      })
      .catch((err) => {
        if (process.env.NODE_ENV === 'development') {
          // eslint-disable-next-line no-console
          console.warn('SW registration failed:', err);
        }
      });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document.title = 'SugarTrade Global - Premium Sugarcane Import & Export Business';
  if (process.env.NODE_ENV === 'development') {
    document.body.setAttribute('data-version', process.env.REACT_APP_VERSION || '1.0.0');
    document.body.setAttribute('data-build', Date.now().toString());
  }
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('prefers-dark');
  }
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.body.classList.add('prefers-reduced-motion');
  }
});

window.addEventListener('unhandledrejection', (e) => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.error('Unhandled promise rejection:', e.reason);
  }
  e.preventDefault();
});

if (process.env.NODE_ENV === 'development' && 'PerformanceObserver' in window) {
  try {
    const obs = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.entryType === 'navigation') {
          // eslint-disable-next-line no-console
          console.log('🚀 Navigation Performance:', {
            'DNS Lookup': `${Math.round(entry.domainLookupEnd - entry.domainLookupStart)}ms`,
            'TCP Connection': `${Math.round(entry.connectEnd - entry.connectStart)}ms`,
            'Server Response': `${Math.round(entry.responseEnd - entry.requestStart)}ms`,
            'DOM Content Loaded': `${Math.round(entry.domContentLoadedEventEnd - entry.navigationStart)}ms`,
            'Full Load': `${Math.round(entry.loadEventEnd - entry.navigationStart)}ms`,
          });
        }
        if (entry.entryType === 'resource' && entry.name.includes('static/')) {
          // eslint-disable-next-line no-console
          console.log(`📦 Resource Load: ${entry.name.split('/').pop()} - ${Math.round(entry.duration)}ms`);
        }
      }
    });
    obs.observe({ entryTypes: ['navigation', 'resource', 'paint'] });
  } catch (e) {
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line no-console
      console.warn('Performance Observer not fully supported');
    }
  }
}
export { ErrorBoundary };