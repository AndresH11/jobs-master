import Work from "../components/Work";
import dateFormat from "dateformat";
import { useSelector, useDispatch } from 'react-redux'
import { apiDescription } from "../features/descriptionapi/descriptionApiSlice";
import { Link } from "react-router-dom";
import PaginationButton from "../components/PaginationButton";
import Preloader from "../components/Preloader";

const OfferList = () => {

  //Styles
  const styles = {
    containerPrincipal: {
      'height': 'auto',
    },
    containerPagination: {
      'marginTop': '2rem',
      'display': 'flex',
      'justifyContent': 'center',
      'alignItems': 'center',
      'gap': '1rem',
    }
  };

  //leemos el valor actual de la pagina
  const { page2 } = useSelector(state => state.search);

  //Leemos el valor actual del stado infoApi
  const jobs = useSelector(state => state.infoApi);
  const dispatch = useDispatch();

  //handleClick
  const handleClick = (event) => {
    //Get the id
    const id = event.target.parentElement.parentElement.id;
    //Get the element
    const description = jobs.find(job => job.id === id);

    //Update state of the apiDescription
    dispatch(apiDescription(description));
  };

  return (
    <section className='offerListContainer' style={styles.containerPrincipal}>
      <ul>
        {
          //Evaluamos que haya algun objeto en la variable jobs, en caso no haber objetos visualizamos un NOT FOUND
          jobs.length > 0 ?
            jobs.map((job) => {
              let dateCreated = dateFormat(job.created).split(' ');
              return (
                <li key={job.id}>
                  <Link to={'/description'} onClick={handleClick}>
                    <Work
                      nameCompany={job.company.display_name}
                      vacantName={job.title}
                      timeWork={job.contract_time}
                      workPlace={job.location.display_name}
                      publicationDate={`${dateCreated[2]} ${dateCreated[1]} ${dateCreated[3]}`}
                      id={job.id}
                    />
                  </Link>
                </li>
              );
            })
            :
            <Preloader />
        }
      </ul>
      <div style={styles.containerPagination}>
        <PaginationButton>
          <span className="material-symbols-outlined">arrow_back_ios</span>
        </PaginationButton>
        <PaginationButton>
          {(parseInt(page2) || 1)}
        </PaginationButton>
        <PaginationButton>
          {(parseInt(page2) || 1) + 1}
        </PaginationButton>
        <PaginationButton>
          {(parseInt(page2) || 1) + 2}
        </PaginationButton>
        <PaginationButton>
          {(parseInt(page2) || 1) + 3}
        </PaginationButton>
        <PaginationButton>
          <span className="material-symbols-outlined">arrow_forward_ios</span>
        </PaginationButton>
      </div>
    </section>
  );
};

export default OfferList;