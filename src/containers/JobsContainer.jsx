import '../styles/JobsContainer.css';

const JobsContainer = ({ children }) => {
  return (
    <div className='jobsContainer'>
      {children}
    </div>
  );
};

export default JobsContainer;