import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, addUser } from "./redux/actions/users";
import './App.css';
import { TextInput, Title, Card, CardBody, CardHeader } from "./base-components";
import { User } from "./components/User";

const App = () => {
  const dispatch = useDispatch()
  const { users: usersData } = useSelector((state) => state.users)
  const [hasDispatched, setHasDispatched] = useState(false)
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let name = e.target.value.trim()
      let nameSplit = name.split(" ")
      if (nameSplit.length < 2) {
        alert("please enter a first name and last name separated by space")
      } else {
        dispatch(addUser(nameSplit[0], nameSplit.slice(1).join("")))
        e.target.value = '' // can be moved to a controlled component state
      }
    }
  }
  useEffect(() => {
    if (usersData?.length === 0 && !hasDispatched) {
      dispatch(getAllUsers())
      setHasDispatched(true)
    }
  }, [usersData.length, hasDispatched, dispatch])
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
            usersData.map((user, index) => {
              return <User {...user} key={user.id} userIndex={index}/>
            })
          }
        </CardBody>
      </Card>
    </div>
  );
}

export default App;