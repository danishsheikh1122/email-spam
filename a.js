import Link from "next/link"
import { AlertCircle, ArrowRight, Check, Globe, Languages, Shield, Sparkles, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-20 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center justify-center">
            <Shield className="h-8 w-8 text-primary" />
            <span className="ml-2 text-2xl font-bold">SpamGuard</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#features">
              Features
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#roadmap">
              Roadmap
            </Link>
            <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
              About
            </Link>
          </nav>
          <div>
            <Link href="/detector">
              <Button>Try It Now</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">
                  Intelligent Spam Detection
                </div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Protect Your Communications with AI-Powered Spam Detection
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our advanced AI system analyzes text to identify spam content with unparalleled accuracy. Upload an
                  image or enter text to check instantly.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/detector">
                    <Button className="px-8">
                      Try It Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#features">
                    <Button variant="outline">Learn More</Button>
                  </Link>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-blue-100/80 flex items-center justify-center overflow-hidden shadow-xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full"></div>
                  <div className="relative z-10 p-8">
                    <div className="bg-white rounded-xl shadow-lg p-6 max-w-[350px]">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center">
                          <Shield className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold">Spam Alert</h3>
                          <p className="text-sm text-gray-500">Detected suspicious content</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mb-4">
                        "Congratulations! You've won $1,000,000! Click here to claim your prize now!"
                      </p>
                      <div className="bg-red-50 text-red-700 text-sm p-2 rounded-md">
                        This message has been identified as spam.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Advanced Spam Detection Technology
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our platform combines cutting-edge AI with user-friendly interfaces to provide the most effective spam
                  detection solution.
                </p>
              </div>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Advanced AI Detection</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Our AI model is trained on millions of spam messages across multiple languages to provide accurate
                    detection in any context.
                  </p>
                </div>
              </div>
              
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">OCR Technology</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Extract text from images and analyze it for spam content in seconds, protecting you from image-based
                    phishing attempts.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Real-time Analysis</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Get instant results with our high-performance backend that processes and analyzes content in
                    milliseconds.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="bg-primary/10 p-4 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Privacy First</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We don't store your text or images. All processing is done securely and your data is never saved or
                    shared.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                
                </div>
                
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                
              </div>
            </div>
          </div>
        </section>

        {/* Translation Feature Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-indigo-50 to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">New Feature</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Seamless Email Detection with Built-In Translation
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Struggling with emails in different languages? Now you can auto-translate any email to English while
                  detecting spam — all in one place!
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Multilingual to English Translation (Powered by Google Translator)</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Accurate Spam Detection with Zero Hassle</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Fast, Reliable, and Free on Vercel v0</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Supports 100+ Languages Automatically</p>
                  </div>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="flex space-x-2">
                    <Link href="/detector">
                      <Button className="w-full">
                        Try It Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-white p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Globe className="h-6 w-6 text-primary" />
                      <h3 className="text-lg font-semibold">Multilingual Spam Detection</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="border rounded-md p-4 bg-gray-50">
                        <p className="text-sm font-medium mb-1 text-gray-500">Original Message (Spanish):</p>
                        <p className="text-sm">
                          ¡Felicidades! Has ganado €1,000,000 en nuestro sorteo. Haz clic aquí para reclamar tu premio
                          ahora.
                        </p>
                      </div>
                      <div className="flex items-center justify-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-primary" />
                        </div>
                      </div>
                      <div className="border rounded-md p-4 bg-gray-50">
                        <p className="text-sm font-medium mb-1 text-gray-500">Translated to English:</p>
                        <p className="text-sm">
                          Congratulations! You have won €1,000,000 in our lottery. Click here to claim your prize now.
                        </p>
                      </div>
                      <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm">
                        <div className="flex items-center gap-2 text-red-600 font-medium">
                          <AlertCircle className="h-4 w-4" />
                          Spam Detected
                        </div>
                        <p className="text-gray-700 mt-1">
                          This message has been identified as spam after translation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Web Extension Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Coming Soon</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Browser Extension</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're developing a powerful browser extension that will let you check for spam content directly from
                  your browser. Protect yourself from phishing attempts and scams while browsing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Real-time scanning of webpage content</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Email protection for Gmail, Outlook, and more</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Social media message scanning</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <p>Customizable protection levels</p>
                  </div>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <div className="flex space-x-2">
                    <Button variant="outline" className="w-full">
                      Get Notified When Available
                    </Button>
                  </div>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[500px] rounded-xl shadow-2xl overflow-hidden">
                  <div className="bg-gray-800 h-8 flex items-center px-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                  </div>
                  <div className="bg-white p-4">
                    <div className="bg-gray-100 rounded-md p-4 mb-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Shield className="h-5 w-5 text-primary" />
                          <span className="font-medium">SpamGuard</span>
                        </div>
                        <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Protected</div>
                      </div>
                    </div>
                    <div className="border rounded-md p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                        <div className="text-sm font-medium">Email Sender</div>
                      </div>
                      <p className="text-sm text-gray-700 mb-2">Subject: Your account needs verification</p>
                      <div className="bg-red-50 border border-red-200 rounded-md p-3 text-sm">
                        <div className="flex items-center gap-2 text-red-600 font-medium">
                          <AlertCircle className="h-4 w-4" />
                          Spam Detected
                        </div>
                        <p className="text-gray-700 mt-1">
                          This email appears to be a phishing attempt. Do not click any links or provide personal
                          information.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Roadmap Section */}
        <section id="roadmap" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-primary">Future Scope</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Vision & Roadmap</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We're constantly innovating to stay ahead of evolving spam techniques. Here's what we're working on
                  next.
                </p>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Sparkles className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Multi-modal Analysis</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Our next-generation system will analyze not just text, but images, audio, and video content to detect
                  sophisticated spam across all media types.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q2 2024</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Languages className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Universal Translation</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Automatic translation of all content to English before analysis, ensuring consistent detection quality
                  regardless of the original language.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q3 2024</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Enterprise API</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  A robust API for enterprise customers to integrate our spam detection capabilities directly into their
                  applications and workflows.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q4 2024</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v8" />
                      <path d="m4.93 10.93 1.41 1.41" />
                      <path d="M2 18h2" />
                      <path d="M20 18h2" />
                      <path d="m19.07 10.93-1.41 1.41" />
                      <path d="M22 22H2" />
                      <path d="m16 6-4 4-4-4" />
                      <path d="M16 18a4 4 0 0 0-8 0" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Contextual Analysis</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Advanced contextual understanding that considers the source, recipient, and surrounding content to
                  reduce false positives.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q1 2025</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V7.5L12 2 4 7.5V12c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Threat Intelligence</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Integration with global threat intelligence networks to identify emerging spam patterns and techniques
                  in real-time.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q2 2025</p>
                </div>
              </div>
              <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Personalized Protection</h3>
                </div>
                <p className="text-gray-500 mb-4">
                  Machine learning that adapts to your personal communication patterns, providing customized protection
                  that improves over time.
                </p>
                <div className="bg-blue-50 rounded-md p-3">
                  <p className="text-sm text-blue-700">Coming Q3 2025</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Stop Spam in Its Tracks?
                </h2>
                <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Try our spam detection tool today and experience the power of AI-driven protection.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/detector">
                  <Button size="lg" variant="secondary" className="px-8">
                    Try It Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 md:py-12 bg-gray-100 border-t">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="/" className="flex items-center">
                <Shield className="h-6 w-6 text-primary" />
                <span className="ml-2 text-xl font-bold">SpamGuard</span>
              </Link>
              <p className="text-sm text-gray-500">Protecting your communications with advanced AI technology.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="/detector">
                    Spam Detector
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#features">
                    Features
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#roadmap">
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#about">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-medium">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-500 hover:text-primary transition-colors" href="#">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-500">© 2025 SpamGuard. All rights reserved DANISHSHEIKH.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link className="text-gray-500 hover:text-primary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
              <Link className="text-gray-500 hover:text-primary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </Link>
              <Link className="text-gray-500 hover:text-primary" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

