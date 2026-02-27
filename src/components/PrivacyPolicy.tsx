import { useEffect, useRef } from 'react'

function PrivacyPolicy() {
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

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        size: Math.random() * 1.5 + 0.5
      })
    }

    function animate() {
      if (!ctx || !canvas) return
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach(p => {
        p.x += p.vx
        p.y += p.vy

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1

        ctx.fillStyle = 'rgba(56, 189, 248, 0.3)'
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
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <canvas ref={canvasRef} className="fixed inset-0 w-full h-full -z-10" />

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/hardwarepulse" className="text-xl font-bold text-gray-900 hover:text-sky-600 transition-colors">
            ← Back to Home
          </a>
          <div className="flex gap-4">
            <a href="/privacy" className="px-4 py-2 text-sky-600 font-medium border-b-2 border-sky-600">
              Privacy
            </a>
            <a href="/terms" className="px-4 py-2 text-gray-600 hover:text-sky-600 transition-colors">
              Terms
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-linear-to-r from-sky-600 to-blue-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-xl text-sky-100 mb-2">Your privacy matters to us</p>
          <p className="text-sky-200 text-sm">Last Updated: February 27, 2026</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Navigation</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <a href="#collection" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ What We Collect</a>
            <a href="#usage" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ How We Use Data</a>
            <a href="#rights" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Your Rights</a>
            <a href="#security" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Data Security</a>
            <a href="#cookies" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Cookies</a>
            {/*<a href="#contact" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Contact Us</a>*/}
          </div>
        </div>

        <div className="space-y-12">
          {/* Introduction */}
          <section className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                <span className="text-sky-600 font-bold text-lg">ℹ️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed">
                  We are committed to protecting your privacy. This Privacy Policy explains how we collect, 
                  use, disclose, and safeguard your information when you use our software and services. 
                  Please read this privacy policy carefully.
                </p>
              </div>
            </div>
          </section>

          {/* Information We Collect */}
          <section id="collection" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">📋</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Information We Collect</h2>
            </div>

            <div className="space-y-6 ml-14">
              <div className="border-l-4 border-sky-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Information You Provide</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Account registration details (name, email address)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Payment information (processed securely through third-party processors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-sky-500 mt-1">•</span>
                    <span>Support communications and feedback</span>
                  </li>
                </ul>
              </div>

              <div className="border-l-4 border-blue-500 pl-6 py-2">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Automatically Collected Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>System information (OS version, hardware specifications)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Software usage statistics and crash reports</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>IP address and general location data</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Your Information */}
          <section id="usage" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-green-600 font-bold text-lg">⚙️</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">How We Use Your Information</h2>
            </div>

            <div className="ml-14">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-linear-to-br from-sky-50 to-blue-50 rounded-xl p-4 border border-sky-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Service Delivery</h4>
                  <p className="text-sm text-gray-700">Provide and maintain our services</p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-sky-50 rounded-xl p-4 border border-blue-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Security</h4>
                  <p className="text-sm text-gray-700">Detect and prevent security threats</p>
                </div>
                <div className="bg-linear-to-br from-blue-50 to-pink-50 rounded-xl p-4 border border-purple-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Improvements</h4>
                  <p className="text-sm text-gray-700">Improve our algorithms and features</p>
                </div>
                <div className="bg-linear-to-br from-green-50 to-emerald-50 rounded-xl p-4 border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-2">Support</h4>
                  <p className="text-sm text-gray-700">Provide customer support</p>
                </div>
              </div>
            </div>
          </section>

          {/* Data Security */}
          <section id="security" className="bg-linear-to-br from-sky-50 to-blue-50 rounded-2xl border border-sky-200 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
                <p className="text-gray-700 mb-4">We implement industry-standard security measures:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    End-to-end encryption
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Regular security audits
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    Access controls
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    SOC 2 Type II compliance
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section id="rights" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">✓</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Your Rights</h2>
            </div>

            <div className="ml-14 space-y-3">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Access Your Data</h4>
                  <p className="text-sm text-gray-600">Request a copy of your personal information</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Correct Information</h4>
                  <p className="text-sm text-gray-600">Update inaccurate or incomplete data</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <polyline points="3 6 5 6 21 6"></polyline>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Request Deletion</h4>
                  <p className="text-sm text-gray-600">Ask us to delete your personal data</p>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                <p className="text-sm text-blue-900">
                  <strong>GDPR & CCPA Compliant:</strong> We honor all data protection rights under GDPR and CCPA regulations.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section id="cookies" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-orange-600 font-bold text-lg">🍪</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">We use cookies for:</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm">Essential functionality</span>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Security</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Analytics</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">User preferences</span>
                </div>
              </div>
            </div>
          </section>

          {/* Contact 
          <section id="contact" className="bg-linear-to-br from-sky-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <p className="text-sky-100 mb-6">Have questions about your privacy? We're here to help.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sky-200">privacy@company.com</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-sky-200">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-sky-200">123 Privacy Street, San Francisco, CA 94102</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">DPO</p>
                    <p className="text-sky-200">dpo@company.com</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          */}
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            This Privacy Policy is effective as of February 27, 2026
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy