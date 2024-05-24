import logo from './logo.svg';
import './App.css';
import ReactButton from './ex01_non_styled/ReactButton';
import StyledButton from './ex02_styled/StyledButton';
// import SimpleButton from './ex03_styled/SimpleButton';
import SimpleButton from './ex04_styled/SimpleButton';
import LargeButton from './ex05_styled/LargeButton';
// import PrimaryButton from './ex06_styled/PrimaryButton';
import PrimaryButton from './ex08_styled/PrimaryButton';
import SecondButton from './ex09_styled/SecondButton';
// import Blocks from './ex10_styled/Blocks';
// import Blocks from './ex11_styled/Blocks';
import Blocks from './ex12_styled/Blocks';

const blockItems =[
  {
      label: '1',
      padding: '1rem',
      backgroundImage: `url("https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg")`,
  },
  {
      label: '2',
      padding: '1rem',
      backgroundImage: `url("https://images.pexels.com/photos/2023384/pexels-photo-2023384.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&dpr=1")`,
  },
  {
      label: '3',
      padding: '1rem',
      backgroundImage: `url("https://img.freepik.com/premium-photo/watercolor-illustration-cute-little-animal_447899-22661.jpg?w=300&h=300")`,
  },
];

function App() {
  return (
    <>
      {/* <ReactButton>안녕하세요</ReactButton>
      <StyledButton>감사합니다</StyledButton>
      <SimpleButton>행복합니다</SimpleButton>
      <LargeButton>존경합니다.</LargeButton>
      <PrimaryButton>사랑합니다</PrimaryButton>
      <PrimaryButton primary>즐겁습니다</PrimaryButton>
      <SecondButton>Happy Happy</SecondButton>
      <SecondButton primary>Congraturation!</SecondButton> */}
      {/* <Blocks></Blocks>
      <Blocks column />
      <Blocks strech/>
      <Blocks baseline/> */}
      <Blocks blockItems={blockItems}/>
    </>
  );
}

export default App;
