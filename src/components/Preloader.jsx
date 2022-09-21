import { useState } from 'react';
import '../styles/Preloader.css';

const Preloader = () => {
  const [state, setState] = useState(true);

  setTimeout(() => {
    setState(false);
  }, 10000);

  const styles = {
    'height': '100vh',
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
  }
  return (
    <div className='preloader' style={styles}>
      {
        state ?
          <div className={`flex justify-center items-center h-screen`}>
            <div className="reloader__container">
              <p className="reloader__text">Loading...</p>
              <div className="reloader__externalBar">
                <div className="reloader__internalBar"></div>
              </div>
            </div>
          </div>
          :
          <div className='notFound'>
            <span className="material-symbols-outlined">sentiment_dissatisfied</span>
            <p>Not Found</p>
          </div>
      }
    </div>
  );
};

export default Preloader;