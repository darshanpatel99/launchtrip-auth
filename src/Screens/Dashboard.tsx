import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';

import Message from '../components/UI/Message';
import { setSuccess } from '../store/actions/authActions';

const Dashboard: FC = () => {
  const { user, needVerification, success } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    if(success) {
      dispatch(setSuccess(''));
    }
  }, [success, dispatch]);

  return(
    <section className="section">
      <div className="container">
        {needVerification && <Message type="success" msg="Please verify your email address." />}
        <h1 className="is-size-1">User Name : {user?.firstName}</h1>
        <p>Thank you for signin!!</p>
      </div>
    </section>
  );
}

export default Dashboard;