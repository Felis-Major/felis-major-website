import Header from "../../../components/navigation/Header";
import Footer from "../../../components/navigation/Footer";
import localizationKeys from "../../../localization/localization-keys";
import PageHeader from "../../../components/page-elements/layout/PageHeader";
import ContentContainer from "../../../components/containers/ContentContainer";
import CenteredContentContainer from "../../../components/containers/CenteredContentContainer";
import { useTranslation } from "react-i18next";

function PressPage() {
  const { t } = useTranslation();

  return (
    <>
      <Header />
      <PageHeader
        imageUrl="https://via.placeholder.com/2000x400"
        title={t(localizationKeys.pageTitleContactUs)}
        subtitle={t(localizationKeys.pageSubtitleContactUs)}
      />

      <ContentContainer>
        <CenteredContentContainer direction="column"></CenteredContentContainer>
      </ContentContainer>
      <Footer />
    </>
  );
}

export default PressPage;
