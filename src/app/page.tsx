"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-blue-950 text-white font-sans flex flex-col">

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-28 px-6 bg-gradient-to-b from-indigo-900/50 to-transparent">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent"
        >
          Deploy Smarter with Convox ❤️
        </motion.h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-200 max-w-3xl">
          Convox makes deploying, scaling, and managing applications effortless.  
          Focus on building—let us handle infrastructure.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#get-started"
            className="px-7 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold transition shadow-lg hover:shadow-xl"
          >
            Get Started on Convox
          </a>
          <a
            href="https://docs.convox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-lg border border-cyan-400 text-cyan-300 hover:bg-cyan-900/40 transition font-medium"
          >
            Documentation
          </a>
        </div>
      </header>

      {/* Features Section */}
      <main className="flex-1 px-6 sm:px-16 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-cyan-300">
          Why Teams Choose Convox
        </h2>
        <p className="text-center text-blue-300 mt-3 max-w-2xl mx-auto">
          Powerful developer experience with rock-solid infrastructure, without the hassle.
        </p>
        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            {
              title: "One-Command Deploys",
              desc: "Deploy apps to production with a single command using Convox CLI.",
            },
            {
              title: "Cloud Agnostic",
              desc: "Run seamlessly on AWS, GCP, Azure, or on-prem with full portability.",
            },
            {
              title: "Scalability Built-In",
              desc: "Easily scale from dev to enterprise-grade workloads without re-architecting.",
            },
            {
              title: "Secure by Default",
              desc: "TLS, RBAC, and secrets management baked in for peace of mind.",
            },
            {
              title: "CI/CD Workflows",
              desc: "Integrated pipelines and workflows to streamline your delivery.",
            },
            {
              title: "Team Collaboration",
              desc: "Invite teammates, manage permissions, and ship faster together.",
            },
          ].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-gradient-to-br from-blue-900/30 to-indigo-900/40 border border-blue-800 hover:border-cyan-400 transition shadow-md hover:shadow-cyan-400/20"
            >
              <h3 className="text-xl font-semibold text-cyan-300">
                {f.title}
              </h3>
              <p className="mt-3 text-sm text-blue-300 leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-cyan-700 to-blue-800 py-20 text-center relative overflow-hidden">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Deploy to Any Cloud in Minutes
          </h2>
          <p className="mt-4 text-blue-100 max-w-xl mx-auto">
            From startups to enterprises, Convox helps teams move fast without
            sacrificing reliability or security.
          </p>
          <div className="mt-8">
            <a
              href="#get-started"
              className="px-8 py-3 rounded-lg bg-white text-blue-900 font-semibold hover:bg-gray-100 transition shadow-md hover:shadow-xl"
            >
              Start Free Today
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-blue-900 text-center text-blue-400 text-sm">
        <p>
          © {new Date().getFullYear()} Convox. Deploy anywhere. Scale everywhere.
        </p>
      </footer>
    </div>
  );
}
