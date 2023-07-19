import { DataPageMain } from "./data/DataPageMain";
import { HeaderPage } from "./HeaderPage";
import { DataFooterPages } from "./data/dataFooterPages";
import DataPageAside from "./data/DataPageAside";
export const ContainerPages = () => {
  return (
    <main className="column center">
      <HeaderPage />
      <section className="content-description">
        <DataPageMain />
        <DataPageAside />
      </section>
      <DataFooterPages />
    </main>
  );
};
