import Header from "../components/navigation/Header";
import ContentContainer from "../components/containers/ContentContainer";
import CenteredContentContainer from "../components/containers/CenteredContentContainer";
import { useTranslation } from "react-i18next";
import PageSeparator from "../components/page-elements/layout/PageSeparator";

function PageNotFound() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <PageSeparator title={t("404")} subtitle={t("Page not found")} />

      <ContentContainer>
        <CenteredContentContainer>
          <img src="https://via.placeholder.com/512x512" />
        </CenteredContentContainer>
      </ContentContainer>
    </>
  );
}

export default PageNotFound;
