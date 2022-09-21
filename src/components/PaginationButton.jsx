import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { search } from '../features/search/searchSlice';
import '../styles/PaginationButton.css'

const PaginationButton = ({ children }) => {
  const [estado, seEstado] = useState('');

  const dispatch = useDispatch();
  const state = useSelector(state => state.search);

  const handleClick = (event) => {

    //Evaluamos que boton ha presionado el usuario, dependiendo del boton presionado se harà una accion diferente

    if (event.target.innerText === 'arrow_forward_ios') {

      dispatch(search({
        ...state,
        page2: event.target.parentElement.parentElement.childNodes[4].innerText,
      }));
    } else if (event.target.innerText === 'arrow_back_ios') {

      //Evitamos que el boton de la izquierda funcione en caso de estar en las 4 primeras paginas
      if (event.target.parentElement.parentElement.childNodes[1].innerText !== '1') {
        dispatch(search({
          ...state,
          page2: parseInt(event.target.parentElement.parentElement.childNodes[2].innerText) - 4,
        }));
      }

    } else {

      seEstado(event.target.innerText);
      //Actualizamos el estado de search
      dispatch(search({
        ...state,
        page: event.target.innerText,
      }));

    };
  };

  return (
    <div className='PaginationButtonContainer' onClick={handleClick} style={state.page === estado ? { 'backgroundColor': '#1E86FF', 'color': '#ffffff' } : {}}>
      {children}
    </div>
  );
};

export default PaginationButton;