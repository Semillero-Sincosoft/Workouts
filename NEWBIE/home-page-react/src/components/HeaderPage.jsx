import { ContentListNavegation } from "./ContentListNavegation";
import { IconLogo } from "./image/IconLogo";

export const HeaderPage = () => {
  return (
    <header>
      <section className="content">
        <article>
          <IconLogo />
        </article>
        <ContentListNavegation />
      </section>
    </header>
  );
};
