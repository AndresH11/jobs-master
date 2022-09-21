import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../features/search/searchSlice';
import { vista } from '../features/vista/vistaSlice';
import '../styles/Search.css';

const Search = ({ children, style, icon, name }) => {

  const [state, setState] = useState('');

  //get state search
  const busqueda = useSelector(state => state.search);
  const dispatch = useDispatch();

  //handleChange
  const handleChange = (event) => {

    if (event.target.value === '') {
      dispatch(vista(false));
    } else {
      dispatch(vista(true));
    }

    setState({
      [event.target.name]: event.target.value,
    })
  };

  //Post state of the search
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(vista(false));
    //Update state of the search
    dispatch(search({
      ...busqueda,
      [Object.keys(state)]: Object.values(state).join(),
    }));
  };

  //styles
  const styles = {
    'width': style.width,
    'maxWidth': '79rem',
    'height': style.height,
    'boxShadow': style.boxShadow,
    'paddingLeft': '0.7rem',
    'display': 'flex',
    'justifyContent': style.justifyContent,
    'alignItems': 'center',
    'backgroundColor': '#FFFFFF',
    'borderRadius': '0.4rem',
  };

  return (
    <form onSubmit={handleSubmit} className='search' style={styles}>
      <span className="material-symbols-outlined">{icon}</span>
      <input type="text" placeholder='Title, companies, experti...' name={name} onChange={handleChange} />
      {children}
    </form>
  );
};

export default Search;