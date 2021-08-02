import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllUsers, addUser, searchUsers, clearSearchUser } from "./redux/actions/users";
import './App.css';
import { TextInput, Title, Card, CardBody, CardHeader } from "./base-components";
import { User } from "./components/User";

const App = () => {
  const dispatch = useDispatch()
  const { users: usersData, searchedUsers } = useSelector((state) => state.users)
  const searchInput = useRef(null);
  const { isSearching } = useSelector((state) => state.users)
  const [hasDispatched, setHasDispatched] = useState(false)
  const _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      let name = e.target.value.trim()
      let nameSplit = name.split(" ")
      if (isSearching && searchedUsers.length === 0) {
        if (nameSplit.length < 2) {
          alert("please enter a first name and last name separated by space")
        } else {
          dispatch(addUser(nameSplit[0], nameSplit.slice(1).join("")))
          e.target.value = '' // can be moved to a controlled component state
        }
      } else if(isSearching && searchedUsers.length > 0) {
        alert("User already in the friend list, please adjust your search query")
      }
    }
  }
  const _handleChange = (e) => {
    let name = e.target.value.trim()
    if (name.length > 0) {
      dispatch(searchUsers(name))
    } else {
      dispatch(clearSearchUser())
    }
  }
  const clearSearch = () => {
    searchInput.current.value = ''
  }
  useEffect(() => {
    if (!isSearching) {
      clearSearch()
    }
  }, [isSearching])
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
            <TextInput
              placeholder="Enter your friends's name"
              onKeyDown={_handleKeyDown}
              onChange={_handleChange}
              ref={searchInput} 
            />
          </div>
          {
            isSearching ? 
            searchedUsers.map((user, index) => {
              return <User {...user} key={user.id} userIndex={index}/>
              
            })
            :
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