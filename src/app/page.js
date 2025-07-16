import Navbar from "@/components/Navbar"
import { Link } from "lucide-react"

const featuredBlogs = [{ id: 1, title: 'SIP Kya Hai? Shuru Kaise Karein', description: '500₹ se SIP start karke lakhpati kaise banein – Hindi mein samjhein.', slug: 'sip-kya-hai', image: '/images/sip.jpg' }, { id: 2, title: 'IPO Allotment Tricks 2025', description: 'Kaise IPO allotment paayein? Naye rules aur expert tips.', slug: 'ipo-allotment-tricks', image: '/images/ipo.jpg' }, { id: 3, title: 'SBI Clerk 2025: Taiyari Kaise Karein?', description: 'SBI Clerk exam ke liye best strategy aur syllabus 2025 ke liye.', slug: 'sbi-clerk-guide', image: '/images/sbi.jpg' }];

const categoryData = { 'Stock Market': [{ id: 1, title: 'Nifty vs Sensex – Kya Farak Hai?', slug: 'nifty-vs-sensex' }, { id: 2, title: 'Stock Kaise Kharidein Online?', slug: 'buy-stocks-guide' }, { id: 3, title: 'Top 5 Beginner Stocks 2025', slug: 'best-beginner-stocks' }], IPO: [{ id: 1, title: 'LIC IPO Review 2025', slug: 'lic-ipo-review' }, { id: 2, title: 'IPO Grey Market Kya Hota Hai?', slug: 'ipo-grey-market' }, { id: 3, title: 'Best Upcoming IPOs July 2025', slug: 'upcoming-ipos-july' }], 'Mutual Funds': [{ id: 1, title: 'ELSS vs FD – Tax Saving Battle', slug: 'elss-vs-fd' }, { id: 2, title: 'Top 3 SIP Plans for Beginners', slug: 'top-sip-beginner' }, { id: 3, title: 'Mutual Fund Returns Kaise Dekhein?', slug: 'mf-returns-check' }], Career: [{ id: 1, title: 'Govt Job ke Liye Daily Routine', slug: 'govt-job-routine' }, { id: 2, title: 'Resume Kaise Banayein (Freshers)', slug: 'resume-freshers' }, { id: 3, title: 'Interview Me Aksar Poochhe Gaye Sawal', slug: 'interview-common-questions' }] };


export default function Home() {
  return (

    <main className="min-h-screen bg-white text-gray-800"> {/* Navbar */} <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50"> <div className="text-2xl font-bold text-green-600">Monymontra</div> <div className="space-x-4"> <Link href="/">Home</Link> <Link href="/stock-market">Stock Market</Link> <Link href="/ipo">IPO</Link> <Link href="/mutual-funds">Mutual Funds</Link> <Link href="/career">Career</Link> <Link href="/contact">Contact</Link> </div> </nav>

      {/* Hero Section */}
      <section className="text-center px-4 py-12 bg-gradient-to-br from-green-100 to-blue-100">
        <h1 className="text-4xl font-bold text-green-700">Monymontra – Paisa, Career aur Bazaar ka Asli Mantra</h1>
        <p className="mt-4 text-lg text-gray-700">
          Har din naye blogs Hindi mein – Stock, SIP, IPO, Naukri aur aur bhi bahut kuch!
        </p>
        <button className="mt-6 bg-green-600 text-white px-6 py-2 rounded-xl shadow hover:bg-green-700">
          🔔 Latest Blog Padhein
        </button>
      </section>

      {/* Featured Posts */}
      <section className="px-6 py-10">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">🔥 Featured Blogs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredBlogs.map((blog) => (
            <div key={blog.id} className="rounded-2xl shadow hover:shadow-lg p-4 border border-gray-200">
              <div className="h-40 bg-gray-100 rounded mb-4" style={{ backgroundImage: `url(${blog.image})`, backgroundSize: 'cover' }} />
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.description}</p>
              <Link href={`/blog/${blog.slug}`} className="text-green-600 text-sm mt-2 inline-block">Read more →</Link>
            </div>
          ))}
        </div>
      </section>

      {/* Category Sections */}
      {Object.entries(categoryData).map(([category, posts]) => (
        <section key={category} className="px-6 py-10 bg-gray-50">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📂 {category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {posts.map((post) => (
              <div key={post.id} className="rounded-xl shadow p-4 border border-gray-200 bg-white">
                <div className="h-32 bg-gray-100 rounded mb-3" />
                <h3 className="font-medium">{post.title}</h3>
                <Link href={`/blog/${post.slug}`} className="text-green-600 text-sm">Read more →</Link>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Gyaan Mantra Tips */}
      <section className="px-6 py-10 bg-white">
        <h2 className="text-xl font-bold text-gray-800 mb-4">💡 Gyaan Mantra</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>SIP se lakhpati banne ka raasta kya hai?</li>
          <li>IPO allotment kaise milta hai?</li>
          <li>Stock me invest karne se pehle kya dekhein?</li>
        </ul>
      </section>

      {/* Newsletter */}
      <section className="px-6 py-10 bg-green-50">
        <h2 className="text-xl font-bold mb-2">📫 Subscribe karein</h2>
        <p className="text-gray-700 mb-4">Naye blog aur paisa mantra directly inbox mein paayein</p>
        <input
          type="email"
          placeholder="Apna email daalein"
          className="px-4 py-2 rounded-xl border border-gray-300 w-full max-w-md"
        />
        <button className="ml-4 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700">
          Subscribe
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 py-6 border-t">
        © 2025 Monymontra.in | All rights reserved
      </footer>
    </main>
  )
}

