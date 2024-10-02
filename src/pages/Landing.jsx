import React, { useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {Button} from "./../components/ui/button"
import {Input} from "./../components/ui/input"
import {useNavigate} from "react-router-dom"

const Landing = () => {
  const [longUrl, setLongUrl] = useState('')
  const navigate = useNavigate();

  const handleShorten = (e)=>{
    e.preventDefault();
    if(longurl){
      navigate(`/auth?createNew=${longurl}`)
    }
  }

  const features = [
    { title: 'Lightning Fast', description: 'Create short links in the blink of an eye.' },
    { title: 'Powerful Analytics', description: 'Track clicks, locations, and more with ease.' },
    { title: 'Customizable Links', description: 'Create branded links that stand out.' },
  ]

  const faqs = [{
    question: "What is Snip?",
    answer: "Snip is a URL shortening service that allows you to create short, memorable links from long URLs. It's perfect for sharing links on social media, in emails, or anywhere you need a concise link."
  },
  {
    question: "How does Snip work?",
    answer: "Simply paste your long URL into the input field on our homepage, click 'Snip It!', and we'll generate a short link for you. You can then copy and share this link wherever you like."
  },
  {
    question: "Are Snip links permanent?",
    answer: "Yes, once created, Snip links are permanent and will not expire. However, we reserve the right to remove links that violate our terms of service."
  },
  {
    question: "Can I customize my Snip links?",
    answer: "Yes! With a premium account, you can create custom branded links that use your own domain name or choose your own keywords for the short URL."
  }
]

  return (
    <div id="landing-page" className="space-y-16">
    <section className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Shorten Your Links with Snip</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Create short, memorable links in seconds. Share them anywhere, track their performance.
      </p>
      <form className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4" onSubmit={handleShorten}>
        <Input
          type="url"
          placeholder="Enter your looooong URL here"
          className="w-full md:w-96 border-gray-500 border-2 h-12"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <Button type="submit" className='text-white '>Snip It!</Button>
      </form>
    </section>

    <section className="grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="bg-card p-6 rounded-lg shadow-sm">
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-card-foreground">{feature.description}</p>
        </div>
      ))}
    </section>

    <section className="text-center bg-primary text-primary-foreground p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-4">Ready to Start Snipping?</h2>
      <p className="mb-8">Join thousands of users who trust Snip for their link shortening needs.</p>
      <Button variant="secondary">Sign Up for Free</Button>
    </section>

    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </div>
  )
}

export default Landing