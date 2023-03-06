import { useEffect, useState } from "react";

const LOCATIONS = [
  "Buenos Aires, Argentina",
  "Sudeste, Brazil",
  "Distrito Federal, Mexico",
  "Bogotá, Colombia",
  "Capital Federal, Argentina",
  "Montevideo, Uruguay",
  "Sul, Brazil",
  "Región Metropolitana de Santiago, Chile",
  "remote",
  "Medellín, Colombia",
  "Santiago, Chile",
  "Lima, Peru",
  "São Paulo, State of São Paulo, Brazil",
  "Norte, Mexico",
  "Osasco, State of São Paulo, Brazil",
  "Florianópolis, State of Santa Catarina, Brazil",
  "Guarulhos, State of São Paulo, Brazil",
  "Campinas, State of São Paulo, Brazil",
  "Uruguay",
  "Brazil",
  "Ciudad Juárez, Chihuahua, Mexico",
  "Governador Celso Ramos, State of Santa Catarina, Brazil",
  "Mexico",
  "Norte, Brazil",
  "São Paulo, Sp, BR",
  "Avaré, State of São Paulo, Brazil",
  "Barueri",
  "Barueri, State of São Paulo, Brazil",
  "Belo Horizonte, State of Minas Gerais, Brazil",
  "Bento Gonçalves, RS, Brazil",
  "Biguaçu, State of Santa Catarina, Brazil",
  "Blumenau, State of Santa Catarina, Brazil",
  "Bogota, Colombia",
  "Brasil",
  "Cajamar",
  "Cajamar, State of São Paulo, Brazil",
  "Camaçari de Dentro, Camaçari - State of Bahia, Brazil",
  "Camaçari, State of Bahia, Brazil",
  "Campinas",
  "Canela, RS, Brazil",
  "Capital Federal, Argentina",
  "Caracas, Venezuela (bolivarian Republic Of)",
  "Caraguatatuba, State of São Paulo, Brazil",
  "Caxias do Sul - RS, Brazil",
  "Chihuahua, Mexico",
  "Chile",
  "Contagem - Parque Industrial, Contagem - State of Minas Gerais, Brazil",
  "Divinópolis, State of Minas Gerais, Brazil",
  "Esmeraldas, State of Minas Gerais, Brazil",
  "Estado de México, Mexico",
  "Florianópolis, Santa Catarina, Brazil",
  "Gramado, RS, Brazil",
  "Guarujá, State of São Paulo, Brazil",
  "Itaúna, State of Minas Gerais, Brazil",
  "Jacareí - State of São Paulo, Brazil",
  "Joinville - State of Santa Catarina, Brazil",
  "Lauro de Freitas - Portão, Lauro de Freitas - State of Bahia, Brazil",
  "Louveira - State of São Paulo, Brazil",
  "Medellin, Antioquia, Colombia",
  "Minas Gerais, Brazil",
  "Mogi das Cruzes - State of São Paulo, Brazil",
  "Nordeste, Brazil",
  "Pará de Minas, State of Minas Gerais, Brazil",
  "Patos de Minas, State of Minas Gerais, Brazil",
  "Perus, São Paulo - State of São Paulo, Brazil",
  "Peruíbe, State of São Paulo, Brazil",
  "Porto Alegre, RS, Brazil",
  "Praia Grande, State of São Paulo, Brazil",
  "Región de Valparaíso, Chile",
  "Región del Biobío, Chile",
  "Región del Libertador General Bernardo O’Higgins, Chile",
  "Ribeirão das Neves, State of Minas Gerais, Brazil",
  "Rio Grande do Sul, Brazil",
  "Santa Catarina, Brazil",
  "Santos, State of São Paulo, Brazil",
  "Sete Lagoas, State of Minas Gerais, Brazil",
  "Simoes Filho - Simões Filho, State of Bahia, Brazil",
  "Suzano - State of São Paulo, Brazil",
  "São José - Barreiros, São José - State of Santa Catarina, Brazil",
  "São José dos Campos, Sao Jose dos Campos - State of São Paulo, Brazil",
  "São Paulo, Brazil",
  "São Vicente, State of São Paulo, Brazil",
  "Taubaté - State of São Paulo, Brazil",
  "Teófilo Otoni, State of Minas Gerais, Brazil",
  "Tijuana, Baja California, Mexico",
  "Três Corações, State of Minas Gerais, Brazil",
  "Ubatuba, State of São Paulo, Brazil",
  "Uberlândia, State of Minas Gerais, Brazil",
  "Varginha, State of Minas Gerais, Brazil",
  "Vespasiano, State of Minas Gerais, Brazil",
  "sul brasil",
];

const DEPARTAMENTS = [
  "Administración & Control",
  "Administration & Control",
  "Credits",
  "Customer Experience",
  "Finance",
  "Fraud Prevention",
  "IT",
  "Internal Audit",
  "Legal & Gr",
  "Marketing",
  "Marketplace",
  "Mercado Pago",
  "People",
  "Producto",
  "Risk & Compliance",
  "Shipping",
  "VIS",
];

const SENIORITY = ["Mid/senior", "Entry", "Intern", "Director"];

export default function Filters({ setLocation, setDepartament, setSeniority }) {
  return (
    <div className="flex space-x-2">
      <div>
        {/* <label>Ubicación </label> */}
        <select
          className="text-lg my-2 p-2 border-2 rounded border-gray-400 focus-visible:outline-none"
          onChange={(e) => setLocation(e.target.value)}
        >
          <option>Ubicación</option>
          {LOCATIONS.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        {/* <label>Departamento </label> */}
        <select
          className="text-lg my-2 p-2 border-2 rounded border-gray-400 focus-visible:outline-none"
          onChange={(e) => setDepartament(e.target.value)}
        >
          <option>Departamento</option>
          {DEPARTAMENTS.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
      <div>
        {/* <label>Seniority </label> */}
        <select
          className="text-lg my-2 p-2 border-2 rounded border-gray-400 focus-visible:outline-none"
          onChange={(e) => setSeniority(e.target.value)}
        >
          <option>Seniority</option>
          {SENIORITY.map((i) => (
            <option value={i}>{i}</option>
          ))}
        </select>
      </div>
    </div>
  );
}
