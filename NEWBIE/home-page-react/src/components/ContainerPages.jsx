import { HeaderPage } from "./HeaderPage";
import { DataFooterPages } from "./data/dataFooterPages";

export const ContainerPages = () => {
  return (
    <main className="column center">
      <HeaderPage />

      <DataFooterPages />
    </main>
  );
};
