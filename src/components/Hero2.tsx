interface PageHeaderProps {
    title: string;
    path: string;
}

export default function Hero2({ title, path }: PageHeaderProps) {
    return (
        <section
            className="relative bg-gray-700 text-white py-20 h-[40vh] bg-cover bg-center"
            style={{
                backgroundImage: `url('/images/hero3.webp')`,
            }}
        >
            {/* 🔲 Overlay preto translúcido */}
            <div className="absolute inset-0 bg-black/50 z-0" />
            <div className="relative z-10 flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold mb-2">{title.toUpperCase()}</h1>
                <p className="text-sm uppercase">{path}</p>
            </div>

        </section>
    );
}
