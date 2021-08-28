import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { AlertBar } from 'components';
import { Header, Footer, SideNav } from 'containers';
import { Login, Main, MakeTeam } from 'pages';

export default function App() {
  return (
    <Router>
      <AlertBar noticeText="방문해 주셔서 감사합니다. 현재 개발중이기 때문에 기능에 제한이 있습니다." />
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/make-team">
          <MakeTeam />
        </Route>
        <Route path="/page-not-found">
          <div>페이지를 찾을 수 없습니다.</div>
        </Route>
        <Redirect to="/page-not-found" />
      </Switch>
      <SideNav />
      <Footer />
    </Router>
  );
}
