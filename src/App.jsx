import { AlertBar } from 'components';
import { Header, Footer, SideNav } from 'containers';
import { Main, MakeTeam } from 'pages';

export default function App() {
  return (
    <>
      <AlertBar noticeText="방문해 주셔서 감사합니다. 현재 개발중이기 때문에 기능에 제한이 있습니다." />
      <Header />
      <Main />
      <SideNav />
      <Footer />
    </>
  );
}
