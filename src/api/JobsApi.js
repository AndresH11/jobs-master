import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { apiResult } from "../features/infoapi/infoApiSlice";

//Instanciamos axios y lo configuramos
const axiosInstance = axios.create({
  method: 'get',
  baseURL: 'https://api.adzuna.com/v1/api',
  params: {
    app_id: process.env.REACT_APPappid,
    app_key: process.env.REACT_APPappkey,
  },
  headers: { 'content-type': 'application/json' },
});

//Conseguimos los datos de la api
const JobsApi = async () => {
  const dispatch = useDispatch();
  const busqueda = useSelector(state => state.search);
  try {
    //respuesta de la api
    const { data } = await axiosInstance(`/jobs/gb/search/${busqueda.page}`, {
      params: {
        where: busqueda.place || null,
        full_time: busqueda.fullTime || null,
        title_only: busqueda.title || null,
      }
    });
    //Entramos a los resustado
    const results = data.results;
    //Actualizamos el estado
    dispatch(apiResult(results));

  } catch (error) {
    console.log(error.message);
  }
};

export default JobsApi;

/* 
tiempo de contratacion
lugar de trabajo
nombre de empresa
titulo
dia de publicacion
description del trabajo
*/