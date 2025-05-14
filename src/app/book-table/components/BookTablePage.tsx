import { Button } from "@/components/ui/button"
import { redirect } from "next/navigation"

export default function BookTablePage() {
  async function bookTable(formData: FormData) {
    "use server"

    const guests = formData.get("guests")
    const date = formData.get("date")
    const time = formData.get("time")
    const name = formData.get("name")
    const email = formData.get("email")
    const phone = formData.get("phone")
    const message = formData.get("message")

    // Aqui você pode salvar no banco ou enviar email
    console.log({
      guests,
      date,
      time,
      name,
      email,
      phone,
      message,
    })

    redirect("/thank-you") // redireciona para uma página de sucesso
  }

  return (
    <section className="bg-black text-white py-16 px-4">
      <div className="max-w-5xl mx-auto space-y-8">
        <form action={bookTable} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Number of Guest *</label>
              <input name="guests" required type="text" placeholder="Person" className="w-full bg-transparent border border-gray-600 px-4 py-2" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Select Date *</label>
              <input name="date" required type="date" className="w-full bg-transparent border border-gray-600 px-4 py-2 text-white" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Select Time *</label>
              <input name="time" required type="time" className="w-full bg-transparent border border-gray-600 px-4 py-2 text-white" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Your Name *</label>
              <input name="name" required type="text" placeholder="Person" className="w-full bg-transparent border border-gray-600 px-4 py-2" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Email Address *</label>
              <input name="email" required type="email" placeholder="example@email.com" className="w-full bg-transparent border border-gray-600 px-4 py-2" />
            </div>
            <div>
              <label className="block mb-2 text-sm font-semibold uppercase">Phone Number *</label>
              <input name="phone" required type="tel" placeholder="+55 ..." className="w-full bg-transparent border border-gray-600 px-4 py-2" />
            </div>
          </div>

          <div>
            <label className="block mb-2 text-sm font-semibold uppercase">Type your special message *</label>
            <textarea name="message" required placeholder="Tell us more about your special message" className="w-full bg-transparent border border-gray-600 px-4 py-2 h-32" />
          </div>

          <div className="text-center pt-4">
            <Button type="submit" className="bg-[#e94f1d] hover:bg-red-700 px-8 py-2 text-white rounded-none uppercase font-bold tracking-wide">
              Book a Table →
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
