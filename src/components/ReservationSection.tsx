import Image from 'next/image';
export default function ReservationSection() {
    const persons = ["1 Person", "2 People", "3 People", "4 People"]
    const times = ["09:00 am", "10:00 am", "12:00 pm", "02:00 pm", "07:00 pm"]
  
    return (
      <section className="py-20 bg-[#f8f8f8] text-black">
        <div className="max-w-7xl mx-auto px-4">
  
          
  
          {/* Conteúdo da seção */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            
            {/* Formulário */}
            <div className="p-10 rounded shadow bg-white">
              {/* Cabeçalho Centralizado */}
            <div className="text-center mb-12">
              <span className="text-xs text-white bg-[#e94f1d] px-3 py-1 rounded uppercase">
                Book a Table
              </span>
              <h2 className="text-3xl font-extrabold mt-4">MAKE RESERVATION</h2>
              <div className="w-10 mx-auto border-t-2 border-black mt-4 relative">
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1">
                  <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
                  <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
                  <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
                  <span className="w-1 h-1 bg-[#e94f1d] rounded-full"></span>
                </div>
              </div>
            </div>
              <form className="space-y-4">
                <select className="w-full border px-4 py-3 rounded bg-white text-sm">
                  {persons.map((person, idx) => (
                    <option key={idx}>{person}</option>
                  ))}
                </select>
  
                <input
                  type="date"
                  className="w-full border px-4 py-3 rounded bg-white text-sm"
                  defaultValue="2024-05-16"
                />
  
                <select className="w-full border px-4 py-3 rounded bg-white text-sm">
                  {times.map((time, idx) => (
                    <option key={idx}>{time}</option>
                  ))}
                </select>
  
                <button
                  type="submit"
                  className="w-full bg-[#e94f1d] text-white py-3 text-sm font-semibold uppercase"
                >
                  Book Now
                </button>
              </form>
            </div>
  
            {/* Imagem ou Placeholder */}
            <div className="relative w-full h-113">
              <Image
                  src="/images/book-table.png"
                  alt="book-table"
                  fill
                  className="object-cover"
                />
            </div>

            
          </div>
        </div>
      </section>
    )
  }
  