import logo from './logo.svg';
import './App.css';
// import WelcomeDialog from './ex01_containment/WelcomeDialog';
// import WelcomeDesc from './ex01_containment/WelcomDesc';
// import SplitPane from './ex02_containment/SplitPane';
// import WelcomeDialog from './ex03_specialization/WelcomeDialog'
// import AlarmDialog from './ex03_specialization/AlarmDialog';
import ProfileCard from './ex04_inheritance/ProfileCard'

function App() {
  return (
    // <div>
    //   <WelcomeDesc />
    //   <hr />
    //   <WelcomeDialog />
    //   <hr />
    //   {/* children이 여러 개일 경우 props의 속성이름을 여러 개 지정해준다 */}
    //   <SplitPane left={<WelcomeDesc/>} right={<WelcomeDialog/>}/>
    //   <AlarmDialog />
    // </div>
    <ProfileCard />
  );
}

export default App;
