import pageSectionStyle from "./PageSection.module.css";

import PageTitle from "../text/PageTitle";

function PageSection(props) {
  return (
    <div className={pageSectionStyle["page-section"]}>
      <PageTitle size="large">{props.title}</PageTitle>
      {props.children}
    </div>
  );
}

export default PageSection;
