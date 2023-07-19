import ImageLogoPage from "./image/ImageLogoPage";
import { InputValueNum } from "./InputValueNum";
import ListPercentageBtns from "./ListPercentageBtns";
import { ImageDollar } from "./image/ImageDollar";
import {ImagePerson} from "./image/ImagePerson"
import { ContentAmount } from "./ContentAmount";

const Page = () => {
  return (
    <>
      <ImageLogoPage />
      <main className="container">
        <section className="content">
          <InputValueNum
            titleInput="Bill"
            imageIcon={<ImageDollar />}
            id="bill"
          />

          <section className="percentages">
            <div>
              <p>Select tip %</p>
            </div>
            <article className="content-buttons">
              <ListPercentageBtns />
            </article>
          </section>
          <InputValueNum titleInput='Number of People' imageIcon={<ImagePerson />} id='people'/>
        </section>
        <ContentAmount />
      </main>
    </>
  );
};

export default Page;
