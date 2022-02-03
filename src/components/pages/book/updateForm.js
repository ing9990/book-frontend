import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function UpdateForm(props) {

  const id = props.match.params.id

  const [book,setBook] = useState({
    title:"",
    author:""
  })

  useEffect(()=>{
    fetch("http://localhost:8080/book/"+id)
      .then( res => res.json())
      .then( res => { setBook(res) })

  },[])

  function changeValue(e){
    setBook({
      ...book,
      [e.target.name] : e.target.value
    })
  }

  function submitBook(e){
    e.preventDefault()

    fetch("http://localhost:8080/book/"+id,{
      method:"PUT",
      headers: {
        "Content-Type" : "application/json; charset=utf-8"
      },
      body:JSON.stringify(book)
    })
      .then((res) => {
        if(res.status === 201)
          return res.json();
        else{
          return null;
        }
      })
      .then((res) =>{
        if(res !== null){
          alert("책을 성공적으로 수정했습니다.")
          props.history.push("/book/"+id)
        }else{
          alert("책 수정에 실패했습니다.")
        }
      })

  }


  return (
    <div>
      <h1>책 수정하기</h1>
      <hr/>
      <Form onSubmit={submitBook} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name="title" value={book.title} />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter author" onChange={changeValue} name="author" value={book.author} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
        </Form.Group>
        <Button variant="primary" type="submit">
          Write
        </Button>
      </Form>
    </div>
  );
}

export default UpdateForm;