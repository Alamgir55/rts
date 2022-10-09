import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchPrps {
  users: User[]
}

interface UserSearchState {
  name: string;
  user: User | undefined
}

class UserSearch extends Component<UserSearchPrps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  onClick = () => {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    })
    this.setState({ user: foundUser });
  }

  render() {
    const {name, user} = this.state;

    return (
    <div>
      User Search
        <input value={name} onChange={e => this.setState(e.target.value)} />
        <button onClick={this.onClick}>find User</button>
        <div>
          {user && name}
          {user && user.age}
        </div>
    </div>)
  }
}

export default UserSearch;