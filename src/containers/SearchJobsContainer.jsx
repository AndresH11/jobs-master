import '../styles/SearchJobsContainer.css';
import Search from '../components/Search';

const SearchJobs = () => {
  return (
    <div className='searchJobsContainer'>
      <Search
        style={{
          width: '90%',
          height: '5.5rem',
          boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
          justifyContent: 'center',
        }}
        icon={'work'}
        name={'title'}
      >
        <button type="submit">Search</button>
      </Search>
    </div>
  );
};

export default SearchJobs;