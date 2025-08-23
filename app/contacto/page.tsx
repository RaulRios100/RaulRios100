"use client"
import { Button } from "antd"
import { MessageCircle } from "react-feather"

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
      <div className="flex flex-col w-full max-w-md space-y-4">
        <Button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          onClick={() => window.open("mailto:info@example.com", "_blank")}
        >
          Email: info@example.com
        </Button>
        <Button
          className="w-full bg-red-600 hover:bg-red-700 text-white"
          onClick={() => window.open("tel:+5256202022210", "_blank")}
        >
          Phone: +52 56 2020 2210
        </Button>
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white"
          onClick={() =>
            window.open(
              "https://wa.me/5256202022210?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios",
              "_blank",
            )
          }
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          WhatsApp: +52 56 2020 2210
        </Button>
        {/* rest of code here */}
      </div>
    </div>
  )
}

export default ContactPage
