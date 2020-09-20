import axios from "axios";
import { Component } from "react";

// Export an object containing methods we'll use for accessing the GitHub Jobs API
// const api = axios.create({
//   baseURL: 'https://randomuser.me/api/'
// })

// class App extends Component {
  
//   state = {
//     employees: []
//   }
  
//   constructor() {
//     super();
//     api.get('/').then(res => {
//       console.log(res.data)
//       this.setState({ employees: res.data })
//     })
//   }
// }

export default {
  searchTerms: function(query) {
    return axios.get(
      "https://randomuser.me/api/" +
        query +
        "&format=json"
    );
  }
};
