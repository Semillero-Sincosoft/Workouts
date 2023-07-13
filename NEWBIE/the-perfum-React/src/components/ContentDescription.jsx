import "../estilos.css";
import { BtnBuy } from "./BtnBuy";
import { Prices } from "./Prices";
export const ContentDescription = () => {
  return (
    <section className="flex main-content">
      <h4 className="titulo">PERFUME</h4>
      <h1 className="subtitle font-family">Gabrielle Essence Eau De Parfum</h1>
      <p className="flex descripcion">
        A floral, solar and voluptuous interpretation composed by Olivier Polge,
        Perfurmer-Creator for the House of CHANEL.
      </p>
      <Prices />
      <BtnBuy />
    </section>
  );
};
