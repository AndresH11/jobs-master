import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import dateFormat from 'dateformat';
import '../styles/DescriptionJobs.css';

const DescriptionJobs = () => {

  window.scroll(0, 0);

  const navigate = useNavigate();

  const descriptionJob = useSelector(state => state.descriptionApi);

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
            <p className='DescriptionJobsInfoTitle'>{descriptionJob.title}</p>
            <p className='DescriptionJobsInfoTime'>{descriptionJob.contract_time}</p>
          </div>
          <div className='DescriptionJobsInfoPublicationTime'>
            <span className='material-symbols-outlined uno'>schedule</span>
            <p>{`${dateCreated[2]} ${dateCreated[1]} ${dateCreated[3]}`}</p>
          </div>
          <div className='DescriptionJobsInfoConpany'>
            <figure className='logo'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpEbsAuSz3e5whJxOF6eyO6w-LoMVNUL3t0A&usqp=CAU' alt="logo" />
            </figure>
            <div className='comodin'>
              <p className='title'>{descriptionJob.company.display_name}</p>
              <div className='lugar'>
                <span className='material-symbols-outlined uno'>public</span>
                <p>{descriptionJob.location.display_name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='DescriptionJobs'>
          <p>{descriptionJob.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DescriptionJobs;