import SearchJobs from "../containers/SearchJobsContainer";
import JobsContainer from "../containers/JobsContainer";
import FilterJobs from "../components/FilterJobs";
import OfferList from "../containers/OfferList";

const Home = () => {
  return (
    <>
      <SearchJobs />
      <JobsContainer>
        <FilterJobs />
        <OfferList />
      </JobsContainer>
    </>
  );
};

export default Home;