import { useEffect, useRef } from 'react'

function App() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.5
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)'
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Background Canvas */}
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />

      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src="/HARDWARE_PULSE_LOGO_LANDSCAPE.png" alt="HardwarePulse" className="h-8" />
          <div className="flex items-center gap-8">
            <a href="#features" className="text-gray-300 hover:text-sky-400">Features</a>
            <a href="#support" className="text-gray-300 hover:text-sky-400">Support</a>
            <a href="#business" className="text-gray-300 hover:text-sky-400">For Business</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Download Focused */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-sky-500/20 rounded-2xl flex items-center justify-center">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advanced Hardware Diagnostics
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Real-time hardware monitoring and optimization. Keep your PC running at peak performance with comprehensive system diagnostics.
          </p>

          {/* Download Card */}
          <div className="max-w-2xl mx-auto bg-gray-800/50 border border-gray-700 rounded-2xl p-8 mb-8 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-6">
              <div className="text-left">
                <h2 className="text-2xl font-bold text-white mb-2">HardwarePulse Pro</h2>
                <p className="text-gray-400">Version 2026.02.27 • Windows 10/11</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-sky-400">FREE</div>
                <p className="text-sm text-gray-400">For Personal Use</p>
              </div>
            </div>

            <a href="/HardwarePulse%20Setup%201.0.0.exe" download="HardwarePulse Setup 1.0.0.exe">
              <button className="w-full py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-lg text-lg transition-all hover:shadow-lg hover:shadow-sky-500/50 flex items-center justify-center gap-3 cursor-pointer">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Free Installer
              </button>
            </a>

            {/* Installation Instructions */}
            <div className="mt-6 bg-sky-500/10 border border-sky-500/30 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400 shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="16" x2="12" y2="12"></line>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
                <div className="text-sm text-gray-300">
                  <p className="font-semibold text-white mb-1">Installation Note:</p>
                  <p>Windows might show a security warning because this is a new app. Simply click <span className="text-sky-400 font-semibold">"More info"</span> then <span className="text-sky-400 font-semibold">"Run anyway"</span> to proceed with installation.</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Malware Free</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
                <span>Safe Download</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <span>Quick Install</span>
              </div>
            </div>

            <p className="mt-4 text-xs text-gray-500 text-center">
              By downloading, you agree to our Terms of Service and Privacy Policy
            </p>
          </div>

          {/* System Requirements */}
          <div className="text-left max-w-2xl mx-auto">
            <button className="text-gray-400 hover:text-sky-400 text-sm flex items-center gap-2 mx-auto">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
              System requirements and compatibility
            </button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">5M+</div>
            <div className="text-sm text-gray-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">Real-Time</div>
            <div className="text-sm text-gray-400">Monitoring</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">24/7</div>
            <div className="text-sm text-gray-400">Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-sky-400 mb-1">4.8★</div>
            <div className="text-sm text-gray-400">User Rating</div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="max-w-6xl mx-auto px-6 py-20 border-t border-gray-800">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-3">Complete Hardware Monitoring</h2>
          <p className="text-gray-400">Track every component in real-time</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                <rect x="9" y="9" width="6" height="6"></rect>
                <line x1="9" y1="1" x2="9" y2="4"></line>
                <line x1="15" y1="1" x2="15" y2="4"></line>
                <line x1="9" y1="20" x2="9" y2="23"></line>
                <line x1="15" y1="20" x2="15" y2="23"></line>
                <line x1="20" y1="9" x2="23" y2="9"></line>
                <line x1="20" y1="14" x2="23" y2="14"></line>
                <line x1="1" y1="9" x2="4" y2="9"></line>
                <line x1="1" y1="14" x2="4" y2="14"></line>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">CPU Monitoring</h3>
            <p className="text-gray-400 text-sm">Track CPU temperature, usage, clock speeds, and core performance in real-time.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">GPU Analytics</h3>
            <p className="text-gray-400 text-sm">Monitor graphics card temperature, memory usage, and performance metrics.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">RAM Health Check</h3>
            <p className="text-gray-400 text-sm">Monitor memory usage, speed, and detect potential RAM issues early.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <circle cx="12" cy="12" r="10"></circle>
                <circle cx="12" cy="12" r="6"></circle>
                <circle cx="12" cy="12" r="2"></circle>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Storage Monitor</h3>
            <p className="text-gray-400 text-sm">Check SSD/HDD health, temperature, read/write speeds, and lifespan.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">System Optimization</h3>
            <p className="text-gray-400 text-sm">Auto-optimize settings for better performance and hardware longevity.</p>
          </div>

          <div className="p-6 border border-gray-800 bg-gray-800/50 rounded-lg hover:border-sky-500/50 transition-colors">
            <div className="w-12 h-12 bg-sky-500/10 rounded-lg flex items-center justify-center mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-400">
                <path d="M18 20V10"></path>
                <path d="M12 20V4"></path>
                <path d="M6 20v-6"></path>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Performance Reports</h3>
            <p className="text-gray-400 text-sm">Detailed reports with charts, benchmarks, and optimization recommendations.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <img src="/HARDWARE_PULSE_LOGO.png" alt="HardwarePulse" className="h-12 mb-3" />
              <p className="text-sm text-gray-400">Professional hardware monitoring for everyone.</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Product</h4>
              <div className="space-y-2 text-sm">
                <a href="#features" className="block text-gray-400 hover:text-sky-400">Features</a>
                <a href="#pricing" className="block text-gray-400 hover:text-sky-400">Pricing</a>
                <a href="#download" className="block text-gray-400 hover:text-sky-400">Download</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Support</h4>
              <div className="space-y-2 text-sm">
                <a href="#help" className="block text-gray-400 hover:text-sky-400">Help Center</a>
                <a href="#contact" className="block text-gray-400 hover:text-sky-400">Contact Us</a>
                <a href="#community" className="block text-gray-400 hover:text-sky-400">Community</a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-3">Legal</h4>
              <div className="space-y-2 text-sm">
                <a href="/privacy" className="block text-gray-400 hover:text-sky-400">Privacy Policy</a>
                <a href="/terms" className="block text-gray-400 hover:text-sky-400">Terms of Service</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex items-center justify-between text-sm text-gray-400">
            <p>© 2026 HardwarePulse. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-sky-400">Twitter</a>
              <a href="#" className="hover:text-sky-400">Discord</a>
              <a href="#" className="hover:text-sky-400">Reddit</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App