import { Topics, Footer } from "../../components";
import "./styles.scss"

export const SiteBar = () => {
  return (
    <div className="site-bar">
      <div className="row">
        <div className="col col-12">
          <Topics />
        </div>
      </div>
      <hr/>
      <Footer />
    </div>
  );
};
