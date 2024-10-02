import React, { useState } from 'react'
import { useDarkMode } from 'usehooks-ts'
import { Moon, Sun, Scissors, User, LogIn } from 'lucide-react'
import ProfileButton from '../components/ProfileButton'

export default function LandingPage() {
  const { isDarkMode, toggle } = useDarkMode()
  const [url, setUrl] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn) // Toggle login status (for demonstration)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

        <main className="container mx-auto px-4 py-16">
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Shorten Your Links with Snip</h1>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
              Create short, memorable links in seconds. Share them anywhere, track their performance.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
              <input
                type="url"
                placeholder="Enter your long URL here"
                className="w-full md:w-96 px-4 py-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Snip It!
              </button>
            </div>
          </section>

          <section className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { title: 'Lightning Fast', description: 'Create short links in the blink of an eye.' },
              { title: 'Powerful Analytics', description: 'Track clicks, locations, and more with ease.' },
              { title: 'Customizable Links', description: 'Create branded links that stand out.' },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </section>

          <section className="text-center bg-blue-600 text-white p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Snipping?</h2>
            <p className="mb-8">Join thousands of users who trust Snip for their link shortening needs.</p>
            <button className="px-6 py-2 bg-white text-blue-600 rounded hover:bg-gray-100 transition-colors">
              Sign Up for Free
            </button>
          </section>
        </main>

        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 Snip. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}