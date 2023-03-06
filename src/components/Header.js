export default function Header() {
  return (
    <header className="text-center  w-full py-8 bg-yellow-300">
      <h1 className=" text-6xl py-2">Meli Jobs</h1>
      <p className="text-gray-600 text-xl">
        Obtené la fecha de publicación de las búsquedas activas de{" "}
        <a
          href="https://careers-meli.mercadolibre.com/en"
          className=" text-blue-700"
          target="_blank"
        >
          mercadolibre
        </a>
      </p>
    </header>
  );
}
