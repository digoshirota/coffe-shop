import Image from 'next/image';

export default function WelcomeSection() {
  return (
    <section className="relative bg-white min-h-screen flex items-center justify-center px-4 md:px-16 py-16 overflow-hidden">
      {/* Brócolis no canto */}
      <Image
        src="/images/broccoli.png"
        alt="Broccoli"
        width={80}
        height={80}
        className="absolute top-8 left-4 md:left-16"
      />

      {/* Container principal centralizado */}
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-7xl w-full justify-center">
        <Image
        src="/images/restaurante.jpg"
        alt="Broccoli"
        width={600}
        height={600}
        className=""
      />

        {/* Conteúdo textual */}
        <div className="max-w-xl text-left">
          <button className="bg-[#d84315] text-white text-xs font-semibold px-4 py-1 rounded-sm mb-4">
            MAKE RESERVATION
          </button>

          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
            WELCOME TO OUR <br /> LUXURY RESTAURANT
          </h2>

          <p className="text-gray-600 mb-6">
            The scallops were perfectly cooked, tender, and flavorful, paired beautifully
            with a creamy risotto and seasonal vegetables. The presentation was artful,
            showcasing the chef’s attention to detail.
          </p>

          {/* Telefone com ícone */}
          <div className="flex items-center gap-3">
            <div className="bg-[#d84315] w-8 h-8 rounded-full flex items-center justify-center text-white text-sm">
              📞
            </div>
            <div>
              <p className="text-xs text-gray-500">HOTLINE 24/7</p>
              <p className="font-semibold">+256 3254-2568</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hambúrguer decorativo à direita (opcional) */}
      <Image
        src="/images/burger-deco.png"
        alt="Burger"
        width={120}
        height={120}
        className="absolute top-8 right-4 md:right-16 opacity-20"
      />
    </section>
  );
}
