"use client";
import { FormEvent, useState } from "react"

export default function Contact() {

  const [isSubmitted, setSubmitted] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify({
          name,
          email,
          message,
        }),
        headers: {
          'content-type': 'application/json',
        },
      })
      console.log(res);
      if (res.status === 200) {
        setSubmitted(true)
      }
    } catch (err: any) {
      console.error('Err', err)
    }
    setEmail("");
    setName("");
    setMessage("");
  }
  return (
    <section id="contact" className="ml-10 mr-10 lg:ml-40 lg:mr-40 mb-20">

      <h2 className="text-2xl text-white lg:text-4xl font-extrabold text-center mt-16 mb-10">Let's Connect</h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-8">
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" onChange={(e) =>{setEmail(e.target.value); setSubmitted(false)}} value={email} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="xyz@gmail.com" required/>
          </div>
          <div>
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
              <input type="text" onChange={(e) => {setName(e.target.value);setSubmitted(false)}} value={name} id="name" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Enter your name..." required/>
          </div>
          <div className="sm:col-span-2">
              <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" value={message} onChange={(e) => {setMessage(e.target.value);setSubmitted(false)}} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a message..." required></textarea>
          </div>
          <button type="submit" className={`py-3 min-w-20 px-5 text-sm shadow-lg ${isSubmitted?"bg-green-600":"hover:bg-rose-500 duration-200 bg-violet-700"} w-fit self-center  font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-300`}>{isSubmitted?"Sent!":"Send message"}</button>
    </form>

    </section>
  )
}
