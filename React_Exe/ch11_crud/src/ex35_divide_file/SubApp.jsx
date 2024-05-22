import { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Article from "./Article";
import Create from "./Create";
import Update from "./Update";








// <Update/>는 <Create/>와 UI나 이벤트 동작이 동일하므로, 일부 명칭만 변경


export default function SubApp(){


  const [mode, setMode] = useState('WELCOME');  
  const [id, setId] = useState(null); // nav의 어떤 항복 (id)이 선택되었는지
  // 새로운 id발급, topics의 마지막 id가 3개이므로, 새로운 id는 4부터 시작
  const [nextId, setNextId] = useState(4);  
  const[topics, setTopics] = useState([
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'},
  ])

  let content = null;
  let contextControl = null;

  if(mode === 'WELCOME'){
    content = <Article title='Welcome' body='Hello, Web'></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0;i<topics.length;i++){
      // 선택된 id와 같은 항목을 찾았으면 
      if(topics[i].id === id){
        title = topics[i].title;
        title = topics[i].body;
        break;
      }
    }
    content = <Article title={title} body={body}></Article>
    contextControl = 
    <>
      <li><a href={"/update/" + id} onClick={event=>{
        console.log(id);
        event.preventDefault();
        // UPDATE 모드로 전환
        setMode('UPDATE');
      }}>Update</a></li>
      {/* Delete버튼을 Read모드시 보여주도록 추가 */}
      <li>
        <input type='button' value="Delete" onClick={() => {
          const newTopics = [];
          for(let i=0;i<topics.length;i++){
            // 삭제항목 id만 빼고, 추가
            if(topics[i].id !== id){
              newTopics.push(topics[i]);
            }
          }
          setTopics(newTopics);
          setMode('WELCOME');
        }}/>
      </li>
    </>
  }else if(mode === 'CREATE'){
    content = <Create onCreate={(_title, _body) => {

      const newTopic = {id: nextId, title: _title, body:_body};

      const newTopics = [...topics];  
      newTopics.push(newTopic); 
      setTopics(newTopics);  
      setNextId(nextId + 1);
    }}/>
  }else if(mode === 'UPDATE'){
    let title, body = null;
    for(let i=0;i<topics.length;i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
        break;
      }
    }

    content = <Update title={title} body={body} onUpdate={(title, body) => {
      const newTopics = [...topics];
      const updatedTopic = {id:id, title:title, body:body};
      for(let i=0;i<newTopics.length;i++){
        if(newTopics[i].id === id){
          newTopics[i] = updatedTopic;
          break;
        }
      }
      setTopics(newTopics);

      setMode('READ');
    }} />
  }

    return (
        <div>
          <Header title="WEB" onChangeMode={() => {
            setMode('WELCOME');
            }}/>
          <Nav topics={topics} onChangeMode={(id) => {
            setMode('READ');
            setId(id);  // nav의 리스트중에 어떤 항복(id)이 선택되었는지 알 수 있음
          }}/>
          {content}
          <ul>
            <li>
              <a href="/create" onClick={event => {
              event.preventDefault();
              setMode('CREATE');
              }}>Create</a>
            </li>
              {contextControl}

          </ul>

        </div>
      );
}





