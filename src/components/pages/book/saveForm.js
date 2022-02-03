import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

function SaveForm(props) {

  const [book,setBook] = useState({
    title:"",
    author:""
  })

  function changeValue(e){
    setBook({
      ...book,
      [e.target.name] : e.target.value
    })
  }

  function submitBook(e){
    e.preventDefault()

    fetch("http://localhost:8080/book",{
      method:"POST",
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
          props.history.push("/")
        }else{
          alert("책 등록에 실패했습니다.")
        }
      })

  }


  return (
    <div>
      <h1>책 등록하기</h1>
      <hr/>
      <Form onSubmit={submitBook} >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" onChange={changeValue} name="title" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author</Form.Label>
          <Form.Control type="text" placeholder="Enter author" onChange={changeValue} name="author" />
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

export default SaveForm;