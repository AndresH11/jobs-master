import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import '../styles/DescriptionJobs.css';

const DescriptionJobs = () => {

  window.scroll(0, 0);

  const navigate = useNavigate();

  const descriptionJob = useSelector(state => state.descriptionApi);
  const jobTilte = descriptionJob.title || 'job title not found';
  const contractTime = descriptionJob.contract_time || 'contract time not found';
  const companyName = descriptionJob.company.display_name || 'company name not found';
  const locationName = descriptionJob.location.display_name || 'Description not found';
  const jobsDescription =  descriptionJob.description || 'job description not found';
  const dateCreated = dateFormat(descriptionJob.created).split(' ');

  return (
    <div className='DescriptionJobsContainer'>
      <div className='DescriptionJobsHowToApplyContainer'>
        <div className='backButton'>
          <span className="material-symbols-outlined" onClick={() => navigate('/')}>keyboard_backspace</span>
          <p onClick={() => navigate('/')}>Back to search</p>
        </div>
        <div className='howToApply'>
          <p className='howToApplyTitle'>HOw to Apply</p>
          <p className='howToApplyDescription'>Please email a copy of your resume and online portfolio to <a href={descriptionJob.redirect_url} target='_blank' rel='noopener' style={{ 'textDecoration': 'underline', 'fontSize': '2rem' }} >here</a></p>
        </div>
      </div>

      <div className='DescriptionJobsContainerVacant'>
        <div className='DescriptionJobsInfo'>
          <div className='comodin2'>
            <p className='DescriptionJobsInfoTitle'>{jobTilte}</p>
            <p className='DescriptionJobsInfoTime'>{contractTime}</p>
          </div>
          <div className='DescriptionJobsInfoPublicationTime'>
            <span className='material-symbols-outlined uno'>schedule</span>
            <p>{`${dateCreated[2]} ${dateCreated[1]} ${dateCreated[3]}`}</p>
          </div>
          <div className='DescriptionJobsInfoConpany'>
            <figure className='logo'>
              <img src='https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/05/feat-24.jpg' alt="logo" />
            </figure>
            <div className='comodin'>
              <p className='title'>{companyName}</p>
              <div className='lugar'>
                <span className='material-symbols-outlined uno'>public</span>
                <p>{locationName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='DescriptionJobs'>
          <p>{jobsDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionJobs;