import Search from "./Search";
import '../styles/filterJobs.css';
import { useDispatch, useSelector } from "react-redux";
import { search } from '../features/search/searchSlice';

const FilterJobs = () => {

  //get state search
  const busqueda = useSelector(state => state.search);
  const dispatch = useDispatch();

  //get state vista
  const view = useSelector(state => state.vista);

  //Funtion for filter the city of jobs
  const handleCheck = (event) => {
    //get state checked
    const checked = event.target.checked;

    //evaluate the state checked
    if (checked) {

      //get the city
      const text = event.target.nextSibling.innerText;

      //evaluate the innerText the checkbox (Full time  || other)
      if (text === 'Full time') {

        //Update state of the search
        dispatch(search({
          ...busqueda,
          [event.target.name]: 1,
        }));

      } else {

        //Update state of the search
        dispatch(search({
          ...busqueda,
          [event.target.name]: text,
        }));
      }

    } else {

      const text = event.target.nextSibling.innerText;

      //evaluate the innerText the checkbox (Full time  || other)
      if (text === 'Full time') {

        //Update state of the search
        dispatch(search({
          ...busqueda,
          [event.target.name]: 0,
        }));

      } else {

        //Update state of the search
        dispatch(search({
          ...busqueda,
          [event.target.name]: '',
        }));
      }
    }
  };

  return (
    <section className='filterJobsContainer'>
      <div className='filter'>
        <input type="checkbox" name="fullTime" id="fullTime" onClick={handleCheck} />
        <label htmlFor='fullTime' className='filteJobsFulltime'>Full time</label>
      </div>
      <h3 className='filterJobsTitle'>LOCATION</h3>
      <p className='warn' style={view ? { 'display': 'block' } : { 'display': 'none' }}>Press enter to search</p>
      <Search
        style={{
          width: '98%',
          height: '4.8rem',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.05)',
          justifyContent: 'flex-start',
        }}
        icon={'public'}
        name={'location'}
      >
        <button type="submit" style={{ 'display': 'none' }}></button>
      </Search>
      <div className='filterJobsLugares'>
        <div className='filter lugar'>
          <input type="checkbox" name="place" id="lugar1" onClick={handleCheck} />
          <label htmlFor='lugar1' className='lablLondo'>London</label>
        </div>
        <div className='filter lugar'>
          <input type="checkbox" name="place" id="lugar2" onClick={handleCheck} />
          <label htmlFor='lugar2' className='labelAmsterdam'>Amsterdam</label>
        </div>
        <div className='filter lugar'>
          <input type="checkbox" name="place" id="lugar3" onClick={handleCheck} />
          <label htmlFor='lugar3' className='lablNewYork'>New York</label>
        </div>
        <div className='filter lugar'>
          <input type="checkbox" name="place" id="lugar4" onClick={handleCheck} />
          <label htmlFor='lugar4' className='labelBerlin'>Berlin</label>
        </div>
      </div>
    </section>
  );
};

export default FilterJobs;