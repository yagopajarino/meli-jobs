import Cafecito from "./Cafecito";

export default function Popup({ setShowPopUp }) {
  return (
    <div className="absolute top-0 w-full h-screen items-center flex backdrop-blur-sm justify-center">
      <div className="bg-indigo-100 w-1/2 pt-10 px-8 text-center flex flex-col items-center rounded-lg">
        <h1 className="py-5 text-3xl font-medium">Hola 👋🏼</h1>
        <p className="text-lg pb-5">
          Si ves esto es porque encontraste la fecha de publicación de una
          búsqueda de Meli. Si te sirvió la app, tus cafecitos ayudan a
          mantenerla funcionando :)
        </p>
        <Cafecito />
        <p
          className="py-5 text-base underline text-gray-500"
          onClick={() => setShowPopUp(false)}
        >
          Volver
        </p>
      </div>
    </div>
  );
}
