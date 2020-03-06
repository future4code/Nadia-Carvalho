import React from 'react';
import axios from 'axios';
import ItemDeListaUsuario from './ItemDeListaUsuario'

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

class ListaDeUsuario extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listUsers: [],
    }
  }

  componentDidMount() {
    this.getAllUsers()
  }

  getAllUsers = () => {
    const listUsersRequest = axios.get(`${baseURL}/users/getAllUsers`, {
      headers: {
        'api-token': 'Nadia'
      }
    })
    listUsersRequest.then(response => {
      this.setState({ listUsers: response.data.result })
    }).catch(error => {
      this.setState({ listUsers: [] })
      console.log(error.response.data.message)
    })
  }

  render() {
    return (
      <ul>
        {this.state.listUsers.map(user => {
          return (
            <ItemDeListaUsuario
              key={user.id}
              user={user}
              onDelete={() => this.getAllUsers()}
            />
          )
        })}
      </ul>
    )
  }
}
export default ListaDeUsuario