// import { useState } from "react"
import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
// import { cn } from "../lib/utils"
// import { useToast } from "../hooks/use-toast"

export const ConnectSection = () => {
  // const { toast } = useToast()
  // const [isSubmitting, setIsSubmitting] = useState(false)

  // const handleSubmit = e => {
  //   e.preventDefault()

  //   setIsSubmitting(true)

  //   setTimeout(() => {
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for your message. I'll be in touch with you soon."
  //     })
  //     setIsSubmitting(false)
  //   }, 1500)
  // }

  return (
    <section id="connect" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Interested in possibly hiring me or working with me? Please feel free to contact me as I'm always open to discussing opportunities.</p>

        <div>
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-6 flex justify-center gap-10">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium underline">Email</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:jwachs2412@gmail.com">
                    jwachs2412@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium underline">Phone</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:502-558-8008">
                    502-558-8008
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium underline">Location</h4>
                  <p className="text-muted-foreground">Louisville, KY</p>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a className="hover:text-primary transition-colors" href="https://www.linkedin.com/in/josh-wachsman/" target="_blank">
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="name">
                  Your Name
                </label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="John Smith..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="email">
                  Your Email
                </label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="john@gmail.com" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="message">
                  Your Message
                </label>
                <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="Please add a message here if you'd like to speak further about opportunities..." />
              </div>

              <button type="submit" disabled={isSubmitting} className={cn("primary-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}
