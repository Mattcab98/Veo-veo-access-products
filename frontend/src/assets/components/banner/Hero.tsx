import { useState } from "react";
import LoginInput from "../loginHome/LoginInput";
import { MdSearch } from "react-icons/md";

type BannerBackground = {
    imageUrl: string;
};

export default function Hero() {
    const [search, setSearch] = useState("");

    const backgrounds: BannerBackground[] = [
        {
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuCVbvdG2EUw39cFBaf5k5fTiu_llO6dYqrKZ2Ire65LlaPYqdR-4GcG43bboSu4xSQNdDxOSTAOw3T7NDkKL8tong09nA89J0_-ZE5WutXpm2-z-N7JJaThsZQ3mB1KzlD6QVyTZi6V_IAHqi9HFXqBTCxHyC0kqa3V9Z57hh5hndDW3pO0BcUREoGWqFRLn9jUwa90urYum8aLUndHF4CNiiur4NGRD0qp1yLz4LtlGCsNRbpJ9lZaYnIrtVnrOv1wICCNW4XOECA",
        },
    ];

    const activeBackground = backgrounds[0];

    const handleSearch = () => {
        if (!search.trim()) return;
        console.log("Buscar:", search);
        // llamada al backend
    };

    return (
        <section
            className="
        rounded-3xl
        w-[90%] mx-auto my-10
        shadow-glow
        bg-cover bg-center
        text-white
        px-6 py-10
        grid gap-6
      "
            style={{
                backgroundImage: `
          linear-gradient(to right, rgba(168,85,247,0.9), rgba(236,72,153,0.9)),
          url('${activeBackground.imageUrl}')
        `,
            }}
        >
            {/* Texto */}
            <div className="flex flex-col items-center text-center gap-4">
                <h1 className="text-3xl md:text-5xl font-bold">
                    ¡Hola! ¿Qué buscamos hoy?
                </h1>

                <p className="text-base md:text-xl text-white/90 max-w-xl">
                    Explora un mundo lleno de sabor y diversión para tus fiestas
                </p>
            </div>

            {/* Buscador */}
            <div className="relative w-full max-w-xl mx-auto">
                <LoginInput
                    placeholder="Buscar productos"
                    inputId="search"
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    icon={
                        <button
                            type="button"
                            onClick={handleSearch}
                            aria-label="Buscar"
                            className="text-pink-500 hover:scale-110 transition absolute right-5 top-1/4 cursor-pointer"
                        >
                            <MdSearch size={20} />
                        </button>
                    }
                    className=""
                />
            </div>
        </section>
    );
}
