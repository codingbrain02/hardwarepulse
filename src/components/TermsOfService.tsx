import { useEffect, useRef } from 'react'

function TermsOfService() {
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
            <a href="/privacy" className="px-4 py-2 text-gray-600 hover:text-sky-600 transition-colors">
              Privacy
            </a>
            <a href="/terms" className="px-4 py-2 text-sky-600 font-medium border-b-2 border-sky-600">
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
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-xl text-sky-100 mb-2">Please read these terms carefully</p>
          <p className="text-sky-200 text-sm">Last Updated: February 27, 2026 • Version 3.1</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Quick Navigation */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-12">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Quick Navigation</h3>
          <div className="grid md:grid-cols-3 gap-3">
            <a href="#agreement" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Agreement</a>
            <a href="#license" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ License</a>
            {/*<a href="#subscription" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Subscription</a>*/}
            <a href="#responsibilities" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ User Responsibilities</a>
            <a href="#warranty" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Warranty</a>
            {/*<a href="#contact" className="text-sky-600 hover:text-sky-700 text-sm hover:underline">→ Contact</a>*/}
          </div>
        </div>

        <div className="space-y-12">
          {/* Agreement */}
          <section id="agreement" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                <span className="text-sky-600 font-bold text-lg">1</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing or using our software and services, you agree to be bound by these Terms of Service. 
                  If you disagree with any part of these terms, you may not use our Services.
                </p>
              </div>
            </div>
          </section>

          {/* License Grant */}
          <section id="license" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">License Grant</h2>
            </div>

            <div className="ml-14 space-y-6">
              <div className="bg-linear-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600 shrink-0">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Free Version</h3>
                    <p className="text-sm text-gray-700">
                      Limited, non-exclusive, non-transferable license for personal, non-commercial use
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-r from-blue-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                <div className="flex items-start gap-3">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600 shrink-0">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
                  </svg>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Premium Version</h3>
                    <p className="text-sm text-gray-700">
                      Additional license for advanced features on specified number of devices
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-red-500 bg-red-50 rounded-r-xl p-4">
                <h4 className="font-semibold text-red-900 mb-2">⚠️ License Restrictions</h4>
                <ul className="space-y-1 text-sm text-red-800">
                  <li>✗ No reverse engineering or decompiling</li>
                  <li>✗ No redistribution or sublicensing</li>
                  <li>✗ No removal of copyright notices</li>
                  <li>✗ No illegal or unauthorized use</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Subscription 
          <section id="subscription" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Subscription & Payment</h2>
            </div>

            <div className="ml-14 space-y-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Billing Cycle</h4>
                  <p className="text-sm text-gray-600">Premium subscriptions are billed monthly or annually until cancelled</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-linear-to-r from-sky-50 to-blue-50 rounded-lg border border-sky-200">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Money-Back Guarantee</h4>
                  <p className="text-sm text-gray-600">30-day refund for first-time subscribers</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600 shrink-0 mt-0.5">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
                <div>
                  <h4 className="font-semibold text-gray-900">Cancellation</h4>
                  <p className="text-sm text-gray-600">Cancel anytime. Cancellation effective at end of billing period</p>
                </div>
              </div>
            </div>
          </section>
          */}

          {/* User Responsibilities */}
          <section id="responsibilities" className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-blue-600 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900">User Responsibilities</h2>
            </div>

            <div className="ml-14">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <h4 className="font-semibold text-green-900">Lawful Use</h4>
                  </div>
                  <p className="text-sm text-green-800">Use services only for lawful purposes</p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <h4 className="font-semibold text-blue-900">Data Backup</h4>
                  </div>
                  <p className="text-sm text-blue-800">Maintain backups of your data</p>
                </div>

                <div className="bg-blue-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-blue-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <h4 className="font-semibold text-purple-900">Account Security</h4>
                  </div>
                  <p className="text-sm text-purple-800">Keep credentials confidential</p>
                </div>

                <div className="bg-sky-50 border border-sky-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sky-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <h4 className="font-semibold text-indigo-900">System Requirements</h4>
                  </div>
                  <p className="text-sm text-indigo-800">Ensure compatible system</p>
                </div>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section id="warranty" className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl border-2 border-yellow-300 p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">⚠️</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
                <div className="bg-white/60 rounded-xl p-6 border border-yellow-200">
                  <p className="font-semibold text-gray-900 mb-3">THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>No guarantee of uninterrupted or error-free operation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>No security software provides 100% protection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-yellow-600 mt-0.5">•</span>
                      <span>We are not responsible for security breaches or data loss</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section className="bg-linear-to-br from-red-50 to-pink-50 rounded-2xl border-2 border-red-300 p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">!</span>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <div className="bg-white/60 rounded-xl p-6 border border-red-200">
                  <p className="font-semibold text-gray-900 mb-3">OUR LIABILITY IS LIMITED TO:</p>
                  <div className="bg-red-100 rounded-lg p-4 text-center">
                    <p className="text-2xl font-bold text-red-900">Amount Paid</p>
                    <p className="text-sm text-red-800 mt-1">In the previous 12 months</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-4">
                    We are not liable for indirect, incidental, special, or consequential damages.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact 
          <section id="contact" className="bg-linear-to-br from-sky-600 to-blue-600 rounded-2xl shadow-xl p-8 text-white">
            <div className="flex items-start gap-4 mb-6">
              <div className="shrink-0 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">Questions About Terms?</h2>
                <p className="text-sky-100 mb-6">Our legal team is here to help clarify any questions.</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <p className="text-sky-200">legal@company.com</p>
                  </div>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <p className="text-sky-200">+1 (555) 123-4567</p>
                  </div>
                  <div className="md:col-span-2">
                    <p className="font-semibold mb-1">Mailing Address</p>
                    <p className="text-sky-200">123 Legal Street, San Francisco, CA 94102, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          */}

          {/* Acceptance */}
          <section className="bg-linear-to-r from-green-50 to-emerald-50 rounded-2xl border-2 border-green-300 p-8">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-3">By Using Our Software, You Agree</h3>
                <p className="text-gray-700">
                  Downloading, installing, or using our software constitutes acceptance of these Terms of Service. 
                  If you do not agree, please do not use our services.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Note */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            Effective Date: February 27, 2026 • Version 3.1
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService