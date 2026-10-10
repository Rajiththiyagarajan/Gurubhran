import Button from '../components/Button'

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f3efe9]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-stone-500">Plan your order</p>
          <h2 className="mt-4 font-serif text-4xl text-stone-900 md:text-5xl">
            Let’s choose your handcrafted jewellery.
          </h2>
          <p className="mt-6 text-base leading-8 text-stone-600">
            Tell us about your wedding, festive occasion, custom brief, or wholesale requirement and our team
            will recommend the right pieces for you.
          </p>

          <div className="mt-8 space-y-4 text-sm text-stone-700">
            <p>📍 77 Pillayar Kovil Street, Vadaserry, Nagercoil, 629001, Kanyakumari District</p>
            <p>📞 7825027402</p>
            <p>✉️ gurubhrantemplejewellery@gmail.com</p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-soft sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Full name</label>
              <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 outline-none transition focus:border-stone-500" placeholder="Your name" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Email</label>
              <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 outline-none transition focus:border-stone-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Phone</label>
              <input className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 outline-none transition focus:border-stone-500" placeholder="+91 78250 27402" />
            </div>
            <div>
              <label className="mb-2 block text-sm font-medium text-stone-700">Category</label>
              <select className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 outline-none transition focus:border-stone-500">
                <option>Chockers</option>
                <option>Dallers</option>
                <option>Headset</option>
                <option>Jimmki</option>
                <option>Leaf Headset</option>
                <option>Long Haram</option>
                <option>Mango Headset</option>
                <option>Mattal</option>
                <option>Nethichutti</option>
                <option>Ottiyanam</option>
                <option>Stud</option>
                <option>Suryan Chandran</option>
              </select>
            </div>
          </div>

          <div className="mt-5">
            <label className="mb-2 block text-sm font-medium text-stone-700">Message</label>
            <textarea rows="5" className="w-full rounded-2xl border border-stone-300 bg-stone-50 p-3 outline-none transition focus:border-stone-500" placeholder="Tell us about your wedding, occasion, preferred motif, or desired design." />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs uppercase tracking-[0.2em] text-stone-500">Response within 24 hours</p>
            <Button type="button">Send enquiry</Button>
          </div>
        </form>
      </div>
    </section>
  )
}
