import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Table } from "react-bootstrap";
import { Button, ButtonToolbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AddChatModel } from "./AddChatModel";
import { UpdateChatModel } from "./UpdateChatModel";

export function Manage() {
  const [chat, setChat] = useState([]);
  const [addModalShow, setAddModalShow] = useState(false);
  const [updteModalShow, setUpdteModalShow] = useState(false);
  const [currentChat, setCurrentChat] = useState([]);
  const [deleteFunction, setDeleteFuntion] = useState(true);
  const fetchData = () => {
    fetch("http://127.0.0.1:8000/history/")
      .then((response) => response.json())
      .then((data) => {
        setChat(data);
      });
  };
  function deleteDep(chatid) {
    if (window.confirm("Are you sure ?")) {
      setDeleteFuntion(!deleteFunction);
      fetch("http://127.0.0.1:8000/history/" + chatid, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
    }
  }
  useEffect(() => {
    fetchData();
  }, [updteModalShow, addModalShow, deleteFunction]);
  return (
    <div>
      <p id="manage"></p>
      
      <NavLink to="/search">
      <button 
      onClick={fetchData}
      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mb-3"
      >
        Search
        </button>
        </NavLink>
      <Table className="table table-bordered hover" id="dataTable">
        <thead>
          <tr>
            <th>id</th>
            <th>tag</th>
            <th>patterns</th>
            <th>responses</th>
          </tr>
        </thead>
        <tbody>
          {chat.map((c) => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.tag}</td>
              <td>{c.patterns}</td>
              <td>{c.responses}</td>
              <td>
                <ButtonToolbar>
                  <Button
                    className="mr-2"
                    variant="primary"
                    onClick={() => {
                      setUpdteModalShow(true);
                      setCurrentChat(c);
                    }}
                  >
                    Edit
                  </Button>
                  <Button
                    className="mr-2"
                    variant="danger"
                    onClick={() => deleteDep(c.id)}
                  >
                    Delete
                  </Button>
                </ButtonToolbar>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ButtonToolbar className="bg-clue">
        <Button variant="primary" onClick={() => setAddModalShow(true)}>
          Add Model
        </Button>
        <AddChatModel
          show={addModalShow}
          onHide={() => setAddModalShow(false)}
        ></AddChatModel>
      </ButtonToolbar>
      <UpdateChatModel
        show={updteModalShow}
        onHide={() => setUpdteModalShow(false)}
        chatid={currentChat.id}
        tag={currentChat.tag}
        patterns={currentChat.patterns}
        responses={currentChat.responses}
      />
    </div>
  );
}
// export class Manage extends Component {
//   constructor() {
//     super();
//     this.state = {
//       chat: [],
//       addModalShow: false,
//       updteModalShow: false,
//       editModalShow: false,
//       currentChat: [],
//     };
//   }
//   fetchData = () => {
//     fetch("http://127.0.0.1:8000/history/")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({
//           chat: data,
//         });
//         console.log(data);
//       });
//   };
//   componentDidMount() {
//     this.fetchData();
//   }
//   //   componentDidUpdate(prevState) {
//   //     if (prevState.addModalShow !== this.state.addModalShow) {
//   //       this.fetchData();
//   //     }
//   //   }
//   deleteDep = (chatid) => {
//     if (window.confirm("Are you sure ?")) {
//       fetch("http://127.0.0.1:8000/history/" + chatid, {
//         method: "DELETE",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json",
//         },
//       });
//     }
//   };
//   render() {
//     const { chat, id, tag, intent, responses } = this.state;
//     let AddModelClose = () => this.setState({ addModalShow: false });
//     let UpdateModelClose = () => this.setState({ updteModalShow: false });
//     return (
//       <div>
//         <p id="manage"></p>
//         <Table className="table table-bordered hover" id="dataTable">
//           <thead>
//             <tr>
//               <th>id</th>
//               <th>tag</th>
//               <th>patterns</th>
//               <th>responses</th>
//             </tr>
//           </thead>
//           <tbody>
//             {chat.map((chat) => (
//               <tr key={chat.id}>
//                 <td>{chat.id}</td>
//                 <td>{chat.tag}</td>
//                 <td>{chat.patterns}</td>
//                 <td>{chat.responses}</td>
//                 <td>
//                   <ButtonToolbar>
//                     <Button
//                       className="mr-2"
//                       variant="primary"
//                       onClick={() =>
//                         this.setState({
//                           updteModalShow: true,
//                           currentChat: chat,
//                         })
//                       }
//                     >
//                       Edit
//                     </Button>
//                     <Button
//                       className="mr-2"
//                       variant="danger"
//                       onClick={() => this.deleteDep(chat.id)}
//                     >
//                       Delete
//                     </Button>
//                   </ButtonToolbar>{" "}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//         <ButtonToolbar class="bg-clue">
//           <Button
//             variant="primary"
//             onClick={() => this.setState({ addModalShow: true })}
//           >
//             Add Model
//           </Button>
//           <AddChatModel
//             show={this.state.addModalShow}
//             onHide={AddModelClose}
//           ></AddChatModel>
//         </ButtonToolbar>
//         <UpdateChatModel
//           show={this.state.updteModalShow}
//           onHide={UpdateModelClose}
//           chatid={this.state.currentChat.id}
//           tag={this.state.currentChat.tag}
//           patterns={this.state.currentChat.patterns}
//           responses={this.state.currentChat.responses}
//         />
//       </div>
//     );
//   }
// }