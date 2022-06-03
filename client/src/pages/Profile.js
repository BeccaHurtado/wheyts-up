import React from 'react';
import { Navigate, useParams } from 'react-router-dom';

// import ThoughtForm from '../components/ThoughtForm';
import RoutineList from '../components/RoutineList';
import ExerciseList from '../components/ExerciseList'

import { useQuery, useMutation } from '@apollo/client';
import {QUERY_ME, QUERY_USER } from '../utils/queries';
// import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = (props) => {
  const { username: userParam } = useParams();

//   const [addRoutine] = useMutation(ADD_FRIEND);
  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};

  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/profile:username" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

//   const handleClick = async () => {
//     try {
//       await addRoutine({
//         variables: { id: user._id },
//       });
//     } catch (e) {
//       console.error(e);
//     }
//   };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${user.username}'s` : 'your'} profile.
        </h2>

        {/* {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Routine
          </button>
        )} */}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 mb-3 col-lg-8">
          <RoutineList
            routines={user.routines}
            title={`${user.username}'s thoughts...`}
          />
        </div>

      </div>
      {/* <div className="mb-3">{!userParam && <ThoughtForm />}</div> */}
    </div>
  );
};

export default Profile;
