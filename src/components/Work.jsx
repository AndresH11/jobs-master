import '../styles/Work.css';

const Work = ({ nameCompany, vacantName, timeWork, workPlace, publicationDate, id }) => {
  return (
    <div className='workContainer' id={id}>

      <figure className='workContainerLogo'>
        <img className='workLogo' src='https://r7q6w9z6.rocketcdn.me/career/wp-content/uploads/2021/05/feat-24.jpg' alt='Logo' />
      </figure>

      <div className='workBasicInfo'>
        <p className='workBasicInfoCompanyName'>{nameCompany}</p>
        <p className='workBasicInfoTitle'>{vacantName}</p>
        <p className='workBasicInfoType'>{timeWork}</p>
      </div>

      <div className='workAdditionalInfo'>
        <span className='material-symbols-outlined uno'>public</span>
        <p className='place'>{workPlace}</p>
        <span className='material-symbols-outlined dos'>schedule</span>
        <p className='date'>{publicationDate}</p>
      </div>

    </div>
  );
};

export default Work;