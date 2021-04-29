import './App.css';
import { connect } from "react-redux";
import styled from "styled-components";


// HOMEWORK
// Add an input field 
// When we add todo --> put in the todo text the value of the input field

// Show all the todos

function TodoApp(props) {
  console.log(props)
  return (
    <div className="App">
      <input type="text"
        placeholder={props.placeholder}
        onChange={(event) => props.updateInputValue(event.target.value)}
        value={props.value}></input>

      <div>{props.todoList.map(todo => <p>{todo}</p>)}</div>

      <Button onClick={props.updateInputValue} >ADD TODO</Button>
      <Button onClick={props.clearAll}>EMPTY</Button>
    </div>
  );
}

// state from redux --> can be used as a prop in the component
const mapStateToProps = (state, ownProps) => ({
  todoList: state,
})

// connect actions so we can trigger them
const mapDispatchToProps = (dispatch) => ({// I understand that the updateInputvalue should be passed as a function to the mapDispach but no action get triggered any longer...
  return:{ 
    // dispatching plain actions
    addTodo: () => dispatch({ type: 'ADD_TODO', text: "some text" }),
    clearAll: () => dispatch({ type: 'CLEAR_ALL' }),
    updateInputValue: (value) => dispatch({ type: 'UPDATE_VALUE', payload: value })
  
  }
}
)


export default connect(mapStateToProps, mapDispatchToProps)(TodoApp)


const Button = styled.button`
color: red;
border: 2px solid;
border-color: black;
margin: 9px;
font-family: helvetica ; 
border-radius: 3px;
`;


/*const EmptyButton = styled.emptyButton`
color: blue`
*/

