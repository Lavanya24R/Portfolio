import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6 space-y-16">
      {/* Hero Section */}
      <section className="text-center pt-24">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Hi, I'm Lavanya 👋
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-4 text-xl text-gray-300"
        >
          Front-End Developer | UI/UX Enthusiast
        </motion.p>
      </section>

      {/* Projects Section */}
      <section className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3].map((num) => (
            <motion.div
              key={num}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: num * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-medium mb-2">Project {num}</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A brief description of what the project does and what technologies were used.
                  </p>
                  <Button variant="outline" className="group">
                    View Demo <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-6">Want to work together or just say hi?</p>
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto space-y-4"
        >
          <input type="text" placeholder="Name" className="w-full p-3 rounded bg-gray-700 text-white" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-700 text-white" />
          <textarea placeholder="Message" className="w-full p-3 rounded bg-gray-700 text-white h-32" />
          <Button type="submit" className="w-full">Send Message</Button>
        </motion.form>
      </section>
    </div>
  );
}
