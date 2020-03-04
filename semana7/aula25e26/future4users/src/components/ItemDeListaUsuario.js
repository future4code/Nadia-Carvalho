import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';

const baseURL = "https://us-central1-future4-users.cloudfunctions.net/api"

class ItemDeListaUsuario extends React.Component {
  constructor(props) {
    super(props)
  }

  deleteUser = (id) => {
    const deleteRequest = axios.delete(`${baseURL}/users/deleteUser?id=${id}`, {
      headers: {
        'api-token': 'Nadia'
      }
    })
    deleteRequest.then(response => {
      alert("Usuário deletado com sucesso!")
      console.log(response)
      this.props.onDelete()
    }).catch(error => {
      alert("Não foi possível deletar usuário")
      console.log(error.response.data.message)
    })
  }

  onDeleteClick = (id, name) => {
    if (window.confirm(`Deseja deletar o usuário ${name}?`)) {
      this.deleteUser(id)
    }
  }

  render() {
    let { user } = this.props
    return (
      <li>
        {user.name}
        <span onClick={() => this.onDeleteClick(user.id, user.name)}> X </span>
      </li>
    )
  }
}

ItemDeListaUsuario.propTypes = {
  user: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired
}

export default ItemDeListaUsuario