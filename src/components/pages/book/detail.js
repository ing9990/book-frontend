import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

function Detail(props) {

  const id = props.match.params.id;

  const [book,setBook] = useState({
    id:"",
    title:"",
    author:""
  })

  useEffect(()=>{
    fetch("http://localhost:8080/book/"+id)
      .then( res => res.json())
      .then( res => { setBook(res) })

  },[])

  function deleteBook(){
    fetch("http://localhost:8080/book/"+id,{
      method:"DELETE"
    })
      .then(res => res.text())
      .then(res => {
        if(res === "OK" ){
          alert("삭제가 완료되었습니다.")
          props.history.push("/")
        }else{
          alert("삭제를 실패했습니다.")
        }
      })
  }

  function updateBook(){
    props.history.push("/updateForm/"+id)
  }

  return (
    <div>
      <h1>책 상세보기</h1>
      <Button variant="warning" onClick={updateBook}>수정</Button>
      {"  "}
      <Button variant="danger" onClick={deleteBook}  >삭제</Button>
      <hr/>
      <h3>{book.author}</h3>
      <h1>{book.title}</h1>
    </div>
  );
}

export default Detail;