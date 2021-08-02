import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers } from "./redux/actions/users";
import './App.css';
import { TextInput, Title, Card, CardBody, CardHeader } from "./base-components";
import { User } from "./components/User";

const App = () => {
  const dispatch = useDispatch()
  const { users: usersData } = useSelector((state) => state.users)
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      alert(e.target.value)
    }
  }
  useEffect(() => {
    if (usersData?.length === 0) {
      dispatch(getAllUsers())
    }
  })
  return (
    <div className="App">
      <Card>
        <CardHeader>
          <Title>Friends List</Title>
        </CardHeader>
        <CardBody>
          <div className="search">
            <TextInput placeholder="Enter your friends's name" onKeyDown={_handleKeyDown}/>
          </div>
          {
            usersData.map((user) => {
              return <User {...user} key={user.id} />
            })
          }
        </CardBody>
      </Card>
    </div>
  );
}

export default App;